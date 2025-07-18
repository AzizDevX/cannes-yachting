import "./style.css";
import Userlogo from "../../assets/user.png";

import {
  FaHome,
  FaUser,
  FaCommentDots,
  FaCalendarAlt,
  FaAnchor,
  FaHeart,
  FaSignOutAlt,
} from "react-icons/fa";
const UserName = "Name";

function SideNavbar() {
  return (
    <>
      <div className="Side-Nav">
        <div className="user-section">
          <img src={Userlogo} alt="Logo" className="user-logo" />
          <h2 className="user-name">{UserName}</h2>
        </div>
        <nav className="nav-menu">
          <a href="accueil" className="nav-link">
            <span>
              <FaHome className="nav-icon" /> Accueil
            </span>
          </a>
          <a href="profil" className="nav-link active">
            <span>
              <FaUser className="nav-icon" /> Mon profil
            </span>
          </a>
          <a href="Messagerie" className="nav-link">
            <span>
              <FaCommentDots className="nav-icon" /> Messagerie
            </span>
          </a>
          <a href="Réservations" className="nav-link">
            <span>
              <FaCalendarAlt className="nav-icon" /> Réservations
            </span>
          </a>
          <a href="yachts" className="nav-link">
            <span>
              <FaAnchor className="nav-icon" /> Mes yachts
            </span>
          </a>
          <a href="Favoris" className="nav-link">
            <span>
              <FaHeart className="nav-icon" /> Favoris
            </span>
          </a>
          <a href="deconnecter" className="nav-link">
            <span>
              <FaSignOutAlt className="nav-icon" /> Se déconnecter
            </span>
          </a>
        </nav>
      </div>
    </>
  );
}
export default SideNavbar;
