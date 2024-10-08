import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "@/redux/features/cart";
import { ICart, IProduct } from "@/types/types";
import { toast } from "react-toastify";

export const useProductActions = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.orders);

  // add product to cart
  const addProductToCart = (product: IProduct) => {
    const cartItem: ICart = {
      product,
      quantity: 1,
      total_price: product.price,
    };

    try {
      console.log(product);
      // check if product is already in cart
      if (product?.id) {
        const productInCart = cart.find(
          (item) => item.product.id === product.id,
        );
        if (productInCart) {
          toast.error("Product already in cart");
          return;
        }
      } else {
        toast.error("Invalid product");
        return;
      }

      dispatch(addToCart(cartItem));
      toast.success("Product added to cart");
    } catch (error) {
      toast.error("Error adding product to cart");
    }
  };

  // remove product from cart
  const removeProductFromCart = (productId: string) => {
    dispatch(removeFromCart(productId));
  };
  // increment product quantity
  const incrementProductQuantity = (productId: string) => {
    dispatch(incrementQuantity(productId));
  };
  // decrement product quantity
  const decrementProductQuantity = (productId: string) => {
    dispatch(decrementQuantity(productId));
  };

  return {
    addProductToCart,
    removeProductFromCart,
    incrementProductQuantity,
    decrementProductQuantity,
  };
};
