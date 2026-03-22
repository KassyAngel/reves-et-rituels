import { useState, useMemo } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "@/hooks/use-language";
import { useJournal } from "@/hooks/use-journal";
import { motion, AnimatePresence } from "framer-motion";
import { Trash2, PenLine, Calendar as CalendarIcon, Plus, Search, X, Tag } from "lucide-react";
import { format } from "date-fns";
import { fr as frLocale, enUS as enLocale } from "date-fns/locale";

// ── Humeurs avec image + fallback emoji ───────────────────────────────────
const MOODS = [
  { id: "happy",   emoji: "😊", label: { fr: "Joyeux",    en: "Happy"    }, image: "/images/moods/happy.webp",   bg: "from-yellow-50 to-orange-50" },
  { id: "calm",    emoji: "😌", label: { fr: "Serein",    en: "Calm"     }, image: "/images/moods/calm.webp",    bg: "from-blue-50 to-cyan-50" },
  { id: "sad",     emoji: "😔", label: { fr: "Mélancolique", en: "Sad"   }, image: "/images/moods/sad.webp",     bg: "from-slate-50 to-blue-50" },
  { id: "anxious", emoji: "😰", label: { fr: "Anxieux",   en: "Anxious"  }, image: "/images/moods/anxious.webp", bg: "from-purple-50 to-rose-50" },
  { id: "magic",   emoji: "🌟", label: { fr: "Magique",   en: "Magical"  }, image: "/images/moods/magic.webp",   bg: "from-purple-50 to-yellow-50" },
];

// ── Tags / catégories ─────────────────────────────────────────────────────
const TAGS = [
  { id: "lucid",       label: { fr: "Lucide",        en: "Lucid"        }, color: "bg-purple-100 text-purple-700" },
  { id: "nightmare",   label: { fr: "Cauchemar",     en: "Nightmare"    }, color: "bg-red-100 text-red-700" },
  { id: "premonitory", label: { fr: "Prémonitoire",  en: "Premonitory"  }, color: "bg-amber-100 text-amber-700" },
  { id: "recurring",   label: { fr: "Récurrent",     en: "Recurring"    }, color: "bg-blue-100 text-blue-700" },
  { id: "symbolic",    label: { fr: "Symbolique",    en: "Symbolic"     }, color: "bg-green-100 text-green-700" },
  { id: "spiritual",   label: { fr: "Spirituel",     en: "Spiritual"    }, color: "bg-indigo-100 text-indigo-700" },
];

function getMood(id: string) {
  return MOODS.find(m => m.id === id) ?? MOODS[0];
}
function getTag(id: string) {
  return TAGS.find(t => t.id === id);
}

// ── Composant image humeur ────────────────────────────────────────────────
function MoodImage({ moodId, size = "md" }: { moodId: string; size?: "sm" | "md" }) {
  const mood = getMood(moodId);
  const sizeClass = size === "sm" ? "w-8 h-8 text-xl" : "w-10 h-10 text-2xl";
  return (
    <div className={`${sizeClass} rounded-xl bg-gradient-to-br ${mood.bg} flex items-center justify-center overflow-hidden shrink-0`}>
      <img
        src={mood.image}
        alt={mood.emoji}
        className="w-full h-full object-contain p-0.5"
        onError={(e) => {
          const img = e.target as HTMLImageElement;
          img.style.display = "none";
          const parent = img.parentElement;
          if (parent) parent.innerHTML = `<span>${mood.emoji}</span>`;
        }}
      />
    </div>
  );
}

// ── Types ─────────────────────────────────────────────────────────────────
type EntryForm = {
  title: string;
  content: string;
  moodId: string;
  tags: string[];
};

