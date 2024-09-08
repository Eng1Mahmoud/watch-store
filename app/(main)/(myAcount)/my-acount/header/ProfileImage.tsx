"use client";
import Image from "next/image";
import { useState } from "react";
import UploadImage from "../uploadImages/imageUpload";
import avatar from "/public/assets/avatar.jpg";
import { MdPhotoCamera } from "react-icons/md";
import CropImageDialog from "../CropDialog";
const ProfileImage = () => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<string>("");
  console.log(image);
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setLoading(false);
        setImage(reader.result as string);
        console.log(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="w-[200px] h-[200px] rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 border-4 border-white">
        <Image
          src={avatar}
          alt="Profile Picture"
          width={200}
          height={200}
          className="rounded-full"
        />
        <div className="absolute bottom-3 right-5">
          <div className="relative">
            <input
              type="file"
              id="file-input"
              accept="image/*"
              onChange={(event) => handleFileSelect(event)}
              className="file-input hidden"
            />
            <label
              htmlFor="file-input"
              className="flex items-center justify-center bg-white rounded-full p-2 cursor-pointer"
            >
              <MdPhotoCamera size={20} className="text-main-main" />
            </label>
            {loading && (
              <div className="text-center mt-2 absolute top-0 bottom-0 right-0 left-0 bg-white text-main-main">
                <p>upload...</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <CropImageDialog image={image} />
    </>
  );
};

export default ProfileImage;
