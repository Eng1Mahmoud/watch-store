"use client";
import BaseForm from "@/components/formik/BaseForm";
import { categorySchema } from "@/formsValidation/validation";
import { useEditCategory } from "../hooks/EditCategory";
import Input from "@/components/formik/Input";
import FileInput from "@/components/formik/FileInput";
import { ICategory } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import { axiosClientInstance } from "@/axios/axiosClientInstance";
const EditcategoryForm = ({ name }: { name: string }) => {
  const { data } = useQuery({
    queryKey: ["categoryDetails"],
    queryFn: async () => {
      const response = await axiosClientInstance.get(
        `/categories/${name}?type=name`,
      );
      return response.data;
    },
  });
  const category = data?.data.category;
  const { onSubmit, loading } = useEditCategory({
    oldCategoryName: category?.name,
  });
  const initialValues: ICategory = {
    name: category?.name || "",
    cover_url: category?.cover_url || "",
  };
  return (
    <BaseForm
      initialValues={initialValues}
      validationSchema={categorySchema}
      onSubmit={onSubmit}
    >
      <div className="container max-w-[600px] space-y-6 py-10">
        <Input name="name" placeholder="Category Name" type="text" />
        <FileInput name="cover_url" folder="categories" />
        <button type="submit" className="btn btn-primary w-full">
          {loading ? "Loading..." : "Edit Category"}
        </button>
      </div>
    </BaseForm>
  );
};

export default EditcategoryForm;
