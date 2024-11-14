import { IProduct } from "@/types/types";
import Image from "next/image";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { BsCart4 } from "react-icons/bs";
import {
  useProductCardActions,
  useProductWishlistActions,
} from "./hooks/actions";
import ShareButtons from "../ShareButtons";
import { useCart } from "@/utils/cart";
const ProductCard = ({
  product,
  forWishlist,
}: {
  product: IProduct;
  forWishlist?: boolean;
}) => {
  const { addProductToCart } = useCart();
  const { goToProductPage } = useProductCardActions();
  const { addProductToWishlist, removeProductFromWishlist } =
    useProductWishlistActions();
  return (
    <div
      className="card bg-base-100  w-full  boder border-gray-200 border-[1px] dark:border-dark-sectionText dark:shadow-dark bg-white
     dark:bg-dark-bgSection"
    >
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
          className="w-full h-full object-cover block rounded-tr-lg rounded-tl-lg"
        />
      </figure>
      <div className="card-body p-3 ">
        <h2 className="card-title text-main-main dark:text-dark-text">
          {product.name}
        </h2>
        <p className="text-sm text-gray-500 dark:text-dark-text text-ellipsis line-clamp-2 overflow-hidden">
          {product.description}
        </p>
        <p className="text-sm text-gray-500 dark:text-dark-text text-ellipsis line-clamp-2 overflow-hidden font-bold">
          ${product.price}
        </p>
        <div className="card-actions ">
          {/** action add favorit and add to cart use icons in top */}
          <div className="flex items-center gap-3">
            {product?.is_wishlisted || forWishlist ? (
              <MdFavorite
                className=" text-main-main cursor-pointer "
                size={25}
                onClick={() => removeProductFromWishlist(product.id)}
              />
            ) : (
              <MdFavoriteBorder
                className=" text-main-main cursor-pointer dark:text-dark-text"
                size={25}
                onClick={() => addProductToWishlist(product.id)}
              />
            )}
            <BsCart4
              className=" text-main-main cursor-pointer dark:text-dark-text"
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
