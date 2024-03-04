type EntityMovies = {
  id: number;
  title: string;
  price: number;
  image: string;
  movie_in_cart: boolean;
  quantity_movie_in_cart: number;
};

interface MoviesData {
  movies: EntityMovies[];
  moviesInCart: EntityMovies[];
  priceTotalCart: number;
}

interface UseMoviesReturn {
  loading: boolean;
  fetchMovies: () => Promise<void>;
  addMovieToCart: (data: EntityMovies, quantity: number) => Promise<void>;
  removeMovieFromCart: (data: EntityMovies) => Promise<void>;
  clearCart: () => Promise<void>;
  data: MoviesData;
}
