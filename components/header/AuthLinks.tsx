"use client";
import Link from "next/link";
import { useTokenExpiration } from "@/hooks/useTokenExpiration";

const AuthLinks = () => {
  const isExpired = useTokenExpiration();
  return isExpired ? (
    <div className="flex gap-4 pl-4">
      {/*create amizing ui for links login & signup */}
      <Link href="/login">Login</Link>
      <Link href="/signup">Register</Link>
    </div>
  ) : null;
};

export default AuthLinks;
