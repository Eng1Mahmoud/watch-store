"use server";
import { apiRequest } from "@/apiRequests/fetch";
import { getTokenServer } from "@/utils/getTokenServer";
export const getCategory = async (name: string) => {
  const token = getTokenServer();
  const response = await apiRequest({
    endpoint: `/categories/${name}?type=name`,
    method: "GET",
    token: token,
  });
  return response;
};
