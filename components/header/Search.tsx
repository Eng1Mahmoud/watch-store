"use client";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="relative w-full group">
      <motion.input
        type="text"
        placeholder="Search"
        className="input input-bordered w-full focus:outline-none pl-10 text-main-main
         placeholder-gray-400 focus:placeholder-main-main "
        initial={{ borderColor: "#e5e7eb" }}
        whileFocus={{
          scale: 1.005,
          skewX: -10,
          borderColor: "#406939",
          boxShadow: "0 0 1px #406939",
          borderBottomWidth: "4px",
        }}
        transition={{ duration: 0.3 }}
      />
      <FaSearch
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400
         group-focus-within:text-main-main transition-colors duration-300 cursor-pointer"
        size={18}
      />
    </div>
  );
};

export default Search;
