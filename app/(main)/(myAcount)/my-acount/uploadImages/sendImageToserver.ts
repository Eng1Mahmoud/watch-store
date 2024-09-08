import { apiRequest } from "@/apiRequests/fetch";

export const sendImageToServer = async (
  image: string,
  filedName: string,
  token: string,
) => {
  const response = await apiRequest({
    endpoint: "/users/current",
    method: "PATCH",
    data: {
      [filedName]: image,
    },
    token,
  });
  return response;
};
