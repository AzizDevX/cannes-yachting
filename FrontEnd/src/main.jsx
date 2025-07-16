import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ProfilePage from "./dashboard/profile/profile.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProfilePage />
  </StrictMode>
);
