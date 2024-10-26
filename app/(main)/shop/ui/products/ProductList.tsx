import React from "react";
import { IProduct } from "@/types/types";
import ProductCard from "@/components/product-card/ProductCard";
interface ProductListProps {
  data: IProduct[];
}

const ProductList: React.FC<ProductListProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((product: IProduct) => (
        <div key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
