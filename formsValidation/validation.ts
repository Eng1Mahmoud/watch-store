import * as yup from "yup";

// contact us schema validation
export const contactUsSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  phoneNumber: yup.string().required("Phone number is required"),
  email: yup.string().email().required("Email is required"),
  message: yup.string().required("Message is required"),
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
