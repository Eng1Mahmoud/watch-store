"use client";
import { axiosClientInstance } from "@/axios/axiosClientInstance";
import { useQuery } from "@tanstack/react-query";

const AddressList = () => {
  const { data } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await axiosClientInstance.get("/users/current");
      return response.data;
    },
  });
  const userData = data?.data?.userData;
  return (
    <div>
      {userData?.addresses?.length > 0 ? (
        <>
          <h2 className="text-xl font-semibold mb-4 text-main-main">
            My Addresses
          </h2>
          <div className="flex flex-col gap-4  py-4">
            {userData?.addresses?.map((address: any, index: number) => (
              <div key={address?.id} className="shadow-custom p-4 rounded-md">
                {/*add number address */}
                <p className="text-sm text-gray-500">Address {index + 1}</p>
                <div className="divider"></div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-main-main">
                    {address?.country}
                  </h3>
                  <p>City: {address?.city}</p>
                  <p>State: {address?.state}</p>
                  <p>Street: {address?.street}</p>
                  <p>Zipcode: {address?.zipcode}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center text-lg font-semibold text-main-main">
          <p>No addresses found yet</p>
          <p>Add your first address</p>
        </div>
      )}
    </div>
  );
};

export default AddressList;
