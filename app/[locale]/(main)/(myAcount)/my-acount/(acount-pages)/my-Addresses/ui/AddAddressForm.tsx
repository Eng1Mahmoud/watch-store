"use client";
import BaseForm from "@/components/formik/BaseForm";
import { addAddressSchema } from "@/formsValidation/validation";
import { useSaveAddresses } from "../hooks/SaveAddresses";
import Input from "@/components/formik/Input";
const AddAddressForm = () => {
  const initialValues = {
    country: "",
    city: "",
    state: "",
    street: "",
    zipcode: "",
  };
  const { onSubmit, loading } = useSaveAddresses();
  return (
    <div className="shadow-custom p-4 rounded-md max-w-5xl mx-auto">
      <BaseForm
        initialValues={initialValues}
        validationSchema={addAddressSchema}
        onSubmit={onSubmit}
      >
        <div className="flex flex-col gap-7">
          <Input name="country" placeholder="Country" type="text" />
          <Input name="city" placeholder="City" type="text" />
          <Input name="state" placeholder="State" type="text" />
          <Input name="street" placeholder="Street" type="text" />
          <Input name="zipcode" placeholder="Zipcode" type="text" />
          <button
            type="submit"
            className="btn btn-primary w-fit mx-auto capitalize"
          >
            {loading ? "Loading..." : "Add Address"}
          </button>
        </div>
      </BaseForm>
    </div>
  );
};

export default AddAddressForm;
