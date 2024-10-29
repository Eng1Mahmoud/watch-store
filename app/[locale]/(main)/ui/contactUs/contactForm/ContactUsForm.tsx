"use client";
import BaseForm from "@/components/formik/BaseForm";
import { contactUsSchema } from "@/formsValidation/validation";
import { useContactUs } from "../hooks/useContactUs";
import FormInputs from "./FormInputs";
const ContactUsForm = () => {
  const { onSubmit } = useContactUs();

  return (
    <div>
      <BaseForm
        initialValues={{ name: "", phoneNumber: "", email: "", message: "" }}
        validationSchema={contactUsSchema}
        onSubmit={onSubmit}
      >
        <FormInputs />
      </BaseForm>
    </div>
  );
};

export default ContactUsForm;
