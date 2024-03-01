import React from "react";
import { ContainerLoading, Loading } from "./styled";


const LoadingSpinner: React.FC = () => {
  return (
    <ContainerLoading>
      <Loading />
    </ContainerLoading>
  );
};

export default LoadingSpinner;