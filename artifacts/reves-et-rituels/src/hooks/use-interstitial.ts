import { useRef } from "react";
import { useLocation } from "wouter";
import { showInterstitial } from "@/lib/admob";

const KEY_GLOBAL = "rr_nav_count_global";
const KEY_DREAMS = "rr_nav_count_dreams";
const KEY_MOON   = "rr_nav_count_moon";

export function useInterstitial() {
  const [location] = useLocation();
  const showing = useRef(false);

  const trackNavigation = async () => {
    if (showing.current) return;

    // Pages avec compteur indépendant au 3e clic
    if (location === "/dreams") {
      const count = parseInt(localStorage.getItem(KEY_DREAMS) || "0") + 1;
      localStorage.setItem(KEY_DREAMS, String(count));
      if (count % 3 === 0) {
        showing.current = true;
        await showInterstitial();
        showing.current = false;
      }
      return; // ne pas incrémenter le compteur global
    }

    if (location === "/moon") {
      const count = parseInt(localStorage.getItem(KEY_MOON) || "0") + 1;
      localStorage.setItem(KEY_MOON, String(count));
      if (count % 3 === 0) {
        showing.current = true;
        await showInterstitial();
        showing.current = false;
      }
      return; // ne pas incrémenter le compteur global
    }

    // Toutes les autres pages → compteur global au 6e clic
    const count = parseInt(localStorage.getItem(KEY_GLOBAL) || "0") + 1;
    localStorage.setItem(KEY_GLOBAL, String(count));
    if (count % 6 === 0) {
      showing.current = true;
      await showInterstitial();
      showing.current = false;
    }
  };

  return { trackNavigation };
}