import React from "react";
import Header from "./header/header";
import CropImageDialog from "./CropDialog";
import { ActionList } from "./action-list/ActionList";

const page = () => {
  return (
    <div className="py-5  ">
      <div className="container rounded-xl">
        <div className="shadow-custom rounded-xl">
          <Header />
          <ActionList />
          <CropImageDialog />
        </div>
      </div>
    </div>
  );
};

export default page;
