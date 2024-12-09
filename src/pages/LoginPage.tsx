import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface LoginPageProps {
  toggleForm: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ toggleForm }) => {
  const loginValidationSchema = Yup.object({
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <div className="form-container">
      <h1>Login</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginValidationSchema}
        onSubmit={(values, { resetForm }) => {
          setTimeout(() => {
            alert("Login Successful!");
            resetForm();
          }, 1000);
        }}
      >
        {() => (
          <Form>
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
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </Form>
        )}
      </Formik>
      <div className="toggle-box">
        <p>
          Don't have an account?{" "}
          <button type="button" onClick={toggleForm}>
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
