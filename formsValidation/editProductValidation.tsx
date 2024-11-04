import { useTranslations } from "next-intl";
import * as yup from "yup";
export const useEditProductValidation = () => {
  const t = useTranslations("editProduct");

  const validationSchema = yup.object().shape({
    name: yup.string().required(t("formValidation.name.required")),
    price: yup
      .number()
      .required(t("formValidation.price.required"))
      .min(0, t("formValidation.price.min")),
    description: yup
      .string()
      .required(t("formValidation.description.required")),
    categories: yup
      .array()
      .of(yup.string())
      .min(1, t("formValidation.categories.min"))
      .required(t("formValidation.categories.required")),
    image_url: yup.string().required(t("formValidation.image.required")),
    quantity: yup
      .number()
      .required(t("formValidation.quantity.required"))
      .min(1, t("formValidation.quantity.min")),
  });
  return validationSchema;
};
