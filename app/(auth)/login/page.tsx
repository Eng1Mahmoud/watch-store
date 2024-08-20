"use client";
import BaseForm from "@/components/formik/BaseForm";
import { loginSchema } from "@/formsValidation/validation";
import FormInputs from "./ui/FormInput";
import { useLogin } from "./hooks/uselogin";
const Login = () => {
  const { onSubmit } = useLogin();
  return (
    <BaseForm
      initialValues={{ email: "", password: "" }}
      validationSchema={loginSchema}
      onSubmit={onSubmit}
    >
      <FormInputs />
    </BaseForm>
  );
};

export default Login;
