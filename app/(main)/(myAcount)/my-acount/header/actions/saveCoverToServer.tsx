import { revalidate } from "@/actions/revalidatTage";
import { apiRequest } from "@/apiRequests/fetch";
export const saveCoverToServer = async (coverUrl: string, token: string) => {
  const response: any = await apiRequest({
    endpoint: "/users/current",
    method: "PATCH",
    data: { cover_url: coverUrl },
    token: token,
  });
  if (response.success) {
    revalidate(["get-user"]);
  }
  return response;
};
