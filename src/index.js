import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "./styles/globals.css";
import Header from "./components/organism/Header";
import Main from "components/template/Main";
import Footer from "components/organism/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Header />
    <React.StrictMode>
      <Main />
    </React.StrictMode>
    <Footer />
  </BrowserRouter>
);

reportWebVitals();
