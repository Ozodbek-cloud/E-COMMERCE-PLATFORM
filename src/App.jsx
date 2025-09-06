import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/main/Header";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";

export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/reg" element={<Register />} />
          <Route path="/log" element={<Login />} />
        </Routes>
     
    </Router>
  );
}
