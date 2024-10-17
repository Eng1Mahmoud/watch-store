"use client";
import BaseForm from "@/components/formik/BaseForm";
import { changePasswordSchema } from "@/formsValidation/validation";
import { useSavePassword } from "../hooks/SavePassword";
import PasswordInput from "@/components/formik/PasswordInput";
import Image from "next/image";
import changePassword from "@/public/assets/profile/change-password.png";
const ChangePassword = () => {
  const initialValues = {
    old_password: "",
    new_password: "",
  };
  const { onSubmit, loading } = useSavePassword();
  return (
    <div className="container max-w-screen-lg mx-auto my-10">
      <h1 className="text-2xl font-bold my-4 text-center text-main-main mb-10">
        Change Password
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
                <PasswordInput name="old_password" placeholder="old password" />
                <PasswordInput name="new_password" placeholder="new password" />
                <button
                  type="submit"
                  className="btn btn-primary w-fit mx-auto capitalize"
                >
                  {loading ? "Loading..." : "save new password"}
                </button>
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
