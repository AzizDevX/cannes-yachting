import Navbar from "../../navbar/navbar.jsx";
import Footer from "../../footer/footer.jsx";
import SideNavbar from "../sidenavbar/sideNavbar.jsx";
import "./style.css";

function Reservations() {
  return (
    <>
      <Navbar />
      <div className="page-container">
        <SideNavbar />
        <div className="main-content">
          <div className="reservations-Contient">
            <h1>Toutes vos reservations</h1>
            <div className="reservations-paragraphe">
              <p>
                Vous n’avez pas encore effectué de réservation, recherchez un
                <br />
                bateau.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Reservations;
