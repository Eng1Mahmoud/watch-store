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
          ${isActive ? "-top-3 scale-75 text-main-main" : "scale-100 text-gray-500"}
          z-10 origin-[0] bg-white px-1  top-3 left-3`}
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
