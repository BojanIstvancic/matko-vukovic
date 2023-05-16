import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import type { AppState } from "../../store";
import { getEmployees } from "./employeesAPI";
import { Employee, Post } from "@/constants/types";
import { API_LOADING_STATUS } from "@/constants/api";

export interface EmployeesSlice {
  employees: Employee[] | null;
  status: API_LOADING_STATUS;
}

const initialState: EmployeesSlice = {
  employees: null,
  status: "idle",
};

export const getEmployeesAsync = createAsyncThunk(
  "employees/getBlogPostItems",
  async () => {
    const response = await getEmployees();
    
    return response.data.employees;
  }
);

export const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getEmployeesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getEmployeesAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.employees = action.payload;
      })
      .addCase(getEmployeesAsync.rejected, (state) => {
        state.status = "failed";
      })
  },
});

export const { } = employeesSlice.actions;

export const selectEmployees = (state: AppState) => state.employees;

export default employeesSlice.reducer;
