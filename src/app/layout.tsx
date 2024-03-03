import type { Metadata } from "next";
import "../style/global.css";
import { Open_Sans } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import { MoviesProvider } from "@/contexts/contextMovies";
import LayoutProviderNotify from "@/components/LayoutProviderNotify";

const font = Open_Sans({ subsets: ["latin"] });

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
      <body className={font.className}>
        <StyledComponentsRegistry>
          <MoviesProvider>
            <LayoutProviderNotify>{children}</LayoutProviderNotify>
          </MoviesProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
