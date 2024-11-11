import { customRedirect } from "./../i18n/routing";
import { toast } from "react-toastify";
export const baseConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
};

export const setContentType = (config: any) => {
  config.headers["Content-Type"] = "application/json";
  return config;
};

export const responseInterceptorError = (error: any) => {
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
      window.location.href = `/${currentLang}/login`;
    }
  }
  // show error message from response if request type is not get and in client side and if array of message show each message
  const requestType = error.response.config.method; // get type of request (get, post, put, delete)
  if (typeof window !== "undefined") {
    // check if in client side
    if (requestType !== "get") {
      // check if request type is not get
      if (error.response.data.message) {
        // chech message is array of string or string
        if (Array.isArray(error.response.data.message)) {
          // loop on array and show each message
          error.response.data.message.forEach((message: string) => {
            toast.error(message);
          });
        } else {
          toast.error(error.response.data.message);
        }
      }
    }
  }
  return Promise.reject(error);
};

export const responseInterceptorSuccess = (response: any) => {
  // how know response come from request type get or post or put or delete
  const requestType = response.config.method;
  if (typeof window !== "undefined") {
    // client side
    if (requestType !== "get") {
      toast.success(response.data.message);
    }
  }
  return response;
};
