import React from "react";
import { Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { AUTH_ROUTE, HOME } from "../../constants/routes";
import { loginSchema } from "../../schemas/loginSchema";

export const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (values: any) => {
    try {
      // const data = await login(values);

      navigate(HOME);
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
        await handleLogin(values);
      }}
    >
      {(props) => (
        <>
          <h1 className="text-center">Login to user account</h1>

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
                  Sign In
                </button>
              </div>

              <div className="login__signup text-center">
                <p>
                  Don't have an account?
                  <Link to={AUTH_ROUTE.SIGNUP}>Sign up</Link>
                </p>
              </div>
            </form>
          </div>
        </>
      )}
    </Formik>
  );
};
