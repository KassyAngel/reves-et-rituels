import {
  AdMob,
  BannerAdOptions,
  BannerAdSize,
  BannerAdPosition,
  AdOptions,
  RewardAdOptions,
  AdmobConsentStatus,
  BannerAdPluginEvents,
} from "@capacitor-community/admob";

// ─── Config ───────────────────────────────────────────────────────────────────
const IS_PRODUCTION = false;
const isDev = !IS_PRODUCTION;

const IDS = {
  banner:       isDev ? "ca-app-pub-3940256099942544/6300978111"  : "ca-app-pub-5733508257471048/7794689215",
  interstitial: isDev ? "ca-app-pub-3940256099942544/1033173712"  : "ca-app-pub-5733508257471048/3528141141",
  rewarded:     isDev ? "ca-app-pub-3940256099942544/5224354917"  : "ca-app-pub-5733508257471048/9140261173",
};

// Clé localStorage : stocke le timestamp du dernier consentement validé
const CONSENT_KEY = "admob_consent_done";

// ─── Banner height registry ───────────────────────────────────────────────────
type BannerHeightListener = (height: number) => void;
const bannerHeightListeners = new Set<BannerHeightListener>();
let currentBannerHeight = 0;

export function subscribeBannerHeight(fn: BannerHeightListener): () => void {
  bannerHeightListeners.add(fn);
  fn(currentBannerHeight);
  return () => bannerHeightListeners.delete(fn);
}

function notifyBannerHeight(height: number) {
  currentBannerHeight = height;
  bannerHeightListeners.forEach((fn) => fn(height));
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Retourne true si le consentement a déjà été recueilli et est encore valide
 * (moins de 30 jours), en dev comme en prod.
 */
export function hasValidConsent(): boolean {
  const stored = localStorage.getItem(CONSENT_KEY);
  if (!stored) return false;
  const thirtyDaysMs = 30 * 24 * 60 * 60 * 1000;
  return Date.now() - parseInt(stored, 10) < thirtyDaysMs;
}

// ─── Init ─────────────────────────────────────────────────────────────────────
export async function initAdMob(): Promise<void> {
  try {
    await AdMob.initialize({
      testingDevices: isDev ? ["EMULATOR", "TEST_DEVICE"] : [],
      initializeForTesting: isDev,
    });
    console.log("✅ [AdMob] Initialisé");
  } catch (e) {
    console.warn("❌ [AdMob] Init failed:", e);
  }
}

// ─── Consent ─────────────────────────────────────────────────────────────────
/**
 * Affiche le formulaire de consentement UMP si nécessaire.
 * À appeler uniquement quand !hasValidConsent() (géré dans App.tsx).
 */
export async function requestConsentInfo(): Promise<void> {
  try {
    const consentInfo = await AdMob.requestConsentInfo({
      debugGeography: isDev ? 1 : 0,
      testDeviceIdentifiers: isDev ? ["EMULATOR", "TEST_DEVICE"] : [],
    });

    console.log("📋 [AdMob] Consent status:", consentInfo.status);
    console.log("📋 [AdMob] Form available:", consentInfo.isConsentFormAvailable);

    if (
      consentInfo.isConsentFormAvailable &&
      (consentInfo.status === AdmobConsentStatus.REQUIRED ||
        consentInfo.status === AdmobConsentStatus.UNKNOWN)
    ) {
      console.log("✅ [AdMob] Affichage du formulaire de consentement...");
      await AdMob.showConsentForm();
      console.log("✅ [AdMob] Formulaire fermé par l'utilisateur");
    } else {
      console.log("ℹ️ [AdMob] Formulaire non requis, statut:", consentInfo.status);
    }

    // Dans tous les cas, on sauvegarde la date pour éviter de re-demander
    localStorage.setItem(CONSENT_KEY, Date.now().toString());
  } catch (e) {
    console.warn("❌ [AdMob] Consent failed:", e);
  }
}

// ─── Banner ───────────────────────────────────────────────────────────────────
export async function showBanner(): Promise<void> {
  try {
    const options: BannerAdOptions = {
      adId: IDS.banner,
      adSize: BannerAdSize.ADAPTIVE_BANNER,
      position: BannerAdPosition.BOTTOM_CENTER,
      isTesting: isDev,
      margin: 0,
    };

    AdMob.addListener(BannerAdPluginEvents.Loaded, () => {
      notifyBannerHeight(60);
    });

    AdMob.addListener(BannerAdPluginEvents.SizeChanged, (info: any) => {
      const h = info?.height;
      notifyBannerHeight(typeof h === "number" && h > 0 ? h : 60);
    });

    AdMob.addListener(BannerAdPluginEvents.FailedToLoad, () => {
      notifyBannerHeight(0);
    });

    await AdMob.showBanner(options);
  } catch (e) {
    console.warn("❌ [AdMob] Banner failed:", e);
    notifyBannerHeight(0);
  }
}

export async function removeBanner(): Promise<void> {
  try {
    await AdMob.removeBanner();
    notifyBannerHeight(0);
  } catch (e) {
    console.warn("❌ [AdMob] Remove banner failed:", e);
  }
}

// ─── Interstitial ─────────────────────────────────────────────────────────────
export async function showInterstitial(): Promise<void> {
  try {
    const options: AdOptions = {
      adId: IDS.interstitial,
      isTesting: isDev,
    };
    await AdMob.prepareInterstitial(options);
    await AdMob.showInterstitial();
  } catch (e) {
    console.warn("❌ [AdMob] Interstitial failed:", e);
  }
}

// ─── Rewarded ─────────────────────────────────────────────────────────────────
export async function showRewarded(): Promise<boolean> {
  try {
    const options: RewardAdOptions = {
      adId: IDS.rewarded,
      isTesting: isDev,
    };
    await AdMob.prepareRewardVideoAd(options);
    const result = await AdMob.showRewardVideoAd();
    return result !== null && result !== undefined;
  } catch (e) {
    console.warn("❌ [AdMob] Rewarded failed:", e);
    return false;
  }
}