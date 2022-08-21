import React, { FC } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import PrivateRoute from "./components/routes/PrivateRoute";
import { ADMIN_ROUTE, AUTH_ROUTE, HOME } from "./constants/routes";
import { ContactDetail, ContactList } from "./pages/contact";
import Home from "./pages/home/Home";
import { Login, Signup } from "./pages/login";

const AUTH_ROUTERS = [
  {
    path: AUTH_ROUTE.LOGIN,
    element: <Login />,
  },
  {
    path: AUTH_ROUTE.SIGNUP,
    element: <Signup />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
];

const ADMIN_ROUTERS = [
  {
    path: HOME,
    element: <PrivateRoute component={Home} />,
    children: [
      {
        path: ADMIN_ROUTE.CONTACT_LIST,
        element: <ContactList />,
      },
      {
        path: ADMIN_ROUTE.CONTACT_DETAIL,
        element: <ContactDetail />,
      },
    ],
  },
];

interface Props {
  isAuthenticated?: boolean;
}

const Router = ({ isAuthenticated }: Props) => {
  const routes = [...AUTH_ROUTERS];
  if (isAuthenticated) {
    routes.push(...ADMIN_ROUTERS);
  } else {
    routes.push({
      path: HOME,
      element: <Navigate replace to="/login" />,
    });
  }
  const element = useRoutes([...routes]);

  return element;
};

export default Router;
