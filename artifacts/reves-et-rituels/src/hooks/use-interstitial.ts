import { useRef } from "react";
import { useLocation } from "wouter";
import { showInterstitial } from "@/lib/admob";

// Compteurs de navigation entre pages (BottomNav uniquement)
const KEY_NAV = "rr_nav_count";
// Compteurs d'actions dans les pages (modals, etc.)
const KEY_DREAMS_ACTION = "rr_dreams_action";
const KEY_MOON_ACTION   = "rr_moon_action";

// Délai minimum entre deux interstitiels (5 minutes)
const MIN_DELAY_MS = 5 * 60 * 1000;
const KEY_LAST_SHOWN = "rr_interstitial_last";

function canShowInterstitial(): boolean {
  const last = parseInt(localStorage.getItem(KEY_LAST_SHOWN) || "0");
  return Date.now() - last > MIN_DELAY_MS;
}

function markShown() {
  localStorage.setItem(KEY_LAST_SHOWN, Date.now().toString());
}

export function useInterstitial() {
  const [location] = useLocation();
  const showing = useRef(false);

  const show = async () => {
    if (showing.current || !canShowInterstitial()) return;
    showing.current = true;
    await showInterstitial();
    markShown();
    showing.current = false;
  };

  // ── Appelé par la BottomNav à chaque changement de page ──
  const trackNavigation = async () => {
    const count = parseInt(localStorage.getItem(KEY_NAV) || "0") + 1;
    localStorage.setItem(KEY_NAV, String(count));
    // Pub toutes les 8 navigations (pas 3 !)
    if (count % 8 === 0) await show();
  };

  // ── Appelé par les actions dans les pages (ouverture modal, etc.) ──
  const trackAction = async () => {
    const key = location === "/dreams" ? KEY_DREAMS_ACTION
              : location === "/moon"   ? KEY_MOON_ACTION
              : null;
    if (!key) return;

    const count = parseInt(localStorage.getItem(key) || "0") + 1;
    localStorage.setItem(key, String(count));
    // Pub toutes les 5 actions dans une page
    if (count % 5 === 0) await show();
  };

  return { trackNavigation, trackAction };
}