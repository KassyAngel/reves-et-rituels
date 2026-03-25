import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { CapgoInAppReview } from "@capgo/capacitor-in-app-review";
import { Star } from "lucide-react";

interface Props {
  visible: boolean;
  onClose: () => void;
  onRated: () => void;
}

export function RateAppModal({ visible, onClose, onRated }: Props) {
  const { lang } = useLanguage();

  const handleRate = async () => {
    try {
      await CapgoInAppReview.requestReview();
    } catch {
      // Fallback web — ouvre le Play Store directement
      window.open(
        "https://play.google.com/store/apps/details?id=com.revesrituels.app",
        "_blank"
      );
    }
    onRated();
    onClose();
  };

  const handleLater = () => {
    onClose();
  };

  return createPortal(
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm px-6"
          onClick={handleLater}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 20 }}
            transition={{ type: "spring", damping: 24, stiffness: 260 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[320px] bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Header dégradé dans le thème */}
            <div
              className="pt-8 pb-6 flex flex-col items-center px-6"
              style={{
                background: "linear-gradient(135deg, #e8f0fe 0%, #f5f0ff 50%, #fffbe8 100%)",
              }}
            >
              {/* Étoiles animées */}
              <div className="flex gap-1.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0, rotate: -20 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: 0.1 + i * 0.08, type: "spring", stiffness: 300 }}
                  >
                    <Star
                      size={28}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  </motion.div>
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="font-display font-bold text-xl text-center"
                style={{ color: "#6d4c9e" }}
              >
                {lang === "fr" ? "Rêves & Rituels" : "Dreams & Rituals"}
              </motion.p>
            </div>

            {/* Contenu */}
            <div className="px-6 pt-5 pb-6 text-center">
              <h2 className="font-display font-bold text-lg text-foreground mb-2">
                {lang === "fr"
                  ? "Tu aimes l'appli ? "
                  : "Enjoying the app? "}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {lang === "fr"
                  ? "Ton avis aide d'autres voyageurs à découvrir leurs rêves. Ça ne prend que quelques secondes "
                  : "Your review helps other dreamers discover the app. It only takes a few seconds "}
              </p>

              {/* Bouton noter */}
              <button
                onClick={handleRate}
                className="w-full py-3.5 rounded-2xl font-bold text-sm text-white mb-3 active:scale-95 transition-transform"
                style={{
                  background: "linear-gradient(135deg, #a78bfa 0%, #c084fc 100%)",
                  boxShadow: "0 4px 15px rgba(167, 139, 250, 0.4)",
                }}
              >
                {lang === "fr" ? "Noter l'application" : "Rate the app"}
              </button>

              {/* Bouton plus tard */}
              <button
                onClick={handleLater}
                className="w-full py-2.5 rounded-2xl text-sm text-muted-foreground font-medium hover:bg-slate-50 transition-colors"
              >
                {lang === "fr" ? "Plus tard" : "Maybe later"}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}