"use client";
import { useLogout } from "@/utils/logout";
import { useTranslations } from "next-intl";
const Logout = () => {
  const { logout } = useLogout();
  const t = useTranslations("navLinks");
  return (
    <button onClick={logout} className="btn btn-error text-white mt-2">
      {t("logout")}
    </button>
  );
};

export default Logout;
