import React from "react";
import Navbar from "../components/Navbar.jsx";
import Main from "../components/Main.jsx";
import NotFound from "../components/NotFound.jsx";
import Footer from "../components/Footer.jsx";

function ErrorPage() {
  return (
    <div>
      <Navbar />
      <Main>
        <NotFound />
      </Main>
      <Footer />
    </div>
  );
}

export default ErrorPage;
