import { getUser } from "../../../actions/getUser";
import AvatarUI from "./ui/AvatarUI";
import { getTokenServer } from "@/utils/getTokenServer";
const Avatar = async () => {
  const token = getTokenServer();
  let user: any = null;
  if (token) {
    // to prevent fetching data if token is not present
    user = await getUser();
  }

  return <AvatarUI avatarUrl={user?.data?.userData?.avatar_url} />;
};

export default Avatar;
