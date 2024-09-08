import { apiRequest } from "@/apiRequests/fetch";
export const AuthResetPassword = async ({ token }: { token: string }) => {
  const response = await apiRequest({
    endpoint: `/auth/reset-password/${token}`,
    method: "POST",
  });
  return response;
};
