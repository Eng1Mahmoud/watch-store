import Logout from "./Logout";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const AvatarMenu = () => {
  const t = useTranslations("navLinks");
  return (
    <ul
      tabIndex={0}
      className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[3000000000000000000] mt-3 w-52 p-2 shadow-custom dark:bg-dark-bgSection dark:shadow-dark"
    >
      <li>
        <Link
          href="/my-account"
          className="justify-between dark:text-dark-text"
        >
          {t("myAccount")}
        </Link>
      </li>

      <li>
        <Logout />
      </li>
    </ul>
  );
};

export default AvatarMenu;
