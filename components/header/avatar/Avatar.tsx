import { getUser } from "@/actions/getUser";
import AvatarUI from "./ui/AvatarUI";
import { QueryClient } from "@tanstack/react-query";
import { getTokenServer } from "@/utils/getTokenServer";
const Avatar = async () => {
  const queryClient = new QueryClient();
  const token = getTokenServer();
  if (token) {
    await queryClient.fetchQuery({
      queryKey: ["user"],
      queryFn: getUser,
    });
  }
  return token ? <AvatarUI /> : null;
};

export default Avatar;
