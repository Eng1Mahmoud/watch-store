"use client";
import BaseForm from "@/components/formik/BaseForm";
import React from "react";
import { forgotPasswordSchema } from "@/formsValidation/validation";
import { useResetPassword } from "../hooks/useResetPassword";
import PasswordInput from "@/components/formik/PasswordInput";
const ResetPasswordForm = () => {
  const { onSubmit } = useResetPassword();
  return (
    <BaseForm
      initialValues={{ password: "", confirmPassword: "" }}
      validationSchema={forgotPasswordSchema}
      onSubmit={onSubmit}
    >
      <div className="container max-w-[600px] my-[100px]  ">
        <div className="box-shadow">
          <h1 className="text-2xl font-bold text-center text-main-main mb-8">
            Reset Password
          </h1>
          <div className="flex flex-col gap-5">
            <PasswordInput name="password" placeholder="Password" />
            <PasswordInput
              name="confirmPassword"
              placeholder="Confirm Password"
            />
            <div className="flex justify-center">
              <button type="submit" className="btn btn-primary w-fit px-10">
                Reset Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </BaseForm>
  );
};

export default ResetPasswordForm;
