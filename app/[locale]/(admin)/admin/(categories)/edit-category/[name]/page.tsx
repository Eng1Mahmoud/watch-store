import EditcategoryForm from "../ui/EditForm";
import { getCategory } from "../getCategory";
import { QueryClient } from "@tanstack/react-query";
const page = async ({ params }: { params: { name: string } }) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["categoryDetails"],
    queryFn: () => getCategory(params.name),
  });
  return (
    <div>
      <EditcategoryForm name={params.name} />
    </div>
  );
};

export default page;
