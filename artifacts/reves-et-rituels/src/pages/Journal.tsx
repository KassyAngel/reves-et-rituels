import { useState } from "react";
import { useLanguage } from "@/hooks/use-language";
import { useJournal } from "@/hooks/use-journal";
import { motion, AnimatePresence } from "framer-motion";
import { Trash2, PenLine, Calendar as CalendarIcon, Plus } from "lucide-react";
import { format } from "date-fns";
import { fr as frLocale, enUS as enLocale } from "date-fns/locale";

const MOODS = ["😊", "😌", "😔", "😰", "🌟"];

export default function Journal() {
  const { t, lang } = useLanguage();
  const { entries, addEntry, deleteEntry } = useJournal();
  
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [mood, setMood] = useState(MOODS[0]);

  const handleSave = () => {
    if (!title.trim() || !content.trim()) return;
    
    addEntry({
      date: new Date().toISOString(),
      title,
      content,
      mood
    });
    
    setTitle("");
    setContent("");
    setMood(MOODS[0]);
    setIsFormOpen(false);
  };

  const locale = lang === 'fr' ? frLocale : enLocale;

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl text-foreground">{t.journal.title}</h1>
        <button 
          onClick={() => setIsFormOpen(!isFormOpen)}
          className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center hover:bg-primary/30 transition-colors"
        >
          <Plus size={20} className={isFormOpen ? "rotate-45 transition-transform" : "transition-transform"} />
        </button>
      </div>

      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginBottom: 0 }}
            animate={{ opacity: 1, height: "auto", marginBottom: 32 }}
            exit={{ opacity: 0, height: 0, marginBottom: 0 }}
            className="overflow-hidden"
          >
            <div className="glass-panel p-5 rounded-2xl space-y-4">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder={t.journal.entryTitle}
                className="w-full text-lg font-display font-bold bg-transparent border-b border-border/50 pb-2 focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/50"
              />
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder={t.journal.entryDesc}
                className="w-full h-32 bg-white/50 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none custom-scrollbar"
              />
              
              <div className="flex items-center justify-between pt-2">
                <div className="flex gap-2">
                  {MOODS.map(m => (
                    <button
                      key={m}
                      onClick={() => setMood(m)}
                      className={`text-2xl transition-transform ${mood === m ? 'scale-125 drop-shadow-md' : 'opacity-50 hover:opacity-100'}`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
                <button
                  onClick={handleSave}
                  disabled={!title.trim() || !content.trim()}
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm font-bold shadow-md disabled:opacity-50 hover:shadow-lg transition-all"
                >
                  {t.journal.save}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex-1 space-y-4 pb-12">
        {entries.length === 0 && !isFormOpen ? (
          <div className="h-48 flex flex-col items-center justify-center text-center opacity-50">
            <Feather size={48} className="mb-4 text-primary" strokeWidth={1} />
            <p className="max-w-[250px] font-sans italic">{t.journal.empty}</p>
          </div>
        ) : (
          <AnimatePresence>
            {entries.map((entry) => (
              <motion.div
                key={entry.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 relative group"
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl bg-slate-50 p-2 rounded-xl">{entry.mood}</span>
                    <div>
                      <h3 className="font-display font-bold text-foreground text-lg">{entry.title}</h3>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                        <CalendarIcon size={12} />
                        {format(new Date(entry.date), "PPP", { locale })}
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => deleteEntry(entry.id)}
                    className="text-muted-foreground/30 hover:text-red-400 transition-colors p-2"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
                <p className="text-foreground/80 mt-4 text-sm leading-relaxed whitespace-pre-wrap pl-1">
                  {entry.content}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}

// Re-using Feather locally since it wasn't imported in this file
function Feather(props: any) {
  return <PenLine {...props} />;
}
