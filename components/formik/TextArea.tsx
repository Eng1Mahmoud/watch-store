import { Field, ErrorMessage } from "formik";
interface InputProps {
  name: string;
  placeholder: string;
}
const TextArea = ({ name, placeholder }: InputProps) => {
  return (
    <div className="h-full">
      <Field
        as="textarea"
        name={name}
        placeholder={placeholder}
        type="text"
        className="textarea textarea-bordered textarea-lg w-full h-full"
      />
      <ErrorMessage name={name} component="div" className="text-red-600" />
    </div>
  );
};

export default TextArea;
