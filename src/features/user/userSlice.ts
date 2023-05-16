import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import type { AppState } from "../../store";
import { loginUser } from "./userAPI";
import { setCookie } from "@/helpers/cookieStorage";

import { API_LOADING_STATUS } from "@/constants/api";

export interface UserSlice {
  isLogedIn: boolean;
  token: string | null; // change this to user info
  status: API_LOADING_STATUS
}

const initialState: UserSlice = {
  isLogedIn: false,
  token: null,
  status: "idle",
};

export const loginUserAsync = createAsyncThunk(
  "user/loginUser",
  async (data: {
    name: string,
    password: string,
  }) => {
    const response = await loginUser(data);

    setCookie("token", response.data.token, 7);
    
    return response.data.token;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.token = action.payload;
        state.isLogedIn = true;
      })
      .addCase(loginUserAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { } = userSlice.actions;

export const selectUser = (state: AppState) => state.user;

export default userSlice.reducer;
