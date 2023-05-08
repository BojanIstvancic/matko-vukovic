import { API_Method, API_URL } from "@/constants/api";
import { getCookie } from "@/helpers/cookieStorage";
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

const getBlogPostItem = async (param) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}${API_URL.POSTS}/${param}`;

  const response = await axios({
    methid: API_Method.GET,
    url,
  });

  return response;
};

// const createBlogPostItem = async (formData) => {
//   const token = getCookie("token");
//   const url = `${process.env.NEXT_PUBLIC_API_URL}${API_URL.POSTS}/${param}`;

//   const data = new FormData();

//   for (const [key, value] of Object.entries(formData)) {
//     data.append(key, value);
//   }

//   console.log(data, "daturina");

//   const response = await axios({
//     methid: API_Method.POST,
//     url,
//     data,
//     headers: {
//       Authorization: `Bearer ${token}`,
//       contentType: "multipart/form-data",
//     },
//   });

//   return response;
// };

export { getBlogPostItems, getBlogPostItem };
