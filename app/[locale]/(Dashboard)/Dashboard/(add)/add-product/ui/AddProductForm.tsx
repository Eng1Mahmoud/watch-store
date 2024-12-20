"use client";
import BaseForm from "@/components/formik/BaseForm";
import Input from "@/components/formik/Input";
import { useAddProductValidation } from "@/formsValidation/addProductValidation";
import { ICategory, IProduct } from "@/types/types";
import { useAddProduct } from "../hooks/addProduct";
import FileInput from "@/components/formik/FileInput";
import MultiCheckboxInput from "@/components/formik/MultySelectInput";
import { useGetCategoriesSelectBox } from "@/hooks/getCategoriesSelectBox";
import TextArea from "@/components/formik/TextArea";
import { useTranslations } from "next-intl";
import SubmitButton from "@/components/formik/SubmitButton";
const initialValues: IProduct = {
  name: "",
  price: 0,
  description: "",
  categories: [],
  image_url: "",
  quantity: 0,
};

const AddProductForm = () => {
  const validationSchema = useAddProductValidation();
  const t = useTranslations("add-products");
  const { onSubmit, loading } = useAddProduct();
  const { categories } = useGetCategoriesSelectBox();
  const categoriesArray: any = categories?.map((category: ICategory) => ({
    label: category.name,
    value: category.name,
  }));
  return (
    <BaseForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <div className="container  space-y-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
          <div className="flex flex-col gap-5">
            <Input name="name" placeholder={t("formLabels.name")} type="text" />
            <Input
              name="price"
              placeholder={t("formLabels.price")}
              type="number"
            />
            <TextArea
              name="description"
              placeholder={t("formLabels.description")}
            />
            <Input
              name="quantity"
              placeholder={t("formLabels.quantity")}
              type="number"
            />
            <MultiCheckboxInput
              name="categories"
              placeholder={t("formLabels.categories")}
              options={categoriesArray}
            />
          </div>
          <div>
            <FileInput name="image_url" folder="products" />
          </div>
        </div>
        <SubmitButton
          loading={loading}
          text={t("submitButton")}
          position="center"
        />
      </div>
    </BaseForm>
  );
};

export default AddProductForm;
