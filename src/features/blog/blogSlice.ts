import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import type { AppState } from "../../store";
import { getBlogPostItems } from "./blogAPI";
import { Post } from "@/constants/types";

export interface BlogSlice {
  posts: Post[] | null;
  status: "idle" | "loading" | "failed";
}

const initialState: BlogSlice = {
  posts: null,
  status: "idle",
};

export const getBlogPostItemsAsync = createAsyncThunk(
  "blog/getBlogPostItems",
  async () => {
    const response = await getBlogPostItems();

    return response.data.posts;
  }
);

export const blogSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBlogPostItemsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getBlogPostItemsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.posts = action.payload;
      })
      .addCase(getBlogPostItemsAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { } = blogSlice.actions;

export const selectBlog = (state: AppState) => state.blog;

export default blogSlice.reducer;
