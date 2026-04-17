import { useState, useRef } from "react";
import { useLanguage } from "@/hooks/use-language";
import { rituals } from "@/data/rituals";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Circle, ChevronLeft, ChevronRight } from "lucide-react";
import { useRewarded } from "@/hooks/use-rewarded";
import { LockedOverlay } from "@/components/LockedOverlay";
import { useActivity } from "@/hooks/use-activity";

const LOCKED_RITUALS = new Set([
  "money", "love", "full-moon", "chakra", "healing", "confidence", "forgiveness",
  "ho-oponopono", "sigil", "ancetre", "coupure-liens", "miroir", "journalisme",
  "cristaux", "bain-fleur", "meditation-flamme","tableau-vision","pendule","bain-sucre","son-cloche","miroir-protection","nœud-protection","bouclier-sel",
]);

const CATEGORIES: { id: string; label: { fr: string; en: string } }[] = [
  { id: "purification",  label: { fr: "Purification",  en: "Cleansing"     } },
  { id: "protection",    label: { fr: "Protection",    en: "Protection"    } },
  { id: "manifestation", label: { fr: "Manifestation", en: "Manifestation" } },
  { id: "lune",          label: { fr: "Lune",          en: "Moon"          } },
  { id: "bien-être",     label: { fr: "Bien-être",     en: "Well-being"    } },
  { id: "croissance",    label: { fr: "Croissance",    en: "Growth"        } },
  { id: "spiritualité",  label: { fr: "Spiritualité",  en: "Spirituality"  } },
  { id: "quotidien",     label: { fr: "Quotidien",     en: "Daily"         } },
];

// ─── Carte rituel carrousel ───────────────────────────────────────────────────
function RitualCard({
  ritual,
  lang,
  onClick,
}: {
  ritual: any;
  lang: string;
  onClick: () => void;
}) {
  const locked = LOCKED_RITUALS.has(ritual.id);
  return (
    <motion.div
      whileTap={{ scale: 0.94 }}
      onClick={onClick}
      className="flex-shrink-0 w-32 cursor-pointer"
    >
      <div className="relative w-32 h-32 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-50 to-amber-50 shadow-sm mb-2">
        <img
          src={`/images/rituals/${ritual.id}.webp`}
          alt={ritual.title[lang]}
          className="w-full h-full object-cover"
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
        {locked && (
          <div className="absolute inset-0 bg-black/20 flex items-end justify-end p-2">
            <span className="text-sm">🔒</span>
          </div>
        )}
        {ritual.duration && (
          <div className="absolute bottom-2 left-2 bg-black/40 rounded-full px-2 py-0.5">
            <span className="text-[10px] text-white font-medium">{ritual.duration}</span>
          </div>
        )}
      </div>
      <p className="text-xs font-semibold text-foreground text-center leading-tight line-clamp-2 px-1">
        {ritual.title[lang]}
      </p>
    </motion.div>
  );
}

// ─── Section carrousel par catégorie ─────────────────────────────────────────
function CategorySection({
  category,
  lang,
  onSelect,
}: {
  category: typeof CATEGORIES[0];
  lang: string;
  onSelect: (ritual: any) => void;
}) {
  const items = rituals.filter((r) => r.category === category.id);
  if (items.length === 0) return null;

  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "right" ? 148 : -148, behavior: "smooth" });
  };

  return (
    <div className="mb-7">
      <div className="flex items-center justify-between mb-3 px-1">
        <h2 className="font-semibold text-sm text-foreground">
          {category.label[lang as "fr" | "en"]}
        </h2>
        <div className="flex gap-1">
          <button
            onClick={() => scroll("left")}
            className="w-6 h-6 rounded-full bg-white/80 shadow-sm border border-slate-100 flex items-center justify-center text-muted-foreground hover:bg-white transition"
          >
            <ChevronLeft size={12} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-6 h-6 rounded-full bg-white/80 shadow-sm border border-slate-100 flex items-center justify-center text-muted-foreground hover:bg-white transition"
          >
            <ChevronRight size={12} />
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto pb-1 px-1"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((ritual) => (
          <RitualCard key={ritual.id} ritual={ritual} lang={lang} onClick={() => onSelect(ritual)} />
        ))}
      </div>
    </div>
  );
}

type ConfirmState = "idle" | "yes" | "no";

