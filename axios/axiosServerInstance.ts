import axios from "axios";
import { getTokenServer } from "@/utils/getTokenServer";
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
  return setContentType(config);
});

axiosServerInstance.interceptors.response.use(
  responseInterceptorSuccess,
  responseInterceptorError,
);

export { axiosServerInstance };
