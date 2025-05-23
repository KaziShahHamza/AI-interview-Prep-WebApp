import axios from "axios";
import { BASE_URL } from "./apiPaths";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 80000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accesToken = localStorage.getItem("token");
    // console.log("console accessToken: ", accesToken);
    if (accesToken) {
      config.headers.Authorization = `Bearer ${accesToken}`;
    }
    // console.log("cosole config headers: ", config.headers.Authorization);
    // console.log(config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // console.log("console response: ", response);
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
