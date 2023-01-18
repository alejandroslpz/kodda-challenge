import * as Yup from "yup";

const preventMessages = {
  isRequired: "El campo es requerido",
  invalidEmail: "Ingresa un email válido",
  invalidChatacter: "El password debe de contener mínimo 7 caracteres",
};

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email(preventMessages.invalidEmail)
    .required(preventMessages.isRequired),
  password: Yup.string()
    .min(7, preventMessages.invalidChatacter)
    .required(preventMessages.isRequired),
});
