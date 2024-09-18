"use server";
import { apiRequest } from "@/apiRequests/fetch";
import { getTokenServer } from "@/utils/getTokenServer";
export const getUser = async (id: string) => {
  console.log("id", id);
  const token = getTokenServer();
  const response = await apiRequest({
    endpoint: `/users/${id}`,
    method: "GET",
    token: token,
  });
  console.log("response", response);
  return response;
};
