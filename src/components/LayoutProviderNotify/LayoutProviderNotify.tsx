"use client";

import React from "react";
import { SnackbarProvider } from "notistack";
import Header from "../Header";

const LayoutProviderNotify: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <SnackbarProvider>
      <Header />
      {children}
    </SnackbarProvider>
  );
};

export default LayoutProviderNotify;
