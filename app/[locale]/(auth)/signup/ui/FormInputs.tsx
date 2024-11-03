import Input from "@/components/formik/Input";
import PasswordInput from "@/components/formik/PasswordInput";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
const FormInputs = () => {
  const t = useTranslations("signUp");
  return (
    <>
      <h1 className="text-2xl font-bold text-center text-main-main mb-8">
        {t("title")}
      </h1>
      <div className="flex flex-col gap-5">
        <Input
          name="username"
          placeholder={t("formLabels.username")}
          type="text"
        />
        <Input name="email" placeholder={t("formLabels.email")} type="email" />
        <PasswordInput name="password" placeholder={t("formLabels.password")} />
        <div className="flex justify-start capitalize text-main-main">
          <Link href="/login" className="text-main-main font-bold pl-1">
            {t("links.have_account")}
          </Link>
        </div>
      </div>
    </>
  );
};

export default FormInputs;
