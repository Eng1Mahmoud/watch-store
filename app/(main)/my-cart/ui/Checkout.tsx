"use client";
import { getAllOrders, getTotalPrice } from "@/redux/features/cart";
import { useAppSelector } from "@/redux/hooks";
import { useState } from "react";
const paymentMethods = ["Cash on Delivery", "Stripe"];
const CheckOut = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const orders = useAppSelector(getAllOrders);
  const totalPrice = useAppSelector(getTotalPrice);

  return (
    <div className="shadow-custom p-4 rounded-lg h-[370px]">
      <div className="flex flex-col gap-4 w-full">
        <select
          className="select select-bordered w-full "
          onChange={(e) => setPaymentMethod(e.target.value)}
          value={paymentMethod}
        >
          <option value="" disabled>
            Select Payment Method
          </option>
          {paymentMethods.map((method) => (
            <option key={method} value={method}>
              {method}
            </option>
          ))}
        </select>
        <p className="text-ms ">subTotal Price: ${totalPrice}</p>
        <p className="text-ms ">taxes: ${15}</p>
        <p className="text-sm ">Total Items: {orders.length}</p>
        <p className="text-ms ">total Price: ${totalPrice + 15}</p>
        <div className="flex rounded-lg shadow-custom ">
          {/*add coupon */}
          <input
            onChange={(e) => setCouponCode(e.target.value)}
            value={couponCode}
            type="text"
            placeholder="Coupon Code"
            className="input focus:outline-none  rounded-tr-none rounded-br-none w-full "
          />
          <button className="btn btn-primary rounded-tl-none rounded-bl-none ">
            Add{" "}
          </button>
        </div>
      </div>
      <button className="btn w-full mt-3 text-main-main shadow-sm font-extrabold">
        checkout
      </button>
    </div>
  );
};

export default CheckOut;
