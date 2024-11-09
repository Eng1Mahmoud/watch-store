import Image from "next/image";
import { useTranslations } from "next-intl";
import { IOrderItem } from "@/types/types";
import { formatCurrency } from "@/utils/numberFormat";
import { useLocale } from "next-intl";
export const OrderItem = ({ item }: { item: IOrderItem }) => {
  const t = useTranslations("myOrders");
  const locale = useLocale();

  return (
    <div className="py-4 flex items-center gap-4">
      <div className="relative h-20 w-20 flex-shrink-0">
        <Image
          src={item.product.image_url}
          alt={item.product.name}
          fill
          className="object-cover rounded-md"
        />
      </div>
      <div className="ml-4 flex-1 dark:text-dark-text">
        <h3 className="text-lg font-medium text-main-main dark:text-dark-text">
          {item.product.name}
        </h3>
        <p className="text-text-secondary dark:text-dark-text">
          {t("quantity")}: {item.product.quantity}
        </p>
        <p className="text-text-secondary dark:text-dark-text">
          {t("price")}: {formatCurrency(item.product.price, locale)}
        </p>
      </div>
    </div>
  );
};
