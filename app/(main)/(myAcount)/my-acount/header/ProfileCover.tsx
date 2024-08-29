import React from "react";
import UploadImage from "../uploadImages/imageUpload";
export const ProfileCover = () => {
  return (
    <div className="h-[200px] w-full bg-slate-600 relative">
      <div className="absolute bottom-3 right-5 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex items-center justify-center bg-white rounded-full p-2 cursor-pointer">
          <UploadImage />
        </div>
      </div>
    </div>
  );
};
