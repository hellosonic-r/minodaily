import styled from "styled-components";

const ButtonWrapper = styled.button<any>`
  width: ${({ width }) => width}rem;
  height: ${({ height }) => height}rem;
  color: ${({ textColor }) => textColor};
  font-size: ${({ textSize }) => textSize}rem;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-color: ${({ borderColor }) => borderColor};
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
  borderColor: string;
  onClick: () => void;
}
/**
 *
 * @param {width} width + rem
 * @returns
 */
const Button = ({
  width,
  height,
  children,
  textColor,
  textSize = "0.8",
  textWeight = "400",
  backgroundColor,
  borderColor,
  onClick,
}: IButtonProps) => {
  return (
    <ButtonWrapper
      width={width}
      height={height}
      textColor={textColor}
      textSize={textSize}
      textWeight={textWeight}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      onClick={onClick}
    >
      {children}
    </ButtonWrapper>
  );
};

export default Button;
