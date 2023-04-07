import Cookies from "js-cookie";

const setCookie = (name: string, value: string, expiry: number) => {
  Cookies.set(name, value, { expires: expiry });
};

const getCookie = (name: string) => {
  return Cookies.get(name);
};

const removeCookie = (name: string) => {
  Cookies.remove(name);
};

export { setCookie, getCookie, removeCookie };
