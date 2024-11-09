import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import {
  FiHome,
  FiUsers,
  FiShoppingBag,
  FiClipboard,
  FiFolder,
  FiPlus,
} from "react-icons/fi";
import { MdDashboard } from "react-icons/md";
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
      href={href as any}
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

const AddMenuItem = ({ open, onToggle }: MenuProps) => {
  const t = useTranslations("adminLayout.menu.add");
  return (
    <li>
      {open ? (
        <details>
          <summary className="flex items-center p-2 justify-start">
            <FiPlus className="h-6 w-6 text-main-main" onClick={onToggle} />
            <span className="ml-3">{t("add")}</span>
          </summary>
          <ul>
            <MenuItem
              href="/Dashboard/add-product"
              icon={<FiShoppingBag className="h-5 w-5 text-main-main" />}
              text={t("product")}
              open={open}
              onToggle={onToggle}
            />
            <MenuItem
              href="/Dashboard/add-category"
              icon={<FiFolder className="h-5 w-5 text-main-main" />}
              text={t("category")}
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
};

const Menu: React.FC<MenuProps> = ({ open, onToggle }) => {
  const t = useTranslations("adminLayout.menu");
  return (
    <ul className="menu p-4 w-full text-base-content">
      <MenuItem
        href="/"
        icon={<FiHome className="h-6 w-6 text-main-main" onClick={onToggle} />}
        text={t("home")}
        open={open}
        onToggle={onToggle}
      />
      <MenuItem
        href="/Dashboard"
        icon={
          <MdDashboard className="h-6 w-6 text-main-main" onClick={onToggle} />
        }
        text={t("dashboard")}
        open={open}
        onToggle={onToggle}
      />
      <MenuItem
        href="/Dashboard/users"
        icon={<FiUsers className="h-6 w-6 text-main-main" onClick={onToggle} />}
        text={t("users")}
        open={open}
        onToggle={onToggle}
      />
      <MenuItem
        href="/Dashboard/products"
        icon={
          <FiShoppingBag
            className="h-6 w-6 text-main-main"
            onClick={onToggle}
          />
        }
        text={t("product")}
        open={open}
        onToggle={onToggle}
      />
      <MenuItem
        href="/Dashboard/orders"
        icon={
          <FiClipboard className="h-6 w-6 text-main-main" onClick={onToggle} />
        }
        text={t("orders")}
        open={open}
        onToggle={onToggle}
      />
      <MenuItem
        href="/Dashboard/categories"
        icon={
          <FiFolder className="h-5 w-5 text-main-main" onClick={onToggle} />
        }
        text={t("category")}
        open={open}
        onToggle={onToggle}
      />
      <AddMenuItem open={open} onToggle={onToggle} />
    </ul>
  );
};

export default Menu;