"use client";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";
export const navLinks = [
  { href: "/", label: "home", id: 1 },
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
] as {
  href: string;
  label: string;
  id: number;
  sectionId?: string;
}[];

const NavLinks = () => {
  const t = useTranslations();
  const router = useRouter();
  const handleNavigation = (link: (typeof navLinks)[number]) => {
    if (link.sectionId) {
      // If we're not on the home page, first navigate to home
      if (window.location.pathname !== "/") {
        router.push(`/#${link.sectionId}` as any);
        /*   scrollToSection(link.sectionId); */
        return;
      }
    } else {
      // If no sectionId, just navigate to href
      router.push(link.href as any);
    }
  };

  return (
    <div className="hidden md:flex">
      <ul className="menu menu-horizontal px-1 mx-1">
        {navLinks.map((link) => (
          <li key={link.id}>
            <button
              onClick={(e) => {
                e.preventDefault();
                handleNavigation(link);
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
