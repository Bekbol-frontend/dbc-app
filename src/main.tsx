import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App";

// css
import "./app/styles/main.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
