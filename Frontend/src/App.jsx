import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Signup from "../pages/members/signup";
import Login from "../pages/members/login";
import Home from "../pages/Home";
import Homefeed from "../pages/members/Homefeed";
import Plan from "../pages/members/plan";
import MomoPaymentForm from "../pages/members/momoPaymentForm";
import PayPalPaymentForm from "../pages/members/paypalPayment";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/profile" element={<Homefeed />} />
          <Route path="/yourplan" element={<Plan />} />
          <Route path="/payment/momo" element={<MomoPaymentForm />} />
          <Route path="/payment/paypal" element={<PayPalPaymentForm />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
