import axios from "axios";
const fetchApi = axios.create({
  baseURL: process.env.BACKEND_BASE_URL,
});

export default fetchApi;
