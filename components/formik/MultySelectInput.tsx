import { ErrorMessage, useField } from "formik";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
const MultiSelectInput = ({
  name,
  placeholder,
  options,
  ...props
}: {
  name: string;
  placeholder: string;
  options: Array<{
    label: string;
    value: string;
  }>;
  disabled?: boolean;
}) => {
  const t = useTranslations("formik");
  const [field, meta, helpers] = useField(name);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleOptionClick = (optionValue: string) => {
    const currentValues = field.value || [];
    const newValues = currentValues.includes(optionValue)
      ? currentValues.filter((v: string) => v !== optionValue)
      : [...currentValues, optionValue];
    helpers.setValue(newValues);
  };

  return (
    <div className="relative w-full max-w-xl z-[1000] dark:text-dark-text ">
      <div className="form-control">
        <label className="label">
          <span className="label-text dark:text-dark-text">{placeholder}</span>
        </label>
        <div className="dropdown w-full dark:bg-dark-bgSection rounded-box">
          <div
            tabIndex={0}
            className="input input-bordered flex items-center justify-between cursor-pointer dark:bg-dark-bgSection dark:text-dark-text "
            onClick={handleToggle}
          >
            <span className="truncate">
              {field.value && field.value.length > 0
                ? `${field.value.length} ${t("multySelect.selected")}`
                : t("multySelect.selectLabel")}
            </span>
            <svg
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {isOpen && (
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-full h-auto overflow-auto  dark:bg-dark-bgSection"
            >
              {options.map((option) => (
                <li
                  key={option.value}
                  onClick={() => handleOptionClick(option.value)}
                >
                  <label className="label cursor-pointer justify-start dark:text-dark-text">
                    <input
                      type="checkbox"
                      checked={field.value?.includes(option.value)}
                      className="checkbox-main  mr-2  dark:text-dark-text"
                      readOnly
                    />
                    <span className="label-text dark:text-dark-text">
                      {option.label}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <ErrorMessage
        name={name}
        component="div"
        className="text-error text-sm mt-1"
      />
    </div>
  );
};

export default MultiSelectInput;
