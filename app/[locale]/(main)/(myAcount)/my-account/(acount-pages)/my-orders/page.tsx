import { getMyOrders } from "./get-my-orders";
import { QueryClient } from "@tanstack/react-query";
import MyOrders from "./ui/MyOrders";
import { getTranslations } from "next-intl/server";
const page = async () => {
  const t = await getTranslations("myOrders");
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["myOrders"],
    queryFn: () => getMyOrders(),
  });

  return (
    <div>
      <h1 className="text-2xl text-center font-bold my-6 text-main-main dark:text-dark-text">
        {t("title")}
      </h1>
      <MyOrders />
    </div>
  );
};

export default page;
