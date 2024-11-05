"use client";
import { useAppSelector } from "@/redux/hooks";
import AvatarUI from "./ui/AvatarUI";
const Avatar = () => {
  const isLoging = useAppSelector((state) => state.user.login);
  return isLoging ? <AvatarUI /> : null;
};

export default Avatar;
