import React from "react";
import Map from "./Map";
import Info from "./Info";
const ContactUsInfo = () => {
  return (
    <div className=" container grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
      <Map />
      <Info />
    </div>
  );
};

export default ContactUsInfo;
