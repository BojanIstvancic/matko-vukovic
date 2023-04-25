import axios from "axios";
import { getCookie } from "@/helpers/cookieStorage";
import FormData from "form-data";

export const apiCall = async (url, method, data, param = "", options = "") => {
  const token = getCookie("token");

  let apiURL = `${process.env.NEXT_PUBLIC_API_URL}${url}`;

  if (param) {
    apiURL += `/${param}`;
  }

  if (options) {
    apiURL += `?${options}`;
  }

  const formData = new FormData();

  if (data) {
    for (const [key, value] of Object.entries(data)) {
      formData.append(key, value);
    }
  }

  const contentType = data ? "multipart/form-data" : "application/json";

  const response = await axios({
    method,
    url: apiURL,
    data: formData,
    headers: {
      Authorization: `Bearer ${token}`,
      contentType,
    },
  });

  return response;
};
