import type { Metadata } from "next";
import "../style/global.css";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import Header from "@/components/Header";
import { MoviesProvider } from "@/contexts/contextMovies";
import LayoutProviderNotify from "@/components/LayoutProviderNotify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "We-Movies",
  description: "Make your movie purchase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <MoviesProvider>
            <LayoutProviderNotify>{children}</LayoutProviderNotify>
          </MoviesProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
