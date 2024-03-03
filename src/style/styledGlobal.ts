import styled, { css } from "styled-components";

export const Text = styled.p<EntityTextProps>`
  ${({
    fontSize,
    textTransform,
    fontWeight,
    cursorPointer,
    lineHeigth,
    italic,
    color,
    textAlign,
  }) => css`
    font-size: ${fontSize}px;
    text-transform: ${textTransform};
    font-weight: ${fontWeight};
    cursor: ${cursorPointer ? "pointer" : "auto"};
    line-height: ${lineHeigth};
    font-style: ${italic ? "italic" : "normal"};
    color: ${color};
    text-align: ${textAlign};
  `}
`;
