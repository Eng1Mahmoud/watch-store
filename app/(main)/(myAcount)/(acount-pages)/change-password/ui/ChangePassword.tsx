"use client";
import BaseForm from "@/components/formik/BaseForm";
import { changePasswordSchema } from "@/formsValidation/validation";
import { useSaveUserData } from "../hooks/saveUserData";
import PasswordInput from "@/components/formik/PasswordInput";
const ChangePassword = () => {
  const initialValues = {
    old_password: "",
    new_password: "",
  };
  const { onSubmit, loading } = useSaveUserData();
  return (
    <div className="shadow-custom p-4 rounded-md my-5 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold my-4 text-center text-main-main">
        Change Password
      </h1>
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
  );
};

export default ChangePassword;
