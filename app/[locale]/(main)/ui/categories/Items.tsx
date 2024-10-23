"use client";
import { ICategory } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import { axiosClientInstance } from "@/axios/axiosClientInstance";
import CategoryCard from "@/components/CategoryCard";
const Items = () => {
  const { data } = useQuery({
    queryKey: ["categories-home"],
    queryFn: async () => {
      const response = await axiosClientInstance(
        `/categories?page=${1}&limit=${20}`,
      );
      return response.data;
    },
  });

  const categories = data?.data.categories;
  return (
    <>
      {categories?.map((item: ICategory, index: number) => (
        <CategoryCard item={item} index={index} key={item.id} />
      ))}
    </>
  );
};

export default Items;
