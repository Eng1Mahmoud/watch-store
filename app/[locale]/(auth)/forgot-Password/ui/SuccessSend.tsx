import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
const SuccessSend = () => {
  const t = useTranslations("forgotPassword");
  return (
    <div className="container h-screen flex items-center justify-center ">
      <div className="text-center">
        <h2 className="text-2xl  text-center text-main-main mb-2">
          {t("success.send")}
        </h2>
        <h3 className="text-center text-main-main">{t("success.message")}</h3>
        {/**back to home */}
        <Link href="/" className="btn btn-primary w-fit px-20 mt-10">
          {t("success.backToHome")}
        </Link>
      </div>
    </div>
  );
};

export default SuccessSend;
