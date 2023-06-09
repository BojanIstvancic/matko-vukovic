export enum API_Method {
  GET = "get",
  POST = "post",
  PUT = "put",
  PATCH = "patch",
  DELETE = "delete"
}

export enum API_URL {
  LOGIN = "auth/login",
  POSTS = "posts",
  EMPLOYEES = "employees",
  USERS = "users",
  EVENTS = "events"
}

export type API_LOADING_STATUS = "loading" | "idle" | "failed";

