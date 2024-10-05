"use client";
import BaseForm from "@/components/formik/BaseForm";
import Input from "@/components/formik/Input";
import { productSchema } from "@/formsValidation/validation";
import { ICategory, IProduct } from "@/types/types";
import { useAddProduct } from "../hooks/addProduct";
import FileInput from "@/components/formik/FileInput";
import MultiCheckboxInput from "@/components/formik/MultySelectInput";
import { useGetCategoriesSelectBox } from "@/hooks/getCategoriesSelectBox";
import TextArea from "@/components/formik/TextArea";
const initialValues: IProduct = {
  name: "",
  price: 0,
  description: "",
  category_ids: [],
  image_url: "",
  quantity: 0,
};

const AddProductForm = () => {
  const { onSubmit, loading } = useAddProduct();
  const { categories } = useGetCategoriesSelectBox();
  const categoriesArray: any = categories?.map((category: ICategory) => ({
    label: category.name,
    value: category.id,
  }));
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
            <TextArea name="description" placeholder="Product Description" />
            <Input
              name="quantity"
              placeholder="Product Quantity"
              type="number"
            />
            <MultiCheckboxInput
              name="category_ids"
              placeholder="Category"
              options={categoriesArray}
            />
          </div>
          <div>
            <FileInput name="image_url" folder="products" />
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
