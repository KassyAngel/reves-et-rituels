import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Crown, X } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { NotificationSettings } from "./NotificationSettings";

interface Props {
  open: boolean;
  onClose: () => void;
}

export function PremiumModal({ open, onClose }: Props) {
  const { lang } = useLanguage();

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-5"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: "spring", damping: 22, stiffness: 260 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[360px] rounded-3xl shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col"
            style={{
              background: "linear-gradient(160deg, #1a0533 0%, #2d1060 40%, #0f0826 100%)",
            }}
          >
            {/* Étoiles déco */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(18)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-white"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    opacity: Math.random() * 0.6 + 0.1,
                  }}
                  animate={{ opacity: [0.1, 0.8, 0.1] }}
                  transition={{
                    duration: 2 + Math.random() * 3,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            {/* Fermer */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center z-10"
            >
              <X size={16} className="text-white/70" />
            </button>

            {/* Contenu scrollable */}
            <div className="flex flex-col items-center pt-8 pb-7 px-6 overflow-y-auto">

              {/* Couronne */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-300 to-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/30 mb-4">
                <Crown size={32} className="text-white" />
              </div>
              <h2 className="font-display font-bold text-2xl text-white text-center mb-1">
                {lang === "fr" ? "Passe Premium" : "Go Premium"}
              </h2>
              <p className="text-white/50 text-sm text-center mb-6">
                {lang === "fr" ? "Débloque toutes les fonctionnalités" : "Unlock all features"}
              </p>

              {/* Avantages */}
              {[
                { emoji: "🔮", fr: "Interprétation illimitée des rêves",  en: "Unlimited dream interpretation" },
                { emoji: "✨", fr: "Accès à tous les rituels",             en: "Access to all rituals"          },
                { emoji: "🌙", fr: "Journal de rêves illimité",            en: "Unlimited dream journal"        },
                { emoji: "🌿", fr: "Guide complet des plantes",            en: "Complete plant guide"           },
                { emoji: "🙏", fr: "Toutes les prières & mantras",         en: "All prayers & mantras"          },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.07 }}
                  className="w-full flex items-center gap-3 mb-3"
                >
                  <span className="text-xl">{item.emoji}</span>
                  <span className="text-white/80 text-sm">
                    {lang === "fr" ? item.fr : item.en}
                  </span>
                </motion.div>
              ))}

              {/* ── Séparateur ── */}
              <div className="w-full h-px bg-white/10 my-4" />

              {/* ── Notifications — section adaptée fond sombre ── */}
              <div className="w-full mb-4">
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-3">
                  {lang === "fr" ? "🔔 Rappel quotidien" : "🔔 Daily reminder"}
                </p>
                <div className="[&_button]:!bg-white/10 [&_button]:!border-white/20 [&_p]:!text-white/70 [&_span]:!text-white/50">
                  <NotificationSettings />
                </div>
              </div>

              {/* ── Séparateur ── */}
              <div className="w-full h-px bg-white/10 mb-4" />

              {/* Prix */}
              <div className="w-full mb-5 p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-white font-bold text-sm">
                    {lang === "fr" ? "Abonnement annuel" : "Yearly subscription"}
                  </p>
                  <p className="text-white/40 text-xs">
                    {lang === "fr" ? "Soit 0,83€ / mois" : "Just €0.83 / month"}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-yellow-400 font-bold text-xl">9,99€</p>
                  <p className="text-white/30 text-xs line-through">19,99€</p>
                </div>
              </div>

              {/* CTA */}
              <button
                className="w-full py-4 rounded-2xl font-bold text-base text-white active:scale-95 transition-transform"
                style={{
                  background: "linear-gradient(135deg, #f59e0b 0%, #f97316 100%)",
                  boxShadow: "0 4px 20px rgba(245, 158, 11, 0.4)",
                }}
              >
                {lang === "fr" ? "Commencer l'essai gratuit" : "Start free trial"}
              </button>

              <p className="text-white/25 text-[10px] text-center mt-3">
                {lang === "fr"
                  ? "Sans engagement · Annulable à tout moment"
                  : "No commitment · Cancel anytime"}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}