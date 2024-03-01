import React, { ReactNode } from "react";
import { CardContainerRoot } from "./styled";

interface CardRootProps {
  children: ReactNode;
}

const CardRoot = ({children} : CardRootProps) => {
  return <CardContainerRoot>{children}</CardContainerRoot>;
};

export default CardRoot;
