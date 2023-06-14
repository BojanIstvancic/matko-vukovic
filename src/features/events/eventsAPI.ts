import { API_Method, API_URL } from "@/constants/api";
import { getCookie } from "@/helpers/cookieStorage";
import axios from "axios";


const getEvents = async () => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}${API_URL.EVENTS}`;

  const response = await axios({
    method: API_Method.GET,
    url,
  });

  return response;
};

const deleteEvent = async (id: string) => {
  const token = getCookie("token");
  const url = `${process.env.NEXT_PUBLIC_API_URL}${API_URL.EVENTS}/${id}`;

  const response = await axios({
    method: API_Method.DELETE,
    url,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
};

export {
  getEvents,
  deleteEvent
};