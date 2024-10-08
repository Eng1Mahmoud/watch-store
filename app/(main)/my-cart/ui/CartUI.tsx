"use client";
import CartItem from "@/components/CartItem";
import { useAppSelector } from "@/redux/hooks";
import { getAllOrders } from "@/redux/features/cart";

const CartUI = () => {
  const orders = useAppSelector(getAllOrders);
  return (
    <div className="container max-w-screen-lg py-4 px-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col gap-4 w-full md:w-[70%] shadow-custom p-4 rounded-lg">
          {orders.map((order) => (
            <div className="flex gap-4" key={order.product.id}>
              <CartItem order={order} />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 w-full md:w-[30%]  ">
          <div className="shadow-custom p-4 rounded-lg h-[300px]">
            <button className="btn btn-primary">checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartUI;
