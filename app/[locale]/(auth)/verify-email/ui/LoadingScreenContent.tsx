"use client";
import { useTranslations } from "next-intl";
const LoadingScreenContent = () => {
  const t = useTranslations("verifyEmail");
  return (
    <div className="flex flex-col justify-center h-[200px] dark:text-dark-text dark:bg-dark-bgSection">
      <div className="flex justify-center dark:bg-dark-bgSection">
        <span className="loading loading-dots loading-lg"></span>
      </div>
      <h2 className="text-center">{t("loading")}</h2>
    </div>
  );
};

export default LoadingScreenContent;
