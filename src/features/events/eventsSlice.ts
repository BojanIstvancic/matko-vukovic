import {  createAsyncThunk, createDraftSafeSelector, createSlice, isAnyOf } from "@reduxjs/toolkit";

import { createEvent, deleteEvent, editEvent, getEvents } from "./eventsAPI";
import { Event, EventData, EventDataWithId, EventsData } from "@/constants/types";
import { API_LOADING_STATUS } from "@/constants/api";
import { AppState } from "@/store";

export interface EventSlice {
  events: Event[] | null;
  eventsData: EventsData[] | null;
  eventsAllData: EventsData[] | null;
  status: API_LOADING_STATUS
}

const initialState: EventSlice = {
  events: null,
  eventsData: null,
  eventsAllData: null,
  status: "idle",
};

export const getEventsAsync = createAsyncThunk(
  "events/getBlogPostItems",
  async () => {
    const response = await getEvents();

    return response.data.events;
  }
);

export const createEventAsync = createAsyncThunk(
  "blog/createEvent",
  async (data: EventData) => {
    const response = await createEvent(data);

    return response.data.event;
  }
);

export const editEventAsync = createAsyncThunk(
  "blog/editEvent",
  async (data: EventDataWithId) => {  
    const response = await editEvent(data);

    return response.data.event;
  }
);

export const deleteEventAsync = createAsyncThunk(
  "blog/deleteEvent",
  async (id: string) => {
    const response = await deleteEvent(id);

    return response.data.event._id;
  }
);

export const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getEventsAsync.fulfilled, (state, action) => {
      state.status = "idle";
      state.events = action.payload;
    })
    .addCase(createEventAsync.fulfilled, (state, action) => {    
      const events = state.events as Event[];

      state.status = "idle";    
      state.events = [ action.payload, ...events];
    })
    .addCase(deleteEventAsync.fulfilled, (state,action) => {
      const events = state.events as Event[];

      state.status = "idle";
      state.events = events.filter(event => event._id !== action.payload)
    })
    .addCase(editEventAsync.fulfilled, (state, action) => {    
      const events = state.events as Event[];

      state.status = "idle";    
      state.events = events.map((event) =>
        event._id === action.payload._id ? action.payload : event
      );
    })
    .addMatcher(
      isAnyOf(getEventsAsync.pending, createEventAsync.pending, editEventAsync.pending, deleteEventAsync.pending),
      (state) => {
        state.status = "loading"
    })
    .addMatcher(
      isAnyOf(getEventsAsync.rejected, createEventAsync.rejected, editEventAsync.rejected, deleteEventAsync.rejected),
      (state) => {
        state.status = "failed"
    })
  },
});

export const selectEvents = (state: AppState) => state.events;

export const selectEventsToday = createDraftSafeSelector(
  selectEvents,
  (state) => {
    const currentDate = new Date().toJSON().slice(0, 10);
    const todaysEvents = state.events?.filter(event => event.date.startsWith(currentDate))

    return { 
      eventsData: [{
        date: new Date(currentDate).toLocaleDateString("nl"),
        events: todaysEvents,
    }],
      status: state.status
    }
  }
)

export const selectAllEvents = createDraftSafeSelector(
  selectEvents,
  (state) => {
    const arrayOfDates = state.events?.map((event) => event.date.slice(0, 10))
    const arrayOfUniqueDates = Array.from(new Set(arrayOfDates));

    let allEvents:EventsData[] = [];

    arrayOfUniqueDates.forEach(uniqueDate => {
      const getAllEventsWithThisDate = state.events?.filter(event => event.date.startsWith(uniqueDate))

      const events = {
        date: new Date(uniqueDate).toLocaleDateString("nl"),
        events: getAllEventsWithThisDate,
      }

      allEvents.push(events)
    })

    return { 
      eventsAllData: allEvents,
      status: state.status
    }
  }
)


export default eventSlice.reducer;
