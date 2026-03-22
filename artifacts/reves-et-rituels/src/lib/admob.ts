import {
  AdMob,
  BannerAdOptions,
  BannerAdSize,
  BannerAdPosition,
  AdOptions,
  RewardAdOptions,
  AdmobConsentStatus,
} from "@capacitor-community/admob";

// ── Passe à true pour la production ──────────────────────────────────────
const IS_PRODUCTION = false;
const isDev = !IS_PRODUCTION;

const IDS = {
  banner:       isDev ? "ca-app-pub-3940256099942544/6300978111"  : "ca-app-pub-5733508257471048/7794689215",
  interstitial: isDev ? "ca-app-pub-3940256099942544/1033173712"  : "ca-app-pub-5733508257471048/3528141141",
  rewarded:     isDev ? "ca-app-pub-3940256099942544/5224354917"  : "ca-app-pub-5733508257471048/9140261173",
};

export async function requestConsentInfo(): Promise<void> {
  try {
    const consentInfo = await AdMob.requestConsentInfo({
      debugGeography: isDev ? 1 : 0,
      testDeviceIdentifiers: isDev ? ["EMULATOR"] : [],
    });

    if (
      consentInfo.isConsentFormAvailable &&
      consentInfo.status === AdmobConsentStatus.REQUIRED // ← remplace === 1
    ) {
      await AdMob.showConsentForm();
    }
  } catch (e) {
    console.warn("Consent failed:", e);
  }
}

export async function initAdMob(): Promise<void> {
  try {
    await AdMob.initialize({
      testingDevices: isDev ? ["EMULATOR"] : [],
      initializeForTesting: isDev,
    });
  } catch (e) {
    console.warn("AdMob init failed:", e);
  }
}

export async function showBanner(): Promise<void> {
  try {
    const options: BannerAdOptions = {
      adId: IDS.banner,
      adSize: BannerAdSize.ADAPTIVE_BANNER,
      position: BannerAdPosition.BOTTOM_CENTER,
      margin: 72,
      isTesting: isDev,
    };
    await AdMob.showBanner(options);
  } catch (e) {
    console.warn("Banner failed:", e);
  }
}

export async function removeBanner(): Promise<void> {
  try {
    await AdMob.removeBanner();
  } catch (e) {
    console.warn("Remove banner failed:", e);
  }
}

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