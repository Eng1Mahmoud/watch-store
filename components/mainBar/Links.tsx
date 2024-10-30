"use client";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
export const Links = () => {
  const t = useTranslations();
  return (
    <div>
      <Link href="/faqs">{t("navLinks.faq")}</Link>
    </div>
  );
};
