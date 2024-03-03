import styled from "styled-components";

export const ButtonContainer = styled.div<{ width?: string }>`
  display: flex;
  padding: 8px;
  align-items: center;
  justify-content: center;
  background-color: #009edd;
  border-radius: 4px;
  cursor: pointer;
  width: ${(props) => props.width || "auto"};
`;
