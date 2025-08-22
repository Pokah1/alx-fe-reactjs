// import React from "react";
import "./formikForm.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string()
  .required("Username is required")
  .min(3, "Username must be at least 3 characters"),

email: Yup.string()
  .required("Email is required")
  .email("Invalid email format"),

password: Yup.string()
  .required("Password is required")
  .min(6, "Password must be at least 6 characters"),

});

const FormikForm = () => {
  return (
    <div className="form-container">
      <h2>Registration Form</h2>

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Form Data:", values);
          resetForm();
        }}
      >
        {() => (
          <Form className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <Field name="username" type="text" />
              <ErrorMessage name="username" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field name="email" type="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field name="password" type="password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            <button type="submit" className="submit-btn">
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
