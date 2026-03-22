import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { useFirstLaunch } from "@/hooks/use-first-launch";
import {
  requestNotificationPermission,
  scheduleDaily,
} from "@/lib/notifications";

export function NotificationPrompt() {
  const { lang } = useLanguage();
  const { isFirstLaunch, markDone } = useFirstLaunch();

  const handleAccept = async () => {
    const granted = await requestNotificationPermission();
    if (granted) {
      await scheduleDaily(10, 0, lang as "fr" | "en");
    }
    markDone();
  };

  const handleDecline = () => {
    markDone();
  };

  return createPortal(
    <AnimatePresence>
      {isFirstLaunch && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm px-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", damping: 22, stiffness: 260 }}
            className="w-full max-w-[320px] bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div
              className="h-28 flex flex-col items-center justify-center px-6"
              style={{
                background: "linear-gradient(135deg, #e8f0fe 0%, #f5f0ff 50%, #fffbe8 100%)",
              }}
            >
              <motion.h1
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="font-display font-bold text-2xl text-center"
                style={{ color: "#6d4c9e" }}
              >
                Rêves & Rituels
              </motion.h1>
              <div className="flex gap-1.5 mt-2">
                {[...Array(5)].map((_, i) => (
                  <motion.span
                    key={i}
                    className="text-yellow-400 text-xs"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  >
                    ✦
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Contenu */}
            <div className="px-6 pt-5 pb-6 text-center">
              <h2 className="font-display font-bold text-lg text-foreground mb-2">
                {lang === "fr"
                  ? "Reste connecté à tes rêves"
                  : "Stay connected to your dreams"}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {lang === "fr"
                  ? "Reçois chaque matin un rappel pour noter tes rêves et consulter ton énergie lunaire."
                  : "Receive a morning reminder to log your dreams and check your lunar energy."}
              </p>

              {/* Aperçu notif — sans exemple de texte */}
              <div className="bg-slate-50 rounded-2xl p-3 mb-5 text-left border border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-foreground">
                    {lang === "fr" ? "Rêves & Rituels" : "Dreams & Rituals"}
                  </span>
                  <span className="text-[10px] text-muted-foreground ml-auto">10:00</span>
                </div>
              </div>

              {/* Bouton Accepter — couleur du thème */}
              <button
                onClick={handleAccept}
                className="w-full py-3.5 rounded-2xl font-bold text-sm text-white mb-3 active:scale-95 transition-transform"
                style={{
                  background: "linear-gradient(135deg, #a78bfa 0%, #c084fc 100%)",
                  boxShadow: "0 4px 15px rgba(167, 139, 250, 0.4)",
                }}
              >
                {lang === "fr" ? "Activer les rappels" : "Enable reminders"}
              </button>

              <button
                onClick={handleDecline}
                className="w-full py-2.5 rounded-2xl text-sm text-muted-foreground font-medium hover:bg-slate-50 transition-colors"
              >
                {lang === "fr" ? "Non merci" : "No thanks"}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}