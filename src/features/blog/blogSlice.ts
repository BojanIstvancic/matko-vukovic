import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import type { AppState } from "../../store";
import { getBlogPostItems, deleteBlogPostItem, createBlogPostItem } from "./blogAPI";
import { BlogPostData, Post } from "@/constants/types";

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


export const deleteBlogPostItemAsync = createAsyncThunk(
  "blog/deleteBlogPostItem",
  async (id: string) => {
    const response = await deleteBlogPostItem(id);
    return response.data.post._id;
  }
);

export const createBlogPostItemAsync = createAsyncThunk(
  "blog/createBlogPostItem",
  async (data: BlogPostData) => {
    const response = await createBlogPostItem(data);

    console.log(response, 'test response');


    // return response.data.post._id;
  }
);


export const blogSlice = createSlice({
  name: "blog",
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
      })

      .addCase(createBlogPostItemAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createBlogPostItemAsync.fulfilled, (state, action) => {
       
       
        // state.status = "idle";
        // state.posts = posts.filter(post => post._id !== action.payload)
    })
      .addCase(createBlogPostItemAsync.rejected, (state) => {
        state.status = "failed";
      })

      .addCase(deleteBlogPostItemAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteBlogPostItemAsync.fulfilled, (state, action) => {
        const posts = state.posts as Post[];

        state.status = "idle";
        state.posts = posts.filter(post => post._id !== action.payload)
    })
      .addCase(deleteBlogPostItemAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { } = blogSlice.actions;

export const selectBlog = (state: AppState) => state.blog;
export const selectBlogThreeItems = (state: AppState) => {
  return {
    posts: state.blog.posts?.slice(0,3),
    status: state.blog.status
  }}

export default blogSlice.reducer;
