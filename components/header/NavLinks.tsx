import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
// Array of link data
export const navLinks = [
  { href: "/", label: "home", id: 1 },
  { href: "/#about", label: "about", id: 2 },
  { href: "/#categories", label: "categories", id: 3 },
  { href: "/#products", label: "products", id: 4 },
  { href: "/#brands", label: "brands", id: 5 },
  { href: "/#gallery", label: "gallery", id: 6 },
  { href: "/#testimonials", label: "testimonials", id: 7 },
  { href: "/#contact", label: "contact", id: 8 },
];

const NavLinks = () => {
  const t = useTranslations();
  return (
    <div className="hidden md:flex">
      <ul className="menu menu-horizontal px-1 mx-1">
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link
              href={link.href}
              className="font-main font-medium text-[15px] transition-all duration-300 hover:scale-110 hover:text-main-main px-3"
            >
              {t(`navLinks.${link.label}`)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavLinks;
