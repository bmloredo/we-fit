import styled from "styled-components";

export const CardContainerRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 10px 11px 10px 11px;
  width: 100%;
  max-width: 19.333rem;
  align-items: center;
  border-radius: 4px;
  background-color: #fff;

  @media (max-width: 768px) {
    max-width: 21.5rem;
  }
`;

export const CardContainerImage = styled.div`
  display: flex;
  gap: 0.438rem;
`;

export const CardContainerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
`;

export const TextCard = styled.div<EntityStyleGlobal>`
  text-align: center;
  font-weight: 700;
  font-size: ${(props) => (props.size ? props.size : "12px")};
  color: ${(props) => props.color};
`;

export const ContainerButton = styled.div<EntityStyleGlobal>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;
  background-color: ${(props) => props.backgroundColor};
`;

export const ContentButton = styled.div`
  display: flex;
  gap: 12px;
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 3px;
`;
