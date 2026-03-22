import { useState, useMemo } from "react";
import { useLanguage } from "@/hooks/use-language";
import { dreamKeywords } from "@/data/dreamKeywords";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import { useInterstitial } from "@/hooks/use-interstitial";

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ");
}

export default function Dreams() {
  const { lang } = useLanguage();
  const { trackNavigation } = useInterstitial();
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<{
    image: string;
    interpretation: string;
    title: string;
  } | null>(null);

  const suggestions = useMemo(() => {
    if (!query.trim()) return [];
    const normalizedQuery = normalize(query);
    return dreamKeywords[lang]
      .filter((category) =>
        category.keywords.some(
          (kw) =>
            normalize(kw).includes(normalizedQuery) ||
            normalizedQuery.includes(normalize(kw).slice(0, 4))
        )
      )
      .slice(0, 5);
  }, [query, lang]);

  const handleSelect = (category: any) => {
    setSelected({
      image: category.image,
      interpretation: category.interpretation,
      title: category.keywords[0],
    });
    setQuery("");
    trackNavigation(); // ← interstitiel toutes les 3 consultations
  };

  const handleClear = () => {
    setQuery("");
    setSelected(null);
  };

  return (
    <div className="w-full h-full flex flex-col items-center relative">

      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="mb-4 mt-2"
      >
        <img
          src={`${import.meta.env.BASE_URL}images/hero-moon.png`}
          alt="Rêves & Rituels"
          className="w-40 h-40 object-contain"
          style={{
            maskImage: "radial-gradient(circle, black 55%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(circle, black 55%, transparent 75%)",
            filter: "drop-shadow(0px 8px 24px rgba(180, 140, 255, 0.4))",
          }}
        />
      </motion.div>

      <h1 className="font-display text-4xl font-bold text-center mb-2 text-foreground tracking-wide">
        {lang === "fr" ? "Interprétation" : "Interpretation"}
      </h1>
      <div className="h-px w-20 bg-gradient-to-r from-transparent via-yellow-300 to-transparent mb-3" />
      <p className="text-sm text-muted-foreground text-center mb-6 italic">
        {lang === "fr" ? "Tape un mot de ton rêve..." : "Type a word from your dream..."}
      </p>

      <div className="w-full relative">
        <div className="relative flex items-center">
          <Search size={16} className="absolute left-4 text-primary/50 pointer-events-none" />
          <input
            type="text"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setSelected(null); }}
            placeholder={lang === "fr" ? "Ex: eau, tomber, serpent, forêt..." : "Ex: water, fall, snake, forest..."}
            className="w-full pl-10 pr-10 py-4 rounded-2xl bg-white border border-slate-200 shadow-sm focus:outline-none focus:border-primary/40 text-foreground placeholder:text-muted-foreground/60 transition-all text-sm"
          />
          {query.length > 0 && (
            <button onClick={handleClear} className="absolute right-4 text-muted-foreground">
              <X size={16} />
            </button>
          )}
        </div>

        <AnimatePresence>
          {suggestions.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden z-50"
            >
              {suggestions.map((category, i) => (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleSelect(category)}
                  className="w-full flex items-center gap-3 px-4 py-3 hover:bg-primary/5 transition-colors text-left border-b border-slate-50 last:border-0"
                >
                  <img src={category.image} alt={category.keywords[0]} className="w-8 h-8 object-contain rounded-lg flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm text-foreground capitalize">{category.keywords[0]}</p>
                    <p className="text-xs text-muted-foreground line-clamp-1">{category.interpretation.slice(0, 55)}...</p>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {!selected && query.length === 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full mt-6">
          <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3">
            {lang === "fr" ? "Symboles populaires" : "Popular symbols"}
          </p>
          <div className="grid grid-cols-4 gap-2 w-full">
            {dreamKeywords[lang].slice(0, 16).map((category, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.04 }}
                onClick={() => handleSelect(category)} // ← compteur inclus
                className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md active:scale-95 transition-all"
              >
                <div className="w-full aspect-square overflow-hidden rounded-2xl relative">
                  <img
                    src={`${import.meta.env.BASE_URL}${category.image.replace(/^\//, "")}`}
                    alt={category.keywords[0]}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent px-1 pb-1 pt-3">
                    <span className="text-white capitalize text-[9px] font-bold text-center leading-tight line-clamp-1 w-full block">
                      {category.keywords[0]}
                    </span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="mt-6 w-full glass-panel rounded-2xl p-6 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-50" />
            <div className="flex flex-col items-center text-center">
              <img src={selected.image} alt={selected.title} className="w-16 h-16 object-contain mb-3 drop-shadow-md rounded-xl" />
              <h3 className="font-display font-bold text-lg mb-2 text-foreground capitalize">{selected.title}</h3>
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-yellow-300 to-transparent mb-3" />
              <p className="text-foreground/80 leading-relaxed font-sans text-sm">{selected.interpretation}</p>
            </div>
            <div className="flex gap-2 mt-5">
              <button onClick={handleClear} className="flex-1 py-2 rounded-xl border border-slate-300 text-sm text-slate-600 font-medium hover:bg-slate-50 transition-all">
                {lang === "fr" ? "Nouvelle recherche" : "New search"}
              </button>
              <button onClick={handleClear} className="px-4 py-2 rounded-xl bg-slate-100 text-sm text-slate-700 font-bold hover:bg-slate-200 transition-all">
                {lang === "fr" ? "Fermer" : "Close"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}