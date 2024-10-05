"use client";
import BaseForm from "@/components/formik/BaseForm";
import { productSchema } from "@/formsValidation/validation";
import { useEditProduct } from "../hooks/useEditProduct";
import Input from "@/components/formik/Input";
import FileInput from "@/components/formik/FileInput";
import { useQuery } from "@tanstack/react-query";
import { axiosClientInstance } from "@/axios/axiosClientInstance";
import { IProduct } from "@/types/types";
import MultiSelectInput from "@/components/formik/MultySelectInput";
import { useGetCategoriesSelectBox } from "@/hooks/getCategoriesSelectBox";
const EditcategoryForm = ({ id }: { id: string }) => {
  const { categories } = useGetCategoriesSelectBox();
  const { onSubmit, loading } = useEditProduct({ id });
  const { data } = useQuery({
    queryKey: ["productDetails"],
    queryFn: async () => {
      const response = await axiosClientInstance.get(`/products/${id}`);
      return response.data;
    },
  });
  const product = data?.data.product;
  console.log(product);
  const initialValues: IProduct = {
    name: product?.name || "",
    description: product?.description || "",
    price: product?.price || "",
    quantity: product?.quantity || "",
    category_ids: product?.categories || [],
    image_url: product?.image_url || "",
  };
  console.log(initialValues);
  return (
    <BaseForm
      initialValues={initialValues}
      validationSchema={productSchema}
      onSubmit={onSubmit}
    >
      <div className="container  space-y-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-2">
          <div className="flex flex-col gap-5">
            <Input name="name" placeholder="Product Name" type="text" />
            <Input
              name="description"
              placeholder="Product Description"
              type="text"
            />
            <Input name="price" placeholder="Product Price" type="number" />
            <Input
              name="quantity"
              placeholder="Product Quantity"
              type="number"
            />
            <MultiSelectInput
              name="category_ids"
              placeholder="Product Categories"
              options={categories.map((category) => ({
                label: category.name,
                value: category.id,
              }))}
            />
          </div>
          <div>
            <FileInput name="image_url" folder="products" />
          </div>
        </div>
        <div className="flex justify-center">
          <button type="submit" className="btn btn-primary w-[200px]">
            {loading ? "Loading..." : "Edit Product"}
          </button>
        </div>
      </div>
    </BaseForm>
  );
};

export default EditcategoryForm;
