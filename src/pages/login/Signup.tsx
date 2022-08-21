import React from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { AUTH_ROUTE } from "../../constants/routes";
import { loginSchema } from "../../schemas/loginSchema";
import { createUser } from "../../services/LoginService";
import toastr from "toastr";

export const Signup = () => {
  const navigate = useNavigate();
  const handleSignup = async (values: any) => {
    console.log(values);

    try {
      const response = await createUser(values);
      toastr.success(response.message);
      navigate(AUTH_ROUTE.LOGIN);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={loginSchema}
      onSubmit={async (values) => {
        await handleSignup(values);
      }}
    >
      {(props) => (
        <>
          <h1 className="text-center">Create User Account</h1>
          <div className="login__form">
            <form onSubmit={props.handleSubmit} noValidate>
              <div className="form-group">
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-control"
                  required
                  placeholder="Enter your email"
                  value={props.values.email}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                />
              </div>

              <div className="form-group">
                <input
                  id="password"
                  name="password"
                  className="form-control"
                  type="password"
                  required
                  placeholder="Enter your Password"
                  value={props.values.password}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                />
              </div>

              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </Formik>
  );
};
