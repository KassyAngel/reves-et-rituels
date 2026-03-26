import { useState, useMemo } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "@/hooks/use-language";
import { useJournal } from "@/hooks/use-journal";
import { useActivity } from "@/hooks/use-activity";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trash2,
  PenLine,
  Calendar as CalendarIcon,
  Plus,
  Search,
  X,
  Tag,
  Star,
  BookOpen,
  LayoutList,
} from "lucide-react";
import { format, formatDistanceToNow } from "date-fns";
import { fr as frLocale, enUS as enLocale } from "date-fns/locale";

// ── Humeurs ───────────────────────────────────────────────────────────────
const MOODS = [
  { id: "happy",   emoji: "😊", label: { fr: "Joyeux",       en: "Happy"   }, image: "/images/moods/happy.webp",   bg: "from-yellow-50 to-orange-50" },
  { id: "calm",    emoji: "😌", label: { fr: "Serein",       en: "Calm"    }, image: "/images/moods/calm.webp",    bg: "from-blue-50 to-cyan-50" },
  { id: "sad",     emoji: "😔", label: { fr: "Mélancolique", en: "Sad"     }, image: "/images/moods/sad.webp",     bg: "from-slate-50 to-blue-50" },
  { id: "anxious", emoji: "😰", label: { fr: "Anxieux",      en: "Anxious" }, image: "/images/moods/anxious.webp", bg: "from-purple-50 to-rose-50" },
  { id: "magic",   emoji: "🌟", label: { fr: "Magique",      en: "Magical" }, image: "/images/moods/magic.webp",   bg: "from-purple-50 to-yellow-50" },
];

const TAGS = [
  { id: "lucid",       label: { fr: "Lucide",       en: "Lucid"       }, color: "bg-purple-100 text-purple-700" },
  { id: "nightmare",   label: { fr: "Cauchemar",    en: "Nightmare"   }, color: "bg-red-100 text-red-700" },
  { id: "premonitory", label: { fr: "Prémonitoire", en: "Premonitory" }, color: "bg-amber-100 text-amber-700" },
  { id: "recurring",   label: { fr: "Récurrent",    en: "Recurring"   }, color: "bg-blue-100 text-blue-700" },
  { id: "symbolic",    label: { fr: "Symbolique",   en: "Symbolic"    }, color: "bg-green-100 text-green-700" },
  { id: "spiritual",   label: { fr: "Spirituel",    en: "Spiritual"   }, color: "bg-indigo-100 text-indigo-700" },
];

function getMood(id: string) { return MOODS.find((m) => m.id === id) ?? MOODS[0]; }
function getTag(id: string) { return TAGS.find((t) => t.id === id); }

// ── Config visuelle par type d'activité ──────────────────────────────────
const ACTIVITY_CONFIG = {
  dream:  { bg: "bg-purple-50",  border: "border-purple-100", text: { fr: "Rêve interprété",  en: "Dream interpreted" } },
  ritual: { bg: "bg-yellow-50",  border: "border-yellow-100", text: { fr: "Rituel accompli",  en: "Ritual completed"  } },
  prayer: { bg: "bg-pink-50",    border: "border-pink-100",   text: { fr: "Prière ouverte",   en: "Prayer opened"     } },
  plant:  { bg: "bg-green-50",   border: "border-green-100",  text: { fr: "Plante consultée", en: "Plant consulted"   } },
} as const;

type EntryForm = {
  title: string;
  content: string;
  moodId: string;
  tags: string[];
};

type TabId = "dreams" | "tracker";

// ═════════════════════════════════════════════════════════════════════════
// COMPOSANT PRINCIPAL
// ═════════════════════════════════════════════════════════════════════════

export default function Journal() {
  const { t, lang } = useLanguage();
  const { entries, addEntry, deleteEntry, updateEntry } = useJournal();
  const { activities, favorites, stats, streak, toggleFavorite, remove, clearAll } =
    useActivity();
  const locale = lang === "fr" ? frLocale : enLocale;

  // ✅ "tracker" en premier — l'onglet Suivi s'ouvre par défaut
  const [activeTab, setActiveTab] = useState<TabId>("tracker");

  // ── État onglet Rêves ─────────────────────────────────────────────────
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<EntryForm>({ title: "", content: "", moodId: "happy", tags: [] });
  const [search, setSearch] = useState("");
  const [filterTag, setFilterTag] = useState<string | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  // ── État onglet Suivi ─────────────────────────────────────────────────
  const [filterType, setFilterType] = useState<"all" | "dream" | "ritual" | "prayer" | "plant">("all");
  const [showFavOnly, setShowFavOnly] = useState(false);
  const [confirmClear, setConfirmClear] = useState(false);
  const [activityDeleteConfirm, setActivityDeleteConfirm] = useState<string | null>(null);

  // ── Filtered journal entries ──────────────────────────────────────────
  const filtered = useMemo(() => {
    return entries.filter((e) => {
      const matchSearch =
        !search ||
        e.title.toLowerCase().includes(search.toLowerCase()) ||
        e.content.toLowerCase().includes(search.toLowerCase());
      const matchTag = !filterTag || (e.tags ?? []).includes(filterTag);
      return matchSearch && matchTag;
    });
  }, [entries, search, filterTag]);

  // ── Filtered activities ───────────────────────────────────────────────
  const filteredActivities = useMemo(() => {
    return activities.filter((a) => {
      const matchType = filterType === "all" || a.type === filterType;
      const matchFav = !showFavOnly || a.favorite;
      return matchType && matchFav;
    });
  }, [activities, filterType, showFavOnly]);

  // ── Handlers journal ──────────────────────────────────────────────────
  const openNew = () => {
    setEditingId(null);
    setForm({ title: "", content: "", moodId: "happy", tags: [] });
    setIsFormOpen(true);
  };

  const openEdit = (entry: any) => {
    setEditingId(entry.id);
    setForm({ title: entry.title, content: entry.content, moodId: entry.moodId ?? "happy", tags: entry.tags ?? [] });
    setIsFormOpen(true);
  };

  const handleSave = () => {
    if (!form.title.trim() || !form.content.trim()) return;
    if (editingId) {
      updateEntry(editingId, { ...form });
    } else {
      addEntry({ date: new Date().toISOString(), ...form });
    }
    setIsFormOpen(false);
    setEditingId(null);
  };

  const toggleTag = (id: string) => {
    setForm((f) => ({
      ...f,
      tags: f.tags.includes(id) ? f.tags.filter((t) => t !== id) : [...f.tags, id],
    }));
  };

  const hasFilters = !!search || !!filterTag;

  // ── Helpers affichage ─────────────────────────────────────────────────
  function relativeDate(iso: string) {
    try {
      return formatDistanceToNow(new Date(iso), { addSuffix: true, locale });
    } catch {
      return "";
    }
  }

  // ═══════════════════════════════════════════════════════════════════════
  // RENDER
  // ═══════════════════════════════════════════════════════════════════════
  return (
    <div className="w-full h-full flex flex-col pb-4">

      {/* ── Tabs navigation — Suivi en premier, Journal en second ───── */}
      <div className="flex bg-slate-100 rounded-2xl p-1 mb-5 gap-1">
        <button
          onClick={() => setActiveTab("tracker")}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold transition-all ${
            activeTab === "tracker"
              ? "bg-white shadow-sm text-foreground"
              : "text-muted-foreground"
          }`}
        >
          <LayoutList size={15} />
          {lang === "fr" ? "Suivi" : "Tracker"}
          {activities.length > 0 && (
            <span className="bg-primary/10 text-primary text-[10px] font-bold px-1.5 py-0.5 rounded-full">
              {activities.length}
            </span>
          )}
        </button>
        <button
          onClick={() => setActiveTab("dreams")}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold transition-all ${
            activeTab === "dreams"
              ? "bg-white shadow-sm text-foreground"
              : "text-muted-foreground"
          }`}
        >
          <BookOpen size={15} />
          {lang === "fr" ? "Mon Journal" : "My Journal"}
        </button>
      </div>

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* ONGLET SUIVI (maintenant en premier)                            */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <AnimatePresence mode="wait">
        {activeTab === "tracker" && (
          <motion.div
            key="tracker"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.18 }}
            className="flex flex-col flex-1"
          >
            {/* ── Stats ──────────────────────────────────────────────── */}
            <div className="grid grid-cols-4 gap-2 mb-5">
              {(["dream", "ritual", "prayer", "plant"] as const).map((type) => {
                const cfg = ACTIVITY_CONFIG[type];
                return (
                  <div
                    key={type}
                    className={`${cfg.bg} ${cfg.border} border rounded-2xl p-3 flex flex-col items-center`}
                  >
                    <span className="text-lg mb-0.5">•</span>
                    <span className="text-xl font-bold text-foreground leading-none">
                      {stats[type]}
                    </span>
                    <span className="text-[9px] text-muted-foreground mt-1 text-center leading-tight">
                      {cfg.text[lang as "fr" | "en"]}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* ── Streak ─────────────────────────────────────────────── */}
            <div className="bg-white border border-slate-100 rounded-2xl p-4 mb-5 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-bold text-foreground">
                  {lang === "fr" ? "Série active" : "Active streak"}
                </p>
                <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                  {streak.count} {lang === "fr" ? "jour(s)" : "day(s)"}
                </span>
              </div>
              <div className="flex gap-1.5">
                {streak.last7.map((active, i) => {
                  const isToday = i === 6;
                  return (
                    <div
                      key={i}
                      className={`flex-1 h-3 rounded-full transition-all ${
                        isToday && active
                          ? "bg-primary"
                          : active
                          ? "bg-primary/40"
                          : "bg-slate-100"
                      }`}
                    />
                  );
                })}
              </div>
              <div className="flex justify-between mt-1.5">
                {["L", "M", "M", "J", "V", "S", "D"].map((d, i) => (
                  <span key={i} className="text-[9px] text-muted-foreground flex-1 text-center">
                    {d}
                  </span>
                ))}
              </div>
            </div>

            {/* ── Filtres type + favori ───────────────────────────────── */}
            <div className="flex gap-2 overflow-x-auto pb-1 mb-4 scrollbar-hide">
              {(["all", "dream", "ritual", "prayer", "plant"] as const).map((type) => {
                const label =
                  type === "all"
                    ? lang === "fr" ? "Tout" : "All"
                    : ACTIVITY_CONFIG[type].text[lang as "fr" | "en"];
                const emoji = "•";
                return (
                  <button
                    key={type}
                    onClick={() => setFilterType(type)}
                    className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all border ${
                      filterType === type
                        ? "bg-foreground text-white border-foreground"
                        : "bg-white text-muted-foreground border-slate-100"
                    }`}
                  >
                    <span className="text-sm">{emoji}</span>
                    {label}
                  </button>
                );
              })}
              <button
                onClick={() => setShowFavOnly(!showFavOnly)}
                className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all border ${
                  showFavOnly
                    ? "bg-yellow-400 text-white border-yellow-400"
                    : "bg-white text-muted-foreground border-slate-100"
                }`}
              >
                <Star size={11} className={showFavOnly ? "fill-white" : ""} />
                {lang === "fr" ? "Favoris" : "Favorites"}
              </button>
            </div>

            {/* ── Liste activités ─────────────────────────────────────── */}
            <div className="flex-1 space-y-2.5">
              {filteredActivities.length === 0 ? (
                <div className="h-48 flex flex-col items-center justify-center text-center opacity-40">
                  <LayoutList size={38} strokeWidth={1} className="mb-3 text-primary" />
                  <p className="text-sm italic max-w-[220px]">
                    {lang === "fr"
                      ? "Aucune activité encore.\nInterprète un rêve, accomplis un rituel…"
                      : "No activity yet.\nInterpret a dream, complete a ritual…"}
                  </p>
                </div>
              ) : (
                <AnimatePresence>
                  {filteredActivities.map((activity) => {
                    const cfg = ACTIVITY_CONFIG[activity.type];
                    return (
                      <motion.div
                        key={activity.id}
                        layout
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.93 }}
                        className={`flex items-center gap-3 p-3.5 rounded-2xl border ${cfg.bg} ${cfg.border} shadow-sm`}
                      >
                        {/* Badge type */}
                        <div className="w-9 h-9 rounded-xl bg-white/70 flex items-center justify-center text-base shrink-0 shadow-inner">
                          <span className="w-2 h-2 bg-current rounded-full"></span>
                        </div>

                        {/* Contenu */}
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-bold text-foreground truncate">
                            {activity.title}
                          </p>
                          <p className="text-[10px] text-muted-foreground mt-0.5">
                            {cfg.text[lang as "fr" | "en"]} · {relativeDate(activity.date)}
                          </p>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-1 shrink-0">
                          <button
                            onClick={() => toggleFavorite(activity.id)}
                            className="w-8 h-8 flex items-center justify-center rounded-xl hover:bg-white/60 transition-colors"
                          >
                            <Star
                              size={15}
                              className={
                                activity.favorite
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-slate-300"
                              }
                            />
                          </button>
                          <button
                            onClick={() => setActivityDeleteConfirm(activity.id)}
                            className="w-8 h-8 flex items-center justify-center rounded-xl hover:bg-white/60 transition-colors"
                          >
                            <Trash2 size={14} className="text-slate-300 hover:text-red-400 transition-colors" />
                          </button>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              )}
            </div>

            {/* ── Bouton tout effacer ─────────────────────────────────── */}
            {activities.length > 0 && (
              <button
                onClick={() => setConfirmClear(true)}
                className="mt-5 w-full py-2.5 rounded-xl border border-slate-200 text-xs text-muted-foreground font-medium hover:bg-red-50 hover:text-red-400 hover:border-red-200 transition-all"
              >
                {lang === "fr" ? "Effacer tout l'historique" : "Clear all history"}
              </button>
            )}
          </motion.div>
        )}

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* ONGLET RÊVES (maintenant en second)                             */}
        {/* ════════════════════════════════════════════════════════════════ */}
        {activeTab === "dreams" && (
          <motion.div
            key="dreams"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 16 }}
            transition={{ duration: 0.18 }}
            className="flex flex-col flex-1"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <div>
                <h1 className="text-2xl font-display font-bold text-foreground">
                  {lang === "fr" ? "Mon Journal" : "My Journal"}
                </h1>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {entries.length}{" "}
                  {lang === "fr"
                    ? `entrée${entries.length > 1 ? "s" : ""}`
                    : `entr${entries.length > 1 ? "ies" : "y"}`}
                </p>
              </div>
              <button
                onClick={openNew}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white text-sm font-bold shadow-md hover:opacity-90 transition-opacity"
              >
                <Plus size={16} />
                {lang === "fr" ? "Écrire" : "Write"}
              </button>
            </div>

            {/* Recherche */}
            <div className="relative mb-3">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={lang === "fr" ? "Rechercher un rêve..." : "Search a dream..."}
                className="w-full pl-8 pr-8 py-2 text-sm bg-white/80 rounded-xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              {search && (
                <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2">
                  <X size={13} className="text-muted-foreground" />
                </button>
              )}
            </div>

            {/* Filtres tags */}
            <div className="flex gap-2 overflow-x-auto pb-2 mb-4 scrollbar-hide">
              {TAGS.map((tag) => (
                <button
                  key={tag.id}
                  onClick={() => setFilterTag(filterTag === tag.id ? null : tag.id)}
                  className={`shrink-0 flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium transition-all border ${
                    filterTag === tag.id
                      ? "bg-foreground text-white border-foreground"
                      : `${tag.color} border-transparent`
                  }`}
                >
                  <Tag size={9} />
                  {tag.label[lang as "fr" | "en"]}
                </button>
              ))}
            </div>

            {hasFilters && (
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs text-muted-foreground">
                  {filtered.length} {lang === "fr" ? "résultat(s)" : "result(s)"}
                </p>
                <button
                  onClick={() => { setSearch(""); setFilterTag(null); }}
                  className="text-xs text-primary underline"
                >
                  {lang === "fr" ? "Effacer filtres" : "Clear filters"}
                </button>
              </div>
            )}

            {/* Formulaire */}
            <AnimatePresence>
              {isFormOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                  animate={{ opacity: 1, height: "auto", marginBottom: 16 }}
                  exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                  className="overflow-hidden"
                >
                  <div className="bg-white p-4 rounded-2xl space-y-3 border border-slate-200 shadow-md">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-bold text-foreground">
                        {editingId
                          ? lang === "fr" ? "Modifier l'entrée" : "Edit entry"
                          : lang === "fr" ? "Nouveau rêve" : "New dream"}
                      </p>
                      <button onClick={() => setIsFormOpen(false)}>
                        <X size={16} className="text-muted-foreground" />
                      </button>
                    </div>
                    <input
                      type="text"
                      value={form.title}
                      onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                      placeholder={t.journal.entryTitle}
                      className="w-full text-base font-display font-bold bg-white/90 border border-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors placeholder:text-slate-400 text-slate-800"
                    />
                    <textarea
                      value={form.content}
                      onChange={(e) => setForm((f) => ({ ...f, content: e.target.value }))}
                      placeholder={t.journal.entryDesc}
                      className="w-full h-28 bg-white rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none border border-slate-200 placeholder:text-slate-400 text-slate-800"
                    />
                    <div>
                      <p className="text-xs font-bold text-slate-600 mb-2">
                        {lang === "fr" ? "Catégories" : "Categories"}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {TAGS.map((tag) => (
                          <button
                            key={tag.id}
                            onClick={() => toggleTag(tag.id)}
                            className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium transition-all border ${
                              form.tags.includes(tag.id)
                                ? "bg-foreground text-white border-foreground"
                                : `${tag.color} border-transparent`
                            }`}
                          >
                            <Tag size={9} />
                            {tag.label[lang as "fr" | "en"]}
                          </button>
                        ))}
                      </div>
                    </div>
                    <button
                      onClick={handleSave}
                      disabled={!form.title.trim() || !form.content.trim()}
                      className="w-full py-3 bg-primary text-white rounded-xl text-sm font-bold shadow-md disabled:opacity-40 hover:opacity-90 transition-opacity"
                    >
                      {t.journal.save}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Liste entrées */}
            <div className="flex-1 space-y-3">
              {filtered.length === 0 ? (
                <div className="h-48 flex flex-col items-center justify-center text-center opacity-50">
                  <PenLine size={40} className="mb-3 text-primary" strokeWidth={1} />
                  <p className="max-w-[250px] font-sans italic text-sm">
                    {hasFilters
                      ? lang === "fr" ? "Aucun rêve trouvé." : "No dreams found."
                      : t.journal.empty}
                  </p>
                </div>
              ) : (
                <AnimatePresence>
                  {filtered.map((entry) => (
                    <motion.div
                      key={entry.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="rounded-2xl overflow-hidden shadow-sm border border-slate-100 relative"
                    >
                      <div className="relative p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center gap-3">
                            <div>
                              <h3 className="font-display font-bold text-foreground text-base leading-tight">
                                {entry.title}
                              </h3>
                              <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                                <CalendarIcon size={10} />
                                {format(new Date(entry.date), "PPP", { locale })}
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-1">
                            <button
                              onClick={() => openEdit(entry)}
                              className="text-muted-foreground/40 hover:text-primary transition-colors p-1.5"
                            >
                              <PenLine size={14} />
                            </button>
                            <button
                              onClick={() => setDeleteConfirm(entry.id)}
                              className="text-muted-foreground/40 hover:text-red-400 transition-colors p-1.5"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </div>
                        <p className="text-foreground/80 text-sm leading-relaxed line-clamp-3 pl-1 mt-2">
                          {entry.content}
                        </p>
                        {(entry.tags ?? []).length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mt-3">
                            {(entry.tags ?? []).map((tagId: string) => {
                              const tag = getTag(tagId);
                              if (!tag) return null;
                              return (
                                <span
                                  key={tagId}
                                  className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium ${tag.color}`}
                                >
                                  <Tag size={8} />
                                  {tag.label[lang as "fr" | "en"]}
                                </span>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* PORTALS — modales de confirmation                               */}
      {/* ════════════════════════════════════════════════════════════════ */}

      {/* Suppression entrée journal */}
      {createPortal(
        <AnimatePresence>
          {deleteConfirm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[999] flex items-center justify-center bg-black/30 backdrop-blur-sm px-6"
              onClick={() => setDeleteConfirm(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl p-6 w-full max-w-[320px] shadow-2xl text-center"
              >
                <p className="font-display font-bold text-lg mb-2">
                  {lang === "fr" ? "Supprimer ce rêve ?" : "Delete this dream?"}
                </p>
                <p className="text-sm text-muted-foreground mb-5">
                  {lang === "fr" ? "Cette action est irréversible." : "This action cannot be undone."}
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setDeleteConfirm(null)}
                    className="flex-1 py-2.5 rounded-xl border border-slate-200 text-sm font-medium"
                  >
                    {lang === "fr" ? "Annuler" : "Cancel"}
                  </button>
                  <button
                    onClick={() => { deleteEntry(deleteConfirm); setDeleteConfirm(null); }}
                    className="flex-1 py-2.5 rounded-xl bg-red-500 text-white text-sm font-bold"
                  >
                    {lang === "fr" ? "Supprimer" : "Delete"}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}

      {/* Suppression activité individuelle */}
      {createPortal(
        <AnimatePresence>
          {activityDeleteConfirm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[999] flex items-center justify-center bg-black/30 backdrop-blur-sm px-6"
              onClick={() => setActivityDeleteConfirm(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl p-6 w-full max-w-[320px] shadow-2xl text-center"
              >
                <p className="font-display font-bold text-lg mb-2">
                  {lang === "fr" ? "Supprimer cette activité ?" : "Delete this activity?"}
                </p>
                <p className="text-sm text-muted-foreground mb-5">
                  {lang === "fr" ? "Elle sera retirée de ton suivi." : "It will be removed from your tracker."}
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setActivityDeleteConfirm(null)}
                    className="flex-1 py-2.5 rounded-xl border border-slate-200 text-sm font-medium"
                  >
                    {lang === "fr" ? "Annuler" : "Cancel"}
                  </button>
                  <button
                    onClick={() => { remove(activityDeleteConfirm); setActivityDeleteConfirm(null); }}
                    className="flex-1 py-2.5 rounded-xl bg-red-500 text-white text-sm font-bold"
                  >
                    {lang === "fr" ? "Supprimer" : "Delete"}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}

      {/* Effacer tout l'historique */}
      {createPortal(
        <AnimatePresence>
          {confirmClear && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[999] flex items-center justify-center bg-black/30 backdrop-blur-sm px-6"
              onClick={() => setConfirmClear(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl p-6 w-full max-w-[320px] shadow-2xl text-center"
              >
                <p className="font-display font-bold text-lg mb-2">
                  {lang === "fr" ? "Effacer tout l'historique ?" : "Clear all history?"}
                </p>
                <p className="text-sm text-muted-foreground mb-5">
                  {lang === "fr"
                    ? "Toutes tes activités seront supprimées définitivement."
                    : "All your activity records will be permanently deleted."}
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setConfirmClear(false)}
                    className="flex-1 py-2.5 rounded-xl border border-slate-200 text-sm font-medium"
                  >
                    {lang === "fr" ? "Annuler" : "Cancel"}
                  </button>
                  <button
                    onClick={() => { clearAll(); setConfirmClear(false); }}
                    className="flex-1 py-2.5 rounded-xl bg-red-500 text-white text-sm font-bold"
                  >
                    {lang === "fr" ? "Tout effacer" : "Clear all"}
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