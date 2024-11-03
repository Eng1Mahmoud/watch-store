"use client";
import BaseForm from "@/components/formik/BaseForm";
import Input from "@/components/formik/Input";
import { useForgotPasswordValidation } from "@/formsValidation/forgotPasswordValidation";
import { useSendEmail } from "../hooks/useSendEmail";
import SuccessSend from "./SuccessSend";
import { useTranslations } from "next-intl";
import SubmitButton from "@/components/formik/SubmitButton";
const SendEmailForm = () => {
  const t = useTranslations("forgotPassword");
  const { onSubmit, loading, successSend } = useSendEmail();
  const validationSchema = useForgotPasswordValidation();
  return (
    <div>
      {successSend ? (
        <SuccessSend />
      ) : (
        <BaseForm
          initialValues={{ email: "" }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <div className="container max-w-[600px] h-screen content-center">
            <div className="box-shadow">
              <h1 className="text-2xl font-bold text-center text-main-main mb-8">
                {t("title")}
              </h1>
              <div className="flex flex-col gap-5">
                <Input
                  name="email"
                  placeholder={t("formLabels.email")}
                  type="email"
                />
                <div className="flex justify-center">
                  <SubmitButton
                    loading={loading}
                    text={t("submit")}
                    position="center"
                  />
                </div>
              </div>
            </div>
          </div>
        </BaseForm>
      )}
    </div>
  );
};

export default SendEmailForm;
