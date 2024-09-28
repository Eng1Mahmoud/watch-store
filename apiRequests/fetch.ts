import { redirect } from "next/navigation";
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

interface RequestOptions {
  endpoint: string;
  method?: HttpMethod;
  data?: any;
  params?: Record<string, string>;
  cache?: boolean;
  revalidate?: number | false;
  tags?: string[];
  token?: string;
}

export async function apiRequest<T>({
  endpoint,
  method = "GET",
  data,
  params,
  cache = false,
  revalidate,
  tags,
  token,
}: RequestOptions): Promise<T> {
  const url = new URL(`${BASE_URL}${endpoint}`);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }

  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const options: RequestInit = {
    method,
    headers,
    cache: cache ? "force-cache" : "no-store",
    next: {
      revalidate: revalidate ? revalidate : false,
      tags,
    },
  };

  if (data && (method === "POST" || method === "PUT" || method === "PATCH")) {
    options.body = JSON.stringify(data);
  }

  const response = await fetch(url, options);
  // if the response is 401 or 403, redirect to the login page
  if (response.status === 401 || response.status === 403) {
    if (typeof window === "undefined") {
      // Server-side: use Next.js redirect
      redirect("/login");
    } else {
      // Client-side: use window.location
      window.location.href = "/login";
    }
    throw new Error("Authentication required");
  }
  return response.json();
}
