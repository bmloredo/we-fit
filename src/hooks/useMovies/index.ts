import { useMoviesContext } from "@/contexts/contextMovies";
import { getMovies } from "@/services/getMovies";
import { putMovie } from "@/services/putMovies";
import { enqueueSnackbar } from "notistack";
import { useCallback, useEffect, useState } from "react";

const useMovies = () => {
  const { setItemsInCart } = useMoviesContext();

  const [loading, setLoading] = useState(false);

  const [movies, setMovies] = useState<EntityMovies[]>([]);
  const [moviesInCart, setMoviesInCart] = useState<EntityMovies[]>([]);
  const [trigger, setTrigger] = useState(false);

  const dispatchTrigger = () => setTrigger(!trigger);

  const fetchMovies = useCallback(async () => {
    movies.length === 0 && setLoading(true);

    try {
      if (movies.length === 0) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      const data = await getMovies();
      setMovies(data);

      const itemsInCart = data.filter((i) => i.in_shopping_cart);
      setMoviesInCart(itemsInCart);

      setItemsInCart(itemsInCart.length);
    } catch (error) {
      setLoading(false);
      enqueueSnackbar("Filmes não encontrados!");
    } finally {
      setLoading(false);
    }
  }, [movies, setItemsInCart]);

  const priceTotalCart = moviesInCart.reduce(
    (total, objeto) => total + objeto.price * objeto.quantity_in_shopping_cart,
    0
  );

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger]);

  const clearCart = () => {
    const loopMovies = moviesInCart.map(async (movie) => {
      const { in_shopping_cart, quantity_in_shopping_cart, ...prev } = movie;

      try {
        const response = await putMovie({
          in_shopping_cart: false,
          quantity_in_shopping_cart: 0,
          ...prev,
        });

        return 500;
      } catch (error) {
        enqueueSnackbar("Não foi possível finalizar compra, tente novamente!");
      }
    });

    console.log(loopMovies, "loopMovies");

    setItemsInCart(0);

    return loopMovies;
  };

  const removeItem = async (data: EntityMovies) => {
    const { quantity_in_shopping_cart, ...prev } = data;

    const payload = {
      ...prev,
      quantity_in_shopping_cart: 0,
      in_shopping_cart: false,
    };

    try {
      putMovie(payload);
      dispatchTrigger();
    } catch (error) {
      console.log(error);
    }
  };

  const addItemInCart = async (data: EntityMovies, value: number) => {
    const { quantity_in_shopping_cart, in_shopping_cart, ...prev } = data;

    const payload = {
      ...prev,
      quantity_in_shopping_cart: value,
      in_shopping_cart: true,
    };

    try {
      putMovie(payload);
      dispatchTrigger();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    clearCart,
    removeItem,
    fetchMovies,
    addItemInCart,
    dispatchTrigger,
    loading,
    data: {
      movies,
      moviesInCart,
      priceTotalCart,
    },
  };
};

export default useMovies;
