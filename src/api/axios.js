import axios from "axios";
import { getCookie } from "@/helpers/cookieStorage";
import FormData from "form-data";

export const apiCall = async (
  url,
  method,
  data,
  param = "",
  options = "",
  contentType = "multipart/form-data"
) => {
  const token = getCookie("token");

  let apiURL = `${process.env.NEXT_PUBLIC_API_URL}${url}`;

  if (param) {
    apiURL += `/${param}`;
  }

  if (options) {
    apiURL += `?${options}`;
  }

  let formData = data;

  if (data && contentType !== "application/json") {
    formData = new FormData();
    for (const [key, value] of Object.entries(data)) {
      formData.append(key, value);
    }
  }

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
