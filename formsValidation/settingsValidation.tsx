import { useTranslations } from "next-intl";
import * as yup from "yup";
export const useSettingsValidation = () => {
  const t = useTranslations("settings");

  const validationSchema = yup.object().shape({
    taxs: yup.string().required(t("formValidation.taxs.required")),
  });
  return validationSchema;
};
