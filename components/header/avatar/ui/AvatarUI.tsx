"use client";
import Image from "next/image";
import avatar from "@/public/assets/avatar.jpg";
import AvatarMenu from "./AvatarMenu";
import { useAppSelector } from "@/redux/hooks";
import { useQuery } from "@tanstack/react-query";
import { axiosClientInstance } from "@/axios/axiosClientInstance";

const AvatarUI = () => {
  const { data } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await axiosClientInstance.get("/users/current");
      return response.data;
    },
  });
  const avatarUrl = data?.data?.userData?.avatar_url;
  const isLoging = useAppSelector((state) => state.user.login);
  return isLoging ? (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="rounded-full w-12 h-12 overflow-hidden">
          <Image
            alt="avatar"
            src={avatarUrl || avatar}
            width={50}
            height={50}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <AvatarMenu />
    </div>
  ) : null;
};

export default AvatarUI;
