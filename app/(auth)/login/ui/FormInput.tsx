import Input from "@/components/formik/Input";
import PasswordInput from "@/components/formik/PasswordInput";
import Link from "next/link";
import React from "react";

const FormInputs = () => {
  return (
    <div className="container max-w-[600px] my-[100px]  ">
      <div className="box-shadow">
        <h1 className="text-2xl font-bold text-center text-main-main mb-8">
          Login
        </h1>
        <div className="flex flex-col gap-5">
          <Input name="email" placeholder="Email" type="email" />
          <PasswordInput name="password" placeholder="Password" />
          <div className="flex justify-start">
            <Link href="/" className="text-main-main font-bold">
              Forgot password?
            </Link>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="btn btn-primary w-fit px-10">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormInputs;
