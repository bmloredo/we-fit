import React from "react";
import { ContainerCartEmpty, ContainerIcon } from "./styled.empty";
import CartEmptyIcon from "../../../../public/Icon/CartEmptyIcon";
import Button from "../../Button/Button";
import { Text } from "../../../style/styledGlobal";
import { useRouter } from "next/navigation";

export default function CartEmpty() {
  const { push } = useRouter();
  return (
    <ContainerCartEmpty>
      <Text fontSize={20} fontWeight={700}>
        Parece que não há nada por aqui :(
      </Text>
      <ContainerIcon>
        <CartEmptyIcon />
      </ContainerIcon>
      <Button onClick={() => push("/")}>
        <Text fontSize={14} color="#fff">
          Voltar
        </Text>
      </Button>
    </ContainerCartEmpty>
  );
}
