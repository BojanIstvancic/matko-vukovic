import axios from "axios";
import { getCookie } from "@/helpers/cookieStorage";

export const apiCall = async (url, method, data, param = "", options = "") => {
  const token = getCookie("token");

  let apiURL = `${process.env.NEXT_PUBLIC_API_URL}${url}`;

  if (param) {
    apiURL += `/${param}`;
  }

  if (options) {
    apiURL += `?${options}`;
  }

  const contentType = data?.file ? "multipart/form-data" : "text/plain";
  const response = await axios({
    method,
    url: apiURL,
    data,
    headers: {
      Authorization: `Bearer ${token}`,
      contentType,
    },
  });

  return response;
};
