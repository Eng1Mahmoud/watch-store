import { apiRequest } from "@/apiRequests/fetch";

export const sendImageToServer = async (image: string, token: string) => {
  const response = await apiRequest({
    endpoint: "/users/current",
    method: "PATCH",
    data: {
      avatar_url: image,
    },
    token,
  });
  return response;
};
