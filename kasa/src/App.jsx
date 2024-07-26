import React from "react";
import Navbar from "./components/Navbar.jsx";
import Main from "./components/Main.jsx";
import Banner from "./components/Banner.jsx";
import Gallery from "./components/Gallery.jsx";
import Footer from "./components/Footer.jsx";

import "./index.scss";
import "./App.scss";
import "./Navbar.scss";
import "./Main.scss";
import "./Banner.scss";
import "./Gallery.scss";
import "./Footer.scss";

function App() {
  return (
    <div>
      <Navbar />
      <Main>
        <Banner />
        <Gallery />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
