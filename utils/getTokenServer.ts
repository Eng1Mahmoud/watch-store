import { cookies } from "next/headers";
export const getTokenServer = () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  return token?.value;
};
