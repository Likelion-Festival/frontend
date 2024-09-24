// import React from "react";
// import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { MapProvider } from "@context/MapContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MapProvider>
      <App />
    </MapProvider>
  </StrictMode>
);
