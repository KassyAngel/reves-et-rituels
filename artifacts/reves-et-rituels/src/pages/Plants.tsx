import { useState } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "@/hooks/use-language";
import { plants, plantCategories, PlantCategory, Plant } from "@/data/plants";
import { motion, AnimatePresence } from "framer-motion";
import { X, AlertTriangle } from "lucide-react";
import { useRewarded } from "@/hooks/use-rewarded";
import { LockedOverlay } from "@/components/LockedOverlay";
import { useActivity } from "@/hooks/use-activity";

// ── Gratuites (14) : lavande, camomille, millepertuis, sauge, romarin, genievre,
//   passiflore, rose, gingembre, menthe, ginkgo, aloevera, calendula, basilic
// ── Verrouillées (tout le reste)
const LOCKED_PLANTS = new Set([
  // wellbeing nouvelles
  "ashwagandha", "mélisse", "rhodiola",
  // protection
  "angélique", "charbon-vegetal",
  // sleep
  "valerian", "mugwort", "houblon", "tilleul",
  // love
  "jasmin", "hibiscus", "ylang-ylang",
  // energy
  "eleutherocoque", "maca", "guarana",
  // spiritual
  "palo-santo", "encens", "yerbasanta", "copal", "myrrhe",
  // memory
  "bacopa", "sauge-officinale", "lion-mane", "gotu-kola",
  // beauty
  "ortie", "rose-musquee", "hamamélis",
  // abundance
  "trefle", "menthe-verte", "laurier", "verveine", "cannelle",

  // ── NOUVELLES PLANTES (plants-extra.ts) ──
  "pissenlit", "tulsi", "kava",
  "hysope", "armoise-blanche",
  "escholtzia", "camomille-romaine",
  "damiana", "musc-rose",
  "schisandra", "moringa",
  "cedar", "benjoin",
  "pervenche", "noix-de-muscade",
  "camelia", "morinda",
  "alfalfa", "epine-vinette",
]);

function Disclaimer({ lang }: { lang: string }) {
  return (
    <div className="mx-4 mb-3 p-3 bg-amber-50 rounded-xl border border-amber-100 flex gap-2 items-start">
      <AlertTriangle size={14} className="text-amber-500 shrink-0 mt-0.5" />
      <p className="text-[10px] text-amber-700 leading-relaxed">
        {lang === "fr"
          ? "Informations à titre éducatif. Consultez un professionnel de santé pour les dosages et contre-indications, surtout en cas de grossesse, traitement médical ou allergie."
          : "Information for educational purposes only. Consult a healthcare professional for dosages and contraindications, especially if pregnant, on medication, or allergic."}
      </p>
    </div>
  );
}

