import { createAsyncThunk, createDraftSafeSelector, createSlice, isAnyOf } from "@reduxjs/toolkit";

import type { AppState } from "../../store";
import { createEmployee, deleteEmployee, editEmployee, getEmployees } from "./employeesAPI";
import { Administration, Employee, EmployeeData, EmployeeDataWithId, EmployeeRoles, Library, ProfessionalService, Support, } from "@/constants/types";
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
      .addCase(getEmployeesAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.employees = action.payload;
      })
      .addCase(createEmployeeAsync.fulfilled, (state, action) => {    
        const employees = state.employees as Employee[];

        state.status = "idle";    
        state.employees = [ action.payload, ...employees];
      })
      .addCase(editEmployeeAsync.fulfilled, (state, action) => {    
        const employees = state.employees as Employee[];

        state.status = "idle";    
        state.employees = employees.map((employee) =>
        employee._id === action.payload._id ? action.payload : employee
        );
      })
      .addCase(deleteEmployeeAsync.fulfilled, (state, action) => {
        const employees = state.employees as Employee[];

        state.status = "idle";
        state.employees = employees.filter(employee => employee._id !== action.payload)
      })

      .addMatcher(
        isAnyOf(getEmployeesAsync.pending, createEmployeeAsync.pending, editEmployeeAsync.pending, deleteEmployeeAsync.pending),
        (state) => {
          state.status = "loading"
        })

      .addMatcher(
        isAnyOf(getEmployeesAsync.rejected, createEmployeeAsync.rejected, editEmployeeAsync.rejected, deleteEmployeeAsync.rejected),
        (state) => {
          state.status = "failed"
      })
  },
});


export const selectEmployees = (state: AppState) => state.employees;


export const selectEmployesSortedByRoles = createDraftSafeSelector(
  selectEmployees,
  (state) => {
    const administration = state.employees?.filter(
      (member) =>
        member.role.includes(Administration.DIRECTOR) ||
        member.role.includes(Administration.SECRETARY) ||
        member.role.includes(Administration.DEPUTY) ||
        member.role.includes(Administration.LAWYER)
    );
  
    const professionalService = state.employees?.filter(
      (member) =>
        member.role.includes(ProfessionalService.PEDAGOGUE) ||
        member.role.includes(ProfessionalService.PSYCHOLOGIST)
    );
  
    const professors = state.employees?.filter((member) =>
      member.role.includes(EmployeeRoles.PROFESSOR)
    );
  
    const support = state.employees?.filter(
      (member) =>
        member.role.includes(Support.CLEANER) ||
        member.role.includes(Support.JANITOR)
    );
  
    const library = state.employees?.filter((member) =>
      member.role.includes(Library.LIBRARIAN)
    );

    return { 
      administration,
      professionalService,
      professors,
      support,
      library,
    }
  }
)

export default employeesSlice.reducer;
