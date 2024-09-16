import { Field, ErrorMessage, useField } from "formik";
import { useState, useEffect } from "react";
import SwapLockPassword from "./SwapLockPassword";

interface InputProps {
  name: string;
  placeholder: string;
  disabled?: boolean;
}

const PasswordInput = ({ name, placeholder, disabled }: InputProps) => {
  const [field] = useField(name);
  const [isActive, setIsActive] = useState(false);
  const [type, setType] = useState<"password" | "text">("password");

  useEffect(() => {
    setIsActive(field.value !== "");
  }, [field.value]);

  return (
    <div className="relative">
      <div className="relative">
        <Field
          id={name}
          name={name}
          type={type}
          disabled={disabled}
          className="input input-bordered w-full pt-3 pb-2 px-3 peer pr-10"
          placeholder=" "
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(field.value !== "")}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <SwapLockPassword setType={setType} />
        </div>
      </div>
      <label
        htmlFor={name}
        className={`absolute text-sm duration-300 transform font-bold capitalize
        ${isActive ? " scale-75 text-main-main  -top-3 " : "scale-100 text-gray-500 "}
          z-10 origin-[0] bg-white px-1 left-3 top-3`}
      >
        {placeholder}
      </label>
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-600 text-sm mt-1"
      />
    </div>
  );
};

export default PasswordInput;
