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
  removeItem: (data: EntityMovies) => void;
  addItemInCart: (data: EntityMovies, value: number) => void;
}

export default function OrderMobile({
  data,
  removeItem,
  addItemInCart,
}: OrderMobileProps) {
  return (
    <>
      {data.map((movie) => (
        <ContainerOrderMobile>
          <Image src={movie.image} alt={movie.title} width={64} height={82} />
          <ContainerInformation>
            <InformationMovie>
              <Text color="#2F2E41" fontWeight={700} fontSize={14}>
                {movie.title}
              </Text>
              <Text color="#2F2E41" fontSize={16} fontWeight={700}>
                R$ {formatPrice(movie.price)}
              </Text>
              <ContainerIcon onClick={() => removeItem(movie)}>
                <Trash />
              </ContainerIcon>
            </InformationMovie>
            <ContainerCounter>
              <Counter
                value={movie.quantity_in_shopping_cart}
                handleChange={(e) => addItemInCart(movie, e)}
              />
              <ContainerSubTotal>
                <Text color="#999" fontSize={12} fontWeight={700}>
                  SUBTOTAL
                </Text>
                <Text color="#2F2E41" fontWeight={700}>
                  R${" "}
                  {formatPrice(movie.price * movie.quantity_in_shopping_cart)}
                </Text>
              </ContainerSubTotal>
            </ContainerCounter>
          </ContainerInformation>
        </ContainerOrderMobile>
      ))}
    </>
  );
}
