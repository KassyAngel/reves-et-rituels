// ── src/components/PremiumModal.tsx ──────────────────────────────────────
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Crown, X, Check, Loader2 } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { usePremium } from "@/hooks/use-premium";
import { useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

type PlanId = "monthly" | "annual" | "lifetime";

// Ordre : mensuel → annuel → à vie
const PLANS = [
  {
    id: "monthly" as PlanId,
    badge:  null,
    title:  { fr: "Mensuel",         en: "Monthly"    },
    price:  "3,99€",
    sub:    { fr: "par mois",        en: "per month"  },
    trial:  { fr: "7 jours offerts", en: "7-day trial"},
  },
  {
    id: "annual" as PlanId,
    badge:  { fr: "Meilleure offre", en: "Best value" },
    title:  { fr: "Annuel",          en: "Annual"     },
    price:  "23,99€",
    sub:    { fr: "soit 2€/mois",    en: "just €2/mo" },
    trial:  { fr: "7 jours offerts", en: "7-day trial"},
  },
  {
    id: "lifetime" as PlanId,
    badge:  { fr: "Une seule fois",  en: "One time"   },
    title:  { fr: "À vie",           en: "Lifetime"   },
    price:  "49,99€",
    sub:    { fr: "paiement unique", en: "pay once"   },
    trial:  null,
  },
];

const FEATURES = [
  { fr: "Interprétation illimitée des rêves",  en: "Unlimited dream interpretation" },
  { fr: "Accès à tous les rituels",            en: "Access to all rituals"          },
  { fr: "Guide complet des plantes",           en: "Complete plant guide"           },
  { fr: "Toutes les prières & mantras",        en: "All prayers & mantras"          },
  { fr: "Sans publicité",                      en: "Ad-free experience"             },
];

export function PremiumModal({ open, onClose }: Props) {
  const { lang } = useLanguage();
  const {
    isPremium,
    purchasing,
    buyMonthly,
    buyAnnual,
    buyLifetime,
    restore,
  } = usePremium();

  const [selected, setSelected] = useState<PlanId>("annual");
  const [feedback, setFeedback] = useState<"success" | "error" | null>(null);

  if (isPremium) {
    onClose();
    return null;
  }

  const handleBuy = async () => {
    setFeedback(null);
    let success = false;
    if (selected === "monthly")  success = await buyMonthly();
    if (selected === "annual")   success = await buyAnnual();
    if (selected === "lifetime") success = await buyLifetime();

    if (success) {
      setFeedback("success");
      setTimeout(() => { onClose(); }, 1500);
    } else {
      setFeedback("error");
      setTimeout(() => setFeedback(null), 2500);
    }
  };

  const handleRestore = async () => {
    const success = await restore();
    if (success) {
      setFeedback("success");
      setTimeout(() => { onClose(); }, 1500);
    } else {
      setFeedback("error");
      setTimeout(() => setFeedback(null), 2500);
    }
  };

  const ctaLabel = () => {
    if (purchasing) return <Loader2 size={18} className="animate-spin mx-auto" />;
    if (feedback === "success") return lang === "fr" ? "Premium activé !" : "Premium activated!";
    if (selected === "lifetime") return lang === "fr" ? "Acheter à vie" : "Buy lifetime";
    return lang === "fr" ? "Commencer l'essai gratuit" : "Start free trial";
  };

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
            className="w-full max-w-[360px] rounded-3xl shadow-2xl overflow-hidden relative"
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
                  transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 2 }}
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

            {/* Scroll container */}
            <div className="flex flex-col items-center pt-8 pb-16 px-6 overflow-y-auto max-h-[82vh]">

              {/* Couronne */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-300 to-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/30 mb-4">
                <Crown size={32} className="text-white" />
              </div>

              <h2 className="font-display font-bold text-2xl text-white text-center mb-1">
                {lang === "fr" ? "Passe Premium" : "Go Premium"}
              </h2>
              <p className="text-white/50 text-sm text-center mb-5">
                {lang === "fr" ? "Débloque toutes les fonctionnalités" : "Unlock all features"}
              </p>

              {/* Features — sans emojis */}
              <div className="w-full mb-5 space-y-2.5">
                {FEATURES.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 + i * 0.06 }}
                    className="flex items-center gap-3"
                  >
                    <Check size={14} className="text-yellow-400 shrink-0" />
                    <span className="text-white/80 text-sm flex-1">
                      {lang === "fr" ? item.fr : item.en}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Séparateur */}
              <div className="w-full h-px bg-white/10 mb-5" />

              {/* Sélecteur de plan — ordre mensuel / annuel / à vie */}
              <div className="w-full space-y-2.5 mb-5">
                {PLANS.map((plan) => (
                  <button
                    key={plan.id}
                    onClick={() => setSelected(plan.id)}
                    className={`w-full rounded-2xl p-3.5 text-left transition-all border-2 ${
                      selected === plan.id
                        ? "border-yellow-400 bg-white/10"
                        : "border-white/10 bg-white/5"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                          selected === plan.id ? "border-yellow-400" : "border-white/30"
                        }`}>
                          {selected === plan.id && (
                            <div className="w-2 h-2 rounded-full bg-yellow-400" />
                          )}
                        </div>
                        <div>
                          <p className="text-white font-bold text-sm">
                            {plan.title[lang as "fr" | "en"]}
                          </p>
                          <p className="text-white/40 text-[10px]">
                            {plan.sub[lang as "fr" | "en"]}
                            {plan.trial && ` · ${plan.trial[lang as "fr" | "en"]}`}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-yellow-400 font-bold text-base">{plan.price}</p>
                        {plan.badge && (
                          <span className="text-[9px] bg-yellow-400/20 text-yellow-300 px-1.5 py-0.5 rounded-full font-bold">
                            {plan.badge[lang as "fr" | "en"]}
                          </span>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Feedback erreur */}
              {feedback === "error" && (
                <p className="text-red-400 text-xs text-center mb-3">
                  {lang === "fr"
                    ? "Achat annulé ou échoué. Réessaie."
                    : "Purchase cancelled or failed. Try again."}
                </p>
              )}

              {/* CTA principal */}
              <button
                onClick={handleBuy}
                disabled={purchasing || feedback === "success"}
                className="w-full py-4 rounded-2xl font-bold text-base text-white active:scale-95 transition-all disabled:opacity-70"
                style={{
                  background: "linear-gradient(135deg, #f59e0b 0%, #f97316 100%)",
                  boxShadow: "0 4px 20px rgba(245, 158, 11, 0.4)",
                }}
              >
                {ctaLabel()}
              </button>

              {/* Légal obligatoire Play Store */}
              <div className="w-full mt-4 p-3 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-white/50 text-[10px] text-center leading-relaxed">
                  {selected !== "lifetime" ? (
                    lang === "fr" ? (
                      <>
                        <span className="text-white/70 font-bold block mb-1">
                          Renouvellement automatique
                        </span>
                        L'abonnement se renouvelle automatiquement à la fin de chaque période.
                        Le mois commencé n'est pas remboursable.
                        Annulable à tout moment depuis les paramètres Google Play.
                      </>
                    ) : (
                      <>
                        <span className="text-white/70 font-bold block mb-1">
                          Auto-renewing subscription
                        </span>
                        Subscription renews automatically at the end of each period.
                        The current period is non-refundable.
                        Cancel anytime in Google Play settings.
                      </>
                    )
                  ) : (
                    lang === "fr"
                      ? "Accès à vie · Paiement unique · Non remboursable"
                      : "Lifetime access · One-time payment · Non-refundable"
                  )}
                </p>
              </div>

              <button
                onClick={handleRestore}
                disabled={purchasing}
                className="mt-4 w-full py-2.5 rounded-2xl text-white font-semibold text-sm border border-white/30 bg-white/10 active:bg-white/20 transition-colors"
              >
                {lang === "fr" ? "Restaurer mes achats" : "Restore purchases"}
              </button>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}