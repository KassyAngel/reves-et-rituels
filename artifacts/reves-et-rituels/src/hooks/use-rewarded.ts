import { useState } from "react";
import { showRewarded } from "@/lib/admob";

const unlockedCache = new Set<string>();

export function useRewarded() {
  const [loading, setLoading] = useState(false);

  const isUnlocked = (id: string): boolean => unlockedCache.has(id);

  const watchAd = async (id: string): Promise<boolean> => {
    setLoading(true);
    const rewarded = await showRewarded();
    setLoading(false);
    if (rewarded) unlockedCache.add(id);
    return rewarded;
  };

  return { isUnlocked, watchAd, loading };
}