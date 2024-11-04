"use client";
import BaseForm from "@/components/formik/BaseForm";
import FormInputs from "./ui/FormInput";
import { useLogin } from "./hooks/uselogin";
import SubmitButton from "@/components/formik/SubmitButton";
import { useTranslations } from "next-intl";
import { useLoginValidation } from "@/formsValidation/loginValidation";
const Login = () => {
  const validationSchema = useLoginValidation();
  const t = useTranslations("login");
  const { onSubmit, loading } = useLogin();
  return (
    <BaseForm
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <div className="container max-w-[600px]   ">
        <div className="box-shadow">
          <FormInputs />
          <SubmitButton
            loading={loading}
            text={t("submit")}
            position="center"
          />
        </div>
      </div>
    </BaseForm>
  );
};

export default Login;
