import { Field, ErrorMessage } from "formik";
import { useState } from "react";
import SwapLockPassword from "./SwapLockPassword";

interface InputProps {
  name: string;
  placeholder: string;
  disabled?: boolean;
}

const PasswordInput = ({ name, placeholder, disabled }: InputProps) => {
  const [type, setType] = useState<"password" | "text">("password");

  return (
    <div>
      <div className="relative">
        <Field
          id={name}
          name={name}
          type={type}
          disabled={disabled}
          className="input input-bordered w-full pt-3 pb-2 px-3 peer pr-10"
          placeholder=" "
        />
        <div className="absolute inset-y-0 ltr:right-0 rtl:left-7 flex items-center pr-3">
          <SwapLockPassword setType={setType} />
        </div>
        <label
          htmlFor={name}
          className={`absolute text-sm duration-300 font-[400] capitalize
          z-10 origin-[0] bg-white text-gray-500 px-1 top-3 ltr:left-3 rtl:right-1
          peer-focus:-top-3 peer-focus:scale-75 peer-focus:text-main-main 
          peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:text-main-main
          peer-autofill:-top-3 peer-autofill:scale-75 peer-autofill:text-main-main
          peer-read-only:-top-3 peer-read-only:bg-transparent peer-read-only:scale-75
        `}
        >
          {placeholder}
        </label>
      </div>

      <ErrorMessage
        name={name}
        component="div"
        className="text-red-600 text-sm mt-1"
      />
    </div>
  );
};

export default PasswordInput;
