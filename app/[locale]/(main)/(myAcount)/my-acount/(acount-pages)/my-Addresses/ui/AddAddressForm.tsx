"use client";
import BaseForm from "@/components/formik/BaseForm";
import { useAddressValidation } from "@/formsValidation/addressValidation";
import { useSaveAddresses } from "../hooks/SaveAddresses";
import Input from "@/components/formik/Input";
import { useTranslations } from "next-intl";
import SubmitButton from "@/components/formik/SubmitButton";
const AddAddressForm = () => {
  const t = useTranslations("my-address");
  const validationSchema = useAddressValidation();
  const initialValues = {
    country: "",
    city: "",
    street: "",
    zipcode: "",
  };
  const { onSubmit, loading } = useSaveAddresses();
  return (
    <div className="shadow-custom p-4 rounded-md max-w-5xl mx-auto">
      <BaseForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <div className="flex flex-col gap-7">
          <Input
            name="country"
            placeholder={t("formLabels.country")}
            type="text"
          />
          <Input name="city" placeholder={t("formLabels.city")} type="text" />
          <Input
            name="street"
            placeholder={t("formLabels.street")}
            type="text"
          />
          <Input
            name="zipcode"
            placeholder={t("formLabels.zipcode")}
            type="text"
          />
          <SubmitButton
            loading={loading}
            text={t("submitButton")}
            position="center"
          />
        </div>
      </BaseForm>
    </div>
  );
};

export default AddAddressForm;
