import React from "react";
import Logout from "./Logout";
import Link from "next/link";

const AvatarMenu = () => {
  return (
    <ul
      tabIndex={0}
      className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[3000000000000000000] mt-3 w-52 p-2 shadow"
    >
      <li>
        <Link href="/my-acount" className="justify-between">
          My Acount
        </Link>
      </li>

      <li>
        <Logout />
      </li>
    </ul>
  );
};

export default AvatarMenu;
