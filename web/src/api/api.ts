import { currentToken } from "@/lib/auth";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://nginx_next/backend-api",
});

instance.interceptors.request.use(
  async (config) => {
    const token = await currentToken();

    if (token) {
      config.headers["x-access-token"] = `${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
