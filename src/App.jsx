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
import MyProfile from "./components/main/MyProfile";
import MyCustomerProfile from "./components/main/CustomerProfile";
import CustomerMain from "./components/main/Customer";
import CustomerContact from "./components/main/CustomerContact";
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
        <Route path="/property/:ids" element={<InsidePropertyPage />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/my_properties" element={<MyProperties />} />
        <Route path="/my_profile" element={<MyProfile />} />
        <Route path="/customer_profile" element={<MyCustomerProfile />} />
        <Route path="/customer_main" element={<CustomerMain/>} />
        <Route path="/customer_contact" element={<CustomerContact/>} />

      </Routes>
    </Router>
  );
}
