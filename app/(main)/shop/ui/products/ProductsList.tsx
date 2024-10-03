"use client";
import React, { useCallback, useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import Image from "next/image";
import { axiosClientInstance } from "@/axios/axiosClientInstance";

const ProductsList: React.FC = ({}) => {
  let itemsPerPage = 20;
  const observer = useRef<IntersectionObserver | null>(null);
  const fetchTableData = async ({ pageParam = 1 }: any) => {
    const response = await axiosClientInstance.get("/products", {
      params: {
        page: pageParam.toString(),
        limit: 20,
      },
    });
    return response.data?.data?.products;
  };

  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["products"],
      queryFn: fetchTableData,
      getNextPageParam: (lastPage, allPages) =>
        lastPage.length === itemsPerPage ? allPages.length + 1 : undefined,
      initialPageParam: 1,
    });
  const lastItemRef = useCallback(
    (node: HTMLTableRowElement) => {
      if (isLoading || isFetchingNextPage) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, isFetchingNextPage, hasNextPage, fetchNextPage],
  );

  return (
    <div>
      {isFetchingNextPage && (
        <div className="text-center py-4">Loading more...</div>
      )}
      {!hasNextPage && data?.pages?.[0]?.length > 0 && (
        <div className="text-center py-4 text-gray-500">
          No more data to load
        </div>
      )}
      {data?.pages?.[0]?.length === 0 && (
        <div className="text-center py-4 text-gray-500">
          There is no data to display until now
        </div>
      )}
    </div>
  );
};

export default ProductsList;
