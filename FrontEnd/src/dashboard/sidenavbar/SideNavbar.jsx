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
          <a href="/dashboard/accueil" className="nav-link">
            <span>
              <FaHome className="nav-icon" /> Accueil
            </span>
          </a>
          <a href="/dashboard/profil" className="nav-link">
            <span>
              <FaUser className="nav-icon" /> Mon profil
            </span>
          </a>
          <a href="/dashboard/Messagerie" className="nav-link">
            <span>
              <FaCommentDots className="nav-icon" /> Messagerie
            </span>
          </a>
          <a href="/dashboard/reservations" className="nav-link">
            <span>
              <FaCalendarAlt className="nav-icon" /> Réservations
            </span>
          </a>
          <a href="/dashboard/mes-yachts" className="nav-link">
            <span>
              <FaAnchor className="nav-icon" /> Mes yachts
            </span>
          </a>
          <a href="/dashboard/Favoris" className="nav-link">
            <span>
              <FaHeart className="nav-icon" /> Favoris
            </span>
          </a>
          <a href="/dashboard/deconnecter" className="nav-link">
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
