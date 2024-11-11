"use client";
import { uploadImage } from "@/actions/uploadImages";
import React, { useState } from "react";
import { MdPhotoCamera } from "react-icons/md";
import { saveCoverToServer } from "./actions/saveCoverToServer";
import Image from "next/image";
import { useQuery, useMutation } from "@tanstack/react-query";
import { axiosClientInstance } from "@/axios/axiosClientInstance";
import { getQueryClient } from "@/QueryProvider/QueryProvider";

export const ProfileCover = () => {
  const queryClient = getQueryClient();
  const [loading, setLoading] = useState(false);
  //get user data from server
  const { data } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await axiosClientInstance.get("/users/current");
      return response.data;
    },
  });
  // save cover to server
  const { mutate } = useMutation({
    mutationFn: async (coverUrl: string) => {
      const response = await saveCoverToServer(coverUrl);
      return response;
    },
    onSuccess: ({ data }) => {
      if (data.success) {
        setLoading(false);
        queryClient.invalidateQueries({ queryKey: ["user"] }); // invalidate user query to get new cover
      } else {
        setLoading(false);
      }
    },
    onError: () => {
      setLoading(false);
    },
  });
  const cover_url = data?.data?.userData?.cover_url;
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
    <div className="h-[200px] w-full bg-slate-600 relative flex justify-center items-center rounded-tr-xl rounded-tl-xl overflow-hidden">
      {cover_url && (
        <Image
          src={cover_url}
          quality={100}
          fill
          alt="Profile cover"
          className="absolute inset-0 w-full h-full object-cover block"
        />
      )}
      <div className="absolute bottom-3 right-1 md:right-5">
        <div className="flex items-center justify-center bg-white rounded-full cursor-pointer">
          <div className="relative">
            <input
              type="file"
              id="cover-input"
              accept="image/*"
              onChange={handleFileChange}
              className="file-input hidden"
            />
            <label
              htmlFor="cover-input"
              className="flex items-center justify-center bg-white rounded-full p-2 cursor-pointer"
            >
              <MdPhotoCamera size={20} className="text-main-main" />
            </label>
          </div>
          {loading && (
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center">
              <div className="loading loading-spinner loading-lg text-white"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
