import { getOrder } from "./getOrder";
import { QueryClient } from "@tanstack/react-query";
import { OrderUI } from "./ui/OrderUI";
const page = async ({ params }: { params: { id: string } }) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["admin-order-details", params.id],
    queryFn: () => getOrder(params.id),
  });

  return (
    <div>
      <OrderUI id={params.id} />
    </div>
  );
};

export default page;
