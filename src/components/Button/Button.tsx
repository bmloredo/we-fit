import React from "react";
import { ButtonContainer } from "./styled.button";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  width?: string;
}

export default function Button({ children, onClick, width }: ButtonProps) {
  return (
    <ButtonContainer onClick={onClick} width={width}>
      {children}
    </ButtonContainer>
  );
}
