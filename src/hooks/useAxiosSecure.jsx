import axios from "axios";
import { useEffect } from "react";

export const axiosSecure = axios.create({
  baseURL: import.meta.env.PROD
    ? import.meta.env.VITE_PROD_API
    : import.meta.env.VITE_DEVELOPMENT_API,
  withCredentials: true,
});

const useAxiosSecure = () => {
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => res,
      (error) => {
        if (error.response?.status === 401 || error.response?.status === 403) {
          console.log("error from token");
        }

        return Promise.reject(error);
      }
    );
  },[])

  return axiosSecure;
};

export default useAxiosSecure;
