import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import Home from "./Home";
import Sports from "./Sports";
import Technology from "./Technology";
import Finance from "./Finance";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/sports" element={<Sports />} />

        <Route path="/tech" element={<Technology />} />
        <Route path="/finance" element={<Finance />} />
      </Routes>
    </Router>
  );
}

export default App;
