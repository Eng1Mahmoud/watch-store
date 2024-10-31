import { axiosClientInstance } from "@/axios/axiosClientInstance";
export const saveCoverToServer = async (coverUrl: string) => {
  const response: any = await axiosClientInstance.patch("/users/current", {
    cover_url: coverUrl,
  });
  return response;
};
