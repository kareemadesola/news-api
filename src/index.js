import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Sports from "./Sports";
import Tech from "./Tech";

import Finance from "./Finance";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "sports",
        element: <Sports />,
      },
      {
        path: "tech",
        element: <Tech />,
      },
      {
        path: "finance",
        element: <Finance />,
      },
    ],
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
