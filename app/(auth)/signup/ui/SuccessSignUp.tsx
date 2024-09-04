import React from "react";

const SuccessSignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold text-main-main">Success</h1>
      <p className="text-sm text-gray-500">You have successfully registered</p>
      <p className="text-sm text-gray-500">
        Please check your email for verification
      </p>
    </div>
  );
};

export default SuccessSignUp;
