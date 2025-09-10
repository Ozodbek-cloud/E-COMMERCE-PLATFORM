import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/main/Header";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Main from "./components/main/main";
import Proporties from "./components/main/Proporties";
import NewPropety from "./components/main/NewPropety";
import Contact from "./components/main/Contact";
import InsidePropertyPage from "./components/main/InsideProperty";
import Favourites from "./components/main/Favourites";
import MyProperties from "./components/main/MyProperties";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/reg" element={<Register />} />
        <Route path="/log" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/prop" element={<Proporties />} />
        <Route path="/new_property" element={<NewPropety />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/property" element={<InsidePropertyPage />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/my_properties" element={<MyProperties />} />
      </Routes>
    </Router>
  );
}
