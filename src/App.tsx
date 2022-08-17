import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Router isAuthenticated={true} />
      </BrowserRouter>
    </>
  );
}

export default App;
