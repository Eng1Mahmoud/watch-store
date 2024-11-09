"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { axiosClientInstance } from "@/axios/axiosClientInstance";
const ProfileName = () => {
  const { data } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await axiosClientInstance.get("/users/current");
      return response.data;
    },
  });
  const username = data?.data?.userData?.username;
  return (
    <div className="mt-[120px] pb-4">
      <h1 className="text-2xl font-bold text-center dark:text-dark-text">
        {username}{" "}
      </h1>
    </div>
  );
};

export default ProfileName;
