import Navbar from "../../navbar/navbar.jsx";
import Footer from "../../footer/footer.jsx";
import SideNavbar from "../sidenavbar/sideNavbar.jsx";
import "./style.css";
import AnnocmentSearchLogo from "../../assets/AnnocmentSearch.png";
import Annonce1 from "../../assets/annoce1.png";

const annonces = "(4)";
function Yachts() {
  return (
    <>
      <Navbar />
      <div className="page-container">
        <SideNavbar />
        <div className="main-content">
          <div className="Annonces-Contient">
            <h1>Toutes vos annonces {annonces}</h1>
            <div className="Search-continer">
              <div className="Annonces-Search">
                <div className="search-group">
                  <input
                    placeholder="Nom du bateau"
                    className="Annonces-input"
                  />
                  <button className="Annonces-search-button">
                    <img
                      src={AnnocmentSearchLogo}
                      alt="Search"
                      className="Annonces-search-icon"
                    />
                  </button>
                </div>
                <button className="add-boat-button">
                  + enregistrer un nouveau bateau
                </button>
              </div>
            </div>
          </div>
          <div className="Sections-continer">
            <section>
              <img className="Annonce1-image" src={Annonce1}></img>
            </section>
            <section>test 2</section>
            <section>test 3</section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Yachts;
