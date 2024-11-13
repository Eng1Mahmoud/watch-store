import axios from "axios";
import { getTokenClient } from "@/utils/getTokenClient";
import { getCookie } from "cookies-next";
import {
  baseConfig,
  setContentType,
  responseInterceptorSuccess,
  responseInterceptorError,
} from "./utilities";

const axiosClientInstance = axios.create(baseConfig);

axiosClientInstance.interceptors.request.use((config) => {
  const token = getTokenClient();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  // Get locale from cookies and set it to the headers
  const locale = getCookie("NEXT_LOCALE");
  if (locale) {
    config.headers["Accept-Language"] = locale;
  }
  return setContentType(config);
});

axiosClientInstance.interceptors.response.use(
  responseInterceptorSuccess,
  responseInterceptorError,
);

export { axiosClientInstance };
