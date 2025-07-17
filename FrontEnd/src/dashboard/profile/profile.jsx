import React, { useRef, useState, useEffect } from "react";
import Navbar from "../../navbar/navbar.jsx";
import Footer from "../../footer/footer.jsx";
import Userlogo from "../../assets/user.png";
import "./style.css";
import {
  FaHome,
  FaUser,
  FaCommentDots,
  FaCalendarAlt,
  FaAnchor,
  FaHeart,
  FaSignOutAlt,
  FaCloudUploadAlt,
  FaFile,
  FaTimes,
} from "react-icons/fa";

const UserName = "Name";

function ProfilePage() {
  const verificationRef = useRef(null);
  const informationsRef = useRef(null);
  const cvNautiqueRef = useRef(null);
  const coordonneesBancairesRef = useRef(null);
  const motDePasseRef = useRef(null);
  const parametresRef = useRef(null);

  const [activeTab, setActiveTab] = useState("verification");
  const [showFileModal, setShowFileModal] = useState(false);
  const [currentFileType, setCurrentFileType] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [dragOver, setDragOver] = useState(false);

  // Effect for active tab highlighting on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "verification", ref: verificationRef },
        { id: "informations", ref: informationsRef },
        { id: "cvNautique", ref: cvNautiqueRef },
        { id: "coordonneesBancaires", ref: coordonneesBancairesRef },
        { id: "motDePasse", ref: motDePasseRef },
        { id: "parametres", ref: parametresRef },
      ];

      const headerHeight =
        document.querySelector(".profile-header")?.offsetHeight || 0;
      const scrollPosition = window.scrollY + headerHeight + 50; // Adjusted offset

      let newActiveTab = activeTab; // Keep current active tab if no new section is found

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.ref.current) {
          const offsetTop = section.ref.current.offsetTop;
          const offsetBottom = offsetTop + section.ref.current.offsetHeight;

          // Check if the section is currently in view or just passed
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            newActiveTab = section.id;
            break;
          } else if (i === 0 && scrollPosition < offsetTop) {
            // Special case for the very first section
            newActiveTab = section.id;
            break;
          }
        }
      }

      // Add a check for when scrolling to the very bottom of the page
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      if (window.scrollY + windowHeight >= documentHeight - 10) {
        // 10px buffer
        newActiveTab = sections[sections.length - 1].id; // Last section
      }

      if (newActiveTab !== activeTab) {
        setActiveTab(newActiveTab);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount to set initial active tab
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeTab]); // Depend on activeTab to re-run effect when it changes

  const scrollToSection = (sectionRef, tabId) => {
    setActiveTab(tabId);
    if (sectionRef.current) {
      const headerHeight =
        document.querySelector(".profile-header")?.offsetHeight || 0;
      const targetPosition = sectionRef.current.offsetTop - headerHeight - 20;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  // File upload modal functions
  const openFileModal = (fileType) => {
    setCurrentFileType(fileType);
    setSelectedFile(null);
    setShowFileModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeFileModal = () => {
    setShowFileModal(false);
    setCurrentFileType("");
    setSelectedFile(null);
    setDragOver(false);
    document.body.style.overflow = "auto";
  };

  const handleFileSelect = (file) => {
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
      console.log(`File selected for ${currentFileType}:`, file.name);
    } else {
      alert("Veuillez sélectionner un fichier image valide.");
    }
  };

  const handleFileInput = (accept = "image/*", capture = false) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = accept;
    if (capture) {
      input.capture = "environment";
    }
    input.multiple = false;

    input.onchange = (event) => {
      const file = event.target.files[0];
      if (file) {
        handleFileSelect(file);
      }
    };

    input.click();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleConfirmUpload = () => {
    if (selectedFile) {
      console.log("Confirming upload for:", selectedFile.name);
      // Here you would typically send the file to your server
      alert(`File ${selectedFile.name} uploaded successfully!`);
      closeFileModal();
    } else {
      alert("Please select a file first.");
    }
  };

  const getFileTypeLabel = (type) => {
    const labels = {
      "profile-photo": "Photo de profil",
      kbis: "Document K-Bis",
      "id-card": "Carte d'identité",
      iban: "Document IBAN",
      ownership: "Certificat de propriété",
    };
    return labels[type] || "Document";
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && showFileModal) {
        closeFileModal();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [showFileModal]);

  return (
    <>
      <Navbar />
      <div className="page-container">
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

        <div className="main-content">
          {/* Fixed profile header with tabs */}
          <div className="profile-header">
            <div className="profile-tabs">
              <button
                className={`tab-btn ${
                  activeTab === "verification" ? "active" : ""
                }`}
                onClick={() => scrollToSection(verificationRef, "verification")}
              >
                Vérification
              </button>
              <button
                className={`tab-btn ${
                  activeTab === "informations" ? "active" : ""
                }`}
                onClick={() => scrollToSection(informationsRef, "informations")}
              >
                Informations
              </button>
              <button
                className={`tab-btn ${
                  activeTab === "cvNautique" ? "active" : ""
                }`}
                onClick={() => scrollToSection(cvNautiqueRef, "cvNautique")}
              >
                CV nautique
              </button>
              <button
                className={`tab-btn ${
                  activeTab === "coordonneesBancaires" ? "active" : ""
                }`}
                onClick={() =>
                  scrollToSection(
                    coordonneesBancairesRef,
                    "coordonneesBancaires"
                  )
                }
              >
                Coordonnées bancaires
              </button>
              <button
                className={`tab-btn ${
                  activeTab === "motDePasse" ? "active" : ""
                }`}
                onClick={() => scrollToSection(motDePasseRef, "motDePasse")}
              >
                Mot de passe
              </button>
              <button
                className={`tab-btn ${
                  activeTab === "parametres" ? "active" : ""
                }`}
                onClick={() => scrollToSection(parametresRef, "parametres")}
              >
                Paramètres
              </button>
            </div>
          </div>

          {/* Scrollable content area */}
          <div className="content-area">
            {/* Verification Section */}
            <div
              ref={verificationRef}
              id="verification"
              className="profile-section"
            >
              <h2>Vérification de votre profil</h2>
              <p>
                Pour garantir la sécurité et la confiance sur notre plateforme,
                nous vous demandons de vérifier votre identité. Cette étape est
                obligatoire pour publier une annonce ou recevoir des paiements.
              </p>
              <div className="verification-requirements">
                <h3>Documents requis :</h3>
                <ul>
                  <li>• Pièce d'identité en cours de validité</li>
                  <li>• Justificatif de domicile (si demandé)</li>
                </ul>
              </div>
            </div>

            {/* Personal Information Section */}
            <div
              ref={informationsRef}
              id="informations"
              className="profile-section"
            >
              <h2>Informations personnelles</h2>

              <div className="profile-photo-section">
                <div className="photo-upload">
                  <img src={Userlogo} alt="Profile" className="profile-photo" />
                  <div className="photo-text">
                    <p>Changer votre photo de profil</p>
                    <button
                      className="btn-secondary"
                      onClick={() => openFileModal("profile-photo")}
                    >
                      Sélectionnez une image
                    </button>
                  </div>
                </div>
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label>Prénom</label>
                  <input type="text" className="form-input" />
                </div>
                <div className="form-group">
                  <label>Nom</label>
                  <input type="text" className="form-input" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" className="form-input" />
                </div>
                <div className="form-group">
                  <label>Sexe</label>
                  <select className="form-select">
                    <option value="">Sélectionner</option>
                    <option value="homme">Homme</option>
                    <option value="femme">Femme</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Date de naissance</label>
                  <div className="date-inputs">
                    <select className="form-select">
                      <option value="">Jour</option>
                      {Array.from({ length: 31 }, (_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                    <select className="form-select">
                      <option value="">Mois</option>
                      <option value="1">Janvier</option>
                      <option value="2">Février</option>
                      <option value="3">Mars</option>
                      <option value="4">Avril</option>
                      <option value="5">Mai</option>
                      <option value="6">Juin</option>
                      <option value="7">Juillet</option>
                      <option value="8">Août</option>
                      <option value="9">Septembre</option>
                      <option value="10">Octobre</option>
                      <option value="11">Novembre</option>
                      <option value="12">Décembre</option>
                    </select>
                    <select className="form-select">
                      <option value="">Année</option>
                      {Array.from({ length: 80 }, (_, i) => {
                        const year = new Date().getFullYear() - i - 18;
                        return (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label>Langue parlée</label>
                  <select className="form-select">
                    <option value="">Sélectionner</option>
                    <option value="francais">Français</option>
                    <option value="anglais">Anglais</option>
                    <option value="espagnol">Espagnol</option>
                    <option value="italien">Italien</option>
                    <option value="allemand">Allemand</option>
                    <option value="portugais">Portugais</option>
                    <option value="neerlandais">Néerlandais</option>
                    <option value="russe">Russe</option>
                    <option value="arabe">Arabe</option>
                    <option value="chinois">Chinois</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Téléphone</label>
                  <div className="phone-input">
                    <select className="country-code">
                      <option value="+33">France +33</option>
                      <option value="+34">Espagne +34</option>
                      <option value="+39">Italie +39</option>
                      <option value="+49">Allemagne +49</option>
                      <option value="+44">Royaume-Uni +44</option>
                      <option value="+1">États-Unis +1</option>
                      <option value="+41">Suisse +41</option>
                      <option value="+32">Belgique +32</option>
                      <option value="+31">Pays-Bas +31</option>
                    </select>
                    <input type="tel" className="form-input" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Adresse</label>
                  <input type="text" className="form-input" />
                </div>
                <div className="form-group">
                  <label>Code postal</label>
                  <input type="text" className="form-input" />
                </div>
                <div className="form-group">
                  <label>Ville</label>
                  <select className="form-select">
                    <option value="">Sélectionner</option>
                    <option value="paris">Paris</option>
                    <option value="marseille">Marseille</option>
                    <option value="lyon">Lyon</option>
                    <option value="toulouse">Toulouse</option>
                    <option value="nice">Nice</option>
                    <option value="nantes">Nantes</option>
                    <option value="montpellier">Montpellier</option>
                    <option value="strasbourg">Strasbourg</option>
                    <option value="bordeaux">Bordeaux</option>
                    <option value="lille">Lille</option>
                    <option value="rennes">Rennes</option>
                    <option value="reims">Reims</option>
                    <option value="toulon">Toulon</option>
                    <option value="saint-etienne">Saint-Étienne</option>
                    <option value="le-havre">Le Havre</option>
                    <option value="grenoble">Grenoble</option>
                    <option value="dijon">Dijon</option>
                    <option value="angers">Angers</option>
                    <option value="nimes">Nîmes</option>
                    <option value="villeurbanne">Villeurbanne</option>
                    <option value="cannes">Cannes</option>
                    <option value="antibes">Antibes</option>
                    <option value="saint-tropez">Saint-Tropez</option>
                    <option value="monaco">Monaco</option>
                  </select>
                </div>
              </div>

              <div className="company-section">
                <h3>Société</h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Société</label>
                    <input type="text" className="form-input" />
                  </div>
                  <div className="form-group">
                    <label>Adresse</label>
                    <input type="text" className="form-input" />
                  </div>
                  <div className="form-group">
                    <label>SIRET</label>
                    <input type="text" className="form-input" />
                  </div>
                  <div className="form-group">
                    <label>TVA intracommunautaire</label>
                    <input type="text" className="form-input" />
                  </div>
                  <div className="form-group">
                    <label>Site internet</label>
                    <input type="url" className="form-input" />
                  </div>
                  <div className="form-group">
                    <label>Système de gestion de réservations</label>
                    <input type="text" className="form-input" />
                  </div>
                </div>
              </div>

              <button className="btn-primary">Sauvegarde r</button>
            </div>

            {/* Nautical CV Section */}
            <div
              ref={cvNautiqueRef}
              id="cvNautique"
              className="profile-section"
            >
              <h2>Votre niveau en tant que capitaine</h2>

              <div className="form-grid">
                <div className="form-group">
                  <label>Votre niveau</label>
                  <select className="form-select">
                    <option value="">Sélectionner</option>
                    <option value="debutant">Débutant</option>
                    <option value="intermediaire">Intermédiaire</option>
                    <option value="confirme">Confirmé</option>
                    <option value="expert">Expert</option>
                    <option value="professionnel">Professionnel</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Vous êtes plutôt</label>
                  <select className="form-select">
                    <option value="">Sélectionner</option>
                    <option value="voile">Voile</option>
                    <option value="moteur">Moteur</option>
                    <option value="mixte">Voile et Moteur</option>
                    <option value="catamaran">Catamaran</option>
                    <option value="yacht">Yacht</option>
                    <option value="peche">Pêche</option>
                    <option value="course">Course/Régate</option>
                  </select>
                </div>
              </div>

              <div className="permits-section">
                <div className="permits-group">
                  <h3>Vos permis</h3>
                  <div className="checkbox-group">
                    <label>
                      <input type="checkbox" /> Permis côtier
                    </label>
                    <label>
                      <input type="checkbox" /> Permis hauturier
                    </label>
                    <label>
                      <input type="checkbox" /> Permis fluvial
                    </label>
                  </div>
                </div>

                <div className="permits-group">
                  <h3>Autre</h3>
                  <div className="checkbox-group">
                    <label>
                      <input type="checkbox" /> Certificat radiophonie
                    </label>
                    <label>
                      <input type="checkbox" /> Brevet de skipper professionnel
                    </label>
                  </div>
                </div>

                <div className="permits-group">
                  <h3>Expérience maritime</h3>
                  <div className="checkbox-group">
                    <label>
                      <input type="checkbox" /> J'ai déjà loué un bateau
                    </label>
                    <label>
                      <input type="checkbox" /> Je suis propriétaire
                    </label>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea className="form-textarea" rows="6"></textarea>
              </div>

              <div className="experience-tips">
                <h3>Parlez-nous un peu de vous</h3>
                <p>
                  Quel est votre âge ? Quelles sont vos passions, votre métier,
                  votre région ?
                </p>
                <p>
                  <strong>Voile, moteur, ou les deux?</strong>
                </p>
                <p>
                  Qu'est-ce qui vous attire dans la navigation ? (pêche, ski
                  nautique, régates, croisière, etc.)
                </p>
                <p>
                  <strong>Votre expérience en mer</strong>
                </p>
                <p>
                  Depuis quand naviguez-vous ? Racontez brièvement votre
                  parcours nautique : vos rôles en tant que loueur,
                  propriétaire, équipier ou skipper.
                </p>
                <p>
                  <strong>Et pour la suite?</strong>
                </p>
                <p>
                  Des projets, des envies, des souvenirs marquants ? (régates,
                  traversées, voyages, achat de bateau, bricolage, frayeurs,
                  etc.)
                </p>
              </div>

              <button className="btn-primary">Sauvegarder</button>
            </div>

            {/* Banking Details Section */}
            <div
              ref={coordonneesBancairesRef}
              id="coordonneesBancaires"
              className="profile-section"
            >
              <h2>Coordonnées bancaires</h2>
              <p>
                Veuillez renseigner vos informations bancaires pour les
                paiements.
              </p>

              <div className="form-group">
                <label>Compte IBAN</label>
                <select className="form-select">
                  <option value="">Sélectionner un type de compte</option>
                  <option value="compte-courant">Compte Courant</option>
                  <option value="compte-epargne">Compte Épargne</option>
                  <option value="compte-professionnel">
                    Compte Professionnel
                  </option>
                  <option value="compte-joint">Compte Joint</option>
                </select>
              </div>

              <div className="form-group">
                <label>Nom associé au compte bancaire</label>
                <input
                  type="text"
                  className="form-input"
                  defaultValue="adresse@email.com"
                />
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label>IBAN</label>
                  <input type="text" className="form-input" />
                </div>
                <div className="form-group">
                  <label>Confirmez le numéro IBAN</label>
                  <input type="text" className="form-input" />
                </div>
              </div>

              <div className="form-group">
                <label>Code BIC / SWIFT</label>
                <input type="text" className="form-input" />
              </div>

              <button className="btn-primary">Sauvegarder</button>
            </div>

            {/* Company Documents Section */}
            <div className="profile-section">
              <h2>Documents de l'entreprise</h2>
              <p>
                Veuillez joindre un justificatif d'existence de l'entreprise
                (ex. : extrait Kbis, registre du commerce, etc.).
              </p>

              <div className="documents-grid">
                <div className="document-upload">
                  <label>K-Bis</label>
                  <div className="upload-area">
                    <button
                      className="upload-btn"
                      onClick={() => openFileModal("kbis")}
                    >
                      Choisir un fichier
                    </button>
                    <span>No file chosen</span>
                  </div>
                  <small>Dernière modification 12/07/2025</small>
                </div>

                <div className="document-upload">
                  <label>Carte d'identité</label>
                  <div className="upload-area">
                    <button
                      className="upload-btn"
                      onClick={() => openFileModal("id-card")}
                    >
                      Choisir un fichier
                    </button>
                    <span>No file chosen</span>
                  </div>
                  <small>Dernière modification 12/07/2025</small>
                </div>

                <div className="document-upload">
                  <label>IBAN</label>
                  <div className="upload-area">
                    <button
                      className="upload-btn"
                      onClick={() => openFileModal("iban")}
                    >
                      Choisir un fichier
                    </button>
                    <span>No file chosen</span>
                  </div>
                  <small>Dernière modification 12/07/2025</small>
                </div>

                <div className="document-upload">
                  <label>Certification of Ownership</label>
                  <div className="upload-area">
                    <button
                      className="upload-btn"
                      onClick={() => openFileModal("ownership")}
                    >
                      Choisir un fichier
                    </button>
                    <span>No file chosen</span>
                  </div>
                  <small>Dernière modification 12/07/2025</small>
                </div>
              </div>

              <button className="btn-primary">Sauvegarder</button>
            </div>

            {/* Password Change Section */}
            <div
              ref={motDePasseRef}
              id="motDePasse"
              className="profile-section"
            >
              <h2>Modifier votre mot de passe</h2>

              <div className="form-grid">
                <div className="form-group">
                  <label>Ancien mot de passe</label>
                  <input type="password" className="form-input" />
                </div>
                <div className="form-group">
                  <label>Nouveau mot de passe</label>
                  <input type="password" className="form-input" />
                </div>
                <div className="form-group">
                  <label>Répétez le mot de passe</label>
                  <input type="password" className="form-input" />
                </div>
              </div>

              <div className="password-actions">
                <button className="btn-secondary">Mot de passe oublié?</button>
                <button className="btn-primary">Sauvegarder</button>
              </div>
            </div>

            {/* Settings Section */}
            <div
              ref={parametresRef}
              id="parametres"
              className="profile-section"
            >
              <h2>Paramètres</h2>

              <div className="settings-list">
                <label className="setting-item">
                  <input type="checkbox" />
                  <span>Recevoir un SMS lors d'un nouveau message</span>
                </label>
                <label className="setting-item">
                  <input type="checkbox" />
                  <span>Recevoir un email à chaque nouveau message</span>
                </label>
                <label className="setting-item">
                  <input type="checkbox" />
                  <span>Recevoir une notification push via l'application</span>
                </label>
                <label className="setting-item">
                  <input type="checkbox" />
                  <span>Afficher une alerte dans l'interface utilisateur</span>
                </label>
                <label className="setting-item">
                  <input type="checkbox" />
                  <span>Recevoir un résumé quotidien par email ou SMS</span>
                </label>
                <label className="setting-item">
                  <input type="checkbox" />
                  <span>Désactiver les notifications</span>
                </label>
              </div>

              <button className="btn-primary">Sauvegarder</button>
            </div>

            {/* Delete Account Section */}
            <div className="profile-section danger-section">
              <h2>Supprimer mon compte</h2>
              <button className="btn-danger">Supprimer</button>
            </div>
          </div>
        </div>
      </div>

      {/* File Upload Modal */}
      {showFileModal && (
        <div
          className={`file-upload-modal ${showFileModal ? "active" : ""}`}
          onClick={(e) => e.target === e.currentTarget && closeFileModal()}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">
                Télécharger {getFileTypeLabel(currentFileType)}
              </h3>
              <button className="close-btn" onClick={closeFileModal}>
                <FaTimes />
              </button>
            </div>

            <div
              className={`upload-zone ${dragOver ? "dragover" : ""}`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => handleFileInput("image/*")}
            >
              <div className="upload-icon">
                <FaCloudUploadAlt />
              </div>
              <div className="upload-text">
                <h3>Glissez-déposez votre fichier ici</h3>
                <p>ou cliquez pour sélectionner un fichier</p>
              </div>
            </div>

            <div className="upload-options">
              <button
                className="option-btn"
                onClick={() => handleFileInput("image/*")}
              >
                <FaFile />
                Choisir un fichier
              </button>
            </div>

            {selectedFile && (
              <div className="file-info">
                <h4>Fichier sélectionné</h4>
                <p>
                  {selectedFile.name} (
                  {(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
                </p>
                <div className="modal-actions">
                  <button className="btn-primary" onClick={handleConfirmUpload}>
                    Confirmer
                  </button>
                  <button className="btn-secondary" onClick={closeFileModal}>
                    Annuler
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default ProfilePage;
