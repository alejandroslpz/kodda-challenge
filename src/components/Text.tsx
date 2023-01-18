import type { FC } from "react";
import type { TextProps } from "react-native";
import styled from "styled-components/native";

interface CustomTextProps extends TextProps {
  size?: "small" | "medium" | "large" | "extraLarge";
  weight?: "light" | "regular" | "bold" | "semiBold" | "medium";
  alignment?: "left" | "center" | "right";
  color?: "primary" | "opacity";
}

enum FontSize {
  small = "14px",
  medium = "16px",
  large = "20px",
  extraLarge = "24px",
}

enum FontWeight {
  light = "300",
  regular = "400",
  medium = "500",
  semiBold = "600",
  bold = "700",
}

enum TextAlignment {
  left = "left",
  center = "center",
  right = "right",
}

enum Colors {
  primary = "#000000",
  opacity = "rgba(0, 0, 0, 0.5)",
}

const TextStyled = styled.Text<CustomTextProps>`
  color: ${({ color }) => {
    return color ? Colors[color] : Colors.primary;
  }};
  text-align: ${({ alignment }) => {
    return alignment ? TextAlignment[alignment] : TextAlignment.left;
  }};
  font-size: ${({ size }) => {
    return size ? FontSize[size] : FontSize.medium;
  }};
  font-weight: ${({ weight }) => {
    return weight ? FontWeight[weight] : FontWeight.regular;
  }};
  letter-spacing: 0.5px;
  line-height: 24px;
`;

export const Text: FC<CustomTextProps> = ({
  size,
  weight,
  alignment,
  color,
  children,
}) => {
  return (
    <TextStyled size={size} weight={weight} alignment={alignment} color={color}>
      {children}
    </TextStyled>
  );
};
