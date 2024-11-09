"use client";
import { useQuery } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { axiosClientInstance } from "@/axios/axiosClientInstance";
import { IOrder } from "@/types/types";
import { OrderStatusBadge } from "./OrderStatusBadge";
import { OrderItem } from "./OrderItem";
import { formatCurrency, formatDate } from "@/utils/numberFormat";
import { useLocale } from "next-intl";
import MyOrdersLoadingUI from "@/components/loading-ui/MyOrdersLoadingUI";
import { Link } from "@/i18n/routing";
const MyOrders = () => {
  const locale = useLocale();
  const t = useTranslations("myOrders");

  const {
    data: { data: { data: { orders = [] } = {} } = {} } = {},
    isLoading,
  } = useQuery({
    queryKey: ["myOrders"],
    queryFn: () => axiosClientInstance.get("/orders/current"),
  });

  if (isLoading) {
    return <MyOrdersLoadingUI count={3} />;
  }

  return (
    <div className="container max-w-screen-lg  my-14">
      {orders.length === 0 ? (
        <div className="bg-white dark:bg-dark-bgSection p-6 shadow-custom rounded-lg text-center flex flex-col gap-3">
          <p className="text-main-main dark:text-dark-text font-medium">
            {t("noOrders")}
          </p>
          <Link
            href="/shop"
            className="btn btn-primary dark:bg-dark-text dark:text-dark-bgSection"
          >
            {t("shoping-now")}
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-5">
          {orders.map((order: IOrder) => (
            <div
              key={order.id}
              className="bg-white dark:bg-dark-bgSection dark:shadow-dark px-2 py-4 md:px-6 md:py-6 shadow-custom rounded-lg dark:text-dark-text"
            >
              {/**order info */}
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-sm text-main-main font-medium text-wrap dark:text-dark-text">
                    {t("placedOn")}: {formatDate(order.created_at, locale)}
                  </p>
                </div>
                <OrderStatusBadge status={order.status} />
              </div>
              <div className="divide-y divide-gray-200">
                {order.order_items.map((item, index) => (
                  <OrderItem key={index} item={item} />
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-main-main dark:text-dark-text">
                    {t("totalAmount")}:
                  </span>
                  <span className="text-lg font-bold text-main-main dark:text-dark-text">
                    {formatCurrency(order.price, locale)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrders;
