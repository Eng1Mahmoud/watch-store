import { useAppSelector } from "@/redux/hooks";
import { getOrdersLength, getTotalPrice } from "@/redux/features/cart";
import Link from "next/link";
const CartBody = () => {
  const ordersLength = useAppSelector(getOrdersLength);
  const totalPrice = useAppSelector(getTotalPrice);
  return (
    <div
      tabIndex={0}
      className="card card-compact dropdown-content bg-base-100 mt-3 w-52 shadow z-[10000000000000]"
    >
      <div className="card-body">
        <span className="text-lg font-bold">{ordersLength} Items</span>
        <span className="text-info">Subtotal: ${totalPrice}</span>
        <div className="card-actions">
          <Link href="/my-cart" className="btn btn-primary btn-block">
            View cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartBody;
