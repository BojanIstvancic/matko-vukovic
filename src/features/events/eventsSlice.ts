import {  createAsyncThunk, createDraftSafeSelector, createSlice, isAnyOf } from "@reduxjs/toolkit";

import { getEvents } from "./eventsAPI";
import { Event, EventsData } from "@/constants/types";
import { API_LOADING_STATUS } from "@/constants/api";
import { AppState } from "@/store";

export interface EventSlice {
  events: Event[] | null;
  eventsData: EventsData[] | null;
  status: API_LOADING_STATUS
}

const initialState: EventSlice = {
  events: null,
  eventsData: null,
  status: "idle",
};

export const getEventsAsync = createAsyncThunk(
  "events/getBlogPostItems",
  async () => {
    const response = await getEvents();

    return response.data.events;
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
    .addMatcher(
      isAnyOf(getEventsAsync.pending),
      (state) => {
        state.status = "loading"
    })
    .addMatcher(
      isAnyOf(getEventsAsync.rejected),
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
        date: currentDate.slice(5),
        events: todaysEvents,
    }],
      status: state.status
    }
  }
)


export default eventSlice.reducer;
