import { apiRequest } from "@/apiRequests/fetch";
import { getTokenServer } from "@/utils/getToken";
export const getUser = async () => {
  const token = getTokenServer();
  console.log("token", token);
  const response = await apiRequest({
    endpoint: `/users/current`,
    method: "GET",
    cache: "force-cache",
    tags: ["get-user"],
    token: token,
  });
  return response;
};
