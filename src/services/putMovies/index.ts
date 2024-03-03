import { api } from "../baseAPI";

export const putMovie = async (dataMovie: Partial<EntityMovies>) => {
  const { id, ...payload } = dataMovie;

  try {
    const { data, status } = await api.put(`/products/${id}`, payload);
    return { data, status };
  } catch (error) {
    throw error;
  }
};
