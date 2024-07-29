import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

//createBrowserRouter([
//  {
//    path: "/",
//    element: <App />,
//    loader: rootLoader,
//    children: [
//      {
//        path: "events/:id",
//        loader: eventLoader,
//      },
//    ],
//  },
//]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
