import { IProduct } from "@/types/types";
import Image from "next/image";

const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <div className="card bg-base-100 shadow-xl w-full">
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
  );
};

export default ProductCard;
