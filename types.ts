export interface Post {
  _id: string;
  title: string;
  content: string;
  image: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  __v: string;
}

export enum API_Method {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  PATCH = 'patch',
  DELETE = 'dete'
}

export enum API_URL {
  LOGIN = 'auth/login',
  POSTS = 'posts',
  EMPLOYEES = 'employees',
}