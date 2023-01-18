import type { FC } from "react";
import type { TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";
import { theme } from "~themes";

export interface ButtonProps extends TouchableOpacityProps {
  isFullWidth?: boolean;
  isPrimary?: boolean;
  title?: string;
}

type ButtonStyledProps = {
  isPrimary?: boolean;
};

const ButtonStyled = styled.TouchableOpacity<ButtonProps>`
  align-items: center;
  background: ${({ isPrimary }) =>
    isPrimary ? theme.colors.primary : "#ffffff"};
  border-radius: 5px;
  display: flex;
  height: 45px;
  justify-content: center;
  padding: 0 16px;
  width: ${({ isFullWidth }) => (isFullWidth ? "100%" : "auto")};
`;

const TextButtonStyled = styled.Text<ButtonStyledProps>`
  color: ${({ isPrimary }) => (isPrimary ? "#ffffff" : theme.colors.primary)};
  font-size: 16px;
  font-weight: 800;
  letter-spacing: 0.5px;
`;

export const Button: FC<ButtonProps> = ({
  isFullWidth,
  isPrimary,
  title,
  ...restOfProps
}) => {
  return (
    <ButtonStyled
      isFullWidth={isFullWidth}
      isPrimary={isPrimary}
      {...restOfProps}
    >
      <TextButtonStyled isPrimary={isPrimary}>
        {title || "Button"}
      </TextButtonStyled>
    </ButtonStyled>
  );
};
