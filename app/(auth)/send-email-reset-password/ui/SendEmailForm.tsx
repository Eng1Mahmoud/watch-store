import BaseForm from "@/components/formik/BaseForm";
import Input from "@/components/formik/Input";
import React from "react";
import { sendEmailSchema } from "@/formsValidation/validation";
import { useSendEmail } from "../hooks/useSendEmail";

const SendEmailForm = () => {
  const { onSubmit } = useSendEmail();
  return (
    <BaseForm
      initialValues={{ password: "", confirmPassword: "" }}
      validationSchema={sendEmailSchema}
      onSubmit={onSubmit}
    >
      <div className="container max-w-[600px] my-[100px]  ">
        <div className="box-shadow">
          <h1 className="text-2xl font-bold text-center text-main-main mb-8">
            Enter Your Email
          </h1>
          <div className="flex flex-col gap-5">
            <Input name="email" placeholder="Email" type="email" />
            <div className="flex justify-center">
              <button type="submit" className="btn btn-primary w-fit px-10">
                Send Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </BaseForm>
  );
};

export default SendEmailForm;
