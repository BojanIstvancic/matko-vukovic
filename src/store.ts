import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"

import userReducer from "./features/user/userSlice";
import blogReducer from "./features/blog/blogSlice";
import blogItemReducer from "./features/blogItem/blogItemSlice";
import employeesReducer from "./features/employees/employeesSlice";
import eventsReducer from "./features/events/eventsSlice";

export function makeStore() {
  return configureStore({
    reducer: {
       user: userReducer, 
       blog: blogReducer, 
       blogItem: blogItemReducer, 
       employees: employeesReducer,
       events: eventsReducer 
    },
  })
}


const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export default store