"use client";
import { uploadImage } from "@/actions/uploadProfileImages";
import React, { useState } from "react";
import { MdPhotoCamera } from "react-icons/md";
import { saveCoverToServer } from "./actions/saveCoverToServer";
import { getTokenClient } from "@/utils/getTokenClient";
import { toast } from "react-toastify";
import Image from "next/image";
export const ProfileCover = ({ cover_url }: { cover_url: string }) => {
  console.log(cover_url);
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
      await saveCoverToServer(imageUrl, token as string).then((res) => {
        if (res.success) {
          toast.success("Cover updated successfully");
          setLoading(false);
        } else {
          toast.error("Failed to update cover");
          setLoading(false);
        }
      });
    }
  };
  return (
    <div className="h-[200px] w-full bg-slate-600 relative flex justify-center items-center rounded-tr-xl rounded-tl-xl overflow-hidden">
      {cover_url && (
        <Image
          width={100}
          height={100}
          src={cover_url}
          alt="Profile cover"
          className="absolute inset-0 w-full h-full object-cover"
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
