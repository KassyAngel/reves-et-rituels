import { useState } from "react";
import { useLanguage } from "@/hooks/use-language";
import { interpretDream } from "@/data/dreamKeywords";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, MoonStar } from "lucide-react";

export default function Dreams() {
  const { t, lang } = useLanguage();
  const [dreamText, setDreamText] = useState("");
  const [isInterpreting, setIsInterpreting] = useState(false);
  const [result, setResult] = useState<{ icon: string, interpretation: string } | null>(null);

  const handleInterpret = () => {
    if (!dreamText.trim()) return;
    
    setIsInterpreting(true);
    setResult(null);

    // Simulate API delay for magical effect
    setTimeout(() => {
      const match = interpretDream(dreamText, lang);
      if (match) {
        setResult(match);
      } else {
        setResult({
          icon: "✨",
          interpretation: t.dreams.noMatch
        });
      }
      setIsInterpreting(false);
    }, 1500);
  };

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
        <MoonStar size={32} strokeWidth={1.5} />
      </div>
      
      <h1 className="text-3xl text-center mb-8 text-foreground">{t.dreams.title}</h1>

      <div className="w-full relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-gold rounded-2xl blur opacity-20 group-focus-within:opacity-40 transition duration-500"></div>
        <textarea
          value={dreamText}
          onChange={(e) => setDreamText(e.target.value)}
          placeholder={t.dreams.placeholder}
          className="relative w-full h-48 p-5 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/40 focus:outline-none focus:border-primary/50 text-foreground placeholder:text-muted-foreground resize-none shadow-sm transition-all custom-scrollbar"
        />
      </div>

      <button
        onClick={handleInterpret}
        disabled={isInterpreting || !dreamText.trim()}
        className="mt-6 w-full py-4 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:transform-none transition-all duration-300 flex items-center justify-center gap-2"
      >
        {isInterpreting ? (
          <>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            >
              <Sparkles size={20} />
            </motion.div>
            <span>{t.dreams.interpreting}</span>
          </>
        ) : (
          <span>{t.dreams.button}</span>
        )}
      </button>

      <AnimatePresence>
        {result && !isInterpreting && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="mt-8 w-full glass-panel rounded-2xl p-6 relative overflow-hidden"
          >
            {/* Soft decorative border top */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />
            
            <div className="flex flex-col items-center text-center">
              <span className="text-5xl mb-4 drop-shadow-md">{result.icon}</span>
              <h3 className="font-display font-bold text-lg mb-3 text-gold-foreground">
                {t.dreams.resultTitle}
              </h3>
              <p className="text-foreground/80 leading-relaxed font-sans text-sm md:text-base">
                {result.interpretation}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
