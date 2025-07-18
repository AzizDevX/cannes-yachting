// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ProfilePage from "./dashboard/profile/profile.jsx";
import HomePage from "./home/index.jsx";
import TempPage from "./TempPage.jsx";
import DashboardAccueil from "./dashboard/accueil/accueil.jsx";
import Reservations from "./dashboard/reservations/reservations.jsx";
import Yachts from "./dashboard/yachts/yachts.jsx";
// 1. Use BrowserRouter
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 2. Add the redirect handling logic here
(function () {
  const redirect = sessionStorage.redirect;
  delete sessionStorage.redirect;
  if (redirect && redirect !== location.href) {
    history.replaceState(null, null, redirect);
  }
})();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* 3. Use BrowserRouter with the correct basename  REMOVE basename="/cannes-yachting/ WHEN HOSTING*/}
    <BrowserRouter basename="/cannes-yachting/">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard/accueil" element={<DashboardAccueil />} />
        <Route path="/dashboard/profil" element={<ProfilePage />} />
        <Route path="/dashboard/reservations" element={<Reservations />} />
        <Route path="/dashboard/mes-yachts" element={<Yachts />} />

        <Route path="*" element={<TempPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
