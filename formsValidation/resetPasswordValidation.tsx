import * as yup from "yup";
import { useTranslations } from "next-intl";
export const useResetPasswordValidation = () => {
  const t = useTranslations("resetPassword.formValidation");
  const validationSchema = yup.object().shape({
    password: yup
      .string()
      .required(t("password.required"))
      .min(8)
      .max(20)
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
        t("password.invalid"),
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], t("confirmPassword.invalid")),
  });
  return validationSchema;
};
