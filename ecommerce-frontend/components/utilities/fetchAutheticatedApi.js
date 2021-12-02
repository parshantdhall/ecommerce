import axios from "axios";
import { getSession } from "next-auth/client";

const fetchAuthenticatedApi = axios.create({
  baseURL: process.env.BACKEND_BASE_URL,
});

fetchAuthenticatedApi.interceptors.request.use(
  async (config) => {
    const session = await getSession();
    config.headers.Authorization = `Bearer ${session?.accessToken}`;
    return config;
  },
  (error) => {
    console.log(error);
  }
);

export default fetchAuthenticatedApi;
