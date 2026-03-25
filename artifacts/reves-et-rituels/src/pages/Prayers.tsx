import { useState } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "@/hooks/use-language";
import { prayers } from "@/data/prayers";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight } from "lucide-react";
import { useRewarded } from "@/hooks/use-rewarded";
import { LockedOverlay } from "@/components/LockedOverlay";
import { useActivity } from "@/hooks/use-activity";

const LOCKED_PRAYERS = new Set([
  "abundance", "love-prayer", "angels", "strength", "forgiveness", "family"
]);

export default function Prayers() {
  const { lang } = useLanguage();
  const { isUnlocked, watchAd, loading } = useRewarded();
  const { track } = useActivity();

  const [selected, setSelected] = useState<any>(null);
  const [showLocked, setShowLocked] = useState(false);

  const handleSelect = (prayer: any) => {
    setSelected(prayer);
    if (LOCKED_PRAYERS.has(prayer.id) && !isUnlocked(prayer.id)) {
      setShowLocked(true);
    } else {
      setShowLocked(false);
      track(
        "prayer",
        prayer.id,
        prayer.title[lang as "fr" | "en"]
      );
    }
  };

  const handleWatch = async () => {
    if (!selected) return;
    const rewarded = await watchAd(selected.id);
    if (rewarded) {
      setShowLocked(false);
      track("prayer", selected.id, selected.title[lang as "fr" | "en"]);
    }
  };

  const handleClose = () => {
    setSelected(null);
    setShowLocked(false);
  };

  return (
    <div className="w-full h-full pb-8">

      {/* Header */}
      <div className="flex flex-col items-center mb-8">
        <h1 className="font-display text-3xl font-bold text-center text-foreground">
          {lang === "fr" ? "Prières & Protection" : "Prayers & Protection"}
        </h1>
        <div className="h-px w-20 bg-gradient-to-r from-transparent via-yellow-300 to-transparent mt-3" />
      </div>

      {/* Liste */}
      <div className="space-y-4">
        {prayers.map((prayer, i) => {
          const locked = LOCKED_PRAYERS.has(prayer.id) && !isUnlocked(prayer.id);
          return (
            <motion.div
              key={prayer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleSelect(prayer)}
              className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl flex items-center gap-4 cursor-pointer shadow-sm border border-white/60 hover:shadow-md transition-all"
            >
              <div className="w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br from-yellow-50 to-purple-50 flex items-center justify-center shadow-inner border border-white overflow-hidden">
                <img
                  src={`/images/prayers/${prayer.id}.webp`}
                  alt={prayer.title[lang]}
                  className="w-full h-full object-contain p-0.5"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.style.display = "none";
                    const parent = img.parentElement;
                    if (parent) parent.innerHTML = `<span class="text-xl">${prayer.icon}</span>`;
                  }}
                />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-bold text-foreground mb-1">
                  {prayer.title[lang]}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {prayer.desc[lang]}
                </p>
              </div>
              {locked
                ? <span className="text-base">🔒</span>
                : <ChevronRight size={18} className="text-muted-foreground shrink-0" />}
            </motion.div>
          );
        })}
      </div>

      {/* Modal */}
      {createPortal(
        <AnimatePresence>
          {selected && (
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
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-[400px] bg-white rounded-[2rem] shadow-2xl overflow-hidden max-h-[88vh] flex flex-col"
              >
                {/* Bannière — icône en background plein cadre */}
                <div className="relative h-72 flex-shrink-0 overflow-hidden rounded-t-[2rem]">
                  {/* Image en fond plein */}
                  <img
                    src={`/images/prayers/${selected.id}.webp`}
                    alt={selected.title[lang]}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      img.style.display = "none";
                      const parent = img.parentElement;
                      if (parent) {
                        parent.style.background = "linear-gradient(135deg, #fef9c3, #ede9fe)";
                        const span = document.createElement("span");
                        span.className = "absolute inset-0 flex items-center justify-center text-8xl";
                        span.textContent = selected.icon;
                        parent.appendChild(span);
                      }
                    }}
                  />
                  {/* Dégradé sombre en bas pour lisibilité du titre */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/55" />

                  {/* Bouton fermer */}
                  <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center shadow z-10"
                  >
                    <X size={18} />
                  </button>

                  {/* Titre en bas de la bannière */}
                  <div className="absolute bottom-3 left-0 right-0 flex flex-col items-center z-10 px-4">
                    <h2 className="font-display font-bold text-lg text-white drop-shadow-lg text-center">
                      {selected.title[lang]}
                    </h2>
                  </div>
                </div>

                {showLocked ? (
                  <LockedOverlay onWatch={handleWatch} loading={loading} />
                ) : (
                  <>
                    <div className="h-px w-16 bg-gradient-to-r from-transparent via-yellow-300 to-transparent mx-auto mt-4 flex-shrink-0" />
                    <div className="flex-1 overflow-y-auto px-6 pt-2 pb-1">
                      <p className="text-foreground/80 leading-relaxed font-sans text-sm whitespace-pre-line text-center italic">
                        {selected.text[lang]}
                      </p>
                    </div>
                    <div className="flex-shrink-0 px-4 pt-2 pb-3">
                      <button
                        onClick={handleClose}
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-200 to-yellow-200 text-slate-700 font-bold shadow-md"
                      >
                        {lang === "fr" ? "Fermer" : "Close"}
                      </button>
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