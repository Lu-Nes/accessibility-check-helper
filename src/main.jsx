import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Einstiegspunkt der React-App:
// Die App-Komponente wird in das HTML-Element mit der id "root" gerendert.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
