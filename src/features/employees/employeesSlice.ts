import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import type { AppState } from "../../store";
import { createEmployee, deleteEmployee, editEmployee, getEmployees } from "./employeesAPI";
import { Employee, EmployeeData, EmployeeDataWithId, } from "@/constants/types";
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


export const editEmployeeAsync = createAsyncThunk(
  "employees/editEmployee",
  async (data: EmployeeDataWithId) => {  
    const response = await editEmployee(data, data.id);

    return response.data.employee;
  }
);

export const deleteEmployeeAsync = createAsyncThunk(
  "employee/deleteEmployee",
  async (id: string) => {
    const response = await deleteEmployee(id);

    return response.data.employee._id;
  }
);

export const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {},
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

      .addCase(editEmployeeAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(editEmployeeAsync.fulfilled, (state, action) => {    
        const employees = state.employees as Employee[];

        state.status = "idle";    
        state.employees = employees.map((employee) =>
        employee._id === action.payload._id ? action.payload : employee
        );
      })
      .addCase(editEmployeeAsync.rejected, (state) => {
        state.status = "failed";
      })

      .addCase(deleteEmployeeAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteEmployeeAsync.fulfilled, (state, action) => {
        const employees = state.employees as Employee[];

        state.status = "idle";
        state.employees = employees.filter(employee => employee._id !== action.payload)
      })
      .addCase(deleteEmployeeAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});


export const selectEmployees = (state: AppState) => state.employees;

export default employeesSlice.reducer;
