import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./common.css";
import App from "./App.jsx";
import "modern-normalize";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
