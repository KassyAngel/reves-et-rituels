import { useState, useRef } from "react";
import { useLanguage } from "@/hooks/use-language";
import { prayers } from "@/data/prayers";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRewarded } from "@/hooks/use-rewarded";
import { LockedOverlay } from "@/components/LockedOverlay";
import { useActivity } from "@/hooks/use-activity";

const LOCKED_PRAYERS = new Set([
  "angels",
  "abundance",
  "love-prayer",
  "strength",
  "forgiveness",
  "sleep-prayer",
  "family",
  "morning-prayer",
  "holy-spirit",
  "notre-dame",
  "notre-pere",
  "chakra-opening",
  "prosperity",
  "divine-light",
  "ancestors",
  "nature-prayer",
  "anxiety-release",
]);

const CATEGORIES: { id: string; label: { fr: string; en: string } }[] = [
  { id: "tradition",    label: { fr: "Tradition",    en: "Tradition"    } },
  { id: "protection",   label: { fr: "Protection",   en: "Protection"   } },
  { id: "guerison",     label: { fr: "Guérison",     en: "Healing"      } },
  { id: "croissance",   label: { fr: "Croissance",   en: "Growth"       } },
  { id: "abondance",    label: { fr: "Abondance",    en: "Abundance"    } },
  { id: "amour",        label: { fr: "Amour",        en: "Love"         } },
  { id: "spiritualite", label: { fr: "Spiritualité", en: "Spirituality" } },
  { id: "quotidien",    label: { fr: "Quotidien",    en: "Daily"        } },
];

// ─── Carte prière carrousel ───────────────────────────────────────────────────
function PrayerCard({
  prayer,
  lang,
  onClick,
}: {
  prayer: any;
  lang: string;
  onClick: () => void;
}) {
  const locked = LOCKED_PRAYERS.has(prayer.id);
  return (
    <motion.div
      whileTap={{ scale: 0.94 }}
      onClick={onClick}
      className="flex-shrink-0 w-32 cursor-pointer"
    >
      <div className="relative w-32 h-32 rounded-2xl overflow-hidden bg-gradient-to-br from-yellow-50 to-purple-50 shadow-sm mb-2">
        <img
          src={`/images/prayers/${prayer.id}.webp`}
          alt={prayer.title[lang]}
          className="w-full h-full object-cover"
          onError={(e) => {
            const img = e.target as HTMLImageElement;
            img.style.display = "none";
            const parent = img.parentElement;
            if (parent) {
              parent.innerHTML += `<span class="absolute inset-0 flex items-center justify-center text-4xl">${prayer.icon}</span>`;
            }
          }}
        />
        {locked && (
          <div className="absolute inset-0 bg-black/20 flex items-end justify-end p-2">
            <span className="text-sm">🔒</span>
          </div>
        )}
      </div>
      <p className="text-xs font-semibold text-foreground text-center leading-tight line-clamp-2 px-1">
        {prayer.title[lang]}
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
  onSelect: (prayer: any) => void;
}) {
  const items = prayers.filter((p) => p.category === category.id);
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
        {items.map((prayer) => (
          <PrayerCard key={prayer.id} prayer={prayer} lang={lang} onClick={() => onSelect(prayer)} />
        ))}
      </div>
    </div>
  );
}

// ─── Composant principal ──────────────────────────────────────────────────────
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
      track("prayer", prayer.id, prayer.title[lang as "fr" | "en"]);
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
    <div className="relative w-full h-full overflow-hidden">

      {/* ════════════════════════════════════════════════
          ÉCRAN PRINCIPAL — liste des catégories
      ════════════════════════════════════════════════ */}
      <div
        className="absolute inset-0 transition-transform duration-300 ease-in-out overflow-y-auto"
        style={{ transform: selected ? "translateX(-100%)" : "translateX(0)" }}
      >
        <div className="px-4 pb-10 pt-2">
          <div className="flex flex-col items-center mb-8">
            <h1 className="font-display text-3xl font-bold text-center text-foreground">
              {lang === "fr" ? "Prières & Protection" : "Prayers & Protection"}
            </h1>
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-yellow-300 to-transparent mt-3" />
          </div>
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
        style={{ transform: selected ? "translateX(0)" : "translateX(100%)" }}
      >
        {selected && (
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
                    src={`/images/prayers/${selected.id}.webp`}
                    alt={selected.title[lang]}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "center 35%" }}
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      img.style.display = "none";
                      const p = img.parentElement;
                      if (p) {
                        p.style.background = "linear-gradient(135deg,#fef9c3,#ede9fe)";
                        const span = document.createElement("span");
                        span.className = "absolute inset-0 flex items-center justify-center text-7xl";
                        span.textContent = selected.icon;
                        p.appendChild(span);
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/65" />
                  <div className="absolute bottom-3 left-0 right-0 flex flex-col items-center gap-1 px-12">
                    <h2 className="font-display font-bold text-base text-white drop-shadow text-center leading-snug">
                      {selected.title[lang]}
                    </h2>
                  </div>
                </div>
                <div className="flex-1 flex flex-col">
                  <LockedOverlay onWatch={handleWatch} loading={loading} />
                </div>
              </>
            ) : (
              /* ── UNLOCKED : image dans le scroll ── */
              <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: "none" }}>

                {/* Image */}
                <div className="relative w-full" style={{ height: 240 }}>
                  <img
                    src={`/images/prayers/${selected.id}.webp`}
                    alt={selected.title[lang]}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "center 35%" }}
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      img.style.display = "none";
                      const p = img.parentElement;
                      if (p) {
                        p.style.background = "linear-gradient(135deg,#fef9c3,#ede9fe)";
                        const span = document.createElement("span");
                        span.className = "absolute inset-0 flex items-center justify-center text-8xl";
                        span.textContent = selected.icon;
                        p.appendChild(span);
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/65" />
                  <div className="absolute bottom-3 left-0 right-0 flex flex-col items-center gap-1 px-12">
                    <h2 className="font-display font-bold text-base text-white drop-shadow text-center leading-snug">
                      {selected.title[lang]}
                    </h2>
                  </div>
                </div>

                {/* Texte */}
                <div className="px-6 pt-5 pb-16">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent via-yellow-300 to-transparent mx-auto mb-5" />
                  <p className="text-foreground/80 leading-relaxed font-sans text-sm whitespace-pre-line text-center italic">
                    {selected.text[lang]}
                  </p>
                </div>

              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}