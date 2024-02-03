import styled from "styled-components";

export const ButtonWrapper = styled.button<any>`
  width: ${({ width }) => width}rem;
  height: ${({ height }) => height}rem;
  color: ${({ $textColor }) => $textColor};
  font-size: ${({ $textSize }) => $textSize}rem;
  font-weight: ${({ $textWeight }) => $textWeight};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  border-radius: 8px;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
