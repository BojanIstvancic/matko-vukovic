import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import type { AppState } from "../../store";
import { getBlogPostItem } from "./blogItemAPI";
import { Post } from "@/constants/types";
import { API_LOADING_STATUS } from "@/constants/api";

export interface BlogSlice {
  post: Post | null;
  status: API_LOADING_STATUS;
}

const initialState: BlogSlice = {
  post: null,
  status: "idle",
};

export const getBlogPostItemAsync = createAsyncThunk(
  "blogItem/getBlogPostItem",
  async (id: string ) => {
    const response = await getBlogPostItem(id);

    return response.data.post;
  }
);

export const blogItemSlice = createSlice({
  name: "blogItem",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBlogPostItemAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getBlogPostItemAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.post = action.payload;
      })
      
      .addCase(getBlogPostItemAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});


export const selectBlogItem = (state: AppState) => state.blogItem;

export default blogItemSlice.reducer;
