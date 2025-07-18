import React, { useState, useEffect } from "react";
import "./style.css";
import Navbar from "../navbar/navbar.jsx";
import Footer from "../footer/footer.jsx";

const HomePage = () => {
  const [activeFilter, setActiveFilter] = useState("louer");
  const [showVideoModal, setShowVideoModal] = useState(false);

  const showFilter = (filterType) => {
    setActiveFilter(filterType);
  };

  // Initialize Owl Carousel after component mounts
  useEffect(() => {
    // This would typically be where you'd initialize Owl Carousel
    // For now, we'll use a simple implementation
    const initializeCarousels = () => {
      // Blog carousel initialization would go here
      // Reviews carousel initialization would go here
    };

    initializeCarousels();
  }, []);

  // Handle video click
  const handleVideoClick = () => {
    setShowVideoModal(true);
  };

  const closeVideoModal = () => {
    setShowVideoModal(false);
  };

  return (
    <>
      <Navbar />

      {/* Search Bar Section */}
      <div className="search-section">
        <div className="container">
          <div className="search-bar">
            <div className="search-field">
              <label>Lieu de départ</label>
              <input type="text" placeholder="Cannes, Côte d'Azur..." />
            </div>
            <div className="search-field">
              <label>Date de début</label>
              <input type="date" placeholder="dd/mm/yyyy" />
            </div>
            <div className="search-field">
              <label>Date de fin</label>
              <input type="date" placeholder="dd/mm/yyyy" />
            </div>
            <div className="search-field">
              <label>Type de bateau</label>
              <input type="text" placeholder="Voilier, yacht..." />
            </div>
            <div className="search-button-container">
              <button className="search-button">
                <img src="./public/iconfilter.svg" alt="Search" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Advantages Section - 3 Centered Cards */}
      <div className="Avantages">
        <div className="container">
          <div className="advantages-wrapper">
            <div className="advantage-card">
              <div className="advantage-icon"></div>
              <div className="advantage-content">
                <img
                  src="./public/reservation.svg"
                  alt="Réservation instantanée"
                />
                <h3>Réservation instantanée</h3>
                <p>
                  Vous pouvez louer instantanément des bateaux en utilisant la
                  fonction calendrier.
                </p>
              </div>
            </div>

            <div className="advantage-card">
              <div className="advantage-icon">
                <img
                  src="./public/garantie.svg"
                  alt="Garantie du meilleur prix"
                />
              </div>
              <div className="advantage-content">
                <h3>Garantie du meilleur prix</h3>
                <p>
                  Chez Teknevia, les prix sont déterminés directement par les
                  propriétaires de bateaux.
                </p>
              </div>
            </div>

            <div className="advantage-card">
              <div className="advantage-icon">
                <img src="./public/securisee.svg" alt="Réservation sécurisée" />
              </div>
              <div className="advantage-content">
                <h3>Réservation sécurisée</h3>
                <p>
                  L'acompte ne sera pas déposé sur le compte du propriétaire du
                  bateau tant que votre visite ne sera pas terminée.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Destinations Section - Fixed Layout */}
      <div className="destinations">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1>Les destinations qu'on adore explorer sur l'eau</h1>
              <p>
                Des criques secrètes aux ports animés, chaque escale révèle une
                nouvelle facette de la beauté marine, entre détente, luxe et
                découvertes inoubliables.
              </p>
              <div className="destinations-grid">
                <div className="destination-item destination-large">
                  <div className="destination-image-container">
                    <img
                      src="./public/cannes.jpg"
                      alt="Cannes"
                      className="destination-image"
                    />
                    <div className="destination-overlay"></div>
                    <h3 className="destination-title">Cannes</h3>
                  </div>
                </div>
                <div className="destination-item destination-medium">
                  <div className="destination-image-container">
                    <img
                      src="./public/Saint-Tropez.jpg"
                      alt="Saint Tropez"
                      className="destination-image"
                    />
                    <div className="destination-overlay"></div>
                    <h3 className="destination-title">Saint Tropez</h3>
                  </div>
                </div>
                <div className="destination-item destination-medium">
                  <div className="destination-image-container">
                    <img
                      src="./public/nice.jpg"
                      alt="Nice"
                      className="destination-image"
                    />
                    <div className="destination-overlay"></div>
                    <h3 className="destination-title">Nice</h3>
                  </div>
                </div>
                <div className="destination-item destination-small">
                  <div className="destination-image-container">
                    <img
                      src="./public/france.jpg"
                      alt="France"
                      className="destination-image"
                    />
                    <div className="destination-overlay"></div>
                    <h3 className="destination-title">France</h3>
                  </div>
                </div>
                <div className="destination-item destination-small">
                  <div className="destination-image-container">
                    <img
                      src="./public/Espagne.jpg"
                      alt="Espagne"
                      className="destination-image"
                    />
                    <div className="destination-overlay"></div>
                    <h3 className="destination-title">Espagne</h3>
                  </div>
                </div>
                <div className="destination-item destination-small">
                  <div className="destination-image-container">
                    <img
                      src="./public/Italie.jpg"
                      alt="Italie"
                      className="destination-image"
                    />
                    <div className="destination-overlay"></div>
                    <h3 className="destination-title">Italie</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section - Clickable with Modal */}
      <div className="video-section" onClick={handleVideoClick}>
        <div className="video-background">
          <img src="./public/video.jpg" alt="Video Background" />
          <div className="video-overlay"></div>
        </div>
        <div className="video-content">
          <h2>Le luxe au fil de l'eau</h2>
          <p>Offrez-vous l'ultime expérience nautique avec Cannes Yachting.</p>
          <div className="play-button">
            <img src="./public/iconvideo.svg" alt="Play Video" />
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideoModal && (
        <div className="video-modal-overlay" onClick={closeVideoModal}>
          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="video-modal-close" onClick={closeVideoModal}>
              ×
            </button>
            <div className="video-iframe-container">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/pSNhG9OHuJw?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* Reviews Section - Single View */}
      <div className="avisbloc">
        <div className="container">
          <h2>Avis Clients</h2>
          <p>
            Découvrez ce que nos clients disent de leur expérience à bord de nos
            yachts.
            <br />
            Des moments inoubliables, des services exceptionnels et une
            navigation de rêve.
          </p>

          {/* Unified Reviews Layout */}
          <div className="reviews-container">
            <div className="reviews-grid">
              {/* First Row - 3 cards */}
              <div className="review-row">
                <div className="review-card">
                  <div className="review-header">
                    <img
                      src="./public/imgavis1.jpg"
                      alt="Isabelle Moreau"
                      className="review-avatar"
                    />
                    <div className="review-info">
                      <h3 className="review-name">Isabelle Moreau</h3>
                      <span className="review-location">Côte d'Azur</span>
                      <div className="star-rating">
                        <span className="star full">★</span>
                        <span className="star full">★</span>
                        <span className="star full">★</span>
                        <span className="star full">★</span>
                        <span className="star empty">★</span>
                      </div>
                    </div>
                  </div>
                  <p className="review-text">
                    "Une expérience incroyable ! Le service à bord était
                    irréprochable, et les paysages à couper le souffle. Nous
                    reviendrons, c'est certain !"
                  </p>
                </div>

                <div className="review-card">
                  <div className="review-header">
                    <img
                      src="./public/imgavis2.jpg"
                      alt="Jean Dupont"
                      className="review-avatar"
                    />
                    <div className="review-info">
                      <h3 className="review-name">Jean Dupont</h3>
                      <span className="review-location">Monaco</span>
                      <div className="star-rating">
                        <span className="star full">★</span>
                        <span className="star full">★</span>
                        <span className="star full">★</span>
                        <span className="star full">★</span>
                        <span className="star empty">★</span>
                      </div>
                    </div>
                  </div>
                  <p className="review-text">
                    "Tout simplement parfait ! Le yacht était magnifique, et
                    l'équipage a rendu notre séjour encore plus spécial. Une
                    escapade que nous n'oublierons jamais."
                  </p>
                </div>

                <div className="review-card">
                  <div className="review-header">
                    <img
                      src="./public/imgavis3.jpg"
                      alt="Marc Lefevre"
                      className="review-avatar"
                    />
                    <div className="review-info">
                      <h3 className="review-name">Marc Lefevre</h3>
                      <span className="review-location">Saint-Tropez</span>
                      <div className="star-rating">
                        <span className="star full">★</span>
                        <span className="star full">★</span>
                        <span className="star full">★</span>
                        <span className="star full">★</span>
                        <span className="star empty">★</span>
                      </div>
                    </div>
                  </div>
                  <p className="review-text">
                    "Le luxe et le confort étaient au rendez-vous. Chaque détail
                    a été pensé pour notre plaisir. Merci à toute l'équipe pour
                    cette aventure exceptionnelle !"
                  </p>
                </div>
              </div>

              {/* Second Row - 2 cards centered */}
              <div className="review-row review-row-centered">
                <div className="review-card">
                  <div className="review-header">
                    <img
                      src="./public/imgavis4.jpg"
                      alt="Claire Dufresne"
                      className="review-avatar"
                    />
                    <div className="review-info">
                      <h3 className="review-name">Claire Dufresne</h3>
                      <span className="review-location">Ibiza</span>
                      <div className="star-rating">
                        <span className="star full">★</span>
                        <span className="star full">★</span>
                        <span className="star full">★</span>
                        <span className="star full">★</span>
                        <span className="star empty">★</span>
                      </div>
                    </div>
                  </div>
                  <p className="review-text">
                    "Une expérience de croisière inoubliable. Le service était
                    top, l'équipage était très accueillant et les destinations
                    incroyables. À refaire !"
                  </p>
                </div>

                <div className="review-card">
                  <div className="review-header">
                    <img
                      src="./public/imgavis5.jpg"
                      alt="Paul Martin"
                      className="review-avatar"
                    />
                    <div className="review-info">
                      <h3 className="review-name">Paul Martin</h3>
                      <span className="review-location">Amalfi Coast</span>
                      <div className="star-rating">
                        <span className="star full">★</span>
                        <span className="star full">★</span>
                        <span className="star full">★</span>
                        <span className="star full">★</span>
                        <span className="star empty">★</span>
                      </div>
                    </div>
                  </div>
                  <p className="review-text">
                    "Je recommande vivement ! Le yacht était splendide et tout a
                    été organisé à la perfection. Un moment de détente absolu."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="Apropos">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <h2>À propos de nous</h2>
              <p>
                Experts du yachting de luxe, nous vous offrons des expériences
                inoubliables en mer.
                <br />
                <br />
                Depuis plusieurs années, nous accompagnons nos clients à la
                découverte des plus belles destinations à bord de yachts
                d'exception. Notre équipe passionnée s'engage à offrir un
                service haut de gamme, sur mesure et attentif à chaque détail.
                Que ce soit pour une escapade en famille, une célébration
                spéciale ou une croisière privée, nous créons des souvenirs
                uniques et inoubliables.
              </p>
            </div>
            <div className="col-sm-6">
              <div className="imgsApropos">
                <img src="./public/imgapropos1.jpg" />
                <img src="./public/imgapropos2.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Section - COMPLETE VERSION */}
      <div className="notreBlog">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h2>Notre Blog</h2>
              <p>
                Inspirez-vous de nos articles pour découvrir les meilleures
                destinations,
                <br />
                conseils de navigation et tendances du yachting de luxe.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              {/* Blog Posts Grid - Static Layout for now */}
              <div
                className="blog-posts-grid"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "20px",
                  marginTop: "35px",
                }}
              >
                <div
                  className="blog-post-item"
                  style={{ flex: "1 1 300px", maxWidth: "350px" }}
                >
                  <img
                    src="./public/post1.jpg"
                    style={{ width: "100%", borderRadius: "10px" }}
                  />
                  <div className="contentpost">
                    <span className="categorie">Destinations</span>
                    <h3>Les Meilleures Destinations pour l'Été</h3>
                    <p>
                      Partez à la découverte des lieux incontournables pour une
                      croisière estivale inoubliable..
                    </p>
                    <a href="#" className="readmore">
                      → Lire le blog
                    </a>
                  </div>
                </div>
                <div
                  className="blog-post-item"
                  style={{ flex: "1 1 300px", maxWidth: "350px" }}
                >
                  <img
                    src="./public/post2.jpg"
                    style={{ width: "100%", borderRadius: "10px" }}
                  />
                  <div className="contentpost">
                    <span className="categorie">Destinations</span>
                    <h3>Conseils pour une Première Location de Yacht</h3>
                    <p>
                      Tout ce qu'il faut savoir pour vivre une première
                      expérience en mer réussie..
                    </p>
                    <a href="#" className="readmore">
                      → Lire le blog
                    </a>
                  </div>
                </div>
                <div
                  className="blog-post-item"
                  style={{ flex: "1 1 300px", maxWidth: "350px" }}
                >
                  <img
                    src="./public/post3.jpg"
                    style={{ width: "100%", borderRadius: "10px" }}
                  />
                  <div className="contentpost">
                    <span className="categorie">Destinations</span>
                    <h3>Tendances Yachting 2025</h3>
                    <p>
                      Découvrez les dernières tendances qui redéfinissent le
                      luxe en mer cette année..
                    </p>
                    <a href="#" className="readmore">
                      → Lire le blog
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="BlocNewslettre">
        <div className="container">
          <div className="row">
            <div className="offset-sm-2"></div>
            <div className="col-sm-8">
              <h2>Restez informé</h2>
              <p>
                Abonnez-vous à notre newsletter pour recevoir les dernières
                offres,
                <br />
                destinations exclusives et conseils yachting directement dans
                votre boîte mail.
              </p>
              <div className="newsletter-container">
                <input
                  type="email"
                  placeholder="Entrez votre e-mail"
                  className="newsletter-input"
                />
                <button className="newsletter-button">S'inscrire</button>
              </div>
            </div>
            <div className="offset-sm-2"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
