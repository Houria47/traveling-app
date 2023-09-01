import api from "../instance.js";

export const getTravelServices = async (payload) => {
  const data = await api.post("tripServices", { tripId: payload });
  return data;
};
