"use client";
import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/features/user";
import { deleteCookie } from "cookies-next";
const Logout = () => {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(setUser(false));
    deleteCookie("token");
  };

  return (
    <button onClick={handleLogout} className="btn btn-error text-white mt-2">
      Logout
    </button>
  );
};

export default Logout;
