import api from "../instance.js";

export const getTravels = async () => {
  const data = await api.get("trips");

  return data;
};
