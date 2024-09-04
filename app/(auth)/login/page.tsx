"use client";
import BaseForm from "@/components/formik/BaseForm";
import { loginSchema } from "@/formsValidation/validation";
import FormInputs from "./ui/FormInput";
import { useLogin } from "./hooks/uselogin";
import SubmitButton from "./ui/SubmitButton";
const Login = () => {
  const { onSubmit, loading } = useLogin();
  return (
    <BaseForm
      initialValues={{ email: "", password: "" }}
      validationSchema={loginSchema}
      onSubmit={onSubmit}
    >
      <div className="container max-w-[600px] my-[100px]  ">
        <div className="box-shadow">
          <FormInputs />
          <SubmitButton loading={loading} />
        </div>
      </div>
    </BaseForm>
  );
};

export default Login;
