import { useAppSelector } from "@/redux/hooks";
import { getOrdersLength, getTotalPrice } from "@/redux/features/cart";
import { Link } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";
import { formatCurrency } from "@/utils/numberFormat";

const CartBody = () => {
  const t = useTranslations("navCart");
  const locale = useLocale();
  const ordersLength = useAppSelector(getOrdersLength);
  const totalPrice = useAppSelector(getTotalPrice);
  return (
    <div
      tabIndex={0}
      className="card card-compact dropdown-content bg-base-100 mt-3 w-52 shadow-custom z-[10000000000000] dark:bg-dark-bgSection"
    >
      <div className="card-body ">
        <span className="text-lg font-bold text-main-main dark:text-dark-text">
          {t("items")}: {ordersLength}
        </span>
        <span className="text-main-main dark:text-dark-textAction">
          {t("subtotal")}: {formatCurrency(totalPrice, locale)}
        </span>
        <div className="card-actions">
          <Link
            href="/my-cart"
            className="btn btn-primary btn-block dark:shadow-dark"
          >
            {t("viewCart")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartBody;