export default function Journal() {
  const { t, lang } = useLanguage();
  const { entries, addEntry, deleteEntry, updateEntry } = useJournal();
  const locale = lang === "fr" ? frLocale : enLocale;

  // Form state
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<EntryForm>({ title: "", content: "", moodId: "happy", tags: [] });

  // Filters
  const [search, setSearch] = useState("");
  const [filterTag, setFilterTag] = useState<string | null>(null);

  // Delete confirm
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  // Filtered entries
  const filtered = useMemo(() => {
    return entries.filter(e => {
      const matchSearch = !search || 
        e.title.toLowerCase().includes(search.toLowerCase()) ||
        e.content.toLowerCase().includes(search.toLowerCase());
      const matchTag  = !filterTag  || (e.tags ?? []).includes(filterTag);
      return matchSearch && matchTag;
    });
  }, [entries, search, filterTag]);

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
    setForm(f => ({
      ...f,
      tags: f.tags.includes(id) ? f.tags.filter(t => t !== id) : [...f.tags, id],
    }));
  };

  const hasFilters = !!search || !!filterTag;

  return (
    <div className="w-full h-full flex flex-col pb-4">

      {/* ── Header ──────────────────────────────────────────────────────── */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-display font-bold text-foreground">{lang === "fr" ? "Mon Journal" : "My Journal"}</h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            {entries.length} {lang === "fr"
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

      {/* ── Barre de recherche ───────────────────────────────────────────── */}
      <div className="relative mb-3">
        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder={lang === "fr" ? "Rechercher un rêve..." : "Search a dream..."}
          className="w-full pl-8 pr-8 py-2 text-sm bg-white/80 rounded-xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
        {search && (
          <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2">
            <X size={13} className="text-muted-foreground" />
          </button>
        )}
      </div>



      {/* ── Filtres tags ─────────────────────────────────────────────────── */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-4 scrollbar-hide">
        {TAGS.map(tag => (
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

      {/* ── Résultat filtre ──────────────────────────────────────────────── */}
      {hasFilters && (
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs text-muted-foreground">
            {filtered.length} {lang === "fr" ? "résultat(s)" : "result(s)"}
          </p>
          <button onClick={() => { setSearch(""); setFilterTag(null); }}
            className="text-xs text-primary underline">
            {lang === "fr" ? "Effacer filtres" : "Clear filters"}
          </button>
        </div>
      )}

      {/* ── Formulaire nouveau / édition ─────────────────────────────────── */}
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
                    ? (lang === "fr" ? "Modifier l'entrée" : "Edit entry")
                    : (lang === "fr" ? "Nouveau rêve" : "New dream")}
                </p>
                <button onClick={() => setIsFormOpen(false)}>
                  <X size={16} className="text-muted-foreground" />
                </button>
              </div>

              <input
                type="text"
                value={form.title}
                onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
                placeholder={t.journal.entryTitle}
                className="w-full text-base font-display font-bold bg-white/90 border border-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors placeholder:text-slate-400 text-slate-800"
              />

              <textarea
                value={form.content}
                onChange={e => setForm(f => ({ ...f, content: e.target.value }))}
                placeholder={t.journal.entryDesc}
                className="w-full h-28 bg-white rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none border border-slate-200 placeholder:text-slate-400 text-slate-800"
              />



              {/* Sélection tags */}
              <div>
                <p className="text-xs font-bold text-slate-600 mb-2">
                  {lang === "fr" ? "Catégories" : "Categories"}
                </p>
                <div className="flex flex-wrap gap-2">
                  {TAGS.map(tag => (
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

      {/* ── Liste des entrées ─────────────────────────────────────────────── */}
      <div className="flex-1 space-y-3">
        {filtered.length === 0 ? (
          <div className="h-48 flex flex-col items-center justify-center text-center opacity-50">
            <PenLine size={40} className="mb-3 text-primary" strokeWidth={1} />
            <p className="max-w-[250px] font-sans italic text-sm">
              {hasFilters
                ? (lang === "fr" ? "Aucun rêve trouvé." : "No dreams found.")
                : t.journal.empty}
            </p>
          </div>
        ) : (
          <AnimatePresence>
            {filtered.map((entry) => {
              return (
                <motion.div
                  key={entry.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className={`rounded-2xl overflow-hidden shadow-sm border border-slate-100 relative`}
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
                        {/* Bouton éditer */}
                        <button
                          onClick={() => openEdit(entry)}
                          className="text-muted-foreground/40 hover:text-primary transition-colors p-1.5"
                        >
                          <PenLine size={14} />
                        </button>
                        {/* Bouton supprimer */}
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

                    {/* Tags */}
                    {(entry.tags ?? []).length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {(entry.tags ?? []).map((tagId: string) => {
                          const tag = getTag(tagId);
                          if (!tag) return null;
                          return (
                            <span key={tagId} className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium ${tag.color}`}>
                              <Tag size={8} />
                              {tag.label[lang as "fr" | "en"]}
                            </span>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        )}
      </div>

      {/* ── Bannière pub ─────────────────────────────────────────────────── */}

      {/* ── Modal confirmation suppression ───────────────────────────────── */}
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
                onClick={e => e.stopPropagation()}
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
    </div>
  );
}