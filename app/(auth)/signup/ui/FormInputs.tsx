import Input from "@/components/formik/Input";
import PasswordInput from "@/components/formik/PasswordInput";
import Link from "next/link";
import React from "react";

const FormInputs = () => {
  return (
    <div className="container max-w-[600px] my-[100px]">
      <div className="box-shadow">
        <h1 className="text-2xl font-bold text-center text-main-main mb-8">
          Register
        </h1>
        <div className="flex flex-col gap-5">
          <Input name="username" placeholder="Username" type="text" />
          <Input name="email" placeholder="Email" type="email" />
          <PasswordInput name="password" placeholder="Password" />
          <div className="flex justify-start">
            do you have an account?
            <Link href="/login" className="text-main-main font-bold pl-1">
              Login
            </Link>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="btn btn-primary w-fit px-10 font-bold"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormInputs;
