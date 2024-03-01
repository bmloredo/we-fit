import { api } from "../baseAPI";


export const putMovie = async (dataMovie: Partial<EntityMovies>) => {
  const { id, ...payload } = dataMovie;

  try {
    const { data } = await api.put(`/products/${id}`, payload);
    return data;
  } catch (error) {
    throw error;
  }
};
