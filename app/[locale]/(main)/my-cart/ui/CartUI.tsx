"use client";
import CartItem from "./CartItem";
import { useAppSelector } from "@/redux/hooks";
import { getAllOrders } from "@/redux/features/cart";
import CheckOut from "./Checkout";
import Link from "next/link";

const CartUI = () => {
  const orders = useAppSelector(getAllOrders);
  return (
    <div className="container max-w-screen-lg py-4 px-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col gap-4 w-full md:w-[70%] shadow-custom p-4 rounded-lg">
          {orders.length === 0 ? (
            <div className="flex flex-col justify-center items-center h-full gap-4">
              <h1 className="text-lg font-semibold text-text-secondary">
                No orders found
              </h1>
              <Link href="/shop" className="btn btn-primary">
                Go To Shop
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
