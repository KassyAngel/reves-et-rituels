import { ReactNode } from "react";
import { BottomNav } from "./BottomNav";
import { LanguageToggle } from "./LanguageToggle";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";

export function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const isHome = location === "/";

  return (
    <div className="min-h-screen w-full bg-[#FAFAFA] flex justify-center overflow-hidden">
      <div className="w-full max-w-[430px] min-h-screen relative bg-white shadow-[0_0_50px_rgba(0,0,0,0.05)] overflow-x-hidden flex flex-col">

        {/* Celestial Background — masqué sur Home car Home a son propre fond */}
        {!isHome && (
          <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
            <img
              src={`${import.meta.env.BASE_URL}images/celestial-bg.png`}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/80 to-white/95" />
          </div>
        )}

        {/* LanguageToggle — masqué sur Home car Home a le sien */}
        {!isHome && <LanguageToggle />}

        <div className={`flex-1 relative z-10 w-full overflow-y-auto custom-scrollbar ${
          isHome ? "" : "px-6 pt-16 pb-32"
        }`}>
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

        {/* BottomNav — masqué sur Home */}
        {!isHome && <BottomNav />}

      </div>
    </div>
  );
}