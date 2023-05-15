import { API_Method, API_URL } from "@/constants/api";
import { getCookie } from "@/helpers/cookieStorage";
import axios from "axios";

const getBlogPostItems = async () => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}${API_URL.POSTS}`;

  const response = await axios({
    method: API_Method.GET,
    url,
  });

  return response;
};

// const getBlogPostItem = async (param:any) => {
//   const url = `${process.env.NEXT_PUBLIC_API_URL}${API_URL.POSTS}/${param}`;

//   const response = await axios({
//     method: API_Method.GET,
//     url,
//   });

//   return response;
// };

// const createBlogPostItem = async (formData:any) => {
//   const token = getCookie("token");
//   const url = `${process.env.NEXT_PUBLIC_API_URL}${API_URL.POSTS}`;

//   const data = new FormData();

//   for (const [key, value] of Object.entries(formData)) {
//     data.append(key, value);
//   }

//   const response = await axios({
//     method: API_Method.POST,
//     url,
//     data,
//     headers: {
//       Authorization: `Bearer ${token}`,
//       contentType: "multipart/form-data",
//     },
//   });

//   return response;
// };

// const editBlogPostItem = async (formData:any, id:any) => {
//   const token = getCookie("token");
//   const url = `${process.env.NEXT_PUBLIC_API_URL}${API_URL.POSTS}/${id}`;

//   const data = new FormData();

//   for (const [key, value] of Object.entries(formData)) {
//     data.append(key, value);
//   }

//   const response = await axios({
//     method: API_Method.PATCH,
//     url,
//     data,
//     headers: {
//       Authorization: `Bearer ${token}`,
//       contentType: "multipart/form-data",
//     },
//   });

//   return response;
// };

// const deleteBlogPostItem = async (id: string) => {
//   const token = getCookie("token");
//   const url = `${process.env.NEXT_PUBLIC_API_URL}${API_URL.POSTS}/${id}`;

//   const response = await axios({
//     method: API_Method.DELETE,
//     url,
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   return response;
// };

export {
  getBlogPostItems,
  // getBlogPostItem,
  // createBlogPostItem,
  // editBlogPostItem,
  // deleteBlogPostItem,
};
