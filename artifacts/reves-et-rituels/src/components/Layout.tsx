import { ReactNode, useState, useEffect } from "react";
import { BottomNav } from "./BottomNav";
import { LanguageToggle } from "./LanguageToggle";
import { TopBarButtons } from "./TopBarButtons";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { subscribeBannerHeight } from "@/lib/admob";

// Hauteur approximative de la pill BottomNav (icônes + texte + padding vertical)
const NAV_PILL_HEIGHT = 68;
// mb-2 du pill = 8px + un peu de respiration
const NAV_MARGIN = 16;

export function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const isHome = location === "/";
  const [bannerHeight, setBannerHeight] = useState(0);

  useEffect(() => {
    const unsubscribe = subscribeBannerHeight((h) => setBannerHeight(h));
    return unsubscribe;
  }, []);

  // Le contenu scrollable doit dégager :
  //   bannière + pill nav + marges
  // De bas en haut : [barre système] [bannière AdMob] [pill nav] [contenu]
  const contentPaddingBottom = bannerHeight + NAV_PILL_HEIGHT + NAV_MARGIN;

  return (
    <div className="min-h-screen w-full bg-[#FAFAFA] flex justify-center">
      <div className="w-full max-w-[430px] min-h-screen relative bg-white shadow-[0_0_50px_rgba(0,0,0,0.05)] flex flex-col">
        {/* Celestial Background */}
        {!isHome && (
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-[#e8f0fe] via-[#f5f0ff] to-[#fffbe8]" />
            <img
              src={`${import.meta.env.BASE_URL}images/celestial-bg.png`}
              alt=""
              className="w-full h-full object-cover opacity-20 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-white/10" />
          </div>
        )}

        {/* Top bar */}
        {!isHome && (
          <div className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-3 pt-6">
            <TopBarButtons />
            <LanguageToggle />
          </div>
        )}

        {/* Scrollable content area */}
        <div
          className={`flex-1 relative z-10 w-full overflow-y-auto overflow-x-hidden custom-scrollbar ${
            isHome ? "" : "px-6 pt-20"
          }`}
          style={
            isHome
              ? undefined
              : { paddingBottom: contentPaddingBottom }
          }
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={location}
              initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(5px)" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full h-full"
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </div>

        {!isHome && <BottomNav />}
      </div>
    </div>
  );
}