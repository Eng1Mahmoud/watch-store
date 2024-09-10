import { apiRequest } from "@/apiRequests/fetch";
export const AuthResetPassword = async ({ token }: { token: string }) => {
  const response = await apiRequest({
    endpoint: `/auth/validate-reset/${token}`,
    method: "GET",
  });
  return response;
};
