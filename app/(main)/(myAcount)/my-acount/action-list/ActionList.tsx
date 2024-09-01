import { IoCartOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import { IoKeyOutline } from "react-icons/io5";
import React from "react";
import Link from "next/link";
const actionList = [
  {
    title: "My Orders",
    description: "Track Your Orders, Return Products or Buy them again",
    icon: <IoCartOutline className="text-main-main" size={22} />,
    link: "/orders",
    id: 1,
  },
  {
    title: "My Wishlist",
    description: "Here is the List of all Your Desired Products",
    icon: <MdFavoriteBorder className="text-main-main" size={22} />,
    link: "/Wishlist",
    id: 2,
  },
  {
    title: "My Profile",
    description: "Add Profile Image, Edit Your Name and Email",
    icon: <CgProfile className="text-main-main" size={22} />,
    link: "/profile",
    id: 3,
  },
  {
    title: "My Address",
    description: "Add or Edit Your Addresses",
    icon: <CiLocationOn className="text-main-main" size={22} />,
    link: "/Addresses",
    id: 4,
  },
  {
    title: "Change Password",
    description: "You can Change Your Password",
    icon: <IoKeyOutline className="text-main-main" size={22} />,
    link: "/change-password",
    id: 5,
  },
];
export const ActionList = () => {
  return (
    <div className="container py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3  lg:grid-cols-5">
        {actionList.map((action) => (
          <div
            key={action.id}
            className="  py-3 px-4 border-b border-gray-200 rounded-md shadow-lg hover:shadow-custom relative"
          >
            <div className="flex ">
              <div className="mr-2">{action.icon}</div>
              <div className="pt-0">
                <h3 className="font-semibold pt-0">{action.title}</h3>
                <p className="text-gray-500">{action.description}</p>
              </div>
            </div>
            <Link
              href={action.link}
              className="absolute top-0 left-0 right-0 bottom-0"
            ></Link>
          </div>
        ))}
      </div>
    </div>
  );
};
