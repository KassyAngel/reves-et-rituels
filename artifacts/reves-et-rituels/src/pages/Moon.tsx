import { useLanguage } from "@/hooks/use-language";
import { getMoonPhaseIndex } from "@/lib/moonPhase";
import { moonDescriptions } from "@/data/moonDescriptions";
import { motion } from "framer-motion";
import { format, addDays } from "date-fns";
import { fr as frLocale, enUS as enLocale } from "date-fns/locale";

export default function Moon() {
  const { t, lang } = useLanguage();
  const locale = lang === 'fr' ? frLocale : enLocale;
  
  const today = new Date();
  const currentIndex = getMoonPhaseIndex(today);
  const currentPhase = moonDescriptions[lang][currentIndex];

  const next7Days = Array.from({ length: 7 }).map((_, i) => {
    const date = addDays(today, i + 1);
    const index = getMoonPhaseIndex(date);
    return {
      date,
      index,
      data: moonDescriptions[lang][index]
    };
  });

  return (
    <div className="w-full h-full flex flex-col">
      <h1 className="text-3xl text-center mb-8 text-foreground">{t.moon.title}</h1>

      {/* Main Today Card */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="glass-panel rounded-[2rem] p-8 text-center relative overflow-hidden flex flex-col items-center justify-center shadow-lg"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gold/20 rounded-full blur-3xl -ml-10 -mb-10 pointer-events-none"></div>
        
        <span className="text-[120px] leading-none drop-shadow-2xl mb-4 filter contrast-125">
          {currentPhase.icon}
        </span>
        
        <div className="inline-block px-4 py-1 rounded-full bg-slate-100 text-xs font-bold text-muted-foreground mb-4 tracking-wider uppercase">
          {t.moon.today} • {format(today, "d MMMM", { locale })}
        </div>
        
        <h2 className="font-display font-bold text-2xl text-foreground mb-3">
          {currentPhase.name}
        </h2>
        
        <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent my-4"></div>
        
        <p className="text-sm text-foreground/80 leading-relaxed max-w-[280px]">
          <span className="font-bold text-primary block mb-1 uppercase tracking-wider text-[10px]">{t.moon.energy}</span>
          {currentPhase.energy}
        </p>
      </motion.div>

      {/* 7 Day Strip */}
      <div className="mt-10">
        <h3 className="font-display font-bold text-lg mb-4 ml-1">{t.moon.next7Days}</h3>
        <div className="flex gap-3 overflow-x-auto pb-4 custom-scrollbar snap-x">
          {next7Days.map((day, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="shrink-0 w-[85px] bg-white rounded-2xl p-3 flex flex-col items-center justify-center shadow-sm border border-slate-100 snap-center"
            >
              <span className="text-xs font-medium text-muted-foreground mb-2">
                {format(day.date, "EEE d", { locale })}
              </span>
              <span className="text-3xl mb-2 drop-shadow-sm">{day.data.icon}</span>
              <span className="text-[9px] font-bold text-center leading-tight line-clamp-2">
                {day.data.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
