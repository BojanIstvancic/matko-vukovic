
import { API_Method, API_URL } from "@/constants/api";
import axios from "axios";

const loginUser = async (data: {
  name: string,
  password: string,
}) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}${API_URL.LOGIN}`;

  const response = await axios({
    method: API_Method.POST,
    url,
    data,
    headers: {
      contentType: "application/json",
    },
  });

  return response;
};

export { loginUser };
