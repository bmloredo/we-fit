"use client";

import React from "react";
import {
  Container,
  ContainerMyCart,
  LinkHome,
  MyCartBox,
  TextMyCart,
} from "./styled";
import ShoppingBag from "../../../public/Icon/ShoppingBag";
import { useMoviesContext } from "@/contexts/contextMovies";

const Header: React.FC = () => {
  const { itemsInCart } = useMoviesContext();

  return (
    <Container>
      <LinkHome href="/">WeMovies</LinkHome>
      <ContainerMyCart>
        <MyCartBox>
          <TextMyCart weight={600}>Meu carrinho</TextMyCart>
          <TextMyCart color="#999">{itemsInCart} itens</TextMyCart>
        </MyCartBox>
        <ShoppingBag />
      </ContainerMyCart>
    </Container>
  );
};

export default Header;
