"use client";
import React from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { axiosClientInstance } from "@/axios/axiosClientInstance";
import InfiniteScroll from "react-infinite-scroll-component";

interface InfinityScrollProps {
  DisplayComponent: React.ComponentType<any>;
  endpoint: string;
  params?: Record<string, string | undefined>;
  LoadingComponent: React.ComponentType<any>;
  itemsPerPage?: number;
  dataKey: string;
}

const InfinityScrollComponent: React.FC<InfinityScrollProps> = ({
  DisplayComponent,
  endpoint,
  params = {},
  LoadingComponent,
  itemsPerPage = 20,
  dataKey,
}) => {
  const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: [dataKey, params],
    queryFn: async ({ pageParam = 1 }) => {
      const response = await axiosClientInstance.get(endpoint, {
        params: {
          ...params,
          page: pageParam,
          limit: itemsPerPage,
        },
      });
      return response.data;
    },
    getNextPageParam: (lastPage, allPages) =>
      lastPage && lastPage[dataKey] && lastPage[dataKey].length === itemsPerPage
        ? allPages.length + 1
        : undefined,
    initialPageParam: 1,
  });

  if (isLoading) {
    return <LoadingComponent count={itemsPerPage} />;
  }

  const items = data?.pages.flatMap((page) => page.data[dataKey]) || [];

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<LoadingComponent count={itemsPerPage} />}
      endMessage={
        items.length > 0 ? (
          <div className="text-center pt-10 text-main-main font-medium">
            You have reached the end of the list
          </div>
        ) : null
      }
    >
      <DisplayComponent data={items} />
      {items.length === 0 && !isLoading && (
        <div className="text-center pt-10 text-main-main font-medium">
          No data found
        </div>
      )}
    </InfiniteScroll>
  );
};

export default InfinityScrollComponent;
