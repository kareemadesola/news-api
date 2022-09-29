import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const App = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default App;
