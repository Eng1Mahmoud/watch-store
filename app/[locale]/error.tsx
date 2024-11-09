"use client";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
export default function Error() {
  const t = useTranslations("error");
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 dark:bg-dark-bgSection">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 md:px-20 text-center">
        <h1 className="text-xl md:text-6xl font-bolder dark:text-dark-text">
          {t("title")}
        </h1>
        <p className="mt-3 text-lg md:text-2xl dark:text-dark-text">
          {t("description")}
        </p>
        <Link
          href="/"
          className="btn btn-primary mt-4 dark:bg-dark-text dark:text-dark-bgSection"
        >
          {t("goBack")}
        </Link>
      </main>
    </div>
  );
}
