"use client";
import { Link } from "@/i18n/routing";
import { useAppSelector } from "@/redux/hooks";

const AuthLinks = () => {
  const isLoging = useAppSelector((state) => state.user.login);
  return !isLoging ? (
    <div className="flex gap-4 pl-4">
      {/*create amizing ui for links login & signup */}
      <Link href="/login">Login</Link>
      <Link href="/signup">Register</Link>
    </div>
  ) : null;
};

export default AuthLinks;