// ─── Composant principal ──────────────────────────────────────────────────────
export default function Rituals() {
  const { t, lang } = useLanguage();
  const { isUnlocked, watchAd, loading } = useRewarded();
  const { track } = useActivity();

  const [activeRitual, setActiveRitual] = useState<any>(null);
  const [showLocked, setShowLocked] = useState(false);
  const [confirmState, setConfirmState] = useState<ConfirmState>("idle");
  const [checkedSteps, setCheckedSteps] = useState<Set<number>>(new Set());

  const handleSelect = (ritual: any) => {
    setActiveRitual(ritual);
    setConfirmState("idle");
    setCheckedSteps(new Set());
    setShowLocked(LOCKED_RITUALS.has(ritual.id) && !isUnlocked(ritual.id));
  };

  const handleClose = () => {
    setActiveRitual(null);
    setShowLocked(false);
    setConfirmState("idle");
    setCheckedSteps(new Set());
  };

  const handleWatch = async () => {
    if (!activeRitual) return;
    const rewarded = await watchAd(activeRitual.id);
    if (rewarded) setShowLocked(false);
  };

  const toggleStep = (index: number) => {
    setCheckedSteps((prev) => {
      const next = new Set(prev);
      next.has(index) ? next.delete(index) : next.add(index);
      return next;
    });
  };

  const allStepsDone =
    activeRitual ? checkedSteps.size === activeRitual.steps[lang].length : false;

  const handleConfirmYes = () => {
    setConfirmState("yes");
    if (activeRitual) track("ritual", activeRitual.id, activeRitual.title[lang as "fr" | "en"]);
  };

  return (
    <div className="relative w-full h-full overflow-hidden">

      {/* ════════════════════════════════════════════════
          ÉCRAN PRINCIPAL — liste des catégories
      ════════════════════════════════════════════════ */}
      <div
        className="absolute inset-0 transition-transform duration-300 ease-in-out overflow-y-auto"
        style={{ transform: activeRitual ? "translateX(-100%)" : "translateX(0)" }}
      >
        <div className="px-4 pb-10 pt-2">
          <h1 className="text-2xl font-bold text-center mb-6 text-foreground">
            {lang === "fr" ? "Rituels Guidés" : "Guided Rituals"}
          </h1>
          {CATEGORIES.map((cat) => (
            <CategorySection key={cat.id} category={cat} lang={lang} onSelect={handleSelect} />
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════════════════
          ÉCRAN DÉTAIL — plein écran, slide depuis droite
      ════════════════════════════════════════════════ */}
      <div
        className="absolute inset-0 bg-white transition-transform duration-300 ease-in-out flex flex-col"
        style={{ transform: activeRitual ? "translateX(0)" : "translateX(100%)" }}
      >
        {activeRitual && (
          <>
            {/* ── Bouton retour flottant ── */}
            <button
              onClick={handleClose}
              className="absolute top-4 left-4 z-20 w-9 h-9 rounded-full bg-white/90 shadow-md flex items-center justify-center text-slate-700 backdrop-blur-sm"
            >
              <ChevronLeft size={20} />
            </button>

            {showLocked ? (
              /* ── LOCKED ── */
              <>
                <div className="relative w-full flex-shrink-0" style={{ height: 200 }}>
                  <img
                    src={`/images/rituals/${activeRitual.id}.webp`}
                    alt={activeRitual.title[lang]}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "center 35%" }}
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      if (!img.src.includes("-bg")) {
                        img.src = `/images/rituals/${activeRitual.id}-bg.webp`;
                      } else {
                        img.style.display = "none";
                        const p = img.parentElement;
                        if (p) p.style.background = "linear-gradient(135deg,#ede9fe,#fef9c3)";
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/65" />
                  <div className="absolute bottom-3 left-0 right-0 flex flex-col items-center gap-1 px-12">
                    <h2 className="font-bold text-base text-white drop-shadow text-center leading-snug">
                      {activeRitual.title[lang]}
                    </h2>
                    {activeRitual.duration && (
                      <span className="text-[11px] text-white/80 bg-black/30 rounded-full px-3 py-0.5">
                        ⏱ {activeRitual.duration}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex-1 flex flex-col">
                  <LockedOverlay onWatch={handleWatch} loading={loading} />
                </div>
              </>
            ) : (
              /* ── UNLOCKED : tout dans un seul scroll ── */
              <>
                <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: "none" }}>

                  {/* Image dans le scroll */}
                  <div className="relative w-full" style={{ height: 200 }}>
                    <img
                      src={`/images/rituals/${activeRitual.id}.webp`}
                      alt={activeRitual.title[lang]}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: "center 35%" }}
                      onError={(e) => {
                        const img = e.target as HTMLImageElement;
                        if (!img.src.includes("-bg")) {
                          img.src = `/images/rituals/${activeRitual.id}-bg.webp`;
                        } else {
                          img.style.display = "none";
                          const p = img.parentElement;
                          if (p) p.style.background = "linear-gradient(135deg,#ede9fe,#fef9c3)";
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/65" />
                    <div className="absolute bottom-3 left-0 right-0 flex flex-col items-center gap-1 px-12">
                      <h2 className="font-bold text-base text-white drop-shadow text-center leading-snug">
                        {activeRitual.title[lang]}
                      </h2>
                      {activeRitual.duration && (
                        <span className="text-[11px] text-white/80 bg-black/30 rounded-full px-3 py-0.5">
                          ⏱ {activeRitual.duration}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="px-4 pt-4 pb-10 space-y-3">

                    {/* Description */}
                    <p className="text-sm text-muted-foreground text-center italic px-2">
                      {activeRitual.desc[lang]}
                    </p>

                    {/* Barre de progression */}
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-purple-400 to-amber-300 rounded-full"
                        animate={{ width: `${(checkedSteps.size / activeRitual.steps[lang].length) * 100}%` }}
                        transition={{ duration: 0.35 }}
                      />
                    </div>
                    <p className="text-[10px] text-center text-muted-foreground">
                      {checkedSteps.size} / {activeRitual.steps[lang].length}{" "}
                      {lang === "fr" ? "étapes" : "steps"}
                    </p>

                    {/* Étapes */}
                    {activeRitual.steps[lang].map((step: string, i: number) => {
                      const done = checkedSteps.has(i);
                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.04 }}
                          onClick={() => toggleStep(i)}
                          className={`flex items-start gap-3 p-4 rounded-2xl cursor-pointer border transition-all ${
                            done
                              ? "bg-purple-50 border-purple-200"
                              : "bg-slate-50 border-slate-100"
                          }`}
                        >
                          <div className="mt-0.5 shrink-0">
                            {done
                              ? <CheckCircle2 size={18} className="text-purple-400" />
                              : <Circle size={18} className="text-slate-300" />}
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-0.5">
                              {lang === "fr" ? `Étape ${i + 1}` : `Step ${i + 1}`}
                            </span>
                            <p className={`text-sm leading-relaxed break-words transition-colors ${
                              done ? "text-purple-600 line-through opacity-60" : "text-foreground"
                            }`}>
                              {step}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}

                    {/* Message toutes étapes cochées */}
                    <AnimatePresence>
                      {allStepsDone && confirmState === "idle" && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
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

                    {/* Confirmation accomplissement */}
                    <AnimatePresence>
                      {confirmState === "yes" && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.92 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="bg-gradient-to-br from-purple-50 to-amber-50 border border-purple-200 rounded-2xl p-5 text-center"
                        >
                          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </div>
                          <h3 className="font-bold text-base text-foreground mb-1">
                            {lang === "fr" ? "Rituel accompli ✨" : "Ritual complete ✨"}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {t.rituals.completedMsg}
                          </p>
                        </motion.div>
                      )}
                      {confirmState === "no" && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.92 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="bg-amber-50 border border-amber-200 rounded-2xl p-5 text-center"
                        >
                          <p className="text-2xl mb-2">🌙</p>
                          <h3 className="font-bold text-base text-foreground mb-1">
                            {lang === "fr" ? "Pas de souci !" : "No worries!"}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {lang === "fr"
                              ? "Tu pourras revenir quand tu te sentiras prêt·e."
                              : "You can come back whenever you feel ready."}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="h-2" />
                  </div>
                </div>

                {/* ── Barre d'actions sticky en bas ── */}
                <div className="flex-shrink-0 bg-white border-t border-slate-100 px-4 pt-3 pb-6">
                  <AnimatePresence>
                    {allStepsDone && confirmState === "idle" && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex gap-2"
                      >
                        <button
                          onClick={handleConfirmYes}
                          className="flex-1 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-purple-400 text-white font-bold shadow-sm text-sm"
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
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}