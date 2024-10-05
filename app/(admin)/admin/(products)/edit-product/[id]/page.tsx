import EditcategoryForm from "../ui/EditProductForm";
import { QueryClient } from "@tanstack/react-query";
import { getProduct } from "../getProduct";
const page = async ({ params }: { params: { id: string } }) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["productDetails"],
    queryFn: () => getProduct(params.id),
  });
  return (
    <div>
      <EditcategoryForm id={params.id} />
    </div>
  );
};

export default page;
