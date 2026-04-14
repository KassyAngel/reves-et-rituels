// ── src/hooks/use-premium.ts ──────────────────────────────────────────────
// Hook central pour gérer l'état premium dans toute l'app.
// Utilise RevenueCat via purchases.ts.

import { useState, useEffect, useCallback } from "react";
import {
  checkPremium,
  getOfferings,
  purchasePackage,
  restorePurchases,
} from "@/lib/purchases";

interface PremiumState {
  isPremium: boolean;
  loading: boolean;
  offerings: any | null;
  purchasing: boolean;
  // Actions
  refresh: () => Promise<void>;
  buyMonthly: () => Promise<boolean>;
  buyAnnual: () => Promise<boolean>;
  buyLifetime: () => Promise<boolean>;
  restore: () => Promise<boolean>;
}

export function usePremium(): PremiumState {
  const [isPremium, setIsPremium] = useState(false);
  const [loading, setLoading] = useState(true);
  const [offerings, setOfferings] = useState<any | null>(null);
  const [purchasing, setPurchasing] = useState(false);

  // Chargement initial
  useEffect(() => {
    (async () => {
      setLoading(true);
      const [premium, off] = await Promise.all([checkPremium(), getOfferings()]);
      setIsPremium(premium);
      setOfferings(off);
      setLoading(false);
    })();
  }, []);

  const refresh = useCallback(async () => {
    const premium = await checkPremium();
    setIsPremium(premium);
  }, []);

  // Helper générique pour acheter par identifier de package
  const buy = useCallback(
    async (packageId: string): Promise<boolean> => {
      if (!offerings) {
        console.warn("[RC] No offerings available");
        return false;
      }

      // ✅ Log pour débugger
      console.log("[RC] Available packages:", offerings.availablePackages?.map((p: any) => p.identifier));

      const pkg = offerings.availablePackages?.find(
        (p: any) => p.identifier === packageId
      );

      if (!pkg) {
        console.warn(`[RC] Package not found: ${packageId}`);
        return false;
      }

      setPurchasing(true);
      const success = await purchasePackage(pkg);
      if (success) setIsPremium(true);
      setPurchasing(false);
      return success;
    },
    [offerings]
  );

  const buyMonthly  = useCallback(() => buy("$rc_monthly"),  [buy]);
  const buyAnnual   = useCallback(() => buy("$rc_annual"),   [buy]);
  const buyLifetime = useCallback(() => buy("$rc_lifetime"), [buy]);

  const restore = useCallback(async (): Promise<boolean> => {
    setPurchasing(true);
    const success = await restorePurchases();
    if (success) setIsPremium(true);
    setPurchasing(false);
    return success;
  }, []);

  return {
    isPremium,
    loading,
    offerings,
    purchasing,
    refresh,
    buyMonthly,
    buyAnnual,
    buyLifetime,
    restore,
  };
}