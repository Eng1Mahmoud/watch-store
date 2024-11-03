import Input from "@/components/formik/Input";
import PasswordInput from "@/components/formik/PasswordInput";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const FormInputs = () => {
  const t = useTranslations("login");
  return (
    <>
      <h1 className="text-2xl font-bold text-center text-main-main mb-8">
        {t("title")}
      </h1>
      <div className="flex flex-col gap-5">
        <Input name="email" placeholder={t("formLabels.email")} type="email" />
        <PasswordInput name="password" placeholder={t("formLabels.password")} />
        <div className="flex flex-col gap-1 justify-start">
          <Link
            href="/forgot-Password"
            className="text-main-main font-bold text-sm capitalize"
          >
            {t("links.forgot_password")}
          </Link>
          <Link
            href="/signup"
            className="text-main-main font-bold text-sm capitalize"
          >
            {t("links.create_account")}
          </Link>
        </div>
      </div>
    </>
  );
};

export default FormInputs;
