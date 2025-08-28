import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080",
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("access");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const verifyToken = () => API.get("/protect/");
export const loginUser = (data) => API.post("/api/login/", data);
export const signupUser = (data) => API.post("/api/signup/", data);

export default API;
