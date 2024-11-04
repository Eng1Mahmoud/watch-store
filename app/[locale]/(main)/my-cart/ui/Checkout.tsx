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
    <div className="shadow-custom p-4 rounded-lg h-[400px]">
      <div className="flex flex-col gap-4 w-full">
        <select
          className="select select-bordered w-full "
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
        <p className="text-ms ">
          {t("subtotal")}: {formatCurrency(totalPrice, locale)}
        </p>
        <p className="text-ms ">
          {t("taxes")}: {formatCurrency(15, locale)}
        </p>
        <p className="text-sm ">
          {t("total-items")}: {orders.length}
        </p>
        <p className="text-ms ">
          {t("total-price")}: {formatCurrency(totalPrice + 15, locale)}
        </p>
        {/* coupon */}
        <h3 className="text-lg font-bold text-main-main">
          {t("coupon.title")}
        </h3>
        <div className="flex rounded-lg shadow-custom ">
          {/*add coupon */}
          <input
            onChange={(e) => setCouponCode(e.target.value)}
            value={couponCode}
            type="text"
            placeholder={t("coupon.code")}
            className="input focus:outline-none  ltr:rounded-tr-none ltr:rounded-br-none rtl:rounded-tl-none rtl:rounded-bl-none w-full "
          />
          <button className="btn btn-primary ltr:rounded-tl-none ltr:rounded-bl-none rtl:rounded-tr-none rtl:rounded-br-none ">
            {t("coupon.apply")}
          </button>
        </div>
      </div>
      <button
        className="btn w-full mt-3 text-main-main shadow-sm font-extrabold"
        onClick={() => handleCheckout(orders, paymentMethod)}
      >
        {t("checkout-btn")}
      </button>
    </div>
  );
};

export default CheckOut;
