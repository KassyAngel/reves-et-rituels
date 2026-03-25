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

const IS_PRODUCTION = false;
const isDev = !IS_PRODUCTION;

const IDS = {
  banner:       isDev ? "ca-app-pub-3940256099942544/6300978111"  : "ca-app-pub-5733508257471048/7794689215",
  interstitial: isDev ? "ca-app-pub-3940256099942544/1033173712"  : "ca-app-pub-5733508257471048/3528141141",
  rewarded:     isDev ? "ca-app-pub-3940256099942544/5224354917"  : "ca-app-pub-5733508257471048/9140261173",
};

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

// ─── Consent ─────────────────────────────────────────────────────────────────
export async function requestConsentInfo(): Promise<void> {
  try {
    if (isDev) {
      await AdMob.resetConsentInfo();
    }
    const consentInfo = await AdMob.requestConsentInfo({
      debugGeography: isDev ? 1 : 0,
      testDeviceIdentifiers: isDev ? ["EMULATOR", "TEST_DEVICE"] : [],
    });
    if (
      consentInfo.isConsentFormAvailable &&
      (consentInfo.status === AdmobConsentStatus.REQUIRED ||
        consentInfo.status === AdmobConsentStatus.UNKNOWN)
    ) {
      await AdMob.showConsentForm();
    }
  } catch (e) {
    console.warn("Consent failed:", e);
  }
}

// ─── Init ─────────────────────────────────────────────────────────────────────
export async function initAdMob(): Promise<void> {
  try {
    await AdMob.initialize({
      testingDevices: isDev ? ["EMULATOR", "TEST_DEVICE"] : [],
      initializeForTesting: isDev,
    });
  } catch (e) {
    console.warn("AdMob init failed:", e);
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
      // margin: 0 → AdMob positionne la bannière tout en bas de la WebView,
      // au-dessus de la barre de navigation système.
      // On NE donne pas de margin ici : c'est le layout React qui réserve l'espace.
      margin: 0,
    };

    AdMob.addListener(BannerAdPluginEvents.Loaded, () => {
      // Hauteur standard d'un ADAPTIVE_BANNER = 60 dp (toutes densités)
      notifyBannerHeight(60);
    });

    AdMob.addListener(BannerAdPluginEvents.SizeChanged, (info: any) => {
      // Le plugin émet { width, height } en dp lors d'un recalcul (rotation…)
      const h = info?.height;
      notifyBannerHeight(typeof h === "number" && h > 0 ? h : 60);
    });

    AdMob.addListener(BannerAdPluginEvents.FailedToLoad, () => {
      notifyBannerHeight(0);
    });

    await AdMob.showBanner(options);
  } catch (e) {
    console.warn("Banner failed:", e);
    notifyBannerHeight(0);
  }
}

export async function removeBanner(): Promise<void> {
  try {
    await AdMob.removeBanner();
    notifyBannerHeight(0);
  } catch (e) {
    console.warn("Remove banner failed:", e);
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
    console.warn("Interstitial failed:", e);
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
    console.warn("Rewarded failed:", e);
    return false;
  }
}