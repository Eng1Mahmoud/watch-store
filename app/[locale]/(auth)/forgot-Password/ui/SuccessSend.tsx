import { Link } from "@/i18n/routing";
import React from "react";

const SuccessSend = () => {
  return (
    <div className="container h-screen flex items-center justify-center ">
      <div className="text-center">
        <h2 className="text-2xl  text-center text-main-main mb-2">
          Success Send Email
        </h2>
        <h3 className="text-center text-main-main">
          Please check your email to reset your password
        </h3>
        {/**back to home */}
        <Link href="/" className="btn btn-primary w-fit px-20 mt-10">
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default SuccessSend;
