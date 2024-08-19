import Link from "next/link";
import React from "react";

const NavLinks = () => {
  return (
    <div className="hidden md:flex">
      <ul className="menu menu-horizontal px-1 mx-1">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/">Categories</Link>
        </li>
        <li>
          <Link href="/">Products</Link>
        </li>
        <li>
          <Link href="/">Brands</Link>
        </li>
        <li>
          <Link href="/">GALLERY</Link>
        </li>
        <li>
          <Link href="/">TESTIMONIALS</Link>
        </li>
        <li>
          <Link href="/">CONTACT US</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
