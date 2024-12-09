import * as Yup from "yup";

// SignUp validation schema
export const signUpValidationSchema = Yup.object({
  fullName: Yup.string()
    .min(3, "Full Name must be at least 3 characters long")
    .required("Full Name is required"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password should be at least 8 characters long")
    .matches(/[A-Z]/, "Include at least one uppercase letter")
    .matches(/[a-z]/, "Include at least one lowercase letter")
    .matches(/[0-9]/, "Include at least one number")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm your password"),
});

// Login validation schema
export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});
