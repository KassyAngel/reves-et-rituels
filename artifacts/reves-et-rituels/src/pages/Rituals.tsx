import { useState } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "@/hooks/use-language";
import { rituals } from "@/data/rituals";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, CheckCircle2, Circle } from "lucide-react";
import { useRewarded } from "@/hooks/use-rewarded";
import { LockedOverlay } from "@/components/LockedOverlay";
import { useActivity } from "@/hooks/use-activity";

const LOCKED_RITUALS = new Set([
  "money", "love", "full-moon", "chakra", "healing", "confidence", "forgiveness",
  "ho-oponopono", "sigil", "ancetre", "coupure-liens", "miroir", "journalisme",
  "cristaux", "bain-fleur", "meditation-flamme"
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

type ConfirmState = "idle" | "asking" | "yes" | "no";

export default function Rituals() {
  const { t, lang } = useLanguage();
  const { isUnlocked, watchAd, loading } = useRewarded();
  const { track } = useActivity();

  const [activeRitual, setActiveRitual] = useState<any>(null);
  const [showLocked, setShowLocked] = useState(false);
  const [confirmState, setConfirmState] = useState<ConfirmState>("idle");
  const [checkedSteps, setCheckedSteps] = useState<Set<number>>(new Set());

  const handleStart = (ritual: any) => {
    setActiveRitual(ritual);
    setConfirmState("idle");
    setCheckedSteps(new Set());
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
    setConfirmState("idle");
    setCheckedSteps(new Set());
  };

  const toggleStep = (index: number) => {
    setCheckedSteps((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const allStepsDone = activeRitual
    ? checkedSteps.size === activeRitual.steps[lang].length
    : false;

  const handleConfirmYes = () => {
    setConfirmState("yes");
    if (activeRitual) {
      track(
        "ritual",
        activeRitual.id,
        activeRitual.title[lang as "fr" | "en"]
      );
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
              className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
              onClick={handleClose}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 220 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-[400px] bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col"
                style={{ maxHeight: "80vh" }}
              >
                {/* Bannière — icône en background plein cadre */}
                <div className="relative h-64 flex-shrink-0 overflow-hidden rounded-t-[2rem]">
                  <img
                    src={`/images/rituals/${activeRitual.id}.webp`}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectPosition: "center 60%" }}
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      // Fallback vers -bg.webp puis -bg.png
                      if (!img.src.includes("-bg")) {
                        img.src = `/images/rituals/${activeRitual.id}-bg.webp`;
                      } else if (!img.src.endsWith(".png")) {
                        img.src = img.src.replace("-bg.webp", "-bg.png");
                      } else {
                        img.style.display = "none";
                        const parent = img.parentElement;
                        if (parent) parent.style.background = "linear-gradient(135deg, #ede9fe, #fef9c3)";
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/40" />
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

                {showLocked ? (
                  <LockedOverlay onWatch={handleWatch} loading={loading} />
                ) : (
                  <>
                    <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
                      <p className="text-xs text-muted-foreground text-center italic mb-2">
                        {lang === "fr"
                          ? "Coche chaque étape au fur et à mesure"
                          : "Check each step as you go"}
                      </p>

                      <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mb-4">
                        <motion.div
                          className="h-full bg-gradient-to-r from-purple-400 to-yellow-300 rounded-full"
                          animate={{
                            width: activeRitual
                              ? `${(checkedSteps.size / activeRitual.steps[lang].length) * 100}%`
                              : "0%",
                          }}
                          transition={{ duration: 0.4 }}
                        />
                      </div>

                      {activeRitual.steps[lang].map((step: string, i: number) => {
                        const done = checkedSteps.has(i);
                        return (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.06 }}
                            onClick={() => toggleStep(i)}
                            className={`flex items-start gap-3 p-4 rounded-2xl cursor-pointer transition-all border w-full overflow-hidden ${
                              done ? "bg-purple-50 border-purple-200" : "bg-slate-50 border-slate-100"
                            }`}
                          >
                            <div className="mt-0.5 shrink-0">
                              {done
                                ? <CheckCircle2 size={20} className="text-purple-400" />
                                : <Circle size={20} className="text-slate-300" />}
                            </div>
                            <div className="flex-1">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-0.5">
                                {lang === "fr" ? `Étape ${i + 1}` : `Step ${i + 1}`}
                              </span>
                              <p className={`text-sm leading-relaxed transition-colors break-words whitespace-normal ${
                                done ? "text-purple-700 line-through opacity-60" : "text-foreground"
                              }`}>
                                {step}
                              </p>
                            </div>
                          </motion.div>
                        );
                      })}

                      <AnimatePresence>
                        {allStepsDone && confirmState === "idle" && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="bg-green-50 border border-green-200 rounded-2xl p-4 text-center"
                          >
                            <p className="text-2xl mb-1">🎉</p>
                            <p className="text-sm font-bold text-green-700 mb-1">
                              {lang === "fr" ? "Toutes les étapes cochées !" : "All steps checked!"}
                            </p>
                            <p className="text-xs text-green-600">
                              {lang === "fr"
                                ? "As-tu vraiment accompli ce rituel ?"
                                : "Did you truly complete this ritual?"}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <AnimatePresence>
                        {confirmState === "yes" && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-gradient-to-br from-purple-50 to-yellow-50 border border-purple-200 rounded-2xl p-5 text-center"
                          >
                            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
                              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </div>
                            <h3 className="font-display font-bold text-lg text-foreground mb-1">
                              {lang === "fr" ? "Rituel accompli ✨" : "Ritual complete ✨"}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {t.rituals.completedMsg}
                            </p>
                          </motion.div>
                        )}
                        {confirmState === "no" && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-amber-50 border border-amber-200 rounded-2xl p-5 text-center"
                          >
                            <p className="text-2xl mb-2">🌙</p>
                            <h3 className="font-display font-bold text-base text-foreground mb-1">
                              {lang === "fr" ? "Pas de souci !" : "No worries!"}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {lang === "fr"
                                ? "Tu pourras revenir quand tu te sentiras prêt·e. Les rituels t'attendent."
                                : "You can come back whenever you feel ready. The rituals will be here."}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="flex-shrink-0 px-4 pt-2 pb-4 space-y-2">
                      <AnimatePresence>
                        {allStepsDone && confirmState === "idle" && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex gap-2"
                          >
                            <button
                              onClick={handleConfirmYes}
                              className="flex-1 py-3 rounded-xl bg-gradient-to-r from-purple-400 to-purple-300 text-white font-bold shadow-md text-sm"
                            >
                              {lang === "fr" ? "✅ Oui, accompli !" : "✅ Yes, done!"}
                            </button>
                            <button
                              onClick={() => setConfirmState("no")}
                              className="flex-1 py-3 rounded-xl bg-slate-100 text-slate-500 font-bold text-sm"
                            >
                              {lang === "fr" ? "Pas encore" : "Not yet"}
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {(confirmState === "yes" || confirmState === "no") && (
                        <button
                          onClick={handleClose}
                          className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-200 to-purple-200 text-slate-700 font-bold shadow-md"
                        >
                          {lang === "fr" ? "Fermer" : "Close"}
                        </button>
                      )}

                      {!allStepsDone && confirmState === "idle" && (
                        <button
                          onClick={handleClose}
                          className="w-full py-2.5 rounded-xl bg-slate-100 text-slate-400 font-medium text-sm"
                        >
                          {lang === "fr" ? "Fermer" : "Close"}
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