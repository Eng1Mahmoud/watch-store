import { getCookie } from "cookies-next";
export const getTokenClient = () => {
  const token = getCookie("token");
  return token;
};
