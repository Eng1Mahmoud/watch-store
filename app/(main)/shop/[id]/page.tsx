import ProductDetails from "./ui/ProductDetails";
import { getProduct } from "@/actions/getProduct";
import Breadcrumbs from "@/components/Breadcrumbs";
import { QueryClient } from "@tanstack/react-query";
const page = async ({ params }: { params: { id: string } }) => {
  const queryClient = new QueryClient();
  await queryClient.fetchQuery({
    queryKey: ["productDetails", params.id],
    queryFn: () => getProduct(params.id),
  });

  return (
    <div>
      <div className="container">
        <Breadcrumbs />
      </div>
      <ProductDetails id={params.id} />
    </div>
  );
};

export default page;
