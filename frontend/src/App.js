import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Register from './components/Register';
import DonateBlood from "./components/DonateBlood";

function App() {
  const isLoggedIn = localStorage.getItem("auth") === "true";

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected routes */}
        <Route path="/" element={isLoggedIn ? <LandingPage /> : <Navigate to="/login" />} />
        <Route path="/about" element={isLoggedIn ? <AboutUs /> : <Navigate to="/login" />} />
        <Route path="/contact" element={isLoggedIn ? <ContactUs /> : <Navigate to="/login" />} />
        <Route path="/donate" element={isLoggedIn ? <DonateBlood /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
