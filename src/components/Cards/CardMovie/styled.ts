import styled from "styled-components";

export const CardContainerRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 10px 11px 10px 11px;
  width: 100%;
  max-width: 21.5rem;
  align-items: center;
  border-radius: 4px;
  background-color: #fff;
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
`

export const TextCard = styled.div`
    font-family: 'Open Sans';
    text-align: center;
`