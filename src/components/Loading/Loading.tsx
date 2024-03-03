import React from "react";
import { ContainerLoading, LoadingFrame } from "./styled";

const Loading: React.FC = () => {
  return (
    <ContainerLoading>
      <LoadingFrame />
    </ContainerLoading>
  );
};

export default Loading;
