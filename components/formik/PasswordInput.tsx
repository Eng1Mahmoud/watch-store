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
          className="input input-bordered w-full pt-3 pb-2 px-3 peer ltr:pr-10 rtl:pl-10 dark:bg-dark-bg dark:border-dark-border dark:text-dark-text dark:shadow-dark"
          placeholder=" "
        />
        <div className="absolute inset-y-0 ltr:right-0 rtl:left-7 flex items-center pr-3">
          <SwapLockPassword setType={setType} />
        </div>
        <label
          htmlFor={name}
          className={`absolute text-md duration-300 font-[400] capitalize
            z-1 origin-[0] bg-white dark:bg-dark-bg  dark:text-dark-text text-gray-500 px-1 top-3 ltr:left-3 rtl:right-1
            peer-focus:-top-3 peer-focus:scale-75 peer-focus:text-main-main dark:peer-focus:text-dark-text
            peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:text-main-main dark:peer-[:not(:placeholder-shown)]:text-dark-text
            peer-autofill:-top-3 peer-autofill:scale-75 peer-autofill:text-main-main dark:peer-autofill:text-dark-text
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
