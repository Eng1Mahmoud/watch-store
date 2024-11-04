import { useTranslations } from "next-intl";
import * as yup from "yup";
export const useEditUserValidation = () => {
  const t = useTranslations("editUser");

  const validationSchema = yup.object().shape({
    username: yup.string().required(t("formValidation.name.required")),
    email: yup.string().required(t("formValidation.email.required")),
    role: yup.string().required(t("formValidation.role.required")),
  });
  return validationSchema;
};
