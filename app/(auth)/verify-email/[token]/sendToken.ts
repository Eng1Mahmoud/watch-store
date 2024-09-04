"use server";
import { apiRequest } from "@/apiRequests/fetch";
export async function sendToken(token: string) {
  const response: any = await apiRequest({
    endpoint: `/auth/verify-email/${token}`,
    method: "POST",
  });

  return response;
}
