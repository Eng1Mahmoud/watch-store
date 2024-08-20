import * as yup from "yup";

// login schema validation
export const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

// register schema validation
export const registerSchema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});
