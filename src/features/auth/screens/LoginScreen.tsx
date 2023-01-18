import type { FC } from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import {
  type CustomInputProps,
  type ButtonProps,
  Button,
  TextInput,
  Text,
} from "~components";
import { useAuthContext, useAvatar } from "~hooks";
import { useFormik } from "formik";
import { loginSchema } from "./schemas";

const RegisterContainer = styled.View`
  background-color: #b784ff;
  flex: 1;
`;

const ContentContainer = styled.KeyboardAvoidingView`
  align-items: center;
  background-color: #ffffff;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  flex: 1;
  justify-content: center;
  margin-bottom: 100px;
  overflow: hidden;
  padding: 32px 24px;
`;

const Logo = styled.Image`
  bottom: -50px;
  height: 250px;
  position: absolute;
  width: 250px;
`;

export const LoginScreen: FC = () => {
  const koddaAvatar = useAvatar("kodda");
  const { saveUserInStore } = useAuthContext();

  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik(
    {
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit: (values) => {
        saveUserInStore(values.email);
      },
    }
  );

  const emailInputOptions: CustomInputProps = {
    autoCapitalize: "none",
    autoComplete: "email",
    error: {
      message: errors.email || "",
      isAnError: (touched.email && !!errors.email) || false,
    },
    keyboardType: "email-address",
    onBlur: handleBlur("email"),
    onChangeText: handleChange("email"),
    placeholder: "Correo electrónico",
  };

  const passwordInputOptions: CustomInputProps = {
    autoCapitalize: "none",
    autoComplete: "email",
    error: {
      message: errors.password || "",
      isAnError: (touched.password && !!errors.password) || false,
    },
    onChangeText: handleChange("password"),
    onBlur: handleBlur("password"),
    placeholder: "Contraseña",
    secureTextEntry: true,
  };

  const buttonOptions: ButtonProps = {
    isFullWidth: true,
    isPrimary: true,
    onPress: () => handleSubmit(),
    style: {
      marginTop: 12,
    },
    title: "Registrarse",
  };

  return (
    <RegisterContainer>
      <ContentContainer behavior={"padding"}>
        <View>
          <Text size="extraLarge" weight="bold">
            Registrarse
          </Text>
        </View>
        <TextInput {...emailInputOptions} />
        <TextInput {...passwordInputOptions} />
        <Button {...buttonOptions} />
        <Logo source={koddaAvatar} />
      </ContentContainer>
    </RegisterContainer>
  );
};
