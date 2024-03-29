"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import useMovies from "@/hooks/useMovies";
import { Text } from "@/style/styledGlobal";
import ConfirmPurchase from "../../../public/Icon/ConfirmPurchase";
import Button from "@/components/Button";
import { Container } from "./styled";
import Loading from "../Loading/Loading";

export default function Purchase() {
  const { push } = useRouter();
  const { loading } = useMovies();

  return loading ? (
    <Loading />
  ) : (
    <Container>
      <Text textAlign="center" fontSize={20} fontWeight={700}>
        Compra realizada com sucesso!
      </Text>

      <ConfirmPurchase />

      <Button onClick={() => push("/")} width="180px">
        <Text color="#fff" fontWeight={700} cursorPointer>
          Voltar
        </Text>
      </Button>
    </Container>
  );
}
