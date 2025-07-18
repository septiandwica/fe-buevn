import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_URL + "/products";

export const getProducts = () => axios.get(BASE_URL);
export const getProductById = (id: string | number) =>
  axios.get(`${BASE_URL}/${id}`);
export const createProduct = (data: any) => axios.post(BASE_URL, data);
export const updateProduct = (id: string | number, data: any) =>
  axios.put(`${BASE_URL}/${id}`, data);
export const deleteProduct = (id: string | number) =>
  axios.delete(`${BASE_URL}/${id}`);
