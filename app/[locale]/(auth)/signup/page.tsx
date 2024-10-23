"use client";
import BaseForm from "@/components/formik/BaseForm";
import { registerSchema } from "@/formsValidation/validation";
import { useSignUp } from "./hooks/useSignUp";
import FormInputs from "./ui/FormInputs";
import SubmitButton from "./ui/SubmitButton";
import SuccessSignUp from "./ui/SuccessSignUp";
const SignUp = () => {
  const { onSubmit, loading, success } = useSignUp();
  return (
    <>
      {success ? (
        <SuccessSignUp />
      ) : (
        <BaseForm
          initialValues={{ username: "", email: "", password: "" }}
          validationSchema={registerSchema}
          onSubmit={onSubmit}
        >
          <div className="container max-w-[600px] ">
            <div className="box-shadow">
              <FormInputs />
              <SubmitButton loading={loading} />
            </div>
          </div>
        </BaseForm>
      )}
    </>
  );
};

export default SignUp;
