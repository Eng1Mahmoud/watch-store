"use server";
import { apiRequest } from "@/apiRequests/fetch";
import { getTokenServer } from "@/utils/getTokenServer";
export const getUser = async () => {
  const token = getTokenServer();
  const response = await apiRequest({
    endpoint: `/users/current`,
    method: "GET",
    cache: true,
    tags: ["get-user"],
    token: token,
  });
  return response;
};
