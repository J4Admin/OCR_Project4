import React from "react";
import Navbar from "./components/Navbar.jsx";
import Main from "./components/Main.jsx";
import ErorrPage from "./components/ErrorPage.jsx";
import Footer from "./components/Footer.jsx";

import "./styles/App.scss";

function ErrorPage() {
  return (
    <div>
      <Navbar />
      <Main>
        <ErorrPage />
      </Main>
      <Footer />
    </div>
  );
}

export default ErrorPage;
