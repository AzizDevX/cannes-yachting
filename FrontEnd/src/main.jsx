import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ProfilePage from "./dashboard/profile/profile.jsx";
import HomePage from "./home/index.jsx";
import TempPage from "./TempPage.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/cannes">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profil" element={<ProfilePage />} />
        <Route path="*" element={<TempPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
