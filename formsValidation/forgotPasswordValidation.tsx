import * as yup from "yup";
import { useTranslations } from "next-intl";
export const useForgotPasswordValidation = () => {
  const t = useTranslations("forgotPassword.formValidation");
  const validationSchema = yup.object().shape({
    email: yup.string().required(t("email.required")).email(t("email.invalid")),
  });
  return validationSchema;
};
