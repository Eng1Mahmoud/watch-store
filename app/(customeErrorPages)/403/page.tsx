import { NextPage } from "next";
import Link from "next/link";
const ForbiddenPage: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 md:px-20 text-center">
        <h1 className=" text-lg md:text-6xl font-bold">403 - Forbidden</h1>
        <p className="mt-3 text-2xl">
          You don&apos;t have permission to access this page.
        </p>
        <Link href="/" className=" btn btn-primary mt-4">
          Go back to home
        </Link>
      </main>
    </div>
  );
};

export default ForbiddenPage;
