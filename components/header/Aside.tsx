"use client";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5"; // Import a close icon
import { navLinks } from "./NavLinks";
import { Link } from "@/i18n/routing";
import { useRef } from "react";
import { useTranslations } from "next-intl";
const Aside = () => {
  const t = useTranslations();
  const drawerCheckboxRef = useRef<HTMLInputElement>(null);
  const handleCloseDrawer = () => {
    if (drawerCheckboxRef.current) {
      drawerCheckboxRef.current.checked = false;
    }
  };

  return (
    <div>
      <label
        htmlFor="my-drawer-4"
        className="md:hidden text-[30px] font-extrabold cursor-pointer"
      >
        <CiMenuFries />
      </label>

      <div className="drawer drawer-end z-[1000000000000000]">
        <input
          id="my-drawer-4"
          type="checkbox"
          className="drawer-toggle"
          ref={drawerCheckboxRef}
        />
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <div className="bg-base-200 text-base-content min-h-full w-[300px] overflow-y-auto ">
            <div className="p-4">
              <div className="flex rtl:justify-end ltr:justify-start mb-4 mx-4">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close drawer"
                  className="text-[30px] cursor-pointer "
                >
                  <IoClose />
                </label>
              </div>

              <ul className="menu mr-4">
                {navLinks.map((link) => (
                  <li key={link.id} className="mb-2">
                    <Link
                      href={link.href}
                      className=" font-main text-[16px] px-4 py-2 hover:bg-base-300 rounded-lg transition-all duration-300 hover:scale-110 hover:text-main-main"
                      onClick={handleCloseDrawer} // Close drawer on click
                    >
                      {t(`navLinks.${link.label}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aside;
