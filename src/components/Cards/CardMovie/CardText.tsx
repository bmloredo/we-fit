import { formatPrice } from "@/utils/formatPrice";
import React from "react";
import { CardContainerText, TextCard } from "./styled";

interface CardTextProps {
  title: string;
  price: number;
}

const CardText = ({ title, price }: CardTextProps) => {
  return (
    <CardContainerText>
      <TextCard color="#333333">{title}</TextCard>
      <TextCard color="#2F2E41" size="16px">
        R$ {formatPrice(price)}
      </TextCard>
    </CardContainerText>
  );
};

export default CardText;
