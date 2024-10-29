"use server";
import { axiosServerInstance } from "@/axios/axiosServerInstance";
export async function sendToken(token: string) {
  const response = await axiosServerInstance.post(
    `/auth/verify-email/${token}`,
  );
  return response;
}
