import React, { useCallback, useRef } from "react";
import { ICategory } from "@/types/types";
import { InfiniteData } from "@tanstack/react-query";
import CategoryCard from "@/components/CategoryCard";
interface CategoriesListProps {
  data: InfiniteData<ICategory[]> | undefined;
  hasNextPage: boolean | undefined;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
}

const CategoriesList: React.FC<CategoriesListProps> = ({
  data,
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
}) => {
  console.log(data);
  const observer = useRef<IntersectionObserver | null>(null);

  const lastCategoryRef = useCallback(
    (node: HTMLDivElement) => {
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data?.pages.map((page: any, pageIndex: number) =>
        page?.data?.categories.map(
          (category: ICategory, categoryIndex: number) => (
            <div
              key={category.id}
              ref={
                pageIndex === data.pages.length - 1 &&
                categoryIndex === page.length - 1
                  ? lastCategoryRef
                  : undefined
              }
            >
              <CategoryCard item={category} index={categoryIndex} />
            </div>
          ),
        ),
      )}
    </div>
  );
};

export default CategoriesList;
