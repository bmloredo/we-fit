import styled, { css } from "styled-components";
import Link from "next/link";

export const Container = styled.div`
  z-index: 9999;
  color: #fff;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  position: "fixed";


  @media (min-width: 992px) {
    padding: 1.125rem 15.313rem;

    .text-my-cart {
      display: initial;
    }
  }
`;


export const LinkHome = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
`;

export const ContainerMyCart = styled.div`
  display: flex;
  cursor: pointer;
  gap: 8px;
`

export const MyCartBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const TextMyCart = styled.p<EntityStyleGlobal>`
  ${({
    weight,
    color,
  }) => css`
      font-weight: ${weight};
      color: ${color};
  `}
`