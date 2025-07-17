import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ProfilePage from "./dashboard/profile/profile.jsx";
import HomePage from "./home/index.jsx";
import TempPage from "./TempPage.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<TempPage />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/profil" element={<ProfilePage />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
