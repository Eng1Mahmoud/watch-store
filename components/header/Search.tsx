"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setSearch } from "@/redux/features/filter";
import { useRouter, usePathname } from "next/navigation";
const Search = () => {
  const searchTerm = useAppSelector((state) => state.filter.filter.search);
  const router = useRouter();
  const pathname = usePathname(); // get the current pathname
  const dispatch = useAppDispatch();
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    // Clear the previous timer if it exists
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    // Set a new timer
    timerRef.current = setTimeout(() => {
      if (!pathname.includes("shop")) {
        // if the pathname is not /shop, redirect to /shop to show the search results
        router.push("/shop");
      }
      dispatch(setSearch(value));
    }, 300);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = searchTerm;
    }
  }, [searchTerm]);
  return (
    <div className="relative w-full group">
      <motion.input
        ref={inputRef}
        type="text"
        placeholder="Search"
        className="input input-bordered w-full focus:outline-none pl-10 text-main-main
         placeholder-gray-400 focus:placeholder-main-main"
        initial={{ borderColor: "#e5e7eb" }}
        whileFocus={{
          scale: 1.005,
          borderColor: "#406939",
          boxShadow: "0 0 1px #406939",
          borderBottomWidth: "2px",
        }}
        transition={{ duration: 0.3 }}
        onChange={handleSearch}
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
