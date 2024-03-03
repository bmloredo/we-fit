"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface MoviesContextType {
  itemsInCart: number;
  setItemsInCart: (count: number) => void;
  isMobile: boolean;
}

const MoviesContext = createContext<MoviesContextType | null>(null);

interface MoviesProviderProps {
  children: ReactNode;
}

export const MoviesProvider: React.FC<MoviesProviderProps> = ({ children }) => {
  const [itemsInCart, setItemsInCart] = useState<number>(0);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    handler(); // Inicializa no carregamento

    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <MoviesContext.Provider value={{ itemsInCart, setItemsInCart, isMobile }}>
      {children}
    </MoviesContext.Provider>
  );
};

export const useMoviesContext = (): MoviesContextType => {
  const context = useContext(MoviesContext);
  if (!context) {
    throw new Error(
      "Check if the component where you are trying to access useMovies is inside MoviesProvider"
    );
  }
  return context;
};
