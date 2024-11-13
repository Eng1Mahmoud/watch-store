import ShowAllButton from "./ShowAllButton";
import { getProducts } from "@/actions/getProducts";
import { QueryClient } from "@tanstack/react-query";
import { getTranslations } from "next-intl/server";
import ProductsUI from "./ProductsUI";
const Products = async () => {
  const t = await getTranslations("products-home");
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return (
    <div className="container py-10" id="products">
      <h1 className="text-2xl font-extrabold text-center text-main-main pb-10 dark:text-dark-text">
        {t("title")}
      </h1>
      <ProductsUI />
      <ShowAllButton />
    </div>
  );
};

export default Products;
