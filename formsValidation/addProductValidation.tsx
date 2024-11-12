import { useTranslations } from "next-intl";
import * as yup from "yup";
export const useAddProductValidation = () => {
  const t = useTranslations("add-products");

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
    translations: yup.object({
      name: yup.object().shape({
        en: yup
          .string()
          .required(t("formValidation.translations.name.enRequired")),
        ar: yup
          .string()
          .required(t("formValidation.translations.description.arRequired")),
      }),
      description: yup.object().shape({
        en: yup
          .string()
          .required(t("formValidation.translations.description.enRequired")),
        ar: yup
          .string()
          .required(t("formValidation.translations.description.arRequired")),
      }),
    }),
  });
  return validationSchema;
};
