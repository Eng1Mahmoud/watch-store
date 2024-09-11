import Link from "next/link";
// Array of link data
export const navLinks = [
  { href: "/", label: "Home", id: 1 },
  { href: "/#about", label: "About", id: 2 },
  { href: "/#categories", label: "Categories", id: 3 },
  { href: "/#products", label: "Products", id: 4 },
  { href: "/#brands", label: "Brands", id: 5 },
  { href: "/#gallery", label: "Gallery", id: 6 },
  { href: "/#testimonials", label: "Testimonials", id: 7 },
  { href: "/#contact", label: "Contact Us", id: 8 },
];

const NavLinks = () => {
  return (
    <div className="hidden md:flex">
      <ul className="menu menu-horizontal px-1 mx-1">
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link
              href={link.href}
              className="font-main font-medium text-[15px] transition-all duration-300 hover:scale-110 hover:text-main-main px-3"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavLinks;
