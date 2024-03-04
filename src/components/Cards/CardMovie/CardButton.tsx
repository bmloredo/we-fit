import React from "react";
import {
  ContainerButton,
  ContentButton,
  QuantityContainer,
  TextCard,
} from "./styled";
import ShoppingCart from "../../../../public/Icon/ShoppingCart";

interface CardButtonProps {
  movie: EntityMovies;
  addMovieToCart: (data: EntityMovies, value: number) => void;
}

const CardButton = ({ movie, addMovieToCart }: CardButtonProps) => {
  return (
    <ContainerButton
      backgroundColor={movie.movie_in_cart ? "#039B00" : "#009EDD"}
      onClick={() => addMovieToCart(movie, movie.quantity_movie_in_cart + 1)}
    >
      <ContentButton>
        <QuantityContainer>
          <ShoppingCart />
          <TextCard color="#fff">{movie.quantity_movie_in_cart}</TextCard>
        </QuantityContainer>
        <TextCard color="#fff">
          {movie.movie_in_cart ? "ITEM ADICIONADO" : "ADICIONAR AO CARRINHO"}
        </TextCard>
      </ContentButton>
    </ContainerButton>
  );
};

export default CardButton;
