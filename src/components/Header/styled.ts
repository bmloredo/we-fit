import styled, { css } from "styled-components";
import Link from "next/link";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 1.406rem 15rem;

  @media (max-width: 768px) {
    padding: 1rem;
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
  align-items: center;
`;

export const MyCartBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const TextMyCart = styled.p<EntityStyleGlobal>`
  ${({ weight, color }) => css`
    font-weight: ${weight};
    color: ${color};
  `}
`;
