import * as yup from "yup";
import { useTranslations } from "next-intl";

export const useContactUsValidation = () => {
  const t = useTranslations("contact.formValidation");
  const validationSchema = yup.object().shape({
    name: yup.string().required(t("name.required")),
    email: yup.string().required(t("email.required")).email(t("email.invalid")),
    phoneNumber: yup.string().required(t("phoneNumber.required")),
    message: yup.string().required(t("message.required")),
  });
  return validationSchema;
};
