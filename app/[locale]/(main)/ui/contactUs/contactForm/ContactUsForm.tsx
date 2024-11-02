"use client";
import BaseForm from "@/components/formik/BaseForm";
import { useContactUsValidation } from "@/formsValidation/contactUsValidation";
import { useContactUs } from "../hooks/useContactUs";
import FormInputs from "./FormInputs";
const ContactUsForm = () => {
  const validationSchema = useContactUsValidation();
  const { onSubmit } = useContactUs();

  return (
    <div>
      <BaseForm
        initialValues={{ name: "", phoneNumber: "", email: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <FormInputs />
      </BaseForm>
    </div>
  );
};

export default ContactUsForm;
