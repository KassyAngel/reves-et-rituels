import { Link, useLocation } from "wouter";
import { useLanguage } from "@/hooks/use-language";
import { useState, useEffect } from "react";
import {
  Sparkles, Moon, BookOpen, Feather, Leaf, HeartHandshake,
} from "lucide-react";
import { motion } from "framer-motion";
import { useInterstitial } from "@/hooks/use-interstitial";
import { useRateApp } from "@/hooks/use-rate-app";
import { RateAppModal } from "@/components/RateAppModal";
import { subscribeBannerHeight } from "@/lib/admob";

export function BottomNav() {
  const [location] = useLocation();
  const { lang } = useLanguage();
  const { trackNavigation } = useInterstitial();
  const { trackClick, markRated } = useRateApp();
  const [showRateModal, setShowRateModal] = useState(false);
  const [bannerHeight, setBannerHeight] = useState(0);

  useEffect(() => {
    const unsubscribe = subscribeBannerHeight((h) => setBannerHeight(h));
    return unsubscribe;
  }, []);

  const handleTabClick = async () => {
    await trackNavigation();
    const shouldPrompt = trackClick();
    if (shouldPrompt) setShowRateModal(true);
  };

  const tabs = [
    { href: "/dreams",  label: lang === "fr" ? "Rêves"   : "Dreams",  icon: Feather        },
    { href: "/rituals", label: lang === "fr" ? "Rituels" : "Rituals", icon: Sparkles       },
    { href: "/journal", label: lang === "fr" ? "Journal" : "Journal", icon: BookOpen       },
    { href: "/moon",    label: lang === "fr" ? "Lune"    : "Moon",    icon: Moon           },
    { href: "/prayers", label: lang === "fr" ? "Prières" : "Prayers", icon: HeartHandshake },
    { href: "/plants",  label: lang === "fr" ? "Plantes" : "Plants",  icon: Leaf           },
  ];

  return (
    <>
      {/*
        La BottomNav est positionnée fixed en bas.
        - paddingBottom = bannerHeight : laisse exactement la place à la bannière
          AdMob qui se positionne elle-même tout en bas de la WebView (au-dessus
          de la barre système Samsung/Android).
        - La bannière n'a PAS besoin de margin React : AdMob BOTTOM_CENTER
          se place déjà au-dessus de la barre de navigation système.
        - Résultat visuel (de bas en haut) :
            [ barre système Android ]
            [ bannière AdMob        ]  ← gérée nativement par AdMob
            [ pill BottomNav        ]  ← paddingBottom = bannerHeight
      */}
      <div
        className="fixed bottom-0 w-full max-w-[430px] z-50"
        style={{ paddingBottom: bannerHeight }}
      >
        {/* Fond derrière la bannière pour éviter le contenu visible par transparence */}
        {bannerHeight > 0 && (
          <div
            className="absolute bottom-0 left-0 right-0 bg-white"
            style={{ height: bannerHeight }}
          />
        )}

        <div className="mx-3 mb-2">
          <div
            className="rounded-2xl flex items-center overflow-hidden"
            style={{
              background: "rgba(255, 255, 255, 0.88)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              boxShadow:
                "0 -2px 20px rgba(139, 92, 246, 0.08), 0 8px 32px rgba(139, 92, 246, 0.1)",
              border: "1px solid rgba(221, 207, 255, 0.5)",
            }}
          >
            <div className="flex flex-1 items-center justify-between px-1 py-1">
              {tabs.map((tab) => {
                const isActive =
                  location === tab.href ||
                  (location === "/" && tab.href === "/dreams");
                const Icon = tab.icon;
                return (
                  <Link
                    key={tab.href}
                    href={tab.href}
                    className="flex-1 relative"
                    onClick={handleTabClick}
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
                      <span
                        className={`text-[9px] font-medium relative z-10 transition-colors duration-200 ${
                          isActive ? "text-violet-500" : "text-slate-400"
                        }`}
                      >
                        {tab.label}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <RateAppModal
        visible={showRateModal}
        onClose={() => setShowRateModal(false)}
        onRated={markRated}
      />
    </>
  );
}