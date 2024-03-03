"use client";
import useMovies from "@/hooks/useMovies";
import React from "react";
import { ContainerProducts, Purshase, ContainerTotal } from "./styled";
import CartEmpty from "./CartEmpty";
import { formatPrice } from "@/utils/formatPrice";
import { Text } from "../../style/styledGlobal";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import Table from "./Table";
import { useMoviesContext } from "@/contexts/contextMovies";
import OrderMobile from "./OrderMobile";
import Loading from "../Loading/Loading";

export default function CartMovies() {
  const { data, loading, addItemInCart, removeItem, clearCart } = useMovies();
  const { push } = useRouter();
  const { isMobile } = useMoviesContext();

  const FinalizePurchase = async () => {
    clearCart();
    push("/finalize-purchase");
  };

  return loading ? (
    <Loading />
  ) : data.moviesInCart.length === 0 ? (
    <CartEmpty />
  ) : (
    <ContainerProducts>
      {!isMobile ? (
        <Table
          data={data.moviesInCart}
          addItemInCart={addItemInCart}
          removeItem={removeItem}
        />
      ) : (
        <OrderMobile
          addItemInCart={addItemInCart}
          removeItem={removeItem}
          data={data.moviesInCart}
        />
      )}

      <Purshase>
        <Button
          onClick={FinalizePurchase}
          width={!isMobile ? "14.714rem" : "100%"}
        >
          <Text color="#fff" fontWeight={700} cursorPointer>
            FINALIZAR PEDIDO
          </Text>
        </Button>
        <ContainerTotal>
          <Text color="#999" fontWeight={700} fontSize={14}>
            TOTAL
          </Text>
          <Text fontSize={24} fontWeight={700}>
            R$ {formatPrice(data.priceTotalCart)}
          </Text>
        </ContainerTotal>
      </Purshase>
    </ContainerProducts>
  );
}
