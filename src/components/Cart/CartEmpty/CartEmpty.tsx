import React from "react";
import { ContainerCartEmpty, ContainerIcon, Row } from "./styled.empty";
import CartEmptyIcon from "../../../../public/Icon/CartEmptyIcon";
import Button from "../../Button/Button";
import { Text } from "../../../style/styledGlobal";
import { useRouter } from "next/navigation";

export default function CartEmpty() {
  const { push } = useRouter();
  return (
    <ContainerCartEmpty>
      <Row>
        <Text fontSize={20} fontWeight={700} textAlign="center">
          Parece que não há nada por aqui :(
        </Text>
        <ContainerIcon>
          <CartEmptyIcon />
        </ContainerIcon>
      </Row>

      <Button onClick={() => push("/")} width="180px">
        <Text fontSize={14} color="#fff">
          Voltar
        </Text>
      </Button>
    </ContainerCartEmpty>
  );
}
