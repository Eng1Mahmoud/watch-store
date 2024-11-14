"use client";
import { useRef } from "react";
interface SearchProps {
  setSearchTerm: React.Dispatch<React.SetStateAction<string | undefined>>;
  placeholder?: string;
}
const Search = ({ setSearchTerm, placeholder }: SearchProps) => {
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    // Clear the previous timer if it exists
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    // Set a new timer
    timerRef.current = setTimeout(() => {
      setSearchTerm(value);
    }, 300);
  };

  return (
    <div className="mb-4 shadow-md dark:shadow-dark rounded-md  my-3">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none dark:border-dark-border bg-white dark:bg-dark-bgSection dark:text-dark-text focus:shadow-custom dark:focus:shadow-dark  "
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Search;
