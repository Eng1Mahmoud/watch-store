import { Field, ErrorMessage } from "formik";
interface InputProps {
  name: string;
  placeholder: string;
  type: string;
}
const Input = ({ name, placeholder, type }: InputProps) => {
  return (
    <div>
      <Field
        name={name}
        placeholder={placeholder}
        type={type}
        className="input input-bordered w-full "
      />
      <ErrorMessage name={name} component="div" className="text-red-600" />
    </div>
  );
};

export default Input;
