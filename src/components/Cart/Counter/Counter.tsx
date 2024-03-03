import React from "react";
import AddCount from "../../../../public/Icon/AddCount";
import RemoveCount from "../../../../public/Icon/RemoveCount";
import { ContainerCounter, CountButton, InputNumber } from "./styled.counter";

const Counter: React.FC<{
  value: number;
  handleChange: (e: number) => void;
}> = ({ value = 1, handleChange }) => {
  return (
    <ContainerCounter>
      <CountButton onClick={() => value !== 1 && handleChange(value - 1)}>
        <RemoveCount />
      </CountButton>

      <InputNumber type="number" value={value} readOnly />

      <CountButton onClick={() => handleChange(value + 1)}>
        <AddCount />
      </CountButton>
    </ContainerCounter>
  );
};

export default Counter;
