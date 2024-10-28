"use client";
import InfiniteScroll from "@/components/Infinity-scroll/InfinityScroll";
import ProductLoadingUI from "@/components/loading-ui/ProductLoadingUI";
import WishListItems from "./WishListItems";
const WishLists = () => {
  return (
    <div>
      <InfiniteScroll
        DisplayComponent={WishListItems}
        endpoint={"/wishlists/current"}
        itemsPerPage={20}
        dataKey="wishlists"
        LoadingComponent={ProductLoadingUI}
      />
    </div>
  );
};

export default WishLists;
