import ProfileDetails from "./ui/ProfileDetails";
import { getUser } from "@/actions/getUser";
const page = async () => {
  const user: any = await getUser();
  return (
    <div>
      <ProfileDetails user={user?.data?.userData} />
    </div>
  );
};

export default page;
