const ProductLoadingUI = ({ count = 10 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="flex flex-col gap-4">
          <div className="skeleton h-32 w-full bg-gray-100 shadow-input dark:bg-dark-bgSection"></div>
          <div className="skeleton h-4 w-28 bg-gray-100 shadow-input dark:bg-dark-bgSection"></div>
          <div className="skeleton h-4 w-full bg-gray-100 shadow-input dark:bg-dark-bgSection"></div>
          <div className="skeleton h-4 w-full bg-gray-100 shadow-input dark:bg-dark-bgSection"></div>
        </div>
      ))}
    </div>
  );
};

export default ProductLoadingUI;
