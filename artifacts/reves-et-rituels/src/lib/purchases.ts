// ── src/lib/purchases.ts ──────────────────────────────────────────────────
// Initialisation et helpers RevenueCat via @revenuecat/purchases-capacitor

import { Purchases, LOG_LEVEL } from "@revenuecat/purchases-capacitor";

const RC_API_KEY = "goog_ojJVfNtdRlxskhgOCbbZnyhxXiw";

// ── Initialisation (à appeler une seule fois au démarrage de l'app) ───────
export async function initPurchases() {
  try {
    await Purchases.setLogLevel({ level: LOG_LEVEL.DEBUG });
    await Purchases.configure({ apiKey: RC_API_KEY });
    console.log("[RC] ✅ Configured");
  } catch (e) {
    console.error("[RC] ❌ initPurchases error:", e);
  }
}

// ── Vérifie si l'utilisateur est premium ─────────────────────────────────
export async function checkPremium(): Promise<boolean> {
  try {
    const { customerInfo } = await Purchases.getCustomerInfo();
    return (
      typeof customerInfo.entitlements.active["premium"] !== "undefined"
    );
  } catch {
    return false;
  }
}

// ── Récupère les offerings (plans disponibles) ────────────────────────────
export async function getOfferings() {
  try {
    const result = await Purchases.getOfferings();
    console.log("[RC] Offerings current:", result.current);
    console.log("[RC] Packages:", result.current?.availablePackages?.map((p: any) => ({
      id: p.identifier,
      product: p.product?.identifier
    })));
    return result.current ?? null;
  } catch (e) {
    console.error("[RC] ❌ getOfferings error:", e);
    return null;
  }
}

// ── Acheter un package ────────────────────────────────────────────────────
export async function purchasePackage(rcPackage: any): Promise<boolean> {
  try {
    const { customerInfo } = await Purchases.purchasePackage({
      aPackage: rcPackage,
    });
    return typeof customerInfo.entitlements.active["premium"] !== "undefined";
  } catch (e: any) {
    // userCancelled = pas une erreur à logger
    if (e?.userCancelled) return false;
    console.error("[RC] purchasePackage error", e);
    return false;
  }
}

// ── Restaurer les achats ──────────────────────────────────────────────────
export async function restorePurchases(): Promise<boolean> {
  try {
    console.log("[RC] Restoring...");
    const { customerInfo } = await Purchases.restorePurchases();
    console.log("[RC] CustomerInfo entitlements:", customerInfo.entitlements.active);
    return typeof customerInfo.entitlements.active["premium"] !== "undefined";
  } catch (e) {
    console.error("[RC] ❌ restorePurchases error:", e);
    return false;
  }
}