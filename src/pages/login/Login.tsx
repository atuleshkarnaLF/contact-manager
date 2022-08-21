import React from "react";
import { Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { ADMIN_ROUTE, AUTH_ROUTE, HOME } from "../../constants/routes";
import { loginSchema } from "../../schemas/loginSchema";
import toastr from "toastr";
import { login } from "../../services/LoginService";

export const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (values: any) => {
    try {
      const response = await login(values);
      if (response) {
        localStorage.setItem("accessToken", response.accessToken);
        localStorage.setItem("refreshToken", response.refreshToken);
        if (response.accessToken) {
          localStorage.setItem("isAuth", "true");
          toastr.success("Login Successful");
        }
        navigate(ADMIN_ROUTE.CONTACT_LIST);
      }
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
function CONTACT_LIST(CONTACT_LIST: any) {
  throw new Error("Function not implemented.");
}
