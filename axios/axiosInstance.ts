import axios from "axios";
import { getCookie } from "cookies-next";
import { redirect } from "next/navigation";
const axiosInstance = axios.create({
  baseURL: "https://api.example.com",
});

axiosInstance.defaults.headers.post["Content-Type"] = "application/json";

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    const token = getCookie("token");
    config.headers.Authorization = token;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // chexk if the response is 401 or 403 and redirect to login page and logout the user
    if (response.status === 401 || response.status === 403) {
      redirect("/login");
    }
    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default axiosInstance;
