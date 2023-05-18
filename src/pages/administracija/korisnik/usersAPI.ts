
import { API_Method, API_URL } from "@/constants/api";
import axios from "axios";

const getUsers = async () => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}${API_URL.USERS}`;

  const response = await axios({
    method: API_Method.GET,
    url,
    headers: {
      contentType: "application/json",
    },
  });

  return response;
};

export { getUsers };
