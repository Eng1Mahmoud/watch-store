import React from "react";
import UploadImage from "../uploadImages/imageUpload";
export const ProfileCover = () => {
  return (
    <div className="h-[200px] w-full bg-slate-600 relative flex justify-center items-center rounded-tr-xl rounded-tl-xl">
      <div className="absolute bottom-3 right-1 md:right-5">
        <div className="flex items-center justify-center bg-white rounded-full  cursor-pointer">
          <UploadImage />
        </div>
      </div>
    </div>
  );
};
