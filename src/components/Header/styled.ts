import styled, { css } from "styled-components";
import Link from "next/link";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 1.406rem 0 1.406rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (min-width: 1780px) {
    padding: 1.406rem 9rem 1.406rem 0;
  }

  @media (max-width: 1200px) {
    padding: 1.406rem 1rem 1.406rem 0;
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
