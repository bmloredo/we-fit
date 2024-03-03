import styled from "styled-components";

export const TableMain = styled.table`
  display: inline-table;
  width: 100%;
`;

export const HeadCell = styled.td<{ width?: string }>`
  padding-bottom: 1.375rem;
  width: 40%;
`;

export const Cell = styled.td<{ width?: string }>`
  width: auto;
  padding-bottom: 1.375rem;
`;

export const ContainerProductTable = styled.div`
  display: flex;
  align-items: center;
  gap: 52px;
`;

export const RemoveButton = styled.div`
  cursor: pointer;
  width: fit-content;
  transition: 200ms;
  border-radius: 50%;

  &:hover {
    box-shadow: 0px 0px 4px 8px rgba(0, 0, 0, 0.05);
  }
`;
