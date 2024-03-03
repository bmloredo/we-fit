"use client";
import React from "react";
import { CardsMovies } from "./CardMovie";
import useMovies from "@/hooks/useMovies";
import LoadingSpinner from "../Loading/Loading";
import { CardContainer } from "./styled.card";

const Cards: React.FC = () => {
  const { data, addItemInCart, loading } = useMovies();

  return loading ? (
    <LoadingSpinner />
  ) : (
    <CardContainer>
      {data.movies.map((movie) => (
        <CardsMovies.Root>
          <CardsMovies.Image image={movie.image} title={movie.title} />
          <CardsMovies.Text title={movie.title} price={movie.price} />
          <CardsMovies.Button movie={movie} addItemInCart={addItemInCart} />
        </CardsMovies.Root>
      ))}
    </CardContainer>
  );
};

export default Cards;
