import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App";
import { ThemeProvider } from "./app/Providers/ThemeProvider";
import { BrowserRouter } from "react-router-dom";

// css
import "./app/styles/main.scss";
// i18n
import "./shared/config/i18n";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
