import { Field, ErrorMessage, useField } from "formik";
import { useState, useEffect } from "react";

interface InputProps {
  name: string;
  placeholder: string;
  type: string;
  disabled?: boolean;
}

const Input = ({ name, placeholder, type, disabled }: InputProps) => {
  const [field] = useField(name);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(field.value !== "");
  }, [field.value]);

  return (
    <div className="relative">
      <Field
        id={name}
        name={name}
        type={type}
        disabled={disabled}
        className="input input-bordered w-full pt-3 pb-2 px-3 peer"
        placeholder=" "
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(field.value !== "")}
      />
      <label
        htmlFor={name}
        className={`absolute text-sm duration-300 transform font-bold capitalize
        ${isActive ? "-translate-y-7 scale-75 text-main-main" : "translate-y-0 scale-100 text-gray-500"}
        top-3 z-10 origin-[0] bg-white px-1
        peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
        peer-focus:scale-75 peer-focus:-translate-y-7 peer-focus:text-main-main
        left-3`}
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

export default Input;
