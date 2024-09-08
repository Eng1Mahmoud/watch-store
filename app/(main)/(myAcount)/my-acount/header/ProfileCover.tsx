import React from "react";

export const ProfileCover = () => {
  return (
    <div className="h-[200px] w-full bg-slate-600 relative flex justify-center items-center rounded-tr-xl rounded-tl-xl">
      <div className="absolute bottom-3 right-1 md:right-5">
        <div className="flex items-center justify-center bg-white rounded-full  cursor-pointer"></div>
      </div>
    </div>
  );
};
