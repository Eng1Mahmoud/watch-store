"use client";
import { useQuery } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { axiosClientInstance } from "@/axios/axiosClientInstance";
import { OrderItem } from "./OrderItem";
import { formatCurrency, formatDate } from "@/utils/numberFormat";
import { useLocale } from "next-intl";
import MyOrdersLoadingUI from "@/components/loading-ui/MyOrdersLoadingUI";
import { IOrderItem } from "@/types/types";
const OrderUI = ({ id }: { id: string }) => {
  const locale = useLocale();
  const t = useTranslations("myOrders");

  const { data, isLoading } = useQuery({
    queryKey: ["user-order-details", id],
    queryFn: () => axiosClientInstance.get(`/orders/current/${id}`),
  });
  const order = data?.data.data.order;
  if (isLoading) {
    return <MyOrdersLoadingUI count={3} />;
  }

  return (
    <div className="container max-w-screen-lg  my-14">
      <div className="flex flex-col gap-5 bg-white dark:bg-dark-bgSection dark:shadow-dark px-2 py-4 md:px-6 md:py-6 shadow-custom rounded-lg dark:text-dark-text">
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-sm text-main-main font-medium text-wrap dark:text-dark-text">
              {t("placedOn")}: {formatDate(order.created_at, locale)}
            </p>
          </div>
          {/*   <OrderStatusBadge status={order.status} /> */}
        </div>
        <div className="divide-y divide-gray-200">
          {order.order_items.map((item: IOrderItem, index: number) => (
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
    </div>
  );
};

export default OrderUI;
/* "use client";
import { useQuery } from "@tanstack/react-query";
import { axiosClientInstance } from "@/axios/axiosClientInstance";
export const OrderUI = ({ id }: { id: string }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["user-order-details", id],
    queryFn: () => axiosClientInstance.get(`/orders/current/${id}`),
  });
  console.log(data);
  return <div>{isLoading ? "loading..." : <div>data</div>}</div>;
};
 */
