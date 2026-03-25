// ── src/lib/purchases.ts ──────────────────────────────────────────────────
// Initialisation et helpers RevenueCat via @revenuecat/purchases-capacitor

import { Purchases, LOG_LEVEL } from "@revenuecat/purchases-capacitor";

const RC_API_KEY = "goog_ojJVfNtdRlxskhg0CbbZnyhxXiw";

// ── Initialisation (à appeler une seule fois au démarrage de l'app) ───────
export async function initPurchases() {
  try {
    await Purchases.setLogLevel({ level: LOG_LEVEL.ERROR });
    await Purchases.configure({ apiKey: RC_API_KEY });
  } catch (e) {
    console.warn("[RC] initPurchases error", e);
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
    const offerings = await Purchases.getOfferings();
    return offerings.current ?? null;
  } catch {
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
    const { customerInfo } = await Purchases.restorePurchases();
    return typeof customerInfo.entitlements.active["premium"] !== "undefined";
  } catch {
    return false;
  }
}