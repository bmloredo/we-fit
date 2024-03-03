"use client";
import useMovies from "@/hooks/useMovies";
import React from "react";
import LoadingSpinner from "../Loading/Loading";
import { ContainerProducts, Purshase, ContainerTotal } from "./styled";
import CartEmpty from "./CartEmpty";
import { formatPrice } from "@/utils/formatPrice";
import { Text } from "../../style/styledGlobal";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import Table from "./Table";

export default function CartMovies() {
  const { data, loading, addItemInCart, removeItem, clearCart } = useMovies();
  const { push } = useRouter();

  const FinalizePurchase = async () => {
    clearCart();

    push("/finalize-purchase");
  };

  return loading ? (
    <LoadingSpinner />
  ) : data.moviesInCart.length === 0 ? (
    <CartEmpty />
  ) : (
    <ContainerProducts>
      <Table
        data={data.moviesInCart}
        addItemInCart={addItemInCart}
        removeItem={removeItem}
      />

      <Purshase>
        <Button onClick={FinalizePurchase}>
          <Text
            color="#fff"
            textTransform="uppercase"
            fontWeight={700}
            cursorPointer
          >
            finalizar pedido
          </Text>
        </Button>
        <ContainerTotal>
          <Text color="#999" fontWeight={700} textTransform="uppercase">
            Total
          </Text>
          <Text fontSize={24} fontWeight={700}>
            R$ {formatPrice(data.priceTotalCart)}
          </Text>
        </ContainerTotal>
      </Purshase>
    </ContainerProducts>
  );
}
