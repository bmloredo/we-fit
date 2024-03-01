"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface MoviesContextType {
  itemsInCart: number;
  setItemsInCart: (count: number) => void;
}

const MoviesContext = createContext<MoviesContextType | null>(null);

interface MoviesProviderProps {
  children: ReactNode;
}

export const MoviesProvider: React.FC<MoviesProviderProps> = ({ children }) => {
  const [itemsInCart, setItemsInCart] = useState<number>(0);

  return (
    <MoviesContext.Provider value={{ itemsInCart, setItemsInCart }}>
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
