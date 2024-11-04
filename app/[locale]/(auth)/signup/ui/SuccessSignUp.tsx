import { useTranslations } from "next-intl";

const SuccessSignUp = () => {
  const t = useTranslations("signUp.success");
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-1">
      <h1 className="text-2xl font-bold text-main-main ">{t("title")}</h1>
      <p className="text-sm text-gray-500">{t("message1")}</p>
      <p className="text-sm text-gray-500">{t("message2")}</p>
    </div>
  );
};

export default SuccessSignUp;
