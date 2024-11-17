import { useMutation, useQuery } from "@tanstack/react-query";
import { axiosClientInstance } from "@/axios/axiosClientInstance";
import { clearCart } from "@/redux/features/cart";
import { useAppDispatch } from "@/redux/hooks";
import { useTranslations } from "next-intl";
import { toast } from "react-toastify";
import { useRouter } from "@/i18n/routing";
export const useCheckout = () => {
  const t = useTranslations("myCart.checkout");
  const dispatch = useAppDispatch();
  const router = useRouter();
  // get user address to check if user have address or not
  const { data } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await axiosClientInstance.get("/users/current");
      return response.data;
    },
  });
  const userAddress = data?.data?.userData?.addresses;
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
    const cartItems = orders.map((order: any) => ({
      product_id: order.product.id,
      quantity: order.quantity,
    }));
    const data = {
      cart_items: [...cartItems],
    };

    if (!paymentMethod) {
      toast.error(t("not-select-payment-method"));
      return;
    }
    // check if user have address if not redirect to address page
    if (userAddress.length === 0) {
      toast.error(t("no-address"));
      router.push("/my-account/my-addresses");
      return;
    }
    // check if no items in cart
    if (cartItems.length === 0) {
      toast.error(t("no-items-in-cart"));
      return;
    }
    if (paymentMethod === "cash") {
      createOrderByCashOnDelivery(data);
    } else if (paymentMethod === "stripe") {
      createOrderByStripe(data);
    }
  };

  return { handleCheckout };
};
