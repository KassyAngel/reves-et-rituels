import { useState } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "@/hooks/use-language";
import { getMoonData } from "@/lib/moonPhase";
import {
  moonDescriptions,
  getMoonVariant,
  specialMoonEvents,
  MoonPhase,
  MoonPhaseVariant,
  SpecialMoonDescription,
} from "@/data/moonDescriptions";
import { motion, AnimatePresence } from "framer-motion";
import { format, addDays } from "date-fns";
import { fr as frLocale, enUS as enLocale } from "date-fns/locale";
import { X, Sparkles } from "lucide-react";
import { useInterstitial } from "@/hooks/use-interstitial";

const PHASE_EMOJIS = ["🌑","🌒","🌓","🌔","🌕","🌖","🌗","🌘"];

function MoonImage({ src, fallbackIndex, size = "md", special = false }: {
  src: string;
  fallbackIndex: number;
  size?: "sm" | "md" | "lg";
  special?: boolean;
}) {
  const sizeClass = { sm: "w-10 h-10", md: "w-24 h-24", lg: "w-36 h-36" }[size];
  const textSize  = { sm: "text-3xl",  md: "text-[80px]", lg: "text-[120px]" }[size];

  return (
    <div className={`${sizeClass} flex items-center justify-center relative`}>
      {special && size === "lg" && (
        <div className="absolute inset-0 rounded-full bg-red-500/10 blur-2xl animate-pulse" />
      )}
      <img
        src={src}
        alt=""
        className={`w-full h-full object-contain drop-shadow-xl mix-blend-multiply ${
          special ? "filter saturate-150" : ""
        }`}
        onError={(e) => {
          const img = e.target as HTMLImageElement;
          img.style.display = "none";
          const span = document.createElement("span");
          span.textContent = PHASE_EMOJIS[fallbackIndex % 8];
          span.className = `${textSize} leading-none`;
          img.parentElement?.appendChild(span);
        }}
      />
    </div>
  );
}

const SPECIAL_COLORS: Record<string, string> = {
  blood_moon:   "bg-red-100 text-red-600 border-red-200",
  super_moon:   "bg-yellow-100 text-yellow-700 border-yellow-200",
  blue_moon:    "bg-blue-100 text-blue-600 border-blue-200",
  black_moon:   "bg-slate-800 text-white border-slate-700",
  harvest_moon: "bg-orange-100 text-orange-600 border-orange-200",
  rousse_moon:  "bg-rose-100 text-rose-600 border-rose-200",
};

