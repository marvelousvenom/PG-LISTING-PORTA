import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import RoomListings from './components/RoomListings';
import About from './components/About';
import Contact from './components/Contact';
import LoginPage from './components/LoginPage';
import PrivateRoute from './components/PrivateRoute'; // Import PrivateRoute

const App = () => {
  return (
    <Router>
      <Navbar />
      <div style={{ marginTop: '80px', padding: '20px' }}>
        <Routes>
          {/* Public Route */}
          <Route path="/" element={<LoginPage />} />

          {/* Protected Route */}
          <Route
            path="/room-listings"
            element={<PrivateRoute element={RoomListings} />}
          />

          {/* Other Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
