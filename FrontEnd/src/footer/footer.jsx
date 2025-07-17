import React from "react";
import "./style.css";
import { FaFacebook, FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";

import Payment from "../assets/payment.png";
import FooterLogo from "../assets/logo.png";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="topfooter">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <a href="#">
                <img
                  src={FooterLogo}
                  alt="Cannes Yachting"
                  className="logofooter"
                />
              </a>
              <span className="descriptionfooter">
                Découvrez l'excellence du yachting de luxe. Locations, ventes et
                expériences inoubliables en mer.
              </span>
              <div className="reseauxSociaux">
                <a href="#" aria-label="Facebook" className="social facebook">
                  <FaFacebook size={20} />
                </a>
                <a href="#" aria-label="Instagram" className="social instagram">
                  <FaInstagram size={20} />
                </a>
                <a href="#" aria-label="WhatsApp" className="social whatsapp">
                  <FaWhatsapp size={20} />
                </a>
                <a href="#" aria-label="TikTok" className="social tiktok">
                  <FaTiktok size={20} />
                </a>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <span className="titlefooter">Liens rapides</span>
              <ul>
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
            <div className="col-md-3 col-sm-6">
              <span className="titlefooter">Contact</span>
              <ul>
                <li>18 Rue de Latour-Maubourg</li>
                <li>06400 Cannes</li>
                <li>
                  <a href="tel:+33649930969">+33 6 49 93 09 69</a>
                </li>
                <li>
                  <a href="tel:+33493934299">+33 4 93 93 42 99</a>
                </li>
                <li>
                  <a href="mailto:contact@cannesyachting.fr">
                    contact@cannesyachting.fr
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <span className="titlefooter">Moyens de paiement</span>
              <img
                className="img-responsive"
                src={Payment}
                alt="Payment methods"
              />
            </div>
          </div>
        </div>
        <div className="bottomfooter">
          <div className="row">
            <div className="col-sm-12">
              <span>
                Cannes Yachting © 2025 Tous droits réservés |{" "}
                <a
                  href="https://www.deveoo.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Powered by Deveoo
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
