import Link from "next/link";
import React from "react";
import {
  FiHome,
  FiUsers,
  FiShoppingBag,
  FiClipboard,
  FiFolder,
  FiPlus,
} from "react-icons/fi";

interface MenuProps {
  open: boolean;
  onToggle: () => void;
}

const MenuItem = ({
  href,
  icon,
  text,
  open,
}: {
  href: string;
  icon: React.ReactNode;
  text: string;
  open: boolean;
}) => (
  <li>
    <Link
      href={href}
      className={`flex items-center p-2 ${open ? "justify-start" : "justify-center"}`}
    >
      {icon}
      {open && <span className="ml-3">{text}</span>}
    </Link>
  </li>
);

const Menu: React.FC<MenuProps> = ({ open, onToggle }) => {
  return (
    <ul className="menu p-4 w-full text-base-content">
      <MenuItem
        href="/"
        icon={<FiHome className="h-6 w-6 text-main-main" onClick={onToggle} />}
        text="Home"
        open={open}
      />
      <MenuItem
        href="/admin"
        icon={<FiUsers className="h-6 w-6 text-main-main" onClick={onToggle} />}
        text="Users"
        open={open}
      />
      <li>
        {open ? (
          <details>
            <summary className="flex items-center p-2 justify-start">
              <FiShoppingBag className="h-6 w-6" />
              <span className="ml-3">Products</span>
            </summary>
            <ul>
              <MenuItem
                href="/admin/products/Mens"
                icon={<FiShoppingBag className="h-5 w-5 text-main-main" />}
                text="Men's"
                open={open}
              />
              <MenuItem
                href="/admin/products/Womens"
                icon={<FiShoppingBag className="h-5 w-5 text-main-main" />}
                text="Women's"
                open={open}
              />
              <MenuItem
                href="/admin/products/Kids"
                icon={<FiShoppingBag className="h-5 w-5 text-main-main" />}
                text="Kids"
                open={open}
              />
              <MenuItem
                href="/admin/products/Unisex"
                icon={<FiShoppingBag className="h-5 w-5 text-main-main" />}
                text="Unisex"
                open={open}
              />
            </ul>
          </details>
        ) : (
          <button
            onClick={onToggle}
            className="flex items-center p-2 justify-center w-full"
          >
            <FiShoppingBag className="h-6 w-6 text-main-main" />
          </button>
        )}
      </li>
      <MenuItem
        href="/admin/orders"
        icon={<FiClipboard className="h-6 w-6 text-main-main" />}
        text="Orders"
        open={open}
      />
      <li>
        {open ? (
          <details>
            <summary className="flex items-center p-2 justify-start">
              <FiFolder className="h-6 w-6 text-main-main" />
              <span className="ml-3">Categories</span>
            </summary>
            <ul>
              <MenuItem
                href="/admin/add-categories"
                icon={<FiPlus className="h-5 w-5 text-main-main" />}
                text="Add New Category"
                open={open}
              />
              <MenuItem
                href="/admin/categories"
                icon={<FiFolder className="h-5 w-5 text-main-main" />}
                text="View Categories"
                open={open}
              />
            </ul>
          </details>
        ) : (
          <button
            onClick={onToggle}
            className="flex items-center p-2 justify-center w-full"
          >
            <FiFolder className="h-6 w-6 text-main-main" />
          </button>
        )}
      </li>
      <MenuItem
        href="/admin/add-product"
        icon={<FiPlus className="h-6 w-6 text-main-main" onClick={onToggle} />}
        text="Add Product"
        open={open}
      />
    </ul>
  );
};

export default Menu;
