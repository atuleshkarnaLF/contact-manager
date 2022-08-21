import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "toastr/toastr.scss";
import "react-responsive-modal/styles.css";

function App() {
  const isAuth = !!localStorage.getItem("isAuth");
  return (
    <>
      <BrowserRouter>
        <Router isAuthenticated={isAuth} />
      </BrowserRouter>
    </>
  );
}

export default App;
