import { useTranslations } from "next-intl";

interface OrderStatusBadgeProps {
  status: string;
}

export const OrderStatusBadge = ({ status }: OrderStatusBadgeProps) => {
  const t = useTranslations("myOrders");

  const getStatusColor = () => {
    switch (status.toLowerCase()) {
      case "shipping":
        return "bg-blue-100 text-blue-800";
      case "delivered":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <p
      className={` flex justify-center items-center px-3 py-2 rounded-full text-sm font-medium w-[120px] ${getStatusColor()}`}
    >
      {t(`status.${status.toLowerCase()}`)}
    </p>
  );
};
