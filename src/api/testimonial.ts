import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_URL + "/testimonials";

export const getTestimonials = () => axios.get(BASE_URL);
export const createTestimonial = (data: any) => axios.post(BASE_URL, data);
export const deleteTestimonial = (idx: number) =>
  axios.delete(`${BASE_URL}/${idx}`);
