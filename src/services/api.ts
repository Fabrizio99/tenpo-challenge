import axios from "axios";

import { getToken } from "@/utils/token";
import { ENDPOINT } from "@/config/api";

export const api = axios.create({
  baseURL: ENDPOINT, // puedes cambiarlo por cualquier API pública o fake
});

api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
