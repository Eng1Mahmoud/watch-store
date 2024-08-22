"use client";
import Input from "@/components/formik/Input";
import TextArea from "@/components/formik/TextArea";
const FormInputs = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pb-4">
        <div className="flex flex-col gap-3">
          <Input name="name" placeholder="Name" type="text" />
          <Input name="email" placeholder="Email" type="email" />
          <Input name="phoneNumber" placeholder="Phone" type="text" />
        </div>
        <div className="flex flex-col gap-3">
          <TextArea name="message" placeholder="Message" />
        </div>
      </div>
      <button
        type="submit"
        className="btn btn-primary w-fit mt-8 block m-auto px-10 "
      >
        Submit
      </button>
    </div>
  );
};

export default FormInputs;
