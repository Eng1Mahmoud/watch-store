"use client";
import { Link } from "@/i18n/routing";
import { useAppSelector } from "@/redux/hooks";
import { useTranslations } from "next-intl";
const AuthLinks = () => {
  const t = useTranslations();
  const isLoging = useAppSelector((state) => state.user.login);
  return !isLoging ? (
    <div className="flex gap-2 items-center  ">
      {/*create amizing ui for links login & signup */}
      <Link href="/login" className="dark:text-dark-text">
        {t("navLinks.login")}
      </Link>
      {/* add a divider */}
      <div className="bg-gray-500 divider-horizontal w-[2px] h-[15px]  m-0 p-0" />
      <Link href="/signup" className="dark:text-dark-text">
        {t("navLinks.signup")}
      </Link>
    </div>
  ) : null;
};

export default AuthLinks;
