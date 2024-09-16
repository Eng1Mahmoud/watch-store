"use client";
import BaseForm from "@/components/formik/BaseForm";
import Input from "@/components/formik/Input";
import { productSchema } from "@/formsValidation/validation";
import { IProduct } from "@/types/types";
import { useAddProduct } from "../hooks/addProduct";
import FileInput from "@/components/formik/FileInput";
const initialValues: IProduct = {
  name: "",
  price: 0,
  description: "",
  category: "",
  image: "",
  quantity: 0,
};

const AddProductForm = () => {
  const { onSubmit, loading } = useAddProduct();

  return (
    <BaseForm
      initialValues={initialValues}
      validationSchema={productSchema}
      onSubmit={onSubmit}
    >
      <div className="container  space-y-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
          <div className="flex flex-col gap-5">
            <Input name="name" placeholder="Product Name" type="text" />
            <Input name="price" placeholder="Product Price" type="number" />
            <Input
              name="description"
              placeholder="Product Description"
              type="text"
            />
            <Input name="category" placeholder="Product Category" type="text" />
            <Input
              name="quantity"
              placeholder="Product Quantity"
              type="number"
            />
          </div>
          <div className="">
            <FileInput name="image" folder="products" />
          </div>
        </div>
        <div className="flex justify-center">
          <button type="submit" className="btn btn-primary w-fit px-10 ">
            {loading ? "Loading..." : "Add Product"}
          </button>
        </div>
      </div>
    </BaseForm>
  );
};

export default AddProductForm;
