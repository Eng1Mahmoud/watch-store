import { ErrorMessage, useField } from "formik";
import React from "react";

const SelectInput = ({
  name,
  placeholder,
  options,
  isMulti,
  ...props
}: {
  name: string;
  placeholder: string;
  options: Array<{
    label: string;
    value: string;
  }>;
  isMulti?: boolean;
  disabled?: boolean;
}) => {
  const [field, meta, helpers] = useField(name);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(
      event.target.selectedOptions,
      (option) => option.value,
    );
    helpers.setValue(isMulti ? selectedOptions : selectedOptions[0]);
  };

  return (
    <div className="relative">
      <select
        {...field}
        onChange={handleChange}
        multiple={isMulti}
        className={`select select-bordered w-full ${meta.touched && meta.error ? "select-error" : ""}`}
        id={name}
        {...props}
      >
        {!isMulti && <option value="" disabled></option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <label
        htmlFor={name}
        className={`absolute text-sm duration-300 font-[400] capitalize
        z-1 origin-[0] bg-white text-gray-500 px-1 
        ${field.value ? "-top-3 left-3 scale-75 text-main-main" : "top-3 left-3 "}
        peer-focus:-top-3 peer-focus:scale-75 peer-focus:text-main-main 
        peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:text-main-main
        peer-autofill:-top-3 peer-autofill:scale-75 peer-autofill:text-main-main
        peer-read-only:-top-3 peer-read-only:bg-transparent peer-read-only:scale-75
      `}
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

export default SelectInput;
