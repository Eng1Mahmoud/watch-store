"use client";
import Image from "next/image";
import UploadImage from "../uploadImages/imageUpload";
import avatar from "/public/assets/avatar.jpg";
const ProfileImage = () => {
  return (
    <div className="w-[200px] h-[200px] rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 border-4 border-white">
      <Image
        src={avatar}
        alt="Profile Picture"
        width={200}
        height={200}
        className="rounded-full"
      />
      <div className="absolute bottom-3 right-5">
        <UploadImage />
      </div>
    </div>
  );
};

export default ProfileImage;
