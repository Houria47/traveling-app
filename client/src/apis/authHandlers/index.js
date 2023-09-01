import api from "../instance.js";

export const login = async (payload) => {
  const data = await api.post("/login", payload);
  return data;
};
export const signup = async (payload) => {
  const data = await api.post("/signup", payload);
  return data;
};
