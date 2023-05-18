import { createAsyncThunk, createDraftSafeSelector, createSlice, isAnyOf } from "@reduxjs/toolkit";

import type { AppState } from "../../store";
import { getBlogPostItems, deleteBlogPostItem, createBlogPostItem, editBlogPostItem } from "./blogAPI";
import { BlogPostData, BlogPostDataWithId, Post } from "@/constants/types";
import { API_LOADING_STATUS } from "@/constants/api";

export interface BlogSlice {
  posts: Post[] | null;
  pageCount: number;
  itemsPerPage: number;
  itemOffset: number;
  status: API_LOADING_STATUS;
}

const initialState: BlogSlice = {
  posts: null,
  pageCount: 0,
  itemsPerPage: 6,
  itemOffset: 0,
  status: "idle",
};

export const getBlogPostItemsAsync = createAsyncThunk(
  "blog/getBlogPostItems",
  async () => {
    const response = await getBlogPostItems();

    return response.data.posts;
  }
);

export const createBlogPostItemAsync = createAsyncThunk(
  "blog/createBlogPostItem",
  async (data: BlogPostData) => {
    const response = await createBlogPostItem(data);

    return response.data.post;
  }
);

export const editBlogPostitemAsync = createAsyncThunk(
  "blog/editBlogPostItem",
  async (data: BlogPostDataWithId) => {  
    const response = await editBlogPostItem(data, data.id);

    return response.data.post;
  }
);

export const deleteBlogPostItemAsync = createAsyncThunk(
  "blog/deleteBlogPostItem",
  async (id: string) => {
    const response = await deleteBlogPostItem(id);
    return response.data.post._id;
  }
);

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    updateBlogItemsPerPage: (state, action) => {
      const posts = state.posts as Post[];
      state.itemOffset = (action.payload * state.itemsPerPage) % posts.length;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBlogPostItemsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.posts = action.payload;
        state.pageCount = Math.ceil(action.payload.length / state.itemsPerPage)
      })
      .addCase(createBlogPostItemAsync.fulfilled, (state, action) => {    
        const posts = state.posts as Post[];

        state.status = "idle";    
        state.posts = [ action.payload, ...posts];
      })
      .addCase(editBlogPostitemAsync.fulfilled, (state, action) => {    
        const posts = state.posts as Post[];

        state.status = "idle";    
        state.posts = posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        );
      })
      .addCase(deleteBlogPostItemAsync.fulfilled, (state, action) => {
        const posts = state.posts as Post[];

        state.status = "idle";
        state.posts = posts.filter(post => post._id !== action.payload)
      })

      .addMatcher(
        isAnyOf(getBlogPostItemsAsync.pending, createBlogPostItemAsync.pending, editBlogPostitemAsync.pending, deleteBlogPostItemAsync.pending),
        (state) => {
          state.status = "loading"
      })
      .addMatcher(
        isAnyOf(getBlogPostItemsAsync.rejected, createBlogPostItemAsync.rejected, editBlogPostitemAsync.rejected, deleteBlogPostItemAsync.rejected),
        (state) => {
          state.status = "failed"
      })
  },
});

export const { updateBlogItemsPerPage } = blogSlice.actions;

export const selectBlog = (state: AppState) => state.blog;

export const selectBlogThreeItems = createDraftSafeSelector(
  selectBlog,
  (state) => {
    return {
      posts: state.posts?.slice(0,3),
      status: state.status
    } 
  }
)

export const selectBlogForPagination = createDraftSafeSelector(
  selectBlog,
  (state) => {
    return {
      posts: state.posts?.slice(state.itemOffset, state.itemOffset + state.itemsPerPage),
      status: state.status,
      pageCount: state.pageCount
    } 
  }
)

export default blogSlice.reducer;
