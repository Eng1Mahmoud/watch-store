import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";
import "server-only";

const BASE_URL = process.env.API_BASE_URL || "https://fakestoreapi.com";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

interface RequestOptions {
  endpoint: string;
  method?: HttpMethod;
  data?: any;
  params?: Record<string, string>;
  cache?: RequestCache;
  revalidate?: number | false;
  tags?: string[];
}

export async function apiRequest<T>({
  endpoint,
  method = "GET",
  data,
  params,
  cache = "no-store",
  revalidate,
  tags,
}: RequestOptions): Promise<T> {
  const url = new URL(`${BASE_URL}${endpoint}`);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }

  const token = cookies().get("token");
  console.log(token);

  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
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

  if (!response.ok) {
    throw new Error(`API request failed: ${response.statusText}`);
  }

  return response.json();
}

export function revalidateApiData(tags: string[]) {
  tags.forEach((tag) => revalidateTag(tag));
}
