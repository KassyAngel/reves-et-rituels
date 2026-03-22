import { Link, useLocation } from "wouter";
import { useLanguage } from "@/hooks/use-language";
import {
  Sparkles, Moon, BookOpen, Feather, Leaf, HeartHandshake
} from "lucide-react";
import { motion } from "framer-motion";
import { useInterstitial } from "@/hooks/use-interstitial";

export function BottomNav() {
  const [location] = useLocation();
  const { lang } = useLanguage();
  const { trackNavigation } = useInterstitial();

  const tabs = [
    { href: "/dreams",  label: lang === "fr" ? "Rêves"   : "Dreams",  icon: Feather        },
    { href: "/rituals", label: lang === "fr" ? "Rituels" : "Rituals", icon: Sparkles       },
    { href: "/journal", label: lang === "fr" ? "Journal" : "Journal", icon: BookOpen       },
    { href: "/moon",    label: lang === "fr" ? "Lune"    : "Moon",    icon: Moon           },
    { href: "/prayers", label: lang === "fr" ? "Prières" : "Prayers", icon: HeartHandshake },
    { href: "/plants",  label: lang === "fr" ? "Plantes" : "Plants",  icon: Leaf           },
  ];

  return (
    <div className="fixed bottom-0 w-full max-w-[430px] z-50 pb-safe">
      <div
        className="mx-3 mb-3 rounded-2xl flex items-center overflow-hidden"
        style={{
          background: "rgba(255, 255, 255, 0.88)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          boxShadow: "0 -2px 20px rgba(139, 92, 246, 0.08), 0 8px 32px rgba(139, 92, 246, 0.1)",
          border: "1px solid rgba(221, 207, 255, 0.5)",
        }}
      >
        <div className="flex flex-1 items-center justify-between px-1 py-1">
          {tabs.map((tab) => {
            const isActive = location === tab.href || (location === "/" && tab.href === "/dreams");
            const Icon = tab.icon;
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className="flex-1 relative"
                onClick={trackNavigation}
              >
                <div className="flex flex-col items-center justify-center py-2 px-1 rounded-xl cursor-pointer relative">
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-xl"
                      style={{ background: "rgba(139, 92, 246, 0.12)" }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <Icon
                    size={20}
                    strokeWidth={isActive ? 2.5 : 1.5}
                    className={`mb-0.5 relative z-10 transition-colors duration-200 ${
                      isActive ? "text-violet-500" : "text-slate-400"
                    }`}
                  />
                  <span className={`text-[9px] font-medium relative z-10 transition-colors duration-200 ${
                    isActive ? "text-violet-500" : "text-slate-400"
                  }`}>
                    {tab.label}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}