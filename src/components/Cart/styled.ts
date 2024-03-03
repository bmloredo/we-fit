import styled from "styled-components";

export const ContainerProducts = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 21px;
  border-radius: 4px;
  background-color: #fff;
`;

export const Purshase = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #999;
  padding-top: 21px;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const ContainerTotal = styled.div`
  padding: 0 16px;
  gap: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 768px) {
    gap: 16px;
  }
`;
