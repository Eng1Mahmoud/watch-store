"use client";
import React, { useCallback, useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { apiRequest } from "@/apiRequests/fetch";
import { getTokenClient } from "@/utils/getTokenClient";
import Image from "next/image";

interface Column {
  key: string;
  label: string;
}

interface Action {
  label: string;
  onClick: (item: any) => void;
}

interface BaseTableProps {
  columns: Column[];
  endpoint: string;
  actions?: Action[];
  itemsPerPage?: number;
  dataName?: string;
  key?: string;
  query?: string;
}

const BaseTable: React.FC<BaseTableProps> = ({
  columns,
  endpoint,
  actions,
  itemsPerPage = 10,
  dataName = "data",
  query = "",
}) => {
  const observer = useRef<IntersectionObserver | null>(null);
  const fetchTableData = async ({ pageParam = 1 }: any) => {
    const res: any = await apiRequest({
      endpoint,
      method: "GET",
      params: {
        page: pageParam.toString(),
        limit: itemsPerPage.toString(),
        query: query.toString(),
      },
      token: getTokenClient(),
    });
    return res.data[dataName];
  };

  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: [dataName],
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
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                className="px-6 py-3 text-center font-medium text-gray-500 capitalize w-fit whitespace-nowrap"
              >
                {column.label}
              </th>
            ))}
            {actions &&
              actions.map((action, actionIndex) => (
                <th
                  key={actionIndex}
                  scope="col"
                  className=" px-6 py-3 text-gray-500 capitalize font-medium whitespace-nowrap text-center"
                >
                  <span>{action.label}</span>
                </th>
              ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data?.pages.map((page, pageIndex) =>
            page.map((item: any, index: number) => (
              <tr
                key={index}
                ref={
                  pageIndex === data.pages.length - 1 &&
                  index === page.length - 1
                    ? lastItemRef
                    : null
                }
              >
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className="px-6 text-center py-4 whitespace-nowrap"
                  >
                    {column.key === "cover_url" ? (
                      <div className="flex justify-center">
                        <Image
                          src={item[column.key]}
                          alt={item.name}
                          width={50}
                          height={50}
                          className="w-10 h-10 object-cover rounded-full"
                        />
                      </div>
                    ) : (
                      item[column.key] || "__"
                    )}
                  </td>
                ))}
                {actions &&
                  actions.map((action, actionIndex) => (
                    <td
                      key={actionIndex}
                      className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center"
                    >
                      <button
                        onClick={() => action.onClick(item)}
                        className="text-main-main hover:text-indigo-900 ml-4"
                      >
                        {action.label}
                      </button>
                    </td>
                  ))}
              </tr>
            )),
          )}
        </tbody>
      </table>
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

export default BaseTable;
