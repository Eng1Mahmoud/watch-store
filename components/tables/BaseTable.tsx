"use client";
import React, { useCallback, useRef } from "react";
import { InfiniteData } from "@tanstack/react-query";
import Image from "next/image";

interface Column {
  key: string;
  label: string;
}

interface Action {
  label: string;
  onClick: (item: any) => void;
}

interface ITableProps {
  data: InfiniteData<any[]> | undefined;
  hasNextPage: boolean | undefined;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
  columns: Column[];
  actions?: Action[];
}

const BaseTable: React.FC<ITableProps> = ({
  data,
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
  columns,
  actions,
}) => {
  const observer = useRef<IntersectionObserver | null>(null);

  const lastItemRef = useCallback(
    (node: HTMLTableRowElement) => {
      if (isFetchingNextPage) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });
      if (node) observer.current.observe(node);
    },
    [isFetchingNextPage, hasNextPage, fetchNextPage],
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
                    ) : Array.isArray(item[column.key]) ? (
                      // If the value is an array, loop through it and display each item
                      <div>
                        {item[column.key].map((value: any, index: number) => (
                          <span key={index} className="mr-1">
                            {value}
                            {index < item[column.key].length - 1 && " - "}
                          </span>
                        ))}
                      </div>
                    ) : (
                      // If it's not an array, display it normally
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
    </div>
  );
};

export default BaseTable;
