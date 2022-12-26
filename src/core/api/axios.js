import axios from "axios";

export const instance = axios.create({
  baseURL: "http://43.201.53.223:8080",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

//인스턴스 request header
instance.interceptors.request.use((config) => {
  if (config.headers === undefined) return;
  const token = localStorage.getItem("id");
  config.headers["Authorization"] = `${token}`;
  return config;
});
