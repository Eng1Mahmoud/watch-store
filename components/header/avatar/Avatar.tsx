import { getUser } from "./getUser";
import AvatarUI from "./ui/AvatarUI";
import { getTokenServer } from "@/utils/getToken";
const Avatar = async () => {
  const token = getTokenServer();
  let user: any = null;
  if (token) {
    // to prevent fetching data if token is not present
    user = await getUser();
  }

  return <AvatarUI user={user} />;
};

export default Avatar;
