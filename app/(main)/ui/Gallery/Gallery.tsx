import React from "react";
import ShowImages from "./ShowImages";

export const Gallery = () => {
  return (
    <div className="container " id="gallery">
      <h1 className="text-center text-main-main font-bold text-[30px] py-10">
        Gallery
      </h1>
      <ShowImages />
    </div>
  );
};
