import { API_Method, API_URL } from "@/constants/api";
import { EmployeeData, EmployeeDataWithId } from "@/constants/types";
import { getCookie } from "@/helpers/cookieStorage";
import axios from "axios";

const getEmployees = async () => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}${API_URL.EMPLOYEES}`;

  const response = await axios({
    method: API_Method.GET,
    url,
  });

  return response;
};

const createEmployee = async (formData: EmployeeData) => {
  const token = getCookie("token");
  const url = `${process.env.NEXT_PUBLIC_API_URL}${API_URL.EMPLOYEES}`;

  const data = new FormData();

  for (const [key, value] of Object.entries(formData)) {
    if(key === "image") {
      data.append("staff_image", value)
    } else {
      data.append(key, value);
    }
  }

  const response = await axios({
    method: API_Method.POST,
    url,
    data,
    headers: {
      Authorization: `Bearer ${token}`,
      contentType: "multipart/form-data",
    },
  });

  return response;
};

const editEmployee = async (formData: EmployeeDataWithId, id: string) => {
  const token = getCookie("token");
  const url = `${process.env.NEXT_PUBLIC_API_URL}${API_URL.EMPLOYEES}/${id}`;

  const data = new FormData();

  for (const [key, value] of Object.entries(formData)) {
    if(key === "image") {
      data.append("staff_image", value)
    } else {
      data.append(key, value);
    }
  }

  const response = await axios({
    method: API_Method.PATCH,
    url,
    data,
    headers: {
      Authorization: `Bearer ${token}`,
      contentType: "multipart/form-data",
    },
  });

  return response;
};

const deleteEmployee = async (id: string) => {
  const token = getCookie("token");
  const url = `${process.env.NEXT_PUBLIC_API_URL}${API_URL.EMPLOYEES}/${id}`;

  const response = await axios({
    method: API_Method.DELETE,
    url,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
};

export { getEmployees, createEmployee, editEmployee, deleteEmployee };
