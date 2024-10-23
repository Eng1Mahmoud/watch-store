import { ProfileCover } from "./ProfileCover";
import ProfileImage from "./ProfileImage";
import ProfileName from "./ProfileName";
const Header = async () => {
  return (
    <div className="relative flex flex-col items-center  ">
      <div className="relative w-full">
        <ProfileCover />
        <ProfileImage />
      </div>
      <ProfileName />
    </div>
  );
};

export default Header;
