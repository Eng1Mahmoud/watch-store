"use client";
import Image from "next/image";
import defaultAvatar from "/public/assets/avatar.jpg";
import { MdPhotoCamera } from "react-icons/md";
import { uploadImage } from "@/actions/uploadImages";
import { saveAvatarIntoserver } from "./actions/saveAvatarIntoserver";
import { useState } from "react";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import { axiosClientInstance } from "@/axios/axiosClientInstance";
import { useMutation } from "@tanstack/react-query";
import { getQueryClient } from "@/QueryProvider/QueryProvider";
const ProfileImage = () => {
  const [loading, setLoading] = useState(false);
  const queryClient = getQueryClient();
  // get user data from server
  const { data } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await axiosClientInstance.get("/users/current");
      return response.data;
    },
  });
  // update user avatar into server
  const { mutate } = useMutation({
    mutationFn: async (imageUrl: string) => {
      return await saveAvatarIntoserver(imageUrl);
    },
    onSuccess: ({ data }) => {
      if (data.success) {
        toast.success("Avatar updated successfully");
        setLoading(false);
        queryClient.invalidateQueries({ queryKey: ["user"] }); // invalidate the user query
      } else {
        toast.error(data.message);
        setLoading(false);
      }
    },
    onError: (error: any) => {
      toast.error(error.message);
    },
  });
  const avatar = data?.data?.userData?.avatar_url;
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setLoading(true);
    const file = event.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      const { imageUrl } = await uploadImage(formData, "users");
      mutate(imageUrl);
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
