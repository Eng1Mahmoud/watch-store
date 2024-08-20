"use client";
import { Field, ErrorMessage } from "formik";
import { useState } from "react";
import SwapLockPassword from "./SwapLockPassword";
interface InputProps {
  name: string;
  placeholder: string;
}
type PasswordType = "password" | "text";
const PasswordInput = ({ name, placeholder }: InputProps) => {
  const [type, setType] = useState<PasswordType>("password");
  return (
    <div>
      <div className="relative">
        <Field
          name={name}
          placeholder={placeholder}
          type={type}
          className="input input-bordered w-full "
        />
        <SwapLockPassword setType={setType} />
      </div>
      <ErrorMessage name={name} component="div" className="text-red-600" />
    </div>
  );
};

export default PasswordInput;
