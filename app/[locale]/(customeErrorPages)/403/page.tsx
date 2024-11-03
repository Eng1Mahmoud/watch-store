import { NextPage } from "next";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
const ForbiddenPage: NextPage = () => {
  const t = useTranslations("forbidden");
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 md:px-20 text-center">
        <h1 className=" text-2xl md:text-5xl font-bold">{t("title")}</h1>
        <p className="mt-3 text-lg md:text-2xl">{t("description")}</p>
        <Link href="/" className=" btn btn-primary mt-4">
          {t("goBack")}
        </Link>
      </main>
    </div>
  );
};

export default ForbiddenPage;
