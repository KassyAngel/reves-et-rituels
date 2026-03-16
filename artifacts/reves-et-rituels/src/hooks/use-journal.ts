import { useState, useEffect } from 'react';

export interface JournalEntry {
  id: string;
  date: string;
  title: string;
  content: string;
  mood: string;
  timestamp: number;
}

export function useJournal() {
  const [entries, setEntries] = useState<JournalEntry[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('reves-journal');
    if (saved) {
      try {
        setEntries(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse journal", e);
      }
    }
  }, []);

  const saveEntries = (newEntries: JournalEntry[]) => {
    setEntries(newEntries);
    localStorage.setItem('reves-journal', JSON.stringify(newEntries));
  };

  const addEntry = (entry: Omit<JournalEntry, 'id' | 'timestamp'>) => {
    const newEntry: JournalEntry = {
      ...entry,
      id: crypto.randomUUID(),
      timestamp: Date.now()
    };
    saveEntries([newEntry, ...entries].sort((a, b) => b.timestamp - a.timestamp));
  };

  const deleteEntry = (id: string) => {
    saveEntries(entries.filter(e => e.id !== id));
  };

  return { entries, addEntry, deleteEntry };
}
