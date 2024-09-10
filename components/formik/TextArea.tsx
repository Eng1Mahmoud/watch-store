import { Field, ErrorMessage, useField } from "formik";
import { useState, useEffect } from "react";

interface InputProps {
  name: string;
  placeholder: string;
  disabled?: boolean;
}

const TextArea = ({ name, placeholder, disabled }: InputProps) => {
  const [field] = useField(name);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(field.value !== "");
  }, [field.value]);

  return (
    <div className="relative h-full">
      <Field
        as="textarea"
        id={name}
        name={name}
        disabled={disabled}
        className="textarea textarea-bordered textarea-lg w-full h-full pt-5 pb-2 px-3 peer"
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

export default TextArea;
