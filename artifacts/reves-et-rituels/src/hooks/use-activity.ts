// ── use-activity.ts ───────────────────────────────────────────────────────
// Hook central pour tracker toutes les activités de l'utilisateur :
// rêves interprétés, rituels accomplis, prières ouvertes, plantes consultées.
// Gère aussi les favoris, la suppression et le streak quotidien.

import { useState, useCallback } from "react";

export type ActivityType = "dream" | "ritual" | "prayer" | "plant";

export interface Activity {
  id: string;           // uuid unique généré à la création
  type: ActivityType;
  itemId: string;       // id de l'item source (ex: "full-moon", "lavender"…)
  title: string;        // label affiché
  date: string;         // ISO string
  favorite: boolean;
}

const KEY = "rr_activity_log";
const KEY_STREAK = "rr_streak";

// ── helpers localStorage ──────────────────────────────────────────────────

function load(): Activity[] {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function save(activities: Activity[]) {
  localStorage.setItem(KEY, JSON.stringify(activities));
}

function genId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

// ── streak helpers ─────────────────────────────────────────────────────────
// Retourne le nombre de jours consécutifs d'activité
// et les 7 derniers jours sous forme de booléens.

interface StreakInfo {
  count: number;         // jours consécutifs actuels
  last7: boolean[];      // [lundi…dim] ou [j-6…aujourd'hui], true = actif
}

function computeStreak(activities: Activity[]): StreakInfo {
  const last7: boolean[] = Array(7).fill(false);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const activeDays = new Set(
    activities.map((a) => {
      const d = new Date(a.date);
      d.setHours(0, 0, 0, 0);
      return d.getTime();
    })
  );

  for (let i = 0; i < 7; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() - (6 - i));
    last7[i] = activeDays.has(d.getTime());
  }

  // Compte les jours consécutifs en remontant depuis aujourd'hui
  let count = 0;
  const check = new Date(today);
  while (activeDays.has(check.getTime())) {
    count++;
    check.setDate(check.getDate() - 1);
  }

  return { count, last7 };
}

// ── hook ──────────────────────────────────────────────────────────────────

export function useActivity() {
  const [activities, setActivities] = useState<Activity[]>(load);

  // Ajoute une activité (déduplique par type+itemId dans la même journée)
  const track = useCallback(
    (type: ActivityType, itemId: string, title: string) => {
      setActivities((prev) => {
        const today = new Date().toDateString();
        // Évite les doublons du même jour pour les consultations passives
        const alreadyToday = prev.some(
          (a) =>
            a.type === type &&
            a.itemId === itemId &&
            new Date(a.date).toDateString() === today
        );
        if (alreadyToday && type !== "dream" && type !== "ritual") return prev;

        const next: Activity[] = [
          {
            id: genId(),
            type,
            itemId,
            title,
            date: new Date().toISOString(),
            favorite: false,
          },
          ...prev,
        ];
        save(next);
        return next;
      });
    },
    []
  );

  // Toggle favori
  const toggleFavorite = useCallback((id: string) => {
    setActivities((prev) => {
      const next = prev.map((a) =>
        a.id === id ? { ...a, favorite: !a.favorite } : a
      );
      save(next);
      return next;
    });
  }, []);

  // Suppression individuelle
  const remove = useCallback((id: string) => {
    setActivities((prev) => {
      const next = prev.filter((a) => a.id !== id);
      save(next);
      return next;
    });
  }, []);

  // Suppression de toute l'activité (reset)
  const clearAll = useCallback(() => {
    setActivities([]);
    localStorage.removeItem(KEY);
  }, []);

  // Stats par type
  const stats = {
    dream: activities.filter((a) => a.type === "dream").length,
    ritual: activities.filter((a) => a.type === "ritual").length,
    prayer: activities.filter((a) => a.type === "prayer").length,
    plant: activities.filter((a) => a.type === "plant").length,
  };

  const favorites = activities.filter((a) => a.favorite);
  const streak = computeStreak(activities);

  return {
    activities,
    favorites,
    stats,
    streak,
    track,
    toggleFavorite,
    remove,
    clearAll,
  };
}