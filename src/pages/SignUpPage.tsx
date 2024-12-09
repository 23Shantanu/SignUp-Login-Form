import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface SignUpPageProps {
  toggleForm: () => void;
}

const SignUpPage: React.FC<SignUpPageProps> = ({ toggleForm }) => {
  const signUpValidationSchema = Yup.object({
    fullName: Yup.string()
      .min(3, "Full Name should be at least 3 characters long")
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

  return (
    <div className="form-container">
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={signUpValidationSchema}
        onSubmit={(values, { resetForm }) => {
          setTimeout(() => {
            alert("Sign Up Successful!");
            resetForm();
          }, 1000);
        }}
      >
        {() => (
          <Form>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <Field
                id="fullName"
                name="fullName"
                type="text"
                className="form-control"
              />
              <ErrorMessage
                name="fullName"
                component="div"
                className="error-message"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                type="email"
                className="form-control"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="error-message"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field
                id="password"
                name="password"
                type="password"
                className="form-control"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="error-message"
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                className="form-control"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="error-message"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </Form>
        )}
      </Formik>
      <div className="toggle-box">
        <p>
          Already have an account?{" "}
          <button type="button" onClick={toggleForm}>
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
