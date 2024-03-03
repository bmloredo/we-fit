"use client";

import React from "react";
import { SnackbarProvider } from "notistack";
import Header from "../Header";
import { ContainerLayoutProvider } from "./styled.layout";

const LayoutProviderNotify: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <SnackbarProvider>
      <ContainerLayoutProvider>
        <Header />
        {children}
      </ContainerLayoutProvider>
    </SnackbarProvider>
  );
};

export default LayoutProviderNotify;
