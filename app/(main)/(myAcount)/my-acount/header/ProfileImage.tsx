"use client";
import Image from "next/image";
import defaultAvatar from "/public/assets/avatar.jpg";
import { MdPhotoCamera } from "react-icons/md";
import { uploadImage } from "@/actions/uploadProfileImages";
import { saveAvatarIntoserver } from "./actions/saveAvatarIntoserver";
import { getTokenClient } from "@/utils/getTokenClient";
import { useState } from "react";
import { toast } from "react-toastify";
const ProfileImage = ({ avatar }: { avatar: string }) => {
  const [loading, setLoading] = useState(false);
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setLoading(true);
    const file = event.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      const { imageUrl } = await uploadImage(formData);
      const token = getTokenClient();
      await saveAvatarIntoserver(imageUrl, token as string)
        .then(() => {
          setLoading(false);
          toast.success("Avatar updated successfully");
        })
        .catch((error) => {
          toast.error(error.message);
          setLoading(false);
        });
    }
  };

  return (
    <>
      <div className="w-[200px] h-[200px] rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 border-4 border-white">
        <Image
          src={avatar || defaultAvatar}
          alt="Profile Picture"
          width={200}
          height={200}
          className="rounded-full object-cover w-full h-full"
        />

        <div className="absolute bottom-3 right-5">
          <div className="relative">
            <input
              type="file"
              id="profile-image"
              accept="image/*"
              className="file-input hidden"
              onChange={handleFileChange}
            />
            <label
              htmlFor="profile-image"
              className="flex items-center justify-center bg-white rounded-full p-2 cursor-pointer"
            >
              <MdPhotoCamera size={20} className="text-main-main" />
            </label>
          </div>
        </div>
        {loading && (
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center rounded-full">
            <div className="loading loading-spinner loading-lg text-main-main"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProfileImage;
