"use server";
import axios from "axios";
import { getTokenClient } from "@/utils/getTokenClient";
import { getTokenServer } from "@/utils/getTokenServer";
import { customRedirect } from "@/i18n/routing";

const baseConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
};

// Server-side Axios instance
const axiosServerInstance = axios.create(baseConfig);

// Client-side Axios instance
const axiosClientInstance = axios.create(baseConfig);

// Set content type to JSON for both instances
const setContentType = (config: any) => {
  config.headers["Content-Type"] = "application/json";
  return config;
};

// Server-side request interceptor
axiosServerInstance.interceptors.request.use((config) => {
  const token = getTokenServer();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return setContentType(config);
});

// Client-side request interceptor
axiosClientInstance.interceptors.request.use((config) => {
  const token = getTokenClient();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return setContentType(config);
});

// Response interceptor for both instances
const responseInterceptor = (error: any) => {
  if (
    error.response &&
    (error.response.status === 401 || error.response.status === 403)
  ) {
    if (typeof window === "undefined") {
      // Server-side: use Next.js redirect
      customRedirect("/login");
    } else {
      // Client-side: get current language from pathname and redirect
      const currentLang = window.location.pathname.split("/")[1];
      console.log("currentLang>>>", currentLang);
      window.location.href = `/${currentLang}/login`;
    }
  }
  return Promise.reject(error);
};

axiosServerInstance.interceptors.response.use(
  (response) => response,
  responseInterceptor,
);
axiosClientInstance.interceptors.response.use(
  (response) => response,
  responseInterceptor,
);

export { axiosServerInstance, axiosClientInstance };
