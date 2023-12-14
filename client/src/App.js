import logo from "./logo.svg";
import "./App.css";
import React from 'react';
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homescreen from "./screens/Homescreen";
import Bookingscreen from "./screens/Bookingscreen";
import Registerscreen from "./screens/Registerscreen";
import Loginscreen from "./screens/Loginscreen";
import Footer from "./screens/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App"> 
        <Navbar />
        <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route path="/home" element={<Homescreen />} />
          <Route path="/book/:roomid" element={<Bookingscreen />} />
          <Route path="/register" element={<Registerscreen />} />
          <Route path="/login" element={<Loginscreen />} />
          
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
