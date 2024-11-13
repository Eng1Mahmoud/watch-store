import ProductDetails from "./ui/ProductDetails";
import { getProduct } from "@/actions/getProduct";
import Breadcrumbs from "@/components/Breadcrumbs";
import { QueryClient } from "@tanstack/react-query";
import RelatedProducts from "./ui/related-products/RelatedProducts";
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
      <div className="container flex flex-col gap-10 py-10">
        <ProductDetails id={params.id} />
        <RelatedProducts />
      </div>
    </div>
  );
};

export default page;
