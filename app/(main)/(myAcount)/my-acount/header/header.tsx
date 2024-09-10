import { ProfileCover } from "./ProfileCover";
import ProfileImage from "./ProfileImage";
import { getUser } from "@/actions/getUser";

const Header = async () => {
  const user: any = await getUser();
  console.log(user?.data?.userData?.cover_url);
  return (
    <div className="relative flex flex-col items-center  ">
      <div className="relative w-full">
        <ProfileCover cover_url={user?.data?.userData?.cover_url} />
        <ProfileImage avatar={user?.data?.userData?.avatar_url} />
      </div>
      <div className="mt-[120px] pb-4">
        <h1 className="text-2xl font-bold text-center">
          {user?.data?.userData?.username}
        </h1>
      </div>
    </div>
  );
};

export default Header;
