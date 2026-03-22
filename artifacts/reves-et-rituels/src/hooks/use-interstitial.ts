import { useRef } from "react";
import { showInterstitial } from "@/lib/admob";

const KEY = "rr_nav_count";

export function useInterstitial() {
  const showing = useRef(false);

  const trackNavigation = async () => {
    if (showing.current) return;
    const count = parseInt(localStorage.getItem(KEY) || "0") + 1;
    localStorage.setItem(KEY, String(count));
    if (count % 3 === 0) {
      showing.current = true;
      await showInterstitial();
      showing.current = false;
    }
  };

  return { trackNavigation };
}