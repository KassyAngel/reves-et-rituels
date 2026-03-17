import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Redirige vers Home si on arrive sur /dreams au premier chargement
if (window.location.pathname.endsWith("/dreams") && !sessionStorage.getItem("app_started")) {
  window.history.replaceState({}, "", import.meta.env.BASE_URL || "/");
}
sessionStorage.setItem("app_started", "true");

createRoot(document.getElementById("root")!).render(<App />);