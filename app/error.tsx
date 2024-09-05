"use client";
import Link from "next/link";
import "./globals.css";
export default function Error({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 md:px-20 text-center">
        <h1 className=" text-lg md:text-6xl font-bold">{error.message}</h1>
        <p className="mt-3 text-2xl">
          we are sorry for this error we will fix it soon
        </p>
        <Link href="/" className=" btn btn-primary mt-4">
          try go back to home
        </Link>
      </main>
    </div>
  );
}
