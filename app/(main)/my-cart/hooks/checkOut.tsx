import { useMutation } from "@tanstack/react-query";
import { axiosClientInstance } from "@/axios/axiosClientInstance";
import { toast } from "react-toastify";
import { clearCart } from "@/redux/features/cart";
import { useAppDispatch } from "@/redux/hooks";
export const useCheckout = () => {
  // create order by cash on delivery
  const mutationCashOnDeliveryOrder = useMutation({
    mutationFn: (data: any) => axiosClientInstance.post("/orders", data),
  });

  // create order by stripe
  const mutationStripeOrder = useMutation({
    mutationFn: (data: any) =>
      axiosClientInstance.post("/payments/stripe/checkout-session", data),
    onSuccess: ({ data }) => {
      if (data.success) {
        window.location.href = data.data.session_url;
      } else {
        toast.error(data.message);
      }
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
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
    const cartItems = orders.map((order: any) => ({
      product_id: order.product.id,
      quantity: order.quantity,
    }));
    const data = {
      cart_items: [...cartItems],
    };
    if (paymentMethod === "Cash on Delivery") {
      createOrderByCashOnDelivery(data);
    } else if (paymentMethod === "Stripe") {
      createOrderByStripe(data);
    }
  };

  return { handleCheckout };
};
