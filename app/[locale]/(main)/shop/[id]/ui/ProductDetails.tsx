"use client";
import { axiosClientInstance } from "@/axios/axiosClientInstance";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { BsCart4 } from "react-icons/bs";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import ShareButtons from "@/components/ShareButtons";
import { useProductWishlistActions } from "@/components/product-card/hooks/actions";
import { useCart } from "@/utils/cart";
import { useTranslations } from "next-intl";
const ProductDetails = ({ id }: { id: string }) => {
  const t = useTranslations("product-details");
  const { addProductToWishlist, removeProductFromWishlist } =
    useProductWishlistActions();
  const { addProductToCart } = useCart();
  const { data } = useQuery({
    queryKey: ["productDetails", id],
    queryFn: async () => {
      const response = await axiosClientInstance.get(`/products/${id}`);
      return response.data;
    },
  });
  const product = data?.data?.product;
  const title = t("shareTitle", { productName: product?.name });

  return (
    <div className="container shadow-custom rounded-xl p-4 my-4 bg-text-fourth dark:bg-dark-bgSection dark:shadow-dark relative">
      <div className="absolute top-1 right-1">
        <ShareButtons title={title} productId={product?.id} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-5">
        <div className="w-full relative h-[400px]">
          {/**product image */}
          <Image
            src={product?.image_url}
            alt={product?.name || "product image"}
            fill={true}
            className="w-full h-full object-cover rounded-md "
          />
          {/**product favorite button */}
          {product?.is_wishlisted ? (
            <MdFavorite
              className=" text-main-main cursor-pointer absolute  top-1 left-1 dark:text-dark-text"
              size={25}
              onClick={() => removeProductFromWishlist(product.id)}
            />
          ) : (
            <MdFavoriteBorder
              className=" text-main-main cursor-pointer absolute  top-1 left-1 dark:text-dark-text"
              size={25}
              onClick={() => addProductToWishlist(product.id)}
            />
          )}
        </div>
        <div className="w-full h-full">
          <div className="flex flex-col gap-4">
            {/**product details */}
            <h1 className="text-2xl font-bold text-main-main font-main dark:text-dark-text">
              {product?.name}
            </h1>
            <p className="text-gray-500 dark:text-dark-text">
              {product?.description}
            </p>

            <span className="text-xl  font-main text-main-main font-extrabold dark:text-dark-text">
              ${product?.price}
            </span>

            <p>
              <span className="font-main text-main-main font-extrabold dark:text-dark-text">
                {product?.quantity}
              </span>
              <span className="font-main text-text-secondary  font-thin text-[12px] dark:text-dark-text">
                {" "}
                {t("remaining")}
              </span>
            </p>

            {/** add to cart or buy now button */}
            <div className="flex items-center gap-4">
              <button
                className="btn btn-primary px-8 rounded-full dark:bg-dark-text dark:text-dark-bgSection"
                onClick={() => addProductToCart(product)}
              >
                {" "}
                <BsCart4 /> {t("addToCart")}
              </button>
            </div>
            {/*scure payment */}
            <p className="text-gray-500 dark:text-dark-text">
              {t("securePayment")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
