import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import "./style.css";
function HomePage() {
  return (
    <>
      <Navbar />
      <div className="Search">
        <form action="/search" method="GET">
          <input type="text" name="query" placeholder="Search..." required />
          <button type="submit">Search</button>
        </form>
      </div>
      <main>
        <div className="Section-Continer">
          <section>
            <img></img>
            <h2>Réservation instantanée</h2>
            <p>
              Vous pouvez louer instantanément des bateaux en utilisant la
              fonction calendrier.
            </p>
          </section>

          <section>
            <img></img>
            <h2>Garantie du meilleur prix</h2>
            <p>
              Chez Teknevia, les prix sont déterminés directement par les
              propriétaires de bateaux
            </p>
          </section>

          <section>
            <img></img>
            <h2>Réservation sécurisée</h2>
            <p>
              L'acompte ne sera pas déposé sur le compte du propriétaire du
              bateau tant que votre visite ne sera pas terminée.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
export default HomePage;
