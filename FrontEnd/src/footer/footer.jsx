import React from "react";
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import FooterLogo from "../../src/assets/logo.png";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <div className="footer-logo">
              <img src={FooterLogo} alt="Logo" />
            </div>
            <p className="footer-description">
              Découvrez l'excellence du yachting de luxe. Locations, ventes et
              expériences inoubliables en mer.
            </p>
            <div className="footer-social">
              <a href="#" className="social-icon facebook">
                <Facebook size={12} />
              </a>
              <a href="#" className="social-icon whatsapp">
                <span>@</span>
              </a>
              <a href="#" className="social-icon youtube">
                <Youtube size={12} />
              </a>
              <a href="#" className="social-icon linkedin">
                <Linkedin size={12} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Liens rapides</h3>
            <ul className="footer-links">
              <li>
                <a href="#">Accueil</a>
              </li>
              <li>
                <a href="#">Location</a>
              </li>
              <li>
                <a href="#">Vente</a>
              </li>
              <li>
                <a href="#">À propos de nous</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact & Réservation</a>
              </li>
              <li>
                <a href="#">Connexion / Inscription</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Contact</h3>
            <div className="footer-contact">
              <div>
                <p>19 Rue de Letton-Maubourg</p>
                <p>06400 Cannes</p>
              </div>
              <div>
                <p>+33 6 59 39 05 69</p>
                <p>+33 4 93 01 52 28</p>
              </div>
              <div>
                <a href="mailto:contact@cannesyachting.fr">
                  contact@cannesyachting.fr
                </a>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Moyens de paiement</h3>
            <div className="payment-methods">
              <div className="payment-card visa"></div>
              <div className="payment-card mastercard"></div>
              <div className="payment-card cb"></div>
              <div className="payment-card maestro"></div>
              <div className="payment-card paypal"></div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            Cannes Yachting © 2025 Tous droits réservés | Powered by Aziz
            Kammoun
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