export default function Plants() {
  const { lang } = useLanguage();
  const { isUnlocked, watchAd, loading } = useRewarded();
  const { track } = useActivity();

  const [activeCategory, setActiveCategory] = useState<PlantCategory | "all">("all");
  const [selected, setSelected] = useState<Plant | null>(null);
  const [showLocked, setShowLocked] = useState(false);

  const categories = Object.entries(plantCategories[lang as "fr" | "en"]) as [PlantCategory, string][];
  const filtered = activeCategory === "all"
    ? plants
    : plants.filter((p) => p.category === activeCategory);

  const categoryColors: Record<PlantCategory, string> = {
    wellbeing:  "from-blue-100 to-purple-100",
    protection: "from-green-100 to-teal-100",
    sleep:      "from-indigo-100 to-blue-100",
    love:       "from-pink-100 to-rose-100",
    energy:     "from-orange-100 to-yellow-100",
    spiritual:  "from-purple-100 to-yellow-100",
    memory:     "from-cyan-100 to-blue-100",
    beauty:     "from-rose-100 to-pink-100",
    abundance:  "from-yellow-100 to-green-100",
  };

  const handleSelect = (plant: Plant) => {
    setSelected(plant);
    if (LOCKED_PLANTS.has(plant.id) && !isUnlocked(plant.id)) {
      setShowLocked(true);
    } else {
      setShowLocked(false);
      track("plant", plant.id, plant.name[lang as "fr" | "en"]);
    }
  };

  const handleWatch = async () => {
    if (!selected) return;
    const rewarded = await watchAd(selected.id);
    if (rewarded) {
      setShowLocked(false);
      track("plant", selected.id, selected.name[lang as "fr" | "en"]);
    }
  };

  const handleClose = () => {
    setSelected(null);
    setShowLocked(false);
  };

  return (
    <div className="w-full h-full pb-8">

      {/* Header */}
      <div className="flex flex-col items-center mb-6">
        <h1 className="font-display text-3xl font-bold text-center text-foreground">
          {lang === "fr" ? "Plantes & Bienfaits" : "Plants & Benefits"}
        </h1>
        <p className="text-xs text-muted-foreground mt-1">
          {lang === "fr" ? `${plants.length} plantes répertoriées` : `${plants.length} plants listed`}
        </p>
        <div className="h-px w-20 bg-gradient-to-r from-transparent via-green-300 to-transparent mt-3" />
      </div>

      {/* Disclaimer global */}
      <div className="mb-5 p-3 bg-amber-50 rounded-2xl border border-amber-100 flex gap-2 items-start">
        <AlertTriangle size={14} className="text-amber-500 shrink-0 mt-0.5" />
        <p className="text-[10px] text-amber-700 leading-relaxed">
          {lang === "fr"
            ? "Ces informations sont données à titre éducatif. Consultez toujours un professionnel de santé avant toute prise, surtout en cas de grossesse, traitement médical ou allergie."
            : "This information is provided for educational purposes. Always consult a healthcare professional before use, especially if pregnant, on medication, or allergic."}
        </p>
      </div>

      {/* Filtres catégories */}
      <div className="flex gap-2 overflow-x-auto pb-3 mb-6 snap-x scrollbar-hide">
        <button
          onClick={() => setActiveCategory("all")}
          className={`shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all snap-center ${
            activeCategory === "all"
              ? "bg-foreground text-white shadow-md"
              : "bg-white/80 text-muted-foreground border border-slate-100"
          }`}
        >
          {lang === "fr" ? "Toutes" : "All"}
        </button>
        {categories.map(([key, label]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all snap-center ${
              activeCategory === key
                ? "bg-foreground text-white shadow-md"
                : "bg-white/80 text-muted-foreground border border-slate-100"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Grille */}
      <div className="grid grid-cols-2 gap-4">
        <AnimatePresence>
          {filtered.map((plant, i) => {
            const locked = LOCKED_PLANTS.has(plant.id) && !isUnlocked(plant.id);
            return (
              <motion.div
                key={plant.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleSelect(plant)}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 cursor-pointer active:scale-95 transition-transform"
              >
                <div className={`h-32 bg-gradient-to-br ${categoryColors[plant.category]} flex items-center justify-center relative`}>
                  <img
                    src={`${import.meta.env.BASE_URL}${plant.image.replace(/^\//, "")}`}
                    alt={plant.name[lang as "fr" | "en"]}
                    className="w-full h-full object-cover"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                  {plant.warning && (
                    <span className="absolute top-2 left-2 w-5 h-5 bg-amber-400 rounded-full flex items-center justify-center">
                      <AlertTriangle size={10} className="text-white" />
                    </span>
                  )}
                  {locked && (
                    <span className="absolute top-2 right-2 w-6 h-6 bg-black/40 rounded-full flex items-center justify-center text-xs">
                      🔒
                    </span>
                  )}
                </div>
                <div className="p-3">
                  <h3 className="font-display font-bold text-sm text-foreground">{plant.name[lang as "fr" | "en"]}</h3>
                  <p className="text-[10px] text-muted-foreground italic mt-0.5">{plant.latin}</p>
                  <p className="text-[11px] text-foreground/60 mt-1 line-clamp-2">{plant.tagline[lang as "fr" | "en"]}</p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Modal détail */}
      {createPortal(
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
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
                {/* Image header */}
                <div className={`h-48 bg-gradient-to-br ${categoryColors[selected.category]} relative flex-shrink-0 overflow-hidden rounded-t-[2rem]`}>
                  <img
                    src={`${import.meta.env.BASE_URL}${selected.image.replace(/^\//, "")}`}
                    alt={selected.name[lang as "fr" | "en"]}
                    className="w-full h-full object-cover object-[center_50%]"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/50" />
                  <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 flex items-center justify-center shadow z-10"
                  >
                    <X size={18} />
                  </button>
                  <div className="absolute bottom-3 left-5 z-10">
                    <h2 className="font-display font-bold text-xl text-foreground drop-shadow-sm">
                      {selected.name[lang as "fr" | "en"]}
                    </h2>
                    <p className="text-foreground/60 text-xs italic">{selected.latin}</p>
                  </div>
                </div>

                {showLocked ? (
                  <LockedOverlay onWatch={handleWatch} loading={loading} />
                ) : (
                  <>
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                      {selected.warning && (
                        <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 flex gap-2 items-start">
                          <AlertTriangle size={14} className="text-amber-500 shrink-0 mt-0.5" />
                          <p className="text-[11px] text-amber-700 leading-relaxed font-medium">
                            {selected.warning[lang as "fr" | "en"]}
                          </p>
                        </div>
                      )}
                      <div>
                        <h3 className="font-bold text-xs uppercase tracking-widest text-muted-foreground mb-3">
                          {lang === "fr" ? "Bienfaits" : "Benefits"}
                        </h3>
                        <div className="space-y-2">
                          {selected.benefits[lang as "fr" | "en"].map((b, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
                              {b}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-xs uppercase tracking-widest text-muted-foreground mb-2">
                          {lang === "fr" ? "Utilisation & Dosage" : "Usage & Dosage"}
                        </h3>
                        <p className="text-sm text-foreground/80 leading-relaxed bg-green-50 rounded-xl p-3">
                          {selected.usage[lang as "fr" | "en"]}
                        </p>
                      </div>
                      <div>
                        <h3 className="font-bold text-xs uppercase tracking-widest text-muted-foreground mb-2">
                          {lang === "fr" ? "Rituel associé" : "Associated ritual"}
                        </h3>
                        <p className="text-sm text-foreground/80 leading-relaxed bg-purple-50 rounded-xl p-3 italic">
                          {selected.ritual[lang as "fr" | "en"]}
                        </p>
                      </div>
                      <Disclaimer lang={lang} />
                    </div>
                    <div className="flex-shrink-0 px-4 pt-2 pb-3">
                      <button
                        onClick={handleClose}
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-green-200 to-yellow-200 text-slate-700 font-bold shadow-md"
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