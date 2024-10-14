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
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,20}$/,
      "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special case character",
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
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,20}$/,
      "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special case character",
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
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,20}$/,
      "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special case character",
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

// profile details schema validation
export const profileDetailsSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  email: yup.string().email().required("Email is required"),
});

// change password schema validation
export const changePasswordSchema = yup.object().shape({
  old_password: yup.string().required("Old password is required"),
  new_password: yup
    .string()
    .required("New password is required")
    .min(8)
    .max(20)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,20}$/,
      "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special case character",
    ),
});

// add address schema validation
export const addAddressSchema = yup.object().shape({
  country: yup.string().required("Country is required"),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  street: yup.string().required("Street is required"),
  zipcode: yup.string().required("Zipcode is required"),
});

// category schema validation

export const categorySchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  cover_url: yup.string().required("image is required"),
});

// product schema validation
export const productSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  price: yup
    .number()
    .required("Price is required")
    .min(0, "Price must be at least 0"),
  description: yup.string().required("Description is required"),
  categories: yup
    .array()
    .of(yup.string())
    .min(1, "At least one category is required")
    .required("Category is required"),
  image_url: yup.string().required("Image is required"),
  quantity: yup
    .number()
    .required("Quantity is required")
    .min(1, "Quantity must be at least 1"),
});

// edit user schema validation
export const editUserSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  email: yup.string().email().required("Email is required"),
  role: yup.string().required("Role is required"),
});
