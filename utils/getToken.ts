import { cookies } from "next/headers";
import { getCookie } from "cookies-next";
export const getTokenServer = () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  return token?.value;
};

export const getTokenClient = () => {
  const token = getCookie("token");
  return token;
};
