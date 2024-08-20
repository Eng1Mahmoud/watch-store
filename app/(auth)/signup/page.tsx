"use client";
import BaseForm from "@/components/formik/BaseForm";
import { registerSchema } from "@/formsValidation/validation";
import { useSignUp } from "./hooks/useSignUp";
import FormInputs from "./ui/FormInputs";
const SignUp = () => {
  const { onSubmit } = useSignUp();
  return (
    <BaseForm
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={registerSchema}
      onSubmit={onSubmit}
    >
      <FormInputs />
    </BaseForm>
  );
};

export default SignUp;
