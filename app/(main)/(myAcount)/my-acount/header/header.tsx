import { ProfileCover } from "./ProfileCover";
import ProfileImage from "./ProfileImage";
import { getUser } from "@/actions/getUser";

const Header = async () => {
  const user: any = await getUser();
  return (
    <div className="relative flex flex-col items-center  ">
      <div className="relative w-full">
        <ProfileCover />
        <ProfileImage avatar={user?.data?.userData?.avatar_url} />
      </div>
      <div className="mt-[120px] pb-4">
        <h1 className="text-2xl font-bold text-center">John Doe</h1>
      </div>
    </div>
  );
};

export default Header;
