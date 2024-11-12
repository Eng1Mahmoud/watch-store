"use client";
import BaseForm from "@/components/formik/BaseForm";
import { useEditProductValidation } from "@/formsValidation/editProductValidation";
import { useEditProduct } from "../hooks/useEditProduct";
import Input from "@/components/formik/Input";
import FileInput from "@/components/formik/FileInput";
import { useQuery } from "@tanstack/react-query";
import { axiosClientInstance } from "@/axios/axiosClientInstance";
import { IProduct } from "@/types/types";
import MultiSelectInput from "@/components/formik/MultySelectInput";
import { useGetCategoriesSelectBox } from "@/hooks/getCategoriesSelectBox";
import TextArea from "@/components/formik/TextArea";
import { useTranslations } from "next-intl";
import SubmitButton from "@/components/formik/SubmitButton";
import { langs } from "@/utils/translationLang";
import TranslationFields from "@/components/formik/TranslationFields";
const EditcategoryForm = ({ id }: { id: string }) => {
  const t = useTranslations("editProduct");
  // translation fields
  const translationFields = [
    {
      name: "name",
      label: t("formLabels.nameTranslation"),
    },
    {
      name: "description",
      label: t("formLabels.descriptionTranslation"),
    },
  ];
  const { categories } = useGetCategoriesSelectBox();
  const validationSchema = useEditProductValidation();
  const { onSubmit, loading } = useEditProduct({ id });
  const { data } = useQuery({
    queryKey: ["productDetails", id],
    queryFn: async () => {
      const response = await axiosClientInstance.get(`/products/${id}`);
      return response.data;
    },
  });
  const product = data?.data.product;
  const initialValues: IProduct = {
    name: product?.name || "",
    description: product?.description || "",
    price: product?.price || "",
    quantity: product?.quantity || "",
    categories: product?.categories || [],
    image_url: product?.image_url || "",
    translations: {
      name: langs.reduce(
        (acc, lang) => ({
          ...acc,
          [lang.value]: product?.translations?.name[lang.value] || "",
        }),
        {},
      ),
      description: langs.reduce(
        (acc, lang) => ({
          ...acc,
          [lang.value]: product?.translations?.description[lang.value] || "",
        }),
        {},
      ),
    },
  };
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
            <TextArea
              name="description"
              placeholder={t("formLabels.description")}
            />
            <Input
              name="price"
              placeholder={t("formLabels.price")}
              type="number"
            />
            <Input
              name="quantity"
              placeholder={t("formLabels.quantity")}
              type="number"
            />
            <MultiSelectInput
              name="categories"
              placeholder={t("formLabels.categories")}
              options={categories.map((category) => ({
                label: category.name,
                value: category.name,
              }))}
            />
          </div>
          <div className="flex flex-col gap-5">
            <FileInput name="image_url" folder="products" />
            <TranslationFields
              fieldName="translations"
              fields={translationFields}
            />
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

export default EditcategoryForm;
