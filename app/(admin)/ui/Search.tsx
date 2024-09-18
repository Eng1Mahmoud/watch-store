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
    <div className="mb-4">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Search;
