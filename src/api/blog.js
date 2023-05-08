import { API_Method, API_URL } from "@/constants/api";
import axios from "axios";

const getBlogPostItems = async (options = "") => {
  let url = `${process.env.NEXT_PUBLIC_API_URL}${API_URL.POSTS}`;

  if (options) {
    url += `?${options}`;
  }

  const response = await axios({
    methid: API_Method.GET,
    url,
  });

  return response;
};

const getPostBlogItem = async (param) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}${API_URL.POSTS}/${param}`;

  const response = await axios({
    methid: API_Method.GET,
    url,
  });

  return response;
};

export { getBlogPostItems, getPostBlogItem };
