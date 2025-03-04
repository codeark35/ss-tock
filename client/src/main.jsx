import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./router/App.jsx";
import "./styles/main.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
