import EditcategoryForm from "../ui/EditProductForm";
import { QueryClient } from "@tanstack/react-query";
import { getProduct } from "@/actions/getProduct";
const page = async ({ params }: { params: { id: string } }) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["productDetails", params.id],
    queryFn: () => getProduct(params.id),
  });
  return (
    <div>
      <EditcategoryForm id={params.id} />
    </div>
  );
};

export default page;
