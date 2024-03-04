import { useCallback, useEffect, useState } from "react";
import { useMoviesContext } from "@/contexts/contextMovies";
import { getMovies } from "@/services/getMovies";
import { putMovie } from "@/services/putMovies";
import { enqueueSnackbar } from "notistack";

const useMovies = (): UseMoviesReturn => {
  const { setItemsInCart } = useMoviesContext();

  const [loading, setLoading] = useState<boolean>(false);
  const [moviesData, setMoviesData] = useState<MoviesData>({
    movies: [],
    moviesInCart: [],
    priceTotalCart: 0,
  });

  const fetchMovies = useCallback(async (): Promise<void> => {
    try {
      setLoading(true);

      if (moviesData.movies.length === 0) {
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }

      const data = await getMovies();
      const itemsInCart = data.filter((item) => item.movie_in_cart);
      setMoviesData({
        movies: data,
        moviesInCart: itemsInCart,
        priceTotalCart: calculateTotalPrice(data),
      });
      setItemsInCart(itemsInCart.length);
    } catch (error) {
      enqueueSnackbar("Filmes não encontrados!", { variant: "error" });
    } finally {
      setLoading(false);
    }
  }, [setItemsInCart]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const calculateTotalPrice = (movies: EntityMovies[]): number => {
    return movies.reduce(
      (total, movie) => total + movie.price * movie.quantity_movie_in_cart,
      0
    );
  };

  const updateMovieInCart = async (
    updatedMovie: EntityMovies
  ): Promise<void> => {
    try {
      const updatedMovies = moviesData.movies.map((movie) =>
        movie.id === updatedMovie.id ? updatedMovie : movie
      );
      const updatedMoviesInCart = updatedMovies.filter(
        (movie) => movie.movie_in_cart
      );
      setMoviesData({
        movies: updatedMovies,
        moviesInCart: updatedMoviesInCart,
        priceTotalCart: calculateTotalPrice(updatedMovies),
      });
      setItemsInCart(updatedMoviesInCart.length);
      await putMovie(updatedMovie);
    } catch (error) {
      enqueueSnackbar("Erro ao atualizar Item", { variant: "error" });
    }
  };

  const addMovieToCart = async (
    data: EntityMovies,
    quantity: number
  ): Promise<void> => {
    const updatedMovie = {
      ...data,
      quantity_movie_in_cart: quantity,
      movie_in_cart: true,
    };
    await updateMovieInCart(updatedMovie);
  };

  const removeMovieFromCart = async (data: EntityMovies): Promise<void> => {
    const updatedMovie = {
      ...data,
      quantity_movie_in_cart: 0,
      movie_in_cart: false,
    };
    await updateMovieInCart(updatedMovie);
  };

  const clearCart = async (): Promise<void> => {
    try {
      const clearedMovies = moviesData.movies.map((movie) => ({
        ...movie,
        quantity_movie_in_cart: 0,
        movie_in_cart: false,
      }));
      setMoviesData({
        movies: clearedMovies,
        moviesInCart: [],
        priceTotalCart: 0,
      });
      await Promise.all(clearedMovies.map((movie) => putMovie(movie)));
      setItemsInCart(0);
    } catch (error) {
      enqueueSnackbar("Erro ao limpar carrinho", { variant: "error" });
    }
  };

  return {
    loading,
    fetchMovies,
    addMovieToCart,
    removeMovieFromCart,
    clearCart,
    data: moviesData,
  };
};

export default useMovies;
