import axios from "axios";
import { getCookie } from "@/helpers/cookieStorage";

export const apiCall = async (url, method, data) => {
  const token = getCookie("token");

  const response = await axios({
    method,
    url: `${process.env.NEXT_PUBLIC_API_URL}${url}`,
    data,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
};
