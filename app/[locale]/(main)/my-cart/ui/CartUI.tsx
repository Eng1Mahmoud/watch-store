"use client";
import CartItem from "./CartItem";
import { useAppSelector } from "@/redux/hooks";
import { getAllOrders } from "@/redux/features/cart";
import CheckOut from "./Checkout";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
const CartUI = () => {
  const t = useTranslations("myCart");
  const orders = useAppSelector(getAllOrders);
  return (
    <div className="container max-w-screen-lg py-4 px-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col gap-4 w-full md:w-[70%] shadow-custom p-4 rounded-lg dark:bg-dark-bgSection">
          {orders.length === 0 ? (
            <div className="flex flex-col justify-center items-center h-full gap-4">
              <h1 className="text-lg font-semibold text-text-secondary dark:text-dark-text">
                {t("emptyCart")}
              </h1>
              <Link
                href="/shop"
                className="btn btn-primary dark:bg-dark-text dark:text-dark-bgSection"
              >
                {t("goToShop")}
              </Link>
            </div>
          ) : (
            orders.map((order) => (
              <div className="flex gap-4" key={order.product.id}>
                <CartItem order={order} />
              </div>
            ))
          )}
        </div>
        <div className="flex flex-col gap-4 w-full md:w-[30%]  ">
          <CheckOut />
        </div>
      </div>
    </div>
  );
};

export default CartUI;
