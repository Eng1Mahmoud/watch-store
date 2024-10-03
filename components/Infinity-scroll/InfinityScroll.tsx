"use client";
import React from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { axiosClientInstance } from "@/axios/axiosClientInstance";

interface InfiniteScrollProps {
  DisplayComponent: React.ComponentType<any>;
  endpoint: string;
  params?: Record<string, string | undefined>;
  LoadingComponent?: React.ComponentType<any>;
  itemsPerPage?: number;
  dataKey: string;
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  DisplayComponent,
  endpoint,
  params = {},
  LoadingComponent = () => <div className="text-center py-4">Loading...</div>,
  itemsPerPage = 20,
  dataKey,
}) => {
  const fetchData = async ({ pageParam = 1 }: { pageParam?: number }) => {
    const response = await axiosClientInstance.get(endpoint, {
      params: {
        ...params,
        page: pageParam,
        limit: itemsPerPage,
      },
    });
    return response.data?.data?.[dataKey]; // Use dataKey here
  };

  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: [endpoint, params, itemsPerPage],
      queryFn: fetchData,
      getNextPageParam: (lastPage, allPages) =>
        lastPage.length === itemsPerPage ? allPages.length + 1 : undefined,
      initialPageParam: 1,
    });

  if (isLoading) {
    return <LoadingComponent />;
  }

  return (
    <div className="px-5">
      <DisplayComponent
        data={data}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
        fetchNextPage={fetchNextPage}
      />
      {isFetchingNextPage && <LoadingComponent />}
      {!hasNextPage && data?.pages[0]?.length > 0 && (
        <div className="text-center py-4 text-gray-500">
          No more items to load
        </div>
      )}
      {data?.pages[0]?.length === 0 && (
        <div className="text-center py-4 text-gray-500">No items available</div>
      )}
    </div>
  );
};

export default InfiniteScroll;
