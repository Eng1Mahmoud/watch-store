import axios from "axios";
import { getTokenClient } from "@/utils/getTokenClient";
import { baseConfig, setContentType, responseInterceptor } from "./utilities";

const axiosClientInstance = axios.create(baseConfig);

axiosClientInstance.interceptors.request.use((config) => {
  const token = getTokenClient();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return setContentType(config);
});

axiosClientInstance.interceptors.response.use(
  (response) => response,
  responseInterceptor,
);

export { axiosClientInstance };
