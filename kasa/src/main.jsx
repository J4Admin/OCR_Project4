import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
<<<<<<< Updated upstream
import "./index.scss";
=======
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/Error",
    element: <ErrorPage />,
  },
]);
>>>>>>> Stashed changes

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
