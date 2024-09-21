import { apiRequest } from "@/apiRequests/fetch";
import { getTokenServer } from "@/utils/getTokenServer";

export const getCategories = async (page: number, limit: number) => {
  const token = getTokenServer();
  const response = await apiRequest({
    endpoint: `/categories?page=${page}&limit=${limit}`,
    method: "GET",
    token,
  });
  return response;
};
