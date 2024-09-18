"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
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
  tags?: string[];
  query?: string;
}

const BaseTable: React.FC<BaseTableProps> = ({
  columns,
  endpoint,
  actions,
  itemsPerPage = 10,
  dataName = "data",
  tags,
  query = "",
}) => {
  const [data, setData] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef<IntersectionObserver | null>(null);

  const lastItemRef = useCallback(
    (node: HTMLTableRowElement) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore],
  );

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await apiRequest({
        endpoint,
        method: "GET",
        params: {
          page: page.toString(),
          limit: itemsPerPage.toString(),
          query: query.toString(),
        },
        tags,
        token: getTokenClient(),
      })
        .then((res: any) => {
          console.log(res);
          setData((prevData) => {
            // Only append new data if it's not the first page
            return page === 1
              ? res.data[dataName]
              : [...prevData, ...res.data[dataName]];
          });
          if (res.data[dataName].length < itemsPerPage) {
            setHasMore(false);
          }
        })
        .catch((err) => {})
        .finally(() => {
          setIsLoading(false);
        });
    };

    fetchData();
  }, [endpoint, page, itemsPerPage, dataName, tags, query]);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                className="px-6 py-3 text-center font-medium  text-gray-500 capitalize w-fit  whitespace-nowrap"
              >
                {column.label}
              </th>
            ))}
            {actions &&
              actions.map((action, actionIndex) => (
                <th
                  key={actionIndex}
                  scope="col"
                  className=" px-6 py-3  text-gray-500 capitalize font-medium whitespace-nowrap text-center"
                >
                  <span className="">{action.label}</span>
                </th>
              ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data?.length > 0 &&
            data.map((item: any, index: number) => (
              <tr
                key={index}
                ref={index === data.length - 1 ? lastItemRef : null}
              >
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className="px-6 text-center  py-4 whitespace-nowrap"
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
            ))}
        </tbody>
      </table>
      {isLoading && <div className="text-center py-4">Loading more...</div>}
      {!hasMore && data.length > 0 && (
        <div className="text-center py-4 text-gray-500">
          No more data to load
        </div>
      )}

      {data.length === 0 && (
        <div className="text-center py-4 text-gray-500">
          there is no data to display until now
        </div>
      )}
    </div>
  );
};

export default BaseTable;
