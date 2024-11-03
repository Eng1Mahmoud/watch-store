import * as yup from "yup";
import { useTranslations } from "next-intl";
export const useLoginValidation = () => {
  const t = useTranslations("login.formValidation");
  const validationSchema = yup.object().shape({
    email: yup.string().required(t("email.required")).email(t("email.invalid")),
    password: yup
      .string()
      .required(t("password.required"))
      .min(8)
      .max(20)
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,20}$/,
        t("password.invalid"),
      ),
  });
  return validationSchema;
};
