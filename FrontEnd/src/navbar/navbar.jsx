import React, { useState } from "react";
import { Menu, X, Globe, Bell, User } from "lucide-react";
import "./style.css";
import NavLogo from "../../src/assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="logo">
            <a href="/">
              {" "}
              <img src={NavLogo} alt="Logo" className="logo-image" />
            </a>
          </div>

          <ul className="nav-links">
            <li>
              <a href="/annonces">Annonces</a>
            </li>
            <li>
              <a href="/calendrier">Calendrier</a>
            </li>
            <li>
              <a href="/reservation">Réservation</a>
            </li>
            <li>
              <a href="/aide">Aide</a>
            </li>
          </ul>

          <div className="right-icons">
            <button className="icon-button" title="Language">
              <Globe size={20} />
            </button>
            <button className="icon-button" title="Notifications">
              <Bell size={20} />
            </button>
            <a href="/profil">
              <button className="icon-button" title="Profile">
                <User size={20} />
              </button>
            </a>
          </div>

          <button className="mobile-menu-button" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? "" : "hidden"}`}>
        <ul className="mobile-nav-links">
          <li>
            <a href="/annonces" onClick={() => setIsMenuOpen(false)}>
              Annonces
            </a>
          </li>
          <li>
            <a href="/calendrier" onClick={() => setIsMenuOpen(false)}>
              Calendrier
            </a>
          </li>
          <li>
            <a href="/reservation" onClick={() => setIsMenuOpen(false)}>
              Réservation
            </a>
          </li>
          <li>
            <a href="/aide" onClick={() => setIsMenuOpen(false)}>
              Aide
            </a>
          </li>
        </ul>

        <div className="mobile-icons">
          <div className="mobile-icons-container">
            <button className="icon-button" title="Language">
              <Globe size={20} />
            </button>
            <button className="icon-button" title="Notifications">
              <Bell size={20} />
            </button>
            <button className="icon-button" title="Profile">
              <User size={20} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
