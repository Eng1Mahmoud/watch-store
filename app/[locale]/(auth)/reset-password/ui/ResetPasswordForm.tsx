"use client";
import BaseForm from "@/components/formik/BaseForm";
import { useResetPasswordValidation } from "@/formsValidation/resetPasswordValidation";
import { useResetPassword } from "../hooks/useResetPassword";
import PasswordInput from "@/components/formik/PasswordInput";
import { useTranslations } from "next-intl";
import SubmitButton from "@/components/formik/SubmitButton";
const ResetPasswordForm = ({ token }: { token: string }) => {
  const t = useTranslations("resetPassword");
  const validationSchema = useResetPasswordValidation();
  const { onSubmit, loading } = useResetPassword(token);
  return (
    <BaseForm
      initialValues={{ password: "", confirmPassword: "" }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <div className="container max-w-[600px] my-[100px]  ">
        <div className="box-shadow">
          <h1 className="text-2xl font-bold text-center text-main-main mb-8">
            {t("title")}
          </h1>
          <div className="flex flex-col gap-5">
            <PasswordInput
              name="password"
              placeholder={t("formLabel.password")}
            />
            <PasswordInput
              name="confirmPassword"
              placeholder={t("formLabel.confirmPassword")}
            />
            <SubmitButton
              loading={loading}
              text={t("submit")}
              position="center"
            />
          </div>
        </div>
      </div>
    </BaseForm>
  );
};

export default ResetPasswordForm;
