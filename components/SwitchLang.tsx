"use client";
import { useRouter, usePathname } from "next/navigation";
import { ChangeEvent, useTransition } from "react";
export default function LocalSwitcher(params: { locale: string }) {
  const pathSegments = usePathname().split("/");
  const pathname = pathSegments.slice(2).join("/");
  const currentPath = pathname ? `/${pathname}` : "";

  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.push(`/${nextLocale}${currentPath}`);
    });
  };
  return (
    <label className="border-2 rounded">
      <p className="sr-only">change language</p>
      <select
        defaultValue={params.locale}
        className="bg-transparent py-2"
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value="en">English</option>
        <option value="ar">Arabic</option>
      </select>
    </label>
  );
}
