"use client";
import BaseForm from "@/components/formik/BaseForm";
import { useEditUserValidation } from "@/formsValidation/editUserValidation";
import { useEditUser } from "../hooks/EditUser";
import Input from "@/components/formik/Input";
import FileInput from "@/components/formik/FileInput";
import { IUser } from "@/types/types";
import SelectInput from "@/components/formik/SelectInput";
import { useQuery } from "@tanstack/react-query";
import { axiosClientInstance } from "@/axios/axiosClientInstance";
import { useTranslations } from "next-intl";
import SubmitButton from "@/components/formik/SubmitButton";
const EditUserForm = ({ id }: { id: string }) => {
  const t = useTranslations("editUser");
  const validationSchema = useEditUserValidation();
  const { data } = useQuery({
    queryKey: ["userDetails", id],
    queryFn: async () => {
      const response = await axiosClientInstance.get(`/users/${id}`);
      return response.data;
    },
  });
  const user = data?.data.userData;
  const { onSubmit, loading } = useEditUser({ id: user?.id });
  const initialValues: IUser = {
    username: user?.username || "",
    email: user?.email || "",
    role: user?.role || "",
    avatar_url: user?.avatar_url || "",
    cover_url: user?.cover_url || "",
    phone: user?.phone || "",
  };
  return (
    <BaseForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <div className="container  space-y-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-5">
            <Input
              name="username"
              placeholder={t("formLabels.username")}
              type="text"
            />
            <Input
              name="email"
              placeholder={t("formLabels.email")}
              type="email"
            />
            <SelectInput
              name="role"
              placeholder={t("formLabels.role")}
              options={[
                { label: "Admin", value: "admin" },
                { label: "User", value: "user" },
              ]}
            />
            <Input
              name="phone"
              placeholder={t("formLabels.phone")}
              type="text"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <div>
                <p className="text-sm text-main-main font-main font-bold pb-3">
                  {t("formLabels.avatar")}
                </p>
                <FileInput
                  name="avatar_url"
                  folder="users"
                  label={t("formLabels.avatar")}
                />
              </div>
              <div>
                <p className="text-sm text-main-main font-main font-bold py-3">
                  {t("formLabels.cover")}
                </p>
                <FileInput
                  name="cover_url"
                  folder="users"
                  label={t("formLabels.cover")}
                />
              </div>
            </div>
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

export default EditUserForm;
