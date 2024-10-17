"use client";
import { useLogout } from "@/utils/logout";
const Logout = () => {
  const { logout } = useLogout();

  return (
    <button onClick={logout} className="btn btn-error text-white mt-2">
      Logout
    </button>
  );
};

export default Logout;
