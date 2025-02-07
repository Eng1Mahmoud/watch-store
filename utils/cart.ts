import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  clearCart,
  getAllOrders,
  loadCart,
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "@/redux/features/cart";
import { ICart, IProduct } from "@/types/types";
import { toast } from "react-toastify";
import { useTranslations } from "next-intl";

export const useCart = () => {
  const t = useTranslations("toast-cart");
  const dispatch = useAppDispatch();
  const cart = useAppSelector(getAllOrders); // get the cart
  const user = useAppSelector((state) => state.user.login); // check if user is logged in

  // Save the current cart to localStorage with a specific ID
  const saveCartToLocalStorage = ({ id }: { id: string }) => {
    localStorage.setItem(`cart-${id}`, JSON.stringify(cart));
  };

  // Load the cart from localStorage using a specific ID
  const loadCartFromLocalStorage = ({ id }: { id: string }) => {
    const savedCart = localStorage.getItem(`cart-${id}`);
    if (savedCart) {
      dispatch(loadCart(JSON.parse(savedCart)));
    } else {
      dispatch(clearCart());
    }
  };

  // Add a product to the cart
  const addProductToCart = (product: IProduct) => {
    // first check if user is logged in
    if (!user) {
      toast.error(t("login_required"));
      return;
    }

    const cartItem: ICart = {
      product,
      quantity: 1,
    };

    try {
      // Check if the product is already in the cart
      if (product?.id) {
        const productInCart = cart.find(
          (item) => item.product.id === product.id,
        );
        if (productInCart) {
          toast.error(t("product_exists"));
          return;
        }
      } else {
        toast.error(t("invalid_product"));
        return;
      }

      dispatch(addToCart(cartItem));
      toast.success(t("add_success"));
    } catch (error) {
      toast.error(t("add_error"));
    }
  };

  // Remove a product from the cart
  const removeProductFromCart = (productId: string) => {
    dispatch(removeFromCart(productId));
  };

  // Increment the quantity of a product in the cart
  const incrementProductQuantity = (productId: string) => {
    dispatch(incrementQuantity(productId));
  };

  // Decrement the quantity of a product in the cart
  const decrementProductQuantity = (productId: string) => {
    dispatch(decrementQuantity(productId));
  };

  return {
    saveCartToLocalStorage,
    loadCartFromLocalStorage,
    addProductToCart,
    removeProductFromCart,
    incrementProductQuantity,
    decrementProductQuantity,
  };
};
