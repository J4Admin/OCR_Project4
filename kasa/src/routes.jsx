import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import HousingPage from "./pages/HousingPage.jsx";
import Slideshow from "./components/Slideshow/Slideshow.jsx";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "*", element: <ErrorPage /> },
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "housingPage/:id", element: <HousingPage /> },
      { path: "slideshow", element: <Slideshow /> },
    ],
  },
]);

export default router;
