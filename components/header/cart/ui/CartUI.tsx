"use client";
import { useAppSelector } from "@/redux/hooks";
import CartBody from "./CartBody";
import { getOrdersLength } from "@/redux/features/cart";
import { GiShoppingCart } from "react-icons/gi";
const CartUI = () => {
  const isLoging = useAppSelector((state) => state.user.login);
  const ordersLength = useAppSelector(getOrdersLength);
  return isLoging ? (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn bg-transparent hover:bg-transparent border-none shadow-none btn-circle"
      >
        <div className="indicator">
          <GiShoppingCart
            size={35}
            className="text-main-main cursor-pointer dark:text-dark-text"
          />
          <span className="badge badge-lg indicator-item border-none text-text-third dark:text-dark-text bg-main-main dark:bg-dark-bgSection p-2 shadow-input dark:shadow-dark">
            {ordersLength >= 100 ? "99+" : ordersLength}
          </span>
        </div>
      </div>
      <CartBody />
    </div>
  ) : null;
};

export default CartUI;
