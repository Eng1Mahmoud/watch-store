import { redirect } from "next/navigation";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

interface RequestOptions {
  endpoint: string;
  method?: HttpMethod;
  data?: any;
  params?: Record<string, string>;
  cache?: RequestCache;
  revalidate?: number | false;
  tags?: string[];
  token?: string;
}

export async function apiRequest<T>({
  endpoint,
  method = "GET",
  data,
  params,
  cache = "no-store",
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
    cache,
    next: {
      revalidate: revalidate === false ? 0 : revalidate,
      tags,
    },
  };

  if (data && (method === "POST" || method === "PUT")) {
    options.body = JSON.stringify(data);
  }

  const response = await fetch(url, options);
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
