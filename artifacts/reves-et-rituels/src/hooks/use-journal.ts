import { useState, useEffect } from "react";

export type JournalEntry = {
  id: string;
  date: string;
  title: string;
  content: string;
  moodId: string;
  tags: string[];
};

const STORAGE_KEY = "reves-journal-v2";

// ✅ Set en mémoire de session — protection immédiate avant mise à jour React
const recentlyAdded = new Set<string>();

function loadEntries(): JournalEntry[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return parsed.map((e: any) => ({
      ...e,
      moodId: e.moodId ?? "happy",
      tags:   e.tags   ?? [],
    }));
  } catch {
    return [];
  }
}

export function useJournal() {
  const [entries, setEntries] = useState<JournalEntry[]>(loadEntries);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  }, [entries]);

  const addEntry = (data: Omit<JournalEntry, "id">) => {
    const key = data.title.toLowerCase();

    // Protection 1 : Set en mémoire — bloque immédiatement un 2e appel
    // avant que React ait eu le temps de mettre à jour le state
    if (recentlyAdded.has(key)) return;

    // Protection 2 : vérification dans le state — évite les doublons
    // si l'utilisateur consulte le même symbole plusieurs fois en 24h
    const oneDayAgo = Date.now() - 24 * 60 * 60 * 1000;
    const alreadyExists = entries.some(
      (e) =>
        e.title.toLowerCase() === key &&
        new Date(e.date).getTime() > oneDayAgo
    );
    if (alreadyExists) return;

    // Marque comme récemment ajouté, expire après 2 secondes
    recentlyAdded.add(key);
    setTimeout(() => recentlyAdded.delete(key), 2000);

    const entry: JournalEntry = {
      ...data,
      id: Date.now().toString(),
    };
    setEntries(prev => [entry, ...prev]);
  };

  const updateEntry = (id: string, data: Partial<Omit<JournalEntry, "id">>) => {
    setEntries(prev =>
      prev.map(e => e.id === id ? { ...e, ...data } : e)
    );
  };

  const deleteEntry = (id: string) => {
    setEntries(prev => prev.filter(e => e.id !== id));
  };

  return { entries, addEntry, updateEntry, deleteEntry };
}