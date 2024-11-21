"use client";
import { getAllOrders, getTotalPrice } from "@/redux/features/cart";
import { useAppSelector } from "@/redux/hooks";
import { useState } from "react";
import { useCheckout } from "../hooks/checkOut";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { formatCurrency } from "@/utils/numberFormat";
const CheckOut = () => {
  const t = useTranslations("myCart.checkout");
  const locale = useLocale();
  const { handleCheckout } = useCheckout();
  const [paymentMethod, setPaymentMethod] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const orders = useAppSelector(getAllOrders);
  const totalPrice = useAppSelector(getTotalPrice);
  // payment methods
  const paymentMethods = [
    { label: t("paymentMethod.cash"), value: "cash" },
    { label: t("paymentMethod.stripe"), value: "stripe" },
  ];

  // handle payment method
  const handlePaymentMethodChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <div className="shadow-custom p-4 rounded-lg h-auto dark:shadow-dark">
      <div className="flex flex-col gap-4 w-full">
        <select
          className="select select-bordered w-full bg-white shadow-input dark:bg-dark-bgSection dark:text-dark-text"
          onChange={handlePaymentMethodChange}
          value={paymentMethod}
        >
          <option value="" disabled>
            {t("paymentMethod.select")}
          </option>
          {paymentMethods.map((method) => (
            <option key={method.value} value={method.value}>
              {method.label}
            </option>
          ))}
        </select>
        <p className="text-ms dark:text-dark-text ">
          {t("subtotal")}: {formatCurrency(totalPrice, locale)}
        </p>
        <p className="text-ms dark:text-dark-text ">
          {t("taxes")}: {formatCurrency(15, locale)}
        </p>
        <p className="text-sm dark:text-dark-text">
          {t("total-items")}: {orders.length}
        </p>
        <p className="text-ms dark:text-dark-text">
          {t("total-price")}: {formatCurrency(totalPrice + 15, locale)}
        </p>
        <p className="text-ms dark:text-dark-text">{t("free-shipping")}</p>
        {/* coupon */}
        <h3 className="text-lg font-bold text-main-main dark:text-dark-text">
          {t("coupon.title")}
        </h3>
        <div className="flex rounded-lg shadow-custom dark:shadow-dark">
          {/*add coupon */}
          <input
            onChange={(e) => setCouponCode(e.target.value)}
            value={couponCode}
            type="text"
            placeholder={t("coupon.code")}
            className="input focus:outline-none  ltr:rounded-tr-none ltr:rounded-br-none rtl:rounded-tl-none rtl:rounded-bl-none w-full bg-white dark:text-dark-text dark:bg-dark-bgSection  "
          />
          <button className="btn btn-primary dark:bg-dark-text dark:text-dark-bgSection ltr:rounded-tl-none ltr:rounded-bl-none rtl:rounded-tr-none rtl:rounded-br-none ">
            {t("coupon.apply")}
          </button>
        </div>
      </div>
      <button
        className="btn btn-primary w-full mt-3 shadow-sm font-extrabold dark:shadow-dark "
        onClick={() => handleCheckout(orders, paymentMethod)}
      >
        {t("checkout-btn")}
      </button>
    </div>
  );
};

export default CheckOut;
