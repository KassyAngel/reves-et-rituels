import { useState, useEffect } from "react";

export type JournalEntry = {
  id: string;
  date: string;
  title: string;
  content: string;
  moodId: string;   // remplace l'ancien "mood" emoji
  tags: string[];
};

const STORAGE_KEY = "reves-journal-v2";

function loadEntries(): JournalEntry[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    // Migration : si ancienne entrée avec "mood" emoji, convertir
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