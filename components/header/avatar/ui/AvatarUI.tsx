"use client";
import Image from "next/image";
import avatar from "@/public/assets/avatar.jpg";
import AvatarMenu from "./AvatarMenu";

import { useTokenExpiration } from "@/hooks/useTokenExpiration";
const AvatarUI = ({ user }: { user: any }) => {
  const isExpired = useTokenExpiration();

  return !isExpired ? (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="rounded-full w-12 h-12 overflow-hidden">
          <Image
            alt="avatar"
            src={avatar}
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
