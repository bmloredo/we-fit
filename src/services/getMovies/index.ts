import { api } from "../baseAPI";

export const getMovies = async (): Promise<EntityMovies[]> => {
  try {
    const { data } = await api.get(`/products`);
    return data;
  } catch (error) {
    throw error;
  }
};
