import { API_Method, API_URL } from "@/constants/api";
import { BlogPostData } from "@/constants/types";
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


const createBlogPostItem = async (formData: BlogPostData) => {
  const token = getCookie("token");
  const url = `${process.env.NEXT_PUBLIC_API_URL}${API_URL.POSTS}`;

  const data = new FormData();

  for (const [key, value] of Object.entries(formData)) {
    if(key === 'image') {
      data.append('post_image', value)
    } else {
      data.append(key, value);
    }
  }

  const response = await axios({
    method: API_Method.POST,
    url,
    data,
    headers: {
      Authorization: `Bearer ${token}`,
      contentType: "multipart/form-data",
    },
  });

  return response;
};

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

const deleteBlogPostItem = async (id: string) => {
  const token = getCookie("token");
  const url = `${process.env.NEXT_PUBLIC_API_URL}${API_URL.POSTS}/${id}`;

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
  getBlogPostItems,
  createBlogPostItem,
  // editBlogPostItem,
  deleteBlogPostItem,
};
