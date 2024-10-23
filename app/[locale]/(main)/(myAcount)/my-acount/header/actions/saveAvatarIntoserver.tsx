import { axiosClientInstance } from "@/axios/axiosClientInstance";
export const saveAvatarIntoserver = async (avatarUrl: string) => {
  const response: any = await axiosClientInstance.patch("/users/current", {
    avatar_url: avatarUrl,
  });
  return response;
};
