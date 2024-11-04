"use client";
import React, { useState } from "react";
import { FiMenu, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Menu from "./Menu";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useTranslations } from "next-intl";

interface DrawerToggleProps {
  children: React.ReactNode;
}

const DrawerToggle: React.FC<DrawerToggleProps> = ({ children }) => {
  const t = useTranslations("adminLayout");
  const [open, setOpen] = useState(false);

  // toggle drawer
  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  return (
    <div className="drawer lg:drawer-open ">
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={open}
        onChange={handleDrawerToggle}
      />
      <div className="drawer-content flex flex-col ">
        {/* Navbar */}
        <div className="navbar bg-base-100 shadow-md">
          <div className="flex-none">
            <label
              htmlFor="my-drawer"
              className="btn btn-square btn-ghost drawer-button lg:hidden"
            >
              <FiMenu className="h-6 w-6" />
            </label>
          </div>
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl text-main-main">
              {t("title")}
            </a>
          </div>
        </div>
        {/* Page content */}
        <main className="flex-grow p-4">
          <div className="container px-3 md:px-12 by-5">
            <Breadcrumbs />
          </div>
          {children}
        </main>
      </div>
      <div className="drawer-side h-auto min-h-screen shadow-custom z-[1000000]">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <aside
          className={`bg-white h-full  ${open ? "w-64" : "w-20"}`}
          style={{
            transition: "width .3s ease-in-out",
          }}
        >
          <div className="flex justify-end p-2 border-b-2 border-gray-200">
            <button
              onClick={handleDrawerToggle}
              className="btn btn-square btn-ghost"
            >
              {open ? (
                <FiChevronLeft className="h-6 w-6 text-main-main" />
              ) : (
                <FiChevronRight className="h-6 w-6 text-main-main" />
              )}
            </button>
          </div>
          {/* Pass open state and onToggle function to Menu component */}
          <Menu open={open} onToggle={handleDrawerToggle} />
        </aside>
      </div>
    </div>
  );
};

export default DrawerToggle;
