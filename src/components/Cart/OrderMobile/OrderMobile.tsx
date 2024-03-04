import React from "react";
import {
  ContainerCounter,
  ContainerIcon,
  ContainerInformation,
  ContainerOrderMobile,
  ContainerSubTotal,
  InformationMovie,
} from "./styled.order-mobile";
import Image from "next/image";
import { Text } from "@/style/styledGlobal";
import { formatPrice } from "@/utils/formatPrice";
import Trash from "../../../../public/Icon/Trash";
import Counter from "../Counter";

interface OrderMobileProps {
  data: EntityMovies[];
  removeMovieFromCart: (data: EntityMovies) => void;
  addMovieToCart: (data: EntityMovies, value: number) => void;
}

export default function OrderMobile({
  data,
  removeMovieFromCart,
  addMovieToCart,
}: OrderMobileProps) {
  return (
    <>
      {data.map((movie) => (
        <ContainerOrderMobile key={movie.id}>
          <Image src={movie.image} alt={movie.title} width={64} height={82} />
          <ContainerInformation>
            <InformationMovie>
              <Text color="#2F2E41" fontWeight={700} fontSize={14}>
                {movie.title}
              </Text>
              <Text color="#2F2E41" fontSize={16} fontWeight={700}>
                R$ {formatPrice(movie.price)}
              </Text>
              <ContainerIcon onClick={() => removeMovieFromCart(movie)}>
                <Trash />
              </ContainerIcon>
            </InformationMovie>
            <ContainerCounter>
              <Counter
                value={movie.quantity_movie_in_cart}
                handleChange={(e) => addMovieToCart(movie, e)}
              />
              <ContainerSubTotal>
                <Text color="#999" fontSize={12} fontWeight={700}>
                  SUBTOTAL
                </Text>
                <Text color="#2F2E41" fontWeight={700}>
                  R$ {formatPrice(movie.price * movie.quantity_movie_in_cart)}
                </Text>
              </ContainerSubTotal>
            </ContainerCounter>
          </ContainerInformation>
        </ContainerOrderMobile>
      ))}
    </>
  );
}
