import React from "react";
import Header from "./header/header";
import CropImageDialog from "./CropDialog";

const page = () => {
  return (
    <div className="py-5  ">
      <div className="container ">
        <div className="shadow-custom">
          <Header />
          <CropImageDialog />
        </div>
      </div>
    </div>
  );
};

export default page;
