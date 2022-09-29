import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Navigation";
import Home from "./Home";
import Sports from "./Sports";
import Tech from "./Tech";

import Finance from "./Finance";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Wrapper = ({ component }) => (
  <>
    <Navigation />
    {component}
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper component={<Home />} />,
  },
  {
    path: "sports",
    element: <Wrapper component={<Sports />} />,
  },
  {
    path: "tech",
    element: <Wrapper component={<Tech />} />,
  },
  {
    path: "finance",
    element: <Wrapper component={<Finance />} />,
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
