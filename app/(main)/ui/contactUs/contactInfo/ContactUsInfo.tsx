import React from "react";
import Info from "./Info";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("./Map"), { ssr: false });
const ContactUsInfo = () => {
  return (
    <div className=" container grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
      <Map />
      <Info />
    </div>
  );
};

export default ContactUsInfo;
