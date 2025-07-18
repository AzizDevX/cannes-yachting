import Navbar from "../../navbar/navbar.jsx";
import Footer from "../../footer/footer.jsx";
import SideNavbar from "../sidenavbar/sideNavbar.jsx";
import "./style.css";

function DashboardAccueil() {
  return (
    <>
      <Navbar />
      <div className="page-container">
        <SideNavbar />
        <div className="main-content">
          <div className="Welcome-Contient">
            <h1>Bonjour [Nom du client]</h1>
            <div className="Welcome-paragraphe">
              <p>
                Bienvenue dans votre espace personnel Canne Yachting. Ici
                <br />
                vous pouvez gérer facilement vos yachts à vendre ou à louer.
              </p>
            </div>
          </div>
          <section className="Yacht-Section">
            <div className="Section-Contient">
              <h2>Ajouter un nouveau yacht</h2>
              <p>
                Publiez une nouvelle annonce pour mettre votre <br />
                yacht en vente ou en location.
              </p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default DashboardAccueil;
