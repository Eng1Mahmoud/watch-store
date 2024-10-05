const TableUI = ({ count = 10 }) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="w-full">
          <div className="skeleton h-8 w-full"></div>
        </div>
      ))}
    </div>
  );
};

export default TableUI;
