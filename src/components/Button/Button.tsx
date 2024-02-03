import styled from "styled-components";

const ButtonWrapper = styled.button<any>`
  width: ${({ width }) => width}rem;
  height: ${({ height }) => height}rem;
  color: ${({ $textColor }) => $textColor};
  font-size: ${({ $textSize }) => $textSize}rem;
  font-weight: ${({ $textWeight }) => $textWeight};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  border-color: ${({ $borderColor }) => $borderColor};
  border-radius: 8px;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
interface IButtonProps {
  width: number;
  height: number;
  children: React.ReactNode;
  textColor: string;
  textSize?: string;
  textWeight?: string;
  backgroundColor: string;
  onClick: () => void;
}

const Button = ({
  width,
  height,
  children,
  textColor,
  textSize = "0.8",
  textWeight = "500",
  backgroundColor,
  onClick,
}: IButtonProps) => {
  return (
    <ButtonWrapper
      width={width}
      height={height}
      $textColor={textColor}
      $textSize={textSize}
      $textWeight={textWeight}
      $backgroundColor={backgroundColor}
      onClick={onClick}
    >
      {children}
    </ButtonWrapper>
  );
};

export default Button;
