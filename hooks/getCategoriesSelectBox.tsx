import { useInfiniteQuery } from "@tanstack/react-query";
import { axiosClientInstance } from "@/axios/axiosClientInstance";
import { useEffect } from "react";
export const useGetCategoriesSelectBox = () => {
  const fetchCategories = async ({ pageParam = 1 }) => {
    const response = await axiosClientInstance.get(
      `/categories?page=${pageParam}&limit=20`,
    );
    return response.data;
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["categories-selectBox"],
      queryFn: fetchCategories,
      getNextPageParam: (lastPage) =>
        lastPage.currentPage < lastPage.totalPages
          ? lastPage.currentPage + 1
          : undefined,
      initialPageParam: 1,
    });

  // Automatically fetch next page if available
  useEffect(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  // Combine all categories from all pages

  const allCategories =
    data?.pages.flatMap((page) => page?.data?.categories) || [];

  return {
    categories: allCategories,
  };
};
