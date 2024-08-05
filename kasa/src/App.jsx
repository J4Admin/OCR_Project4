import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";

import "./styles/App.scss";

function App() {
  return (
    <div>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
