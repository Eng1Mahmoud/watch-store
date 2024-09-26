import { redirect } from "next/navigation";

export const baseConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
};

export const setContentType = (config: any) => {
  config.headers["Content-Type"] = "application/json";
  return config;
};

export const responseInterceptor = (error: any) => {
  if (
    error.response &&
    (error.response.status === 401 || error.response.status === 403)
  ) {
    console.log(error.response);
    if (typeof window === "undefined") {
      // Server-side: use Next.js redirect
      redirect("/login");
    } else {
      // Client-side: use window.location
      window.location.href = "/login";
    }
  }
  return Promise.reject(error);
};
