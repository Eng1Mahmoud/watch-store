import * as yup from "yup";
import { useTranslations } from "next-intl";
export const useChangePasswordValidation = () => {
  const t = useTranslations("changePassword.formValidation");
  const validationSchema = yup.object().shape({
    old_password: yup.string().required(t("oldPassword.required")),
    new_password: yup
      .string()
      .required(t("newPassword.required"))
      .min(8)
      .max(20)
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
        t("password.invalid"),
      ),
  });
  return validationSchema;
};
