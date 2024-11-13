"use client";
import { useQuery } from "@tanstack/react-query";
import { axiosClientInstance } from "@/axios/axiosClientInstance";
import ProductSlider from "@/components/product-slider/ProductSlider";
const TopSalesProductsUI = () => {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await axiosClientInstance.get(`/products`, {
        params: {
          page: 1,
          limit: 20,
        },
      });
      return response.data;
    },
  });
  const products = data?.data?.products;

  return <ProductSlider products={products || []} />;
};

export default TopSalesProductsUI;
