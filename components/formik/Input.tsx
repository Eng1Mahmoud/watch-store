import { Field, ErrorMessage } from "formik";
interface InputProps {
  name: string;
  placeholder: string;
  type: string;
  disabled?: boolean;
}

const Input = ({ name, placeholder, type, disabled }: InputProps) => {
  return (
    <div className="relative">
      <Field
        id={name}
        name={name}
        type={type}
        disabled={disabled}
        className="input input-bordered w-full pt-3 pb-2 px-3 peer"
        placeholder=" "
      />
      <label
        htmlFor={name}
        className={`absolute text-sm duration-300  font-bold capitalize
          z-1 origin-[0] bg-white text-gray-500 px-1 top-3 left-3
          peer-focus:-top-3 peer-focus:scale-75peer-focus:text-main-main 
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

export default Input;
