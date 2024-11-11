import { useMutation } from "@tanstack/react-query";
import { axiosClientInstance } from "@/axios/axiosClientInstance";
import { clearCart } from "@/redux/features/cart";
import { useAppDispatch } from "@/redux/hooks";
import { useTranslations } from "next-intl";
import { toast } from "react-toastify";
export const useCheckout = () => {
  const t = useTranslations("myCart.checkout");
  const dispatch = useAppDispatch();
  // create order by cash on delivery
  const mutationCashOnDeliveryOrder = useMutation({
    mutationFn: (data: any) =>
      axiosClientInstance.post("/payments/cash-delivery", data),
    onSuccess: ({ data }) => {
      if (data.success) {
        dispatch(clearCart()); // clear the cart
      }
    },
  });

  // create order by stripe
  const mutationStripeOrder = useMutation({
    mutationFn: (data: any) =>
      axiosClientInstance.post("/payments/stripe/checkout-session", data),
    onSuccess: ({ data }) => {
      if (data.success) {
        window.location.href = data.data.session_url;
      }
    },
  });

  const createOrderByCashOnDelivery = (data: any) => {
    mutationCashOnDeliveryOrder.mutate(data);
  };
  const createOrderByStripe = (data: any) => {
    mutationStripeOrder.mutate(data);
  };

  // handle checkout
  const handleCheckout = (orders: any, paymentMethod: string) => {
    if (!paymentMethod) {
      toast.error(t("not-select-payment-method"));
      return;
    }
    const cartItems = orders.map((order: any) => ({
      product_id: order.product.id,
      quantity: order.quantity,
    }));
    const data = {
      cart_items: [...cartItems],
    };
    if (paymentMethod === "cash") {
      createOrderByCashOnDelivery(data);
    } else if (paymentMethod === "stripe") {
      createOrderByStripe(data);
    }
  };

  return { handleCheckout };
};
