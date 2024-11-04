"use client";
import { useTranslations } from "next-intl";
const LoadingScreenContent = () => {
  const t = useTranslations("verifyEmail");
  return (
    <div className="flex flex-col justify-center h-[200px]">
      <div className="flex justify-center">
        <span className="loading loading-dots loading-lg"></span>
      </div>
      <h2 className="text-center">{t("loading")}</h2>
    </div>
  );
};

export default LoadingScreenContent;
