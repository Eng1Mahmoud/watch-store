"use client";
import BaseForm from "@/components/formik/BaseForm";
import Input from "@/components/formik/Input";
import { profileDetailsSchema } from "@/formsValidation/validation";
import { useSaveUserData } from "../hooks/saveUserData";
import { useQuery } from "@tanstack/react-query";
import { axiosClientInstance } from "@/axios/axiosInstance";
import Image from "next/image";
import profileImageUI from "@/public/assets/profile/edit-profile.png";
const ProfileDetails = () => {
  const { data } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await axiosClientInstance.get("/users/current");
      return response.data;
    },
  });
  const userData = data?.data?.userData;
  const initialValues = {
    username: userData?.username || "",
    email: userData?.email || "",
    phone: userData?.phone || "",
  };
  const { onSubmit, loading } = useSaveUserData();
  return (
    <div className="container max-w-screen-lg mx-auto my-10">
      <h1 className="text-2xl font-bold my-4 text-center text-main-main mb-10">
        Profile Details
      </h1>
      <div className="flex gap-10">
        <div className="shadow-custom rounded-md my-5 w-full md:w-1/2 content-center p-5">
          <div className="content-center">
            <BaseForm
              initialValues={initialValues}
              validationSchema={profileDetailsSchema}
              onSubmit={onSubmit}
            >
              <div className="flex flex-col gap-7">
                <Input name="username" placeholder="username" type="text" />
                <Input
                  name="email"
                  placeholder="email"
                  type="email"
                  disabled={true}
                />
                <Input name="phone" placeholder="phone" type="text" />
                <button
                  type="submit"
                  className="btn btn-primary w-fit mx-auto capitalize"
                >
                  {loading ? "Loading..." : "save changes"}
                </button>
              </div>
            </BaseForm>
          </div>
        </div>
        <div className="hidden md:flex img-container w-1/2 justify-end items-center">
          <Image
            src={profileImageUI}
            alt="profile-details"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
