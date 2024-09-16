"use client";
import BaseForm from "@/components/formik/BaseForm";
import Input from "@/components/formik/Input";
import { profileDetailsSchema } from "@/formsValidation/validation";
import { useSaveUserData } from "../hooks/saveUserData";
const ProfileDetails = ({ user }: { user: any }) => {
  const initialValues = {
    username: user?.username,
    email: user?.email,
    phone: user?.phone || "",
  };
  const { onSubmit, loading } = useSaveUserData();
  return (
    <div className="shadow-custom p-4 rounded-md my-5 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold my-4 text-center text-main-main">
        Profile Details
      </h1>
      <BaseForm
        initialValues={initialValues}
        validationSchema={profileDetailsSchema}
        onSubmit={onSubmit}
      >
        <div className="flex flex-col gap-7">
          <Input name="username" placeholder="username" type="text" />
          <Input
            name="email"
            placeholder="email"
            type="email"
            disabled={true}
          />
          <Input name="phone" placeholder="phone" type="text" />
          <button
            type="submit"
            className="btn btn-primary w-fit mx-auto capitalize"
          >
            {loading ? "Loading..." : "save changes"}
          </button>
        </div>
      </BaseForm>
    </div>
  );
};

export default ProfileDetails;
