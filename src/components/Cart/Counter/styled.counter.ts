import styled from "styled-components";

export const ContainerCounter = styled.div`
  display: flex;
  width: 51%;
  max-width: 7.5rem;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 51%;
  }
`;

export const CountButton = styled.div`
  cursor: pointer;
  border-radius: 50%;
`;

export const InputNumber = styled.input`
  width: 100%;
  max-width: 3.875rem;
  min-width: 3.75rem;
  padding: 3.8px 0.75rem;
  border: 1px solid #d9d9d9;
  border-radius: 0.25rem;
  outline: none;
  font-size: 14px;
`;
