import React from "react";
import { Text } from "../../../style/styledGlobal";
import Image from "next/image";
import { formatPrice } from "@/utils/formatPrice";
import {
  HeadCell,
  TableMain,
  Cell,
  ContainerProductTable,
  RemoveButton,
} from "./styled.table";
import Counter from "../Counter";
import Trash from "../../../../public/Icon/Trash";

interface TableProps {
  data: EntityMovies[];
  addMovieToCart: (data: EntityMovies, value: number) => void;
  removeMovieFromCart: (data: EntityMovies) => void;
}

export default function Table({
  data,
  addMovieToCart,
  removeMovieFromCart,
}: TableProps) {
  const headers = ["produto", "qtd", "subtotal", ""];

  return (
    <TableMain>
      <thead>
        <tr>
          {headers.map((header: string, index) => (
            <HeadCell key={index} align="left">
              <Text color="#999" fontWeight={700} textTransform="uppercase">
                {header}
              </Text>
            </HeadCell>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <Cell>
              <ContainerProductTable>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={89}
                  height={114}
                />
                <div>
                  <Text fontWeight={700} fontSize={14} color="#2F2E41">
                    {item.title}
                  </Text>
                  <Text fontWeight={700} fontSize={16} color="#2F2E41">
                    R$ {formatPrice(item.price)}
                  </Text>
                </div>
              </ContainerProductTable>
            </Cell>
            <Cell>
              <Counter
                value={item.quantity_movie_in_cart}
                handleChange={(value) => addMovieToCart(item, value)}
              />
            </Cell>
            <Cell>
              <Text fontSize={16} fontWeight={700}>
                R$ {formatPrice(item.price * item.quantity_movie_in_cart)}
              </Text>
            </Cell>
            <Cell>
              <RemoveButton onClick={() => removeMovieFromCart(item)}>
                <Trash />
              </RemoveButton>
            </Cell>
          </tr>
        ))}
      </tbody>
    </TableMain>
  );
}
