import { useState, useMemo } from "react";
import { useLanguage } from "@/hooks/use-language";
import { dreamKeywords } from "@/data/dreamKeywords";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ");
}

export default function Dreams() {
  const { t, lang } = useLanguage();
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<{ icon: string; interpretation: string; title: string } | null>(null);

  const suggestions = useMemo(() => {
    if (!query.trim()) return [];
    const normalizedQuery = normalize(query);
    return dreamKeywords[lang].filter(category =>
      category.keywords.some(kw =>
        normalize(kw).includes(normalizedQuery) ||
        normalizedQuery.includes(normalize(kw).slice(0, 4))
      )
    ).slice(0, 5);
  }, [query, lang]);

  const handleSelect = (category: any) => {
    setSelected({
      icon: category.icon,
      interpretation: category.interpretation,
      title: category.keywords[0]
    });
    setQuery("");
  };

  const handleClear = () => {
    setQuery("");
    setSelected(null);
  };

  return (
    <div className="w-full h-full flex flex-col items-center">

      {/* Header */}
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-yellow-100 flex items-center justify-center mb-6 shadow-inner">
        <span className="text-4xl">🌙</span>
      </div>
      <h1 className="font-display text-4xl font-bold text-center mb-3 text-foreground tracking-wide">
        {t.dreams.title}
      </h1>
      <div className="h-px w-20 bg-gradient-to-r from-transparent via-yellow-300 to-transparent mb-3" />
      <p className="text-sm text-muted-foreground text-center mb-8 italic">
        {lang === 'fr' ? 'Tape un mot de ton rêve...' : 'Type a word from your dream...'}
      </p>

      {/* Search bar */}
      <div className="w-full relative">
        <div className="relative flex items-center">
          <Search size={18} className="absolute left-5 text-primary/50 pointer-events-none" />
          <input
            type="text"
            value={query}
            onChange={e => { setQuery(e.target.value); setSelected(null); }}
            placeholder={lang === 'fr' ? 'Ex: eau, tomber, serpent, forêt...' : 'Ex: water, fall, snake, forest...'}
            className="w-full pl-12 pr-12 py-5 rounded-3xl bg-white border-2 border-primary/10 shadow-md focus:outline-none focus:border-primary/40 text-foreground placeholder:text-muted-foreground/60 transition-all text-base"
          />
          {query.length > 0 && (
            <button onClick={handleClear} className="absolute right-5 text-muted-foreground hover:text-foreground transition-colors">
              <X size={18} />
            </button>
          )}
        </div>

        {/* Suggestions dropdown */}
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
                  className="w-full flex items-center gap-3 px-5 py-3 hover:bg-primary/5 transition-colors text-left border-b border-slate-50 last:border-0"
                >
                  <span className="text-2xl">{category.icon}</span>
                  <div>
                    <p className="font-semibold text-sm text-foreground capitalize">
                      {category.keywords[0]}
                    </p>
                    <p className="text-xs text-muted-foreground line-clamp-1">
                      {category.interpretation.slice(0, 60)}...
                    </p>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Symboles populaires */}
      {!selected && query.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full mt-8"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
            {lang === 'fr' ? 'Symboles populaires' : 'Popular symbols'}
          </p>
          <div className="flex flex-wrap gap-2">
            {dreamKeywords[lang].slice(0, 12).map((category, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.06, type: "spring", stiffness: 200 }}
                onClick={() => handleSelect(category)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-2xl shadow-sm text-sm transition-all hover:scale-105 active:scale-95"
                style={{
                  background: [
                    'linear-gradient(135deg, #E8F4FE, #D6EAF8)',
                    'linear-gradient(135deg, #F3E8FF, #E9D5FF)',
                    'linear-gradient(135deg, #FEF9E7, #FDEBD0)',
                    'linear-gradient(135deg, #E8F8F5, #D5F5E3)',
                    'linear-gradient(135deg, #FDEDEC, #FADBD8)',
                    'linear-gradient(135deg, #EBF5FB, #D6EAF8)',
                  ][i % 6],
                  border: '1px solid rgba(255,255,255,0.8)'
                }}
              >
                <span className="text-xl">{category.icon}</span>
                <span className="text-foreground/80 capitalize text-xs font-semibold">
                  {category.keywords[0]}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Résultat */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="mt-8 w-full glass-panel rounded-2xl p-6 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-50" />
            <div className="flex flex-col items-center text-center">
              <span className="text-5xl mb-4 drop-shadow-md">{selected.icon}</span>
              <h3 className="font-display font-bold text-lg mb-3 text-foreground capitalize">
                {selected.title}
              </h3>
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-yellow-300 to-transparent mb-4" />
              <p className="text-foreground/80 leading-relaxed font-sans text-sm">
                {selected.interpretation}
              </p>
            </div>
            <button
              onClick={handleClear}
              className="mt-6 w-full py-2 rounded-xl border border-slate-200 text-sm text-muted-foreground hover:bg-slate-50 transition-all"
            >
              {lang === 'fr' ? 'Nouvelle recherche' : 'New search'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}