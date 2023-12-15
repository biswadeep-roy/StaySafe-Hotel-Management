// App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Bookingscreen from './screens/Bookingscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Footer from './screens/Footer';
import "./App.css";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check user authentication status here (e.g., by calling an authentication API endpoint)
    // Update setIsLoggedIn accordingly
    const checkAuthentication = async () => {
      // Example: You might want to call an API endpoint to check if the user is authenticated
      // Replace the following line with your actual authentication logic
      const isAuthenticated = /* Your authentication check logic here */ true;

      setIsLoggedIn(isAuthenticated);
    };

    checkAuthentication();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/" element={<Registerscreen />} />
          <Route path="/home" element={isLoggedIn ? <Homescreen /> : <Navigate to="/login" />} />
          <Route path="/book/:roomid" element={<Bookingscreen />} />
          <Route path="/register" element={<Registerscreen />} />
          <Route path="/login" element={<Loginscreen setIsLoggedIn={setIsLoggedIn} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
