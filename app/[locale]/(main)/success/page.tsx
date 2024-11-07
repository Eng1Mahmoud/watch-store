import { getOrderInfo } from "./getOrderInfo";
import OrderInfoUI from "./UI/OrderInfoUI";
const Page = async ({
  searchParams,
}: {
  searchParams: { session_id: string };
  params: { locale: string };
}) => {
  const orderInfo = await getOrderInfo(searchParams.session_id);
  const { order } = orderInfo.data;

  return <OrderInfoUI order={order} />;
};

export default Page;
