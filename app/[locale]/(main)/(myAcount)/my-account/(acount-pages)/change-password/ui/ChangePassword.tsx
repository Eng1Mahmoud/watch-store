"use client";
import BaseForm from "@/components/formik/BaseForm";
import { useChangePasswordValidation } from "@/formsValidation/changePasswordValidation";
import { useSavePassword } from "../hooks/SavePassword";
import PasswordInput from "@/components/formik/PasswordInput";
import Image from "next/image";
import changePassword from "@/public/assets/profile/change-password.png";
import { useTranslations } from "next-intl";
import SubmitButton from "@/components/formik/SubmitButton";
const ChangePassword = () => {
  const t = useTranslations("changePassword");
  const changePasswordSchema = useChangePasswordValidation();
  const initialValues = {
    old_password: "",
    new_password: "",
  };
  const { onSubmit, loading } = useSavePassword();
  return (
    <div className="container max-w-screen-lg mx-auto my-10">
      <h1 className="text-2xl font-bold my-4 text-center text-main-main mb-10">
        {t("title")}
      </h1>
      <div className="flex  gap-10">
        <div className="shadow-custom rounded-md my-5 w-full md:w-1/2 content-center p-5">
          <div className="content-center">
            <BaseForm
              initialValues={initialValues}
              validationSchema={changePasswordSchema}
              onSubmit={onSubmit}
            >
              <div className="flex flex-col gap-7">
                <PasswordInput
                  name="old_password"
                  placeholder={t("formLabels.oldPassword")}
                />
                <PasswordInput
                  name="new_password"
                  placeholder={t("formLabels.newPassword")}
                />
                <SubmitButton
                  loading={loading}
                  text={t("submitButton")}
                  position="center"
                />
              </div>
            </BaseForm>
          </div>
        </div>
        <div className=" hidden md:flex img-container w-1/2 justify-end items-center">
          <Image
            src={changePassword}
            alt="change-password"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
