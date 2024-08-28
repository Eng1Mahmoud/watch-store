"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
const Breadcrumbs = () => {
  const pathname = usePathname();
  console.log(pathname);
  const pathMap: { [key: string]: string } = {
    "/orders": "My Orders",
    "/Addresses": "My Addresses",
    "/profile": "My profile",
    "/change-password": "Change Password",
    "/watchList": "My Wishlist",
  };
  return (
    <div className="breadcrumbs text-sm">
      <ul>
        <li>
          <Link href="/my-acount">My Account</Link>
        </li>
        <li className="capitalize">{pathMap[pathname]}</li>
      </ul>
    </div>
  );
};

export default Breadcrumbs;
