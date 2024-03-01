import Image from "next/image";
import React from "react";
import { CardContainerImage } from "./styled";

interface CardaImageProps {
  image: string;
  title: string;
}

const CardImage = ({ image, title }: CardaImageProps) => {
  return (
    <CardContainerImage>
      <Image src={image} alt={title} width={147} height={188} />
    </CardContainerImage>
  );
};

export default CardImage;
