import { API_Method, API_URL } from "@/constants/api";
import axios from "axios";


const getEvents = async () => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}${API_URL.EVENTS}`;

  const response = await axios({
    method: API_Method.GET,
    url,
  });

  return response;
};

export {
  getEvents
};