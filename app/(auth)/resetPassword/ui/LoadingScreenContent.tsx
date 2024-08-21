"use client";
import React from "react";

const LoadingScreenContent = () => {
  return (
    <div className="flex flex-col justify-center h-[200px]">
      <div className="flex justify-center">
        <span className="loading loading-dots loading-lg"></span>
      </div>
      <h2 className="text-center">please waite ...</h2>
    </div>
  );
};

export default LoadingScreenContent;
