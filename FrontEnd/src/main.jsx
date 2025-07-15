import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReservationPage from "./dashboard/reservation/reservation.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReservationPage />
  </StrictMode>
);
