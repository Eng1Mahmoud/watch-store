import { revalidate } from "@/actions/revalidatTage";
import { apiRequest } from "@/apiRequests/fetch";
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
    revalidate(["get-user"]); //revalidate the get-user tag
  }
  return response;
};
