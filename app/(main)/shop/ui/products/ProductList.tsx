import React, { useCallback, useRef } from "react";
import { IProduct } from "@/types/types";
import { InfiniteData } from "@tanstack/react-query";
import ProductCard from "@/components/product-card/ProductCard";
interface ProductListProps {
  data: InfiniteData<IProduct[]> | undefined;
  hasNextPage: boolean | undefined;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
}

const ProductList: React.FC<ProductListProps> = ({
  data,
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
}) => {
  const observer = useRef<IntersectionObserver | null>(null);

  const lastProductRef = useCallback(
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
      {data?.pages.map((page, pageIndex) =>
        page.map((product: IProduct, productIndex: number) => (
          <div
            key={product.id}
            ref={
              pageIndex === data.pages.length - 1 &&
              productIndex === page.length - 1
                ? lastProductRef
                : undefined
            }
          >
            <ProductCard product={product} />
          </div>
        )),
      )}
    </div>
  );
};

export default ProductList;
