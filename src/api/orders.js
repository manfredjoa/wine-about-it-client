import api from "./apiConfig.js";

export const createOrder = async (orderData) => {
  try {
    const resp = await api.post("/order", orderData);
    const order = resp.data;
    return order;
  } catch (error) {
    throw error;
  }
};
