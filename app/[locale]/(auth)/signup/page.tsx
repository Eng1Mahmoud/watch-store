"use client";
import BaseForm from "@/components/formik/BaseForm";
import { useSignUpValidation } from "@/formsValidation/signUpValidation";
import { useSignUp } from "./hooks/useSignUp";
import FormInputs from "./ui/FormInputs";
import SubmitButton from "@/components/formik/SubmitButton";
import SuccessSignUp from "./ui/SuccessSignUp";
import { useTranslations } from "next-intl";
const SignUp = () => {
  const t = useTranslations("signUp");
  const validationSchema = useSignUpValidation();
  const { onSubmit, loading, success } = useSignUp();
  return (
    <>
      {success ? (
        <SuccessSignUp />
      ) : (
        <BaseForm
          initialValues={{ username: "", email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <div className="container max-w-[600px] ">
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
      )}
    </>
  );
};

export default SignUp;