function SpecialBadge({ event, lang }: { event: string; lang: string }) {
  const desc = specialMoonEvents[event];
  if (!desc) return null;
  return (
    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-bold ${
      SPECIAL_COLORS[event] || "bg-purple-100 text-purple-600"
    }`}>
      <Sparkles size={10} />
      {desc.name[lang as "fr" | "en"]}
    </div>
  );
}

export default function Moon() {
  const { lang } = useLanguage();
  const { trackNavigation } = useInterstitial();
  const locale = lang === "fr" ? frLocale : enLocale;

  const today = new Date();
  const moonData = getMoonData(today);
  const { phaseIndex, specialEvent, illumination, distanceKm, daysUntilFullMoon } = moonData;

  const currentPhase = moonDescriptions[phaseIndex];
  const currentVariant = getMoonVariant(phaseIndex, today);
  const specialDesc = specialEvent ? specialMoonEvents[specialEvent] : null;

  const displayImage = specialDesc?.image ?? currentPhase.image;
  const displayName  = specialDesc?.name[lang as "fr"|"en"] ?? currentPhase.name[lang as "fr"|"en"];

  const next7Days = Array.from({ length: 7 }).map((_, i) => {
    const date = addDays(today, i + 1);
    const data = getMoonData(date);
    return {
      date,
      data,
      phase: moonDescriptions[data.phaseIndex],
      variant: getMoonVariant(data.phaseIndex, date),
      specialDesc: data.specialEvent ? specialMoonEvents[data.specialEvent] : null,
    };
  });

  type ModalDay = typeof next7Days[0];
  const [selected, setSelected] = useState<ModalDay | null>(null);

  const handleDaySelect = (day: ModalDay) => {
    setSelected(day);
    trackNavigation(); // ← interstitiel toutes les 3 ouvertures
  };

  return (
    <div className="w-full h-full flex flex-col">
      <h1 className="text-2xl text-center mb-4 text-foreground font-display font-bold">
        {lang === "fr" ? "Cycle Lunaire" : "Lunar Cycle"}
      </h1>

      {/* ── Carte Aujourd'hui ── */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="glass-panel rounded-[2rem] p-4 text-center relative overflow-hidden flex flex-col items-center shadow-lg"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gold/20 rounded-full blur-3xl -ml-10 -mb-10 pointer-events-none" />

        <MoonImage src={displayImage} fallbackIndex={phaseIndex} size="md" special={!!specialEvent} />

        {specialEvent && (
          <div className="mt-3">
            <SpecialBadge event={specialEvent} lang={lang} />
          </div>
        )}

        <div className="inline-block px-4 py-1 rounded-full bg-slate-100 text-xs font-bold text-muted-foreground mt-2 mb-2 tracking-wider uppercase">
          {lang === "fr" ? "Aujourd'hui" : "Today"} • {format(today, "d MMMM", { locale })}
        </div>

        <h2 className="font-display font-bold text-2xl text-foreground mb-1">
          {displayName}
        </h2>

        <div className="flex gap-3 mt-1 mb-2 text-[10px] text-muted-foreground">
          <span>💡 {Math.round(illumination * 100)}%</span>
          <span>·</span>
          <span>📏 {distanceKm.toLocaleString()} km</span>
          <span>·</span>
          <span>🌕 {daysUntilFullMoon === 0
            ? (lang === "fr" ? "Ce soir" : "Tonight")
            : `J-${daysUntilFullMoon}`}
          </span>
        </div>

        <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent my-2" />

        <p className="text-xs text-foreground/80 leading-relaxed max-w-[280px]">
          <span className="font-bold text-primary block mb-1 uppercase tracking-wider text-[9px]">
            {lang === "fr" ? "Énergie du moment" : "Energy of the moment"}
          </span>
          {(specialDesc ?? currentVariant).energy[lang as "fr"|"en"]}
        </p>

        <div className="mt-2 bg-white/60 rounded-xl p-3 w-full text-left">
          <p className="text-[10px] font-bold uppercase tracking-wider text-amber-500 mb-1">
            {lang === "fr" ? "💡 Conseil du moment" : "💡 Tip of the moment"}
          </p>
          <p className="text-xs text-foreground/70 leading-relaxed">
            {(specialDesc ?? currentVariant).conseil[lang as "fr"|"en"]}
          </p>
        </div>

        <div className="mt-2 bg-purple-50/80 rounded-xl p-3 w-full text-left">
          <p className="text-[10px] font-bold uppercase tracking-wider text-purple-400 mb-1">
            {lang === "fr" ? "🔮 Rituel" : "🔮 Ritual"}
          </p>
          <p className="text-xs text-foreground/70 leading-relaxed italic">
            {(specialDesc ?? currentVariant).rituel[lang as "fr"|"en"]}
          </p>
        </div>
      </motion.div>

      {/* ── 7 Prochains jours ── */}
      <div className="mt-4">
        <h3 className="font-display font-bold text-base mb-2 ml-1">
          {lang === "fr" ? "Les 7 prochains jours" : "Next 7 days"}
        </h3>
        <div className="flex gap-3 overflow-x-auto pb-4 snap-x scrollbar-hide">
          {next7Days.map((day, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              onClick={() => handleDaySelect(day)}
              className="shrink-0 w-[85px] bg-white rounded-2xl p-3 flex flex-col items-center shadow-sm border border-slate-100 snap-center cursor-pointer active:scale-95 transition-transform relative"
            >
              {day.data.specialEvent && (
                <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-400" />
              )}
              <span className="text-xs font-medium text-muted-foreground mb-1">
                {format(day.date, "EEE d", { locale })}
              </span>
              <MoonImage
                src={day.specialDesc?.image ?? day.phase.image}
                fallbackIndex={day.data.phaseIndex}
                size="sm"
                special={!!day.data.specialEvent}
              />
              <span className="text-[9px] font-bold text-center leading-tight line-clamp-2 mt-1">
                {day.specialDesc?.name[lang as "fr"|"en"] ?? day.phase.name[lang as "fr"|"en"]}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Modal détail jour ── */}
      {createPortal(
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[999] flex items-end justify-center bg-black/30 backdrop-blur-sm"
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-[430px] bg-white rounded-t-[2rem] shadow-2xl overflow-hidden max-h-[88vh] flex flex-col"
              >
                <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-white pt-5 pb-4 px-6 text-center relative flex-shrink-0">
                  <div className="w-10 h-1 bg-slate-200 rounded-full mx-auto mb-3" />
                  <button
                    onClick={() => setSelected(null)}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/70 flex items-center justify-center text-slate-400 shadow"
                  >
                    <X size={18} />
                  </button>

                  <div className="flex justify-center mb-2">
                    <MoonImage
                      src={selected.specialDesc?.image ?? selected.phase.image}
                      fallbackIndex={selected.data.phaseIndex}
                      size="md"
                      special={!!selected.data.specialEvent}
                    />
                  </div>

                  {selected.data.specialEvent && (
                    <div className="flex justify-center mb-2">
                      <SpecialBadge event={selected.data.specialEvent} lang={lang} />
                    </div>
                  )}

                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-0.5">
                    {format(selected.date, "EEEE d MMMM", { locale })}
                  </p>
                  <h2 className="font-display font-bold text-xl text-foreground">
                    {selected.specialDesc?.name[lang as "fr"|"en"] ?? selected.phase.name[lang as "fr"|"en"]}
                  </h2>

                  <div className="flex justify-center gap-4 mt-3">
                    <span className="text-[10px] text-muted-foreground">
                      {Math.round(selected.data.illumination * 100)}%{" "}
                      {lang === "fr" ? "illuminée" : "illuminated"}
                    </span>
                    <span className="text-[10px] text-muted-foreground">
                      {selected.data.distanceKm.toLocaleString()} km
                    </span>
                  </div>

                  <div className="h-px w-16 bg-gradient-to-r from-transparent via-purple-300 to-transparent mx-auto mt-3" />
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                  <div className="bg-slate-50 rounded-2xl p-4">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-primary mb-2">
                      {lang === "fr" ? "⚡ Énergie du moment" : "⚡ Energy"}
                    </p>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {(selected.specialDesc ?? selected.variant).energy[lang as "fr"|"en"]}
                    </p>
                  </div>

                  <div className="bg-amber-50 rounded-2xl p-4">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-amber-500 mb-2">
                      {lang === "fr" ? "💡 Conseil du moment" : "💡 Tip"}
                    </p>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {(selected.specialDesc ?? selected.variant).conseil[lang as "fr"|"en"]}
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded-2xl p-4">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-purple-400 mb-2">
                      {lang === "fr" ? "🔮 Rituel associé" : "🔮 Ritual"}
                    </p>
                    <p className="text-sm text-foreground/80 leading-relaxed italic">
                      {(selected.specialDesc ?? selected.variant).rituel[lang as "fr"|"en"]}
                    </p>
                  </div>
                </div>

                <div className="flex-shrink-0 px-4 pt-2 pb-2">
                  <button
                    onClick={() => setSelected(null)}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-200 to-purple-200 text-slate-700 font-bold shadow-md"
                  >
                    {lang === "fr" ? "Fermer" : "Close"}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}