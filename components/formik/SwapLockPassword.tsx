import React from "react";
import { CiLock } from "react-icons/ci";
import { FaEye } from "react-icons/fa";

interface SwapLockPasswordProps {
  setType: React.Dispatch<React.SetStateAction<"password" | "text">>;
}

const SwapLockPassword = ({ setType }: SwapLockPasswordProps) => {
  const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setType(event.target.checked ? "text" : "password");
  };

  return (
    <div className="absolute right-2 top-0 h-full flex justify-center items-center">
      <label className="swap swap-rotate">
        {/* This hidden checkbox controls the state */}
        <input type="checkbox" onChange={handleToggle} />
        <CiLock
          className="swap-off fill-current dark:fill-dark-text"
          size={25}
        />
        <FaEye
          className="swap-on fill-current dark:fill-dark-text "
          size={25}
        />
      </label>
    </div>
  );
};

export default SwapLockPassword;
