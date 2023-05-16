import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import type { AppState } from "../../store";
import { createEmployee, getEmployees } from "./employeesAPI";
import { Employee, EmployeeData, } from "@/constants/types";
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
  "employees/getEmployees",
  async () => {
    const response = await getEmployees();

    return response.data.employees;
  }
);

export const createEmployeeAsync = createAsyncThunk(
  "employees/createEmployee",
  async (data: EmployeeData) => {
    const response = await createEmployee(data);
    
    return response.data.employee;
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

      .addCase(createEmployeeAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createEmployeeAsync.fulfilled, (state, action) => {    
        const employees = state.employees as Employee[];

        state.status = "idle";    
        state.employees = [ action.payload, ...employees];
      })
      .addCase(createEmployeeAsync.rejected, (state) => {
        state.status = "failed";
      })
  },
});

export const { } = employeesSlice.actions;

export const selectEmployees = (state: AppState) => state.employees;

export default employeesSlice.reducer;
