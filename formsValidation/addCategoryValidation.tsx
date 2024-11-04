import { useTranslations } from "next-intl";
import * as yup from "yup";
export const useAddCategoryValidation = () => {
  const t = useTranslations("addCategory");

  const validationSchema = yup.object().shape({
    name: yup.string().required(t("formValidation.name.required")),
    cover_url: yup.string().required(t("formValidation.cover_url.required")),
  });
  return validationSchema;
};
