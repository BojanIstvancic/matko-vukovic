import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";

import type { AppState } from "../../store";
import { getUser, loginUser } from "./userAPI";
import { setCookie } from "@/helpers/cookieStorage";

import { API_LOADING_STATUS } from "@/constants/api";
import { User } from "@/constants/types";

export interface UserSlice {
  user: User | null;
  token: string | null; 
  status: API_LOADING_STATUS
}

const initialState: UserSlice = {
  user: null,
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

    localStorage.setItem("user", response.data.user._id); 
    localStorage.setItem("administrationLevel", response.data.user.administrationLevel);
    // PUT THIS IN JWT PAYLOAD

    return response.data;
  }
);

export const getUserAsync = createAsyncThunk(
  "user/getUser",
  async() => {
    const response = await getUser();

    return response.data.user;
  }
)

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(getUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.user = action.payload;
      })

      .addMatcher(
        isAnyOf(loginUserAsync.pending, getUserAsync.pending),
        (state) => {
          state.status = "loading"
        })
      .addMatcher(
        isAnyOf(loginUserAsync.pending, getUserAsync.pending),
        (state) => {
          state.status = "failed"
      })
  },
});

export const selectUser = (state: AppState) => state.user;

export default userSlice.reducer;
