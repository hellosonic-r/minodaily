import { ButtonWrapper } from "./Button.styles";
import { IButtonProps } from "./Button.types";

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
