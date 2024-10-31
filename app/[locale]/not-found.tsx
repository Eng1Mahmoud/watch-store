"use client";
import { Link } from "@/i18n/routing";
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 md:px-20 text-center">
        <h1 className=" text-lg md:text-6xl font-bold">404 - Page Not Found</h1>
        <p className="mt-3 text-2xl">
          The page you are looking for does not exist.
        </p>
        <Link href="/" className=" btn btn-primary mt-4">
          Go back to home
        </Link>
      </main>
    </div>
  );
};

export default NotFound;
