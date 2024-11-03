"use server";
import { axiosServerInstance } from "@/axios/axiosServerInstance";
export const AuthResetPassword = async ({ token }: { token: string }) => {
  console.log(token);
  const response = await axiosServerInstance.get(
    `/auth/validate-reset/${token}`,
  );
  return response;
};
