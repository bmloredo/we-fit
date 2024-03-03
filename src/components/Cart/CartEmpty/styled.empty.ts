import styled from "styled-components";

export const ContainerCartEmpty = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  border-radius: 4px;
  align-items: center;
  background-color: #fff;
  padding-bottom: 64px;
`;

export const Row = styled.div`
  padding: 64px 64px 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
  border-bottom: 1.3px solid #3f3d56;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ContainerIcon = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  max-width: 28rem;
  align-items: center;
`;
