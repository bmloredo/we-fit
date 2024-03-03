import useMovies from "@/hooks/useMovies";
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
  addItemInCart: (data: EntityMovies, value: number) => void;
}

const CardButton = ({ movie, addItemInCart }: CardButtonProps) => {
  return (
    <ContainerButton
      backgroundColor={movie.in_shopping_cart ? "#039B00" : "#009EDD"}
      onClick={() => addItemInCart(movie, movie.quantity_in_shopping_cart + 1)}
    >
      <ContentButton>
        <QuantityContainer>
          <ShoppingCart />
          <TextCard color="#fff">{movie.quantity_in_shopping_cart}</TextCard>
        </QuantityContainer>
        <TextCard color="#fff">
          {movie.in_shopping_cart ? "ITEM ADICIONADO" : "ADICIONAR AO CARRINHO"}
        </TextCard>
      </ContentButton>
    </ContainerButton>
  );
};

export default CardButton;
