import { IProduct } from "@/types/types";
import Image from "next/image";
import { MdFavoriteBorder } from "react-icons/md";
import { BsCart4 } from "react-icons/bs";
import { useProductCardActions } from "./hooks/actions";
import { useProductActions } from "@/hooks/productActions";
import ShareButtons from "../ShareButtons";
const ProductCard = ({ product }: { product: IProduct }) => {
  const { addProductToCart } = useProductActions();
  const { goToProductPage } = useProductCardActions();
  return (
    <div className="card bg-base-100  w-full  boder border-gray-200 border-[1px]">
      <div className="absolute top-1 right-1">
        <ShareButtons title={product.name} />
      </div>
      <figure
        className="h-32 cursor-pointer"
        onClick={() => goToProductPage(product?.id)}
      >
        <Image
          width={500}
          height={500}
          src={product.image_url}
          alt={product.name + " image"}
          className="w-full h-full object-cover block"
        />
      </figure>
      <div className="card-body p-3 ">
        <h2 className="card-title">{product.name}</h2>
        <p className="text-sm text-gray-500 text-ellipsis line-clamp-2 overflow-hidden">
          {product.description}
        </p>
        <p className="text-sm text-gray-500 text-ellipsis line-clamp-2 overflow-hidden font-bold">
          ${product.price}
        </p>
        <div className="card-actions ">
          {/** action add favorit and add to cart use icons in top */}
          <div className="flex items-center gap-3">
            <MdFavoriteBorder
              className=" text-main-main cursor-pointer "
              size={25}
            />
            <BsCart4
              className=" text- cursor-pointer"
              size={25}
              onClick={() => addProductToCart(product)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
