"use server";
import { apiRequest } from "@/apiRequests/fetch";
import { revalidateTag } from "next/cache";
export const saveCoverToServer = async (coverUrl: string, token: string) => {
  const response: any = await apiRequest({
    endpoint: "/users/current",
    method: "PATCH",
    data: { cover_url: coverUrl },
    token: token,
  });
  if (response.success) {
    revalidateTag("get-user");
  }
  return response;
};
