"use client";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { navLinks } from "./NavLinks";
import { Link } from "@/i18n/routing";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
const Aside = () => {
  const t = useTranslations();
  const router = useRouter();
  const drawerCheckboxRef = useRef<HTMLInputElement>(null);
  const handleClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    // Close drawer
    if (drawerCheckboxRef.current) {
      drawerCheckboxRef.current.checked = false;
    }
    router.push(href as any);
  };

  return (
    <div className="">
      <label
        htmlFor="my-drawer-4"
        className="md:hidden text-[30px] font-extrabold cursor-pointer dark:text-dark-text"
      >
        <div className="p-2 shadow-custom dark:shadow-dark rounded-lg text-main-main dark:text-dark-text">
          <CiMenuFries className="font-bolder" />
        </div>
      </label>

      <div className="drawer drawer-end z-[1000000000000000]">
        <input
          id="my-drawer-4"
          type="checkbox"
          className="drawer-toggle"
          ref={drawerCheckboxRef}
        />
        <div className="drawer-side ">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <div className="bg-base-200 text-base-content min-h-full w-[300px] overflow-y-auto dark:bg-dark-bgSection">
            <div className="py-4">
              <div className="flex rtl:justify-end ltr:justify-start mb-4 mx-4">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close drawer"
                  className="text-[30px] cursor-pointer dark:text-dark-text"
                >
                  <div className="p-2 shadow-custom dark:shadow-dark rounded-lg text-main-main dark:text-dark-text">
                    <IoClose className="font-bolder" />
                  </div>
                </label>
              </div>

              <ul className="menu  ">
                {navLinks.map((link) => (
                  <li key={link.id} className="mb-2 ">
                    <Link
                      href={link.href as any}
                      className="font-main text-[16px] px-4 py-2 hover:bg-base-300 rounded-lg transition-all duration-300 hover:scale-110
                       hover:text-main-main dark:text-dark-text dark:hover:bg-dark-bgSection  "
                      onClick={(e) => handleClick(e, link.href)}
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
