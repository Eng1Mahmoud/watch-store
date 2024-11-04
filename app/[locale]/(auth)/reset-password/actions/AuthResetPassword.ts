"use server";
import { axiosServerInstance } from "@/axios/axiosServerInstance";
export const AuthResetPassword = async ({ token }: { token: string }) => {
  const response = await axiosServerInstance.get(
    `/auth/validate-reset/${token}`,
  );
  return response;
};
