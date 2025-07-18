import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_URL + "/orders";

export const createOrder = (data: any) => axios.post(BASE_URL, data);
export const getOrders = () => axios.get(BASE_URL);
