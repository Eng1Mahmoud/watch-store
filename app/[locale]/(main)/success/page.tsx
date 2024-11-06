import { getOrderInfo } from "./getOrderInfo";
import Image from "next/image";
import { formatCurrency } from "@/utils/numberFormat";
import { getTranslations } from "next-intl/server";
import successPayment from "@/public/assets/payment/success.png";
const Page = async ({
  searchParams,
  params,
}: {
  searchParams: { session_id: string };
  params: { locale: string };
}) => {
  const t = await getTranslations("success-payment");
  const orderInfo = await getOrderInfo(searchParams.session_id);
  const { order } = orderInfo.data;

  return (
    <div className="max-w-2xl mx-auto shadow-custom rounded-lg bg-white p-6 my-6">
      <div className="flex items-center justify-center mb-6">
        <Image src={successPayment} alt="success" width={100} height={100} />
      </div>
      <h1 className="text-2xl font-bold mb-6 text-main-main">
        {t("orderConfirmation")}
      </h1>

      <div className="space-y-4">
        <div className="border-b pb-4">
          <h2 className="font-semibold mb-2">{t("orderDetails")}</h2>

          <p>
            {t("status")}: <span className="capitalize">{order.status}</span>
          </p>
          <p>
            {t("totalAmount")}: ${order.price}
          </p>
        </div>

        <div className="border-b pb-4">
          <h2 className="font-semibold mb-2">{t("orderItems")}</h2>
          <div className="space-y-4">
            {order.order_items.map((item: any) => (
              <div
                key={item.product.id}
                className="flex items-center space-x-4 rtl:space-x-reverse"
              >
                <Image
                  src={item.product.image_url}
                  width={100}
                  height={100}
                  alt={item.product.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h3 className="font-medium">{item.product.name}</h3>
                  <p className="text-gray-600">
                    {t("quantity")}: {item.product.quantity}
                  </p>
                  <p className="text-gray-600">
                    {t("price")}:{" "}
                    {formatCurrency(item.product.price, params.locale)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-b pb-4">
          <h2 className="font-semibold mb-2">{t("createdAt")}</h2>
          <p>
            {t("placedOn")}: {new Date(order.created_at).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
