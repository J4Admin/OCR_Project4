import React from "react";
import Navbar from "../components/Navbar.jsx";
import Main from "../components/Main.jsx";
import Erorr from "../components/Error.jsx";
import Footer from "../components/Footer.jsx";

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
