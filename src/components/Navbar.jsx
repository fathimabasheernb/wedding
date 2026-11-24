import React, { useState } from "react";
import {
  Menu,
  X,
  Heart,
  UserRound,
  ChevronDown,
  Globe,
  Search
} from "lucide-react";

import "../styles/Navbar.css";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState(
    localStorage.getItem("weddingLanguage") || "en"
  );

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;

    setLanguage(selectedLanguage);

    localStorage.setItem("weddingLanguage", selectedLanguage);

    window.dispatchEvent(
      new CustomEvent("languageChange", {
        detail: selectedLanguage
      })
    );
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      <div className="navbar-container">

        {/* LOGO */}

        <a href="#home" className="navbar-logo">

          <div className="logo-symbol">
            W
            <span>✦</span>
          </div>

          <div className="logo-name">
            <h2>WEDDING</h2>
            <span>MARKETPLACE</span>
          </div>

        </a>


        {/* MOBILE MENU BUTTON */}

        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>


        {/* NAVIGATION LINKS */}

        <nav className={`navbar-links ${menuOpen ? "active" : ""}`}>

          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#venues" onClick={closeMenu}>
            Venues
          </a>

          <a href="#services" onClick={closeMenu}>
            Services
          </a>

          <a href="#catering" onClick={closeMenu}>
            Catering
          </a>

          <a href="#custom-creations" onClick={closeMenu}>
            Custom Creations
          </a>

          <a href="#inspiration" onClick={closeMenu}>
            Inspiration
          </a>

        </nav>


        {/* RIGHT SIDE ACTIONS */}

        <div className="navbar-actions">

          {/* LANGUAGE SELECTOR */}

          <div className="language-selector">

            <Globe size={16} />

            <select
              value={language}
              onChange={handleLanguageChange}
              aria-label="Select language"
            >

              <option value="en">English</option>

              <option value="ml">മലയാളം</option>

            </select>

            <ChevronDown size={13} />

          </div>


          {/* WISHLIST */}

          <button
            className="navbar-icon"
            aria-label="Wishlist"
            title="Wishlist"
          >
            <Heart size={19} />
          </button>


          {/* LOGIN */}

          <a href="#login" className="login-button">
            <UserRound size={16} />
            Login
          </a>


          {/* REGISTER */}

          <a href="#register" className="register-button">
            Get Started
          </a>

        </div>

      </div>

    </header>
  );
}

export default Navbar;