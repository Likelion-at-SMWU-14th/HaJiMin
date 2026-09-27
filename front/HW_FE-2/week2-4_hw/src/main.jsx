import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { PartContextProvider } from "./contexts/PartContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PartContextProvider>
      <App />
    </PartContextProvider>
  </StrictMode>,
);
