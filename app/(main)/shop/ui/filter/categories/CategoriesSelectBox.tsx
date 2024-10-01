import React from "react";

const CategoriesSelectBox = () => {
  return (
    <div>
      <h1 className="text-lg pb-2 ">Categories</h1>
      <select className="select select-bordered w-full ">
        <option disabled selected>
          Who shot first?
        </option>
        <option>Han Solo</option>
        <option>Greedo</option>
      </select>
    </div>
  );
};

export default CategoriesSelectBox;
