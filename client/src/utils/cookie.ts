import Cookies from "js-cookie";

export const setCookie = (key: string, value: string) => {
  Cookies.set(key, value);
};

export const getCookie = (key: string) => {
  let get = Cookies.get(key);
  return get;
};

export const removeCookie = (key: string) => {
  Cookies.remove(key)
}
