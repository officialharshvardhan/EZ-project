import React, { useState } from "react";
import "../App.css";
import logo from "../images/logo.png";
import { Link, useNavigate } from "react-router-dom";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  const navigate = useNavigate();
   const handleTalkClick = () => {
    navigate("/contact");
    closeMenu(); // close the mobile menu after navigation
  };
  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <img src={logo} alt="VFilms Logo" className="logo-img" />
        </div>
        {/* Toggle Button */}
        <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Menu Items (visible when clicked) */}
        {menuOpen && (
          <nav className="navbar-menu">
            <ul>
              <li>
                <button className="talk-btn" onClick={handleTalkClick}>
                  Let’s Talk ✉️
                </button>
              </li>
              <li>
                <Link to="/home" onClick={closeMenu}>Vernan</Link>
              </li>
              <li>
                <Link to="/ourstory" onClick={closeMenu}>Our Story</Link>
              </li>
              <li>
                <Link to="/stories" onClick={closeMenu}>Their Stories</Link>
              </li>
              <li>
                <Link to="/services" onClick={closeMenu}>Services</Link>
              </li>
              </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
