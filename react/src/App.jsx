import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import LandingPage from "../pages/landingPage";
import DemoPage from "../pages/demo";
import Program from "../pages/program";
import About from "../pages/about";
import Price from "../pages/price";
import Footer from "../pages/footer";
import Signup from "../pages/members/signup";
import Login from "../pages/members/login";
import Home from "../pages/Home";
import Homefeed from "../pages/members/Homefeed";
import Plan from "../pages/members/plan";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Homefeed />} />
          <Route path="/yourplan" element={<Plan />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
