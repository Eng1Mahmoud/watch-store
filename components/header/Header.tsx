import Image from "next/image";
import React from "react";
import logo from "@/public/assets/logo.webp";
import Link from "next/link";
import Search from "./Search";
import Cart from "./Cart";
import NavLinks from "./NavLinks";
import { CiMenuFries } from "react-icons/ci";
import Avatar from "./Avatar";
const Header = () => {
  return (
    <div className="header container">
      <div className="navbar bg-base-100">
        <div className="flex-none">
          <Link href="/">
            <Image
              width={100}
              height={100}
              alt="Tailwind CSS Navbar component"
              src={logo}
            />
          </Link>
        </div>
        <div className="gap-2 flex-1 justify-end">
          <div className="hidden md:flex-1 md:flex">
            <Search />
          </div>
          <Cart />
          <Avatar />
        </div>
      </div>

      {/* Mobile */}
      <div className=" mt-3 pb-2">
        <div className="flex justify-center items-center gap-2 ">
          <NavLinks />
          <div className="flex-1 md:hidden">
            <Search />
          </div>
          <CiMenuFries className="md:hidden text-[30px] font-extrabold cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Header;
