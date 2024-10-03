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
  onToggle,
}: {
  href: string;
  icon: React.ReactNode;
  text: string;
  open: boolean;
  onToggle: () => void;
}) => (
  <li>
    <Link
      href={href}
      className={`flex items-center p-2 ${open ? "justify-start" : "justify-center"}`}
      onClick={() => {
        onToggle();
      }}
    >
      {icon}
      {open && <span className="ml-3">{text}</span>}
    </Link>
  </li>
);

const ProductsMenuItem = ({ open, onToggle }: MenuProps) => (
  <li>
    {open ? (
      <details>
        <summary className="flex items-center p-2 justify-start">
          <FiShoppingBag
            className="h-6 w-6 text-main-main"
            onClick={onToggle}
          />
          <span className="ml-3">Products</span>
        </summary>
        <ul>
          {["Mens", "Womens", "Kids", "Unisex"].map((category) => (
            <MenuItem
              key={category}
              href={`/admin/products/${category}`}
              icon={<FiShoppingBag className="h-5 w-5 text-main-main" />}
              text={category}
              open={open}
              onToggle={onToggle}
            />
          ))}
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
);

const AddMenuItem = ({ open, onToggle }: MenuProps) => (
  <li>
    {open ? (
      <details>
        <summary className="flex items-center p-2 justify-start">
          <FiPlus className="h-6 w-6 text-main-main" onClick={onToggle} />
          <span className="ml-3">Add</span>
        </summary>
        <ul>
          <MenuItem
            href="/admin/add-product"
            icon={<FiShoppingBag className="h-5 w-5 text-main-main" />}
            text="Product"
            open={open}
            onToggle={onToggle}
          />
          <MenuItem
            href="/admin/add-category"
            icon={<FiFolder className="h-5 w-5 text-main-main" />}
            text="Category"
            open={open}
            onToggle={onToggle}
          />
        </ul>
      </details>
    ) : (
      <button
        onClick={onToggle}
        className="flex items-center p-2 justify-center w-full"
      >
        <FiPlus className="h-6 w-6 text-main-main" />
      </button>
    )}
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
        onToggle={onToggle}
      />
      <MenuItem
        href="/admin/users"
        icon={<FiUsers className="h-6 w-6 text-main-main" onClick={onToggle} />}
        text="Users"
        open={open}
        onToggle={onToggle}
      />
      <ProductsMenuItem open={open} onToggle={onToggle} />
      <MenuItem
        href="/admin/orders"
        icon={
          <FiClipboard className="h-6 w-6 text-main-main" onClick={onToggle} />
        }
        text="Orders"
        open={open}
        onToggle={onToggle}
      />
      <MenuItem
        href="/admin/categories"
        icon={
          <FiFolder className="h-5 w-5 text-main-main" onClick={onToggle} />
        }
        text="Categories"
        open={open}
        onToggle={onToggle}
      />
      <AddMenuItem open={open} onToggle={onToggle} />
    </ul>
  );
};

export default Menu;
