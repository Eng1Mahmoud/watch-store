import React, { useCallback, useRef } from "react";
import Image from "next/image";
import { IProduct } from "@/types/types";
import { InfiniteData } from "@tanstack/react-query";

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
            className="card bg-base-100 shadow-xl w-full"
            key={product.id}
            ref={
              pageIndex === data.pages.length - 1 &&
              productIndex === page.length - 1
                ? lastProductRef
                : undefined
            }
          >
            <figure className="h-32">
              <Image
                width={500}
                height={500}
                src={product.image_url}
                alt={product.name}
                className="w-full h-full object-cover block"
              />
            </figure>
            <div className="card-body p-3">
              <h2 className="card-title">{product.name}</h2>
              <p className="text-sm text-gray-500 text-ellipsis line-clamp-2 overflow-hidden">
                {product.description}
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        )),
      )}
    </div>
  );
};

export default ProductList;
