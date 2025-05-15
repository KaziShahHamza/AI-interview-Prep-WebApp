import axios from "axios";
import { BASE_URL } from "./apiPaths";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 8000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accesToken = localStorage.getItem("token");
    if (accesToken) {
      config.headers.Authorization = `Bearer ${accesToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 400) {
        window.location.href = "/";
      } else if (error.response.status === 500) {
        console.log("Server Error, Please try again.");
      }
    } else if (error.code === "ECONNABORTED") {
      console.log("Request timeout, Please try again.");
    }
  }
);


export default axiosInstance;