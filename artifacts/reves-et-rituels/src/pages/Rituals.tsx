import { useState } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "@/hooks/use-language";
import { rituals } from "@/data/rituals";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight } from "lucide-react";
import { useRewarded } from "@/hooks/use-rewarded";
import { LockedOverlay } from "@/components/LockedOverlay";

const LOCKED_RITUALS = new Set([
  "money", "love", "full-moon", "chakra", "healing", "confidence", "forgiveness"
]);

function RitualIcon({ id, size = "md" }: { id: string; size?: "sm" | "md" | "lg" }) {
  const sizeClass = { sm: "w-8 h-8", md: "w-12 h-12", lg: "w-16 h-16" }[size];
  return (
    <div className={`${sizeClass} shrink-0 rounded-xl bg-gradient-to-br from-purple-50 to-yellow-50 flex items-center justify-center overflow-hidden border border-white shadow-inner`}>
      <img
        src={`/images/rituals/${id}.webp`}
        alt={id}
        className="w-full h-full object-contain p-1"
        onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
      />
    </div>
  );
}

export default function Rituals() {
  const { t, lang } = useLanguage();
  const { isUnlocked, watchAd, loading } = useRewarded();
  const [activeRitual, setActiveRitual] = useState<any>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [showLocked, setShowLocked] = useState(false);

  const handleStart = (ritual: any) => {
    setActiveRitual(ritual);
    setCurrentStep(0);
    setCompleted(false);
    if (LOCKED_RITUALS.has(ritual.id) && !isUnlocked(ritual.id)) {
      setShowLocked(true);
    } else {
      setShowLocked(false);
    }
  };

  const handleWatch = async () => {
    if (!activeRitual) return;
    const rewarded = await watchAd(activeRitual.id);
    if (rewarded) setShowLocked(false);
  };

  const handleClose = () => {
    setActiveRitual(null);
    setShowLocked(false);
    setCurrentStep(0);
    setCompleted(false);
  };

  const nextStep = () => {
    if (!activeRitual) return;
    if (currentStep < activeRitual.steps[lang].length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setCompleted(true);
    }
  };

  return (
    <div className="w-full h-full pb-8">
      <h1 className="text-3xl font-display font-bold text-center mb-8 text-foreground">
        {lang === "fr" ? "Rituels Guidés" : "Guided Rituals"}
      </h1>

      <div className="space-y-4">
        {rituals.map((ritual) => {
          const locked = LOCKED_RITUALS.has(ritual.id) && !isUnlocked(ritual.id);
          return (
            <motion.div
              key={ritual.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="glass-panel p-5 rounded-2xl flex items-center gap-4 cursor-pointer hover:gold-glow transition-all"
              onClick={() => handleStart(ritual)}
            >
              <RitualIcon id={ritual.id} size="md" />
              <div className="flex-1">
                <h3 className="font-display font-bold text-foreground mb-1">{ritual.title[lang]}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{ritual.desc[lang]}</p>
              </div>
              {locked
                ? <span className="text-base">🔒</span>
                : <ChevronRight size={18} className="text-muted-foreground shrink-0" />}
            </motion.div>
          );
        })}
      </div>

      {createPortal(
        <AnimatePresence>
          {activeRitual && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[999] flex items-center justify-center bg-black/30 backdrop-blur-sm px-4"
              onClick={handleClose}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ type: "spring", damping: 25, stiffness: 250 }}
                onClick={e => e.stopPropagation()}
                className="w-full max-w-[400px] bg-white rounded-[2rem] shadow-2xl overflow-hidden max-h-[88vh] flex flex-col"
              >
                {/* Bannière image */}
                <div className="relative h-56 flex-shrink-0 overflow-hidden rounded-t-[2rem]">
                  <img
                    src={`/images/rituals/${activeRitual.id}-bg.webp`}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover object-top"
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      if (!img.src.endsWith(".png")) img.src = img.src.replace("-bg.webp", "-bg.png");
                      else img.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/20" />
                  <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 flex items-center justify-center shadow z-10"
                  >
                    <X size={18} />
                  </button>
                  <div className="absolute bottom-3 left-0 right-0 flex flex-col items-center z-10 px-4">
                    <h2 className="font-display font-bold text-lg text-white drop-shadow-lg text-center">
                      {activeRitual.title[lang]}
                    </h2>
                  </div>
                </div>

                {/* Contenu : locked ou normal */}
                {showLocked ? (
                  <LockedOverlay onWatch={handleWatch} loading={loading} />
                ) : (
                  <>
                    {!completed && (
                      <div className="w-full h-1 bg-slate-100 flex-shrink-0">
                        <motion.div
                          className="h-full bg-gradient-to-r from-purple-400 to-yellow-300"
                          initial={{ width: "0%" }}
                          animate={{ width: `${((currentStep + 1) / activeRitual.steps[lang].length) * 100}%` }}
                          transition={{ duration: 0.4 }}
                        />
                      </div>
                    )}
                    <div className="flex-1 overflow-y-auto px-6 py-5 flex flex-col items-center justify-center">
                      {completed ? (
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-4">
                          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </div>
                          <h3 className="font-display font-bold text-xl text-foreground mb-2">
                            {lang === "fr" ? "Rituel accompli" : "Ritual complete"}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{t.rituals.completedMsg}</p>
                        </motion.div>
                      ) : (
                        <motion.div
                          key={currentStep}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="text-center w-full"
                        >
                          <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-4">
                            {t.rituals.step} {currentStep + 1} / {activeRitual.steps[lang].length}
                          </span>
                          <p className="text-base leading-relaxed text-foreground">
                            {activeRitual.steps[lang][currentStep]}
                          </p>
                        </motion.div>
                      )}
                    </div>
                    <div className="flex-shrink-0 px-4 pt-2 pb-4">
                      {completed ? (
                        <button onClick={handleClose} className="w-full py-3 rounded-xl bg-gradient-to-r from-green-200 to-yellow-200 text-slate-700 font-bold shadow-md">
                          {lang === "fr" ? "Fermer" : "Close"}
                        </button>
                      ) : (
                        <button onClick={nextStep} className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-200 to-yellow-200 text-slate-700 font-bold shadow-md">
                          {currentStep === activeRitual.steps[lang].length - 1 ? t.rituals.complete : t.rituals.next}
                        </button>
                      )}
                    </div>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}