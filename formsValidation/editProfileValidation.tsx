import * as yup from "yup";
import { useTranslations } from "next-intl";
export const useEditProfileValidation = () => {
  const t = useTranslations("profile-details.formValidation");
  const validationSchema = yup.object().shape({
    username: yup.string().required(t("username.required")),
    email: yup.string().required(t("email.required")).email(t("email.invalid")),
    phone: yup.string().required(t("phone.required")),
  });
  return validationSchema;
};
