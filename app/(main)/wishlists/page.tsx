import { QueryClient } from "@tanstack/react-query";
import WishLists from "./ui/WishLists";
import { getWishLists } from "@/actions/getWishLists";
const page = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["wishlists"],
    queryFn: () => getWishLists(1, 20),
  });
  return (
    <div className="container max-w-screen-lg  py-10">
      <h2 className="text-2xl text-center mb-14 mt-10 text-main-main font-extrabold">
        Wishlists
      </h2>
      <WishLists />
    </div>
  );
};

export default page;
