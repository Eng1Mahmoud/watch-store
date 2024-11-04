import * as yup from "yup";
import { useTranslations } from "next-intl";
export const useAddressValidation = () => {
  const t = useTranslations("my-address.formValidation");
  const validationSchema = yup.object().shape({
    country: yup.string().required(t("country.required")),
    city: yup.string().required(t("city.required")),
    street: yup.string().required(t("street.required")),
    zipcode: yup.string().required(t("zipcode.required")),
  });
  return validationSchema;
};
