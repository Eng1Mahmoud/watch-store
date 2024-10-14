"use client";
import { useInfiniteQuery } from "@tanstack/react-query";
import { axiosClientInstance } from "@/axios/axiosClientInstance";

interface InfiniteScrollProps {
  DisplayComponent: React.ComponentType<any>;
  endpoint: string;
  params?: Record<string, string | undefined>;
  LoadingComponent: React.ComponentType<any>; // Remove optional
  itemsPerPage?: number;
  dataKey: string;
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  DisplayComponent,
  endpoint,
  params = {},
  LoadingComponent,
  itemsPerPage = 20,
  dataKey,
}) => {
  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: [dataKey, endpoint, params],
      queryFn: async ({ pageParam = 1 }) => {
        const response = await axiosClientInstance.get(endpoint, {
          params: {
            ...params,
            page: pageParam,
            limit: itemsPerPage,
          },
        });
        return response.data; // Return the whole response data
      },
      getNextPageParam: (lastPage, allPages) =>
        lastPage && lastPage[dataKey]?.length === itemsPerPage
          ? allPages.length + 1
          : undefined,
      initialPageParam: 1,
    });

  if (isLoading) {
    return <LoadingComponent count={itemsPerPage} />;
  }

  return (
    <div className="px-5">
      <DisplayComponent
        data={data}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
        fetchNextPage={fetchNextPage}
      />
      {isFetchingNextPage && <LoadingComponent count={itemsPerPage} />}
    </div>
  );
};

export default InfiniteScroll;
