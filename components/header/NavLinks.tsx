import Link from "next/link";
// Array of link data
export const navLinks = [
  { href: "/", label: "Home", id: 1 },
  { href: "/", label: "About", id: 2 },
  { href: "/", label: "Categories", id: 3 },
  { href: "/", label: "Products", id: 4 },
  { href: "/", label: "Brands", id: 5 },
  { href: "/", label: "GALLERY", id: 6 },
  { href: "/", label: "TESTIMONIALS", id: 7 },
  { href: "/", label: "CONTACT US", id: 8 },
];

const NavLinks = () => {
  return (
    <div className="hidden md:flex">
      <ul className="menu menu-horizontal px-1 mx-1">
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavLinks;
