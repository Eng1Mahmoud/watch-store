import { ICart } from "@/types/types";
import Image from "next/image";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { RiSubtractFill } from "react-icons/ri";
import { useCart } from "@/utils/cart";
const CartItem = ({ order }: { order: ICart }) => {
  const {
    removeProductFromCart,
    incrementProductQuantity,
    decrementProductQuantity,
  } = useCart();
  const { product, quantity } = order;
  return (
    <div className="bg-white dark:bg-dark-bg dark:shadow-dark rounded-lg shadow-custom p-4 w-full relative">
      <div
        className="tooltip absolute top-1 ltr:right-1 rtl:left-1 z-[2000] "
        data-tip="remove"
      >
        <button onClick={() => removeProductFromCart(product.id as string)}>
          <IoIosRemoveCircleOutline
            className="text-2xl bg-text-fourth rounded-full p-1 text-red-500 font-bold dark:shadow-dark "
            size={30}
          />
        </button>
      </div>
      <div className="flex flex-col sm:flex-row items-center w-full gap-2">
        {/* Product Image */}
        <div className="w-full sm:w-[30%] h-40 sm:h-24 relative mb-4 sm:mb-0 sm:mr-4">
          <Image
            src={product?.image_url}
            alt={product.name}
            fill
            className="object-cover rounded-md"
          />
        </div>

        {/* Product Details */}
        <div className="rtl:text-right ltr:text-left mb-4 sm:mb-0 w-full px-3 dark:text-dark-text">
          <h2 className="text-lg font-semibold mb-1 dark:text-dark-text ">
            {product.name}
          </h2>
          <p className="text-sm text-gray-600 mb-2 dark:text-dark-text">
            {product.description}
          </p>
          <p className="text-lg font-bold text-main-main dark:text-dark-text">
            ${product.price * quantity}
          </p>
        </div>
        {/* Quantity Controls */}
        <div className="flex items-center justify-center sm:justify-end w-full sm:w-auto">
          <div className="flex items-center bg-gray-100 dark:bg-dark-bgSection rounded-full p-1">
            <button
              className="text-main-main hover:bg-main-main hover:text-white dark:bg-dark-text dark:text-dark-bgSection transition-colors duration-200 rounded-full w-8 h-8 flex items-center justify-center"
              onClick={() => decrementProductQuantity(product?.id as string)}
            >
              <RiSubtractFill className="text-sm" />
            </button>
            <span className="mx-3 text-lg font-semibold min-w-[30px] text-center dark:text-dark-text">
              {quantity}
            </span>
            <button
              className="text-main-main hover:bg-main-main hover:text-white dark:bg-dark-text dark:text-dark-bgSection  transition-colors duration-200 rounded-full w-8 h-8 flex items-center justify-center"
              onClick={() => incrementProductQuantity(product?.id as string)}
            >
              <FaPlus className="text-sm" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
