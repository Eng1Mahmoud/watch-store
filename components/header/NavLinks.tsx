"use client";
import { useTranslations } from "next-intl";
import { scrollToSection } from "@/utils/scrollToSection";
export const navLinks = [
  { href: "/", label: "home", id: 1, sectionId: "home" },
  { href: "/#about", label: "about", id: 2, sectionId: "about" },
  { href: "/#categories", label: "categories", id: 3, sectionId: "categories" },
  { href: "/#products", label: "products", id: 4, sectionId: "products" },
  { href: "/#brands", label: "brands", id: 5, sectionId: "brands" },
  { href: "/#gallery", label: "gallery", id: 6, sectionId: "gallery" },
  {
    href: "/#testimonials",
    label: "testimonials",
    id: 7,
    sectionId: "testimonials",
  },
  { href: "/#contact", label: "contact", id: 8, sectionId: "contact" },
] as const;

const NavLinks = () => {
  const t = useTranslations();

  return (
    <div className="hidden md:flex">
      <ul className="menu menu-horizontal px-1 mx-1">
        {navLinks.map((link) => (
          <li key={link.id}>
            <button
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.sectionId);
              }}
              className="font-main font-medium text-[15px] transition-all duration-300 hover:scale-110 hover:text-main-main px-3 dark:text-dark-text"
            >
              {t(`navLinks.${link.label}`)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavLinks;
