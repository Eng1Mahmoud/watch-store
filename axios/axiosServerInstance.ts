import axios from "axios";
import { getTokenServer } from "@/utils/getTokenServer";
import { cookies } from "next/headers";
import {
  baseConfig,
  setContentType,
  responseInterceptorError,
  responseInterceptorSuccess,
} from "./utilities";

const axiosServerInstance = axios.create(baseConfig);

axiosServerInstance.interceptors.request.use((config) => {
  const token = getTokenServer();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  // Get locale from cookies and set it to the headers
  const locale = cookies().get("NEXT_LOCALE")?.value;
  if (locale) {
    config.headers["Accept-Language"] = locale;
  }
  return setContentType(config);
});

axiosServerInstance.interceptors.response.use(
  responseInterceptorSuccess,
  responseInterceptorError,
);

export { axiosServerInstance };
