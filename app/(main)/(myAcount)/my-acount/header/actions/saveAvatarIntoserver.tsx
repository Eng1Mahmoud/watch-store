"use server";
import { apiRequest } from "@/apiRequests/fetch";
import { revalidateTag } from "next/cache";
export const saveAvatarIntoserver = async (
  avatarUrl: string,
  token: string,
) => {
  const response: any = await apiRequest({
    endpoint: "/users/current",
    method: "PATCH",
    data: { avatar_url: avatarUrl },
    token: token,
  });
  if (response.success) {
    revalidateTag("get-user");
  }
  return response;
};
