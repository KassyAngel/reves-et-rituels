import { useState } from "react";
import { useLanguage } from "@/hooks/use-language";
import { rituals } from "@/data/rituals";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, ChevronRight, Check } from "lucide-react";

export default function Rituals() {
  const { t, lang } = useLanguage();
  const [activeRitual, setActiveRitual] = useState<any>(null);
  const [currentStep, setCurrentStep] = useState(0);

  const handleStart = (ritual: any) => {
    setActiveRitual(ritual);
    setCurrentStep(0);
  };

  const nextStep = () => {
    if (currentStep < activeRitual.steps[lang].length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Completed
      setActiveRitual(null);
    }
  };

  return (
    <div className="w-full h-full pb-8">
      <h1 className="text-3xl text-center mb-8 text-foreground">{t.rituals.title}</h1>

      <div className="space-y-4">
        {rituals.map((ritual) => (
          <motion.div
            key={ritual.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="glass-panel p-5 rounded-2xl flex items-center gap-4 cursor-pointer hover:gold-glow transition-all"
            onClick={() => handleStart(ritual)}
          >
            <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-2xl shadow-inner">
              {ritual.icon}
            </div>
            <div className="flex-1">
              <h3 className="font-display font-bold text-foreground mb-1">{ritual.title[lang]}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">{ritual.desc[lang]}</p>
            </div>
            <button className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-primary shadow-sm">
              <ChevronRight size={18} />
            </button>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeRitual && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-white/60 backdrop-blur-md"
          >
            <motion.div
              initial={{ y: 50, scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 20, scale: 0.95 }}
              className="w-full max-w-[380px] bg-white rounded-[2rem] shadow-2xl overflow-hidden relative"
            >
              {/* Header */}
              <div className="bg-gradient-to-br from-primary/20 to-white pt-8 pb-6 px-6 text-center relative">
                <button 
                  onClick={() => setActiveRitual(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/50 flex items-center justify-center text-foreground/50 hover:text-foreground transition"
                >
                  <X size={18} />
                </button>
                <span className="text-5xl drop-shadow-md block mb-3">{activeRitual.icon}</span>
                <h2 className="font-display font-bold text-xl">{activeRitual.title[lang]}</h2>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1 bg-secondary">
                <motion.div 
                  className="h-full bg-gold"
                  initial={{ width: "0%" }}
                  animate={{ width: `${((currentStep + 1) / activeRitual.steps[lang].length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Content */}
              <div className="p-8 min-h-[220px] flex flex-col justify-center items-center text-center">
                <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
                  {t.rituals.step} {currentStep + 1} / {activeRitual.steps[lang].length}
                </span>
                
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentStep}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-lg leading-relaxed text-foreground"
                  >
                    {activeRitual.steps[lang][currentStep]}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Action */}
              <div className="p-6 pt-0">
                <button
                  onClick={nextStep}
                  className="w-full py-4 rounded-xl bg-foreground text-white font-semibold shadow-lg hover:bg-foreground/90 transition-all flex items-center justify-center gap-2 group"
                >
                  {currentStep === activeRitual.steps[lang].length - 1 ? (
                    <>
                      <Sparkles size={18} className="text-gold" />
                      <span>{t.rituals.complete}</span>
                    </>
                  ) : (
                    <>
                      <span>{t.rituals.next}</span>
                      <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
