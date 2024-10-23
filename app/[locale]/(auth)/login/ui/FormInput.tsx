import Input from "@/components/formik/Input";
import PasswordInput from "@/components/formik/PasswordInput";
import Link from "next/link";
import React from "react";

const FormInputs = () => {
  return (
    <>
      <h1 className="text-2xl font-bold text-center text-main-main mb-8">
        Login
      </h1>
      <div className="flex flex-col gap-5">
        <Input name="email" placeholder="Email" type="email" />
        <PasswordInput name="password" placeholder="Password" />
        <div className="flex flex-col gap-1 justify-start">
          <Link
            href="/forgot-Password"
            className="text-main-main font-bold text-sm capitalize"
          >
            Forgot password?
          </Link>
          <Link
            href="/signup"
            className="text-main-main font-bold text-sm capitalize"
          >
            Don&apos;t have an account?
          </Link>
        </div>
      </div>
    </>
  );
};

export default FormInputs;
