"use client";
const MyOrdersLoadingUI = ({ count = 3 }) => {
  return (
    <div className="container max-w-screen-lg my-14">
      {/* Orders skeleton - showing 3 placeholder orders */}
      <div className="flex flex-col gap-5">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className="bg-white dark:bg-dark-bg px-2 py-4 md:px-6 md:py-6 shadow-custom rounded-lg dark:shadow-dark"
          >
            {/* Order info header */}
            <div className="flex justify-between items-center mb-4">
              <div className="h-5 w-32 bg-gray-200 dark:bg-dark-bgSection animate-pulse rounded dark:shadow-dark" />
              <div className="h-6 w-24 bg-gray-200 dark:bg-dark-bgSection animate-pulse rounded dark:shadow-dark" />
            </div>

            {/* Order items */}
            <div className="divide-y divide-gray-200 dark:divide-dark-bgSection dark:shadow-dark">
              {[1, 2].map((item) => (
                <div key={item} className="py-4 flex gap-4">
                  {/* Product image skeleton */}
                  <div className="h-20 w-20 bg-gray-200 dark:bg-dark-bgSection animate-pulse rounded dark:shadow-dark" />
                  <div className="flex-1 space-y-2">
                    {/* Product name skeleton */}
                    <div className="h-4 w-3/4 bg-gray-200 dark:bg-dark-bgSection animate-pulse rounded dark:shadow-dark" />
                    {/* Price skeleton */}
                    <div className="h-4 w-24 bg-gray-200 dark:bg-dark-bgSection animate-pulse rounded dark:shadow-dark" />
                  </div>
                </div>
              ))}
            </div>

            {/* Total amount */}
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-dark-bgSection dark:shadow-dark">
              <div className="flex justify-between items-center">
                <div className="h-5 w-24 bg-gray-200 dark:bg-dark-bgSection animate-pulse rounded dark:shadow-dark" />
                <div className="h-6 w-32 bg-gray-200 dark:bg-dark-bgSection animate-pulse rounded dark:shadow-dark" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrdersLoadingUI;
