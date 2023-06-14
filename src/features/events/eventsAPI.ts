import { API_Method, API_URL } from "@/constants/api";
import { EventData, EventDataWithId } from "@/constants/types";
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

const createEvent = async (data: EventData) => {
  const token = getCookie("token");
  const url = `${process.env.NEXT_PUBLIC_API_URL}${API_URL.EVENTS}`;

  const response = await axios({
    method: API_Method.POST,
    url,
    data,
    headers: {
      Authorization: `Bearer ${token}`,
      contentType: "application/json",
    },
  });

  return response;
};


const editEvent = async (data: EventDataWithId) => {
  const token = getCookie("token");
  const url = `${process.env.NEXT_PUBLIC_API_URL}${API_URL.EVENTS}/${data.id}`;

  const response = await axios({
    method: API_Method.PATCH,
    url,
    data,
    headers: {
      Authorization: `Bearer ${token}`,
      contentType: "application/json",
    },
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
  createEvent,
  editEvent,
  deleteEvent
};