import { getUser } from "@/actions/getUser";
const AddressList = async () => {
  const { data }: any = await getUser();
  return (
    <div>
      <div className="flex flex-col gap-4">
        {data?.userData?.addresses?.map((address: any) => (
          <div key={address?._id} className="shadow-custom p-4 rounded-md">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-main-main">
                {address?.country}
              </h3>

              <p>{address?.city}</p>
              <p>{address?.state}</p>
              <p>{address?.street}</p>
              <p>{address?.zipcode}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddressList;
