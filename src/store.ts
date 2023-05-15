import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import userReducer from './features/user/userSlice';
import blogReducer from './features/blog/blogSlice';

export function makeStore() {
  return configureStore({
    reducer: { user: userReducer, blog: blogReducer },
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