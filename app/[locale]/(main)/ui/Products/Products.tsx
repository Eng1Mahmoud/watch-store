import ShowAllButton from "./ShowAllButton";
import Slider from "./Slider";
import { getProducts } from "@/actions/getProducts";
import { QueryClient } from "@tanstack/react-query";
const Products = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  return (
    <div className="container py-10" id="products">
      <h1 className="text-2xl font-extrabold text-center text-main-main pb-10">
        Products
      </h1>
      <Slider />
      <ShowAllButton />
    </div>
  );
};

export default Products;
