import * as yup from "yup";

// login schema validation
export const loginSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .required()
    .min(8)
    .max(20)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
    ),
});

// register schema validation
export const registerSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .required()
    .min(8)
    .max(20)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
    ),
});

// send email schema validation
export const sendEmailSchema = yup.object().shape({
  email: yup.string().email().required("email is required"),
});

// forgot password schema validation
export const forgotPasswordSchema = yup.object().shape({
  // set validation for complex password here
  password: yup
    .string()
    .required()
    .min(8)
    .max(20)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match"),
});
// contact us schema validation
export const contactUsSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  phoneNumber: yup.string().required("Phone number is required"),
  email: yup.string().email().required("Email is required"),
  message: yup.string().required("Message is required"),
});
