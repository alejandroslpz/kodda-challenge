import type { FC } from "react";
import type { TextInputProps } from "react-native";
import styled from "styled-components/native";

export type ErrorType = {
  message: string;
  isAnError: boolean;
};

export interface CustomInputProps extends TextInputProps {
  error?: ErrorType;
}

type CustomInputType = CustomInputProps;

const InputStyled = styled.TextInput<CustomInputType>`
  background: #f0f6fa;
  border-color: ${({ error }) => (error?.isAnError ? "#e11900" : "")};
  border-radius: 32px;
  border-width: ${({ error }) => (error?.isAnError ? "1px" : "0")};
  font-size: 16px;
  height: 64px;
  line-height: 24px;
  margin: 12px 0;
  min-width: 100%;
  padding: 0 20px;
`;

const ErrorMessage = styled.Text`
  color: #e11900;
  text-align: center;
`;

export const TextInput: FC<CustomInputProps> = ({ error, ...restOfProps }) => {
  return (
    <>
      <InputStyled placeholderTextColor="rgba(0, 0, 0, 0.5)" {...restOfProps} />
      {error?.isAnError && <ErrorMessage>{error?.message}</ErrorMessage>}
    </>
  );
};
