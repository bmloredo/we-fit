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
import { useRouter } from "next/navigation";

const Header: React.FC = () => {
  const { push } = useRouter();
  const { itemsInCart } = useMoviesContext();

  return (
    <Container>
      <LinkHome href="/">WeMovies</LinkHome>
      <ContainerMyCart onClick={() => push("/cart")}>
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
