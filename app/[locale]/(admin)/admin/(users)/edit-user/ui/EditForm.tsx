"use client";
import BaseForm from "@/components/formik/BaseForm";
import { editUserSchema } from "@/formsValidation/validation";
import { useEditUser } from "../hooks/EditUser";
import Input from "@/components/formik/Input";
import FileInput from "@/components/formik/FileInput";
import { IUser } from "@/types/types";
import SelectInput from "@/components/formik/MultySelectInput";
import { useQuery } from "@tanstack/react-query";
import { axiosClientInstance } from "@/axios/axiosClientInstance";
const EditUserForm = ({ id }: { id: string }) => {
  const { data } = useQuery({
    queryKey: ["userDetails"],
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
      validationSchema={editUserSchema}
      onSubmit={onSubmit}
    >
      <div className="container  space-y-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-5">
            <Input name="username" placeholder="Username" type="text" />
            <Input name="email" placeholder="Email" type="email" />
            <SelectInput
              name="role"
              placeholder="Role"
              options={[
                { label: "Admin", value: "admin" },
                { label: "User", value: "user" },
              ]}
            />
            <Input name="phone" placeholder="Phone" type="text" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <div>
                <span className="text-sm text-main-main font-main font-bold">
                  Avatar image
                </span>
                <FileInput
                  name="avatar_url"
                  folder="users"
                  label="Avatar image"
                />
              </div>
              <div>
                <span className="text-sm text-main-main font-main font-bold">
                  Cover image
                </span>
                <FileInput
                  name="cover_url"
                  folder="users"
                  label="Cover image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="btn btn-primary w-fit px-10 py-2 mx-auto"
          >
            {loading ? "Loading..." : "Edit User"}
          </button>
        </div>
      </div>
    </BaseForm>
  );
};

export default EditUserForm;
