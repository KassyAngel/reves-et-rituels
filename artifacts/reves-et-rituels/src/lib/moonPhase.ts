// ============================================================
// moonPhase.ts — Calculs astronomiques lunaires complets
// Phases de base + phénomènes spéciaux (Super Lune, Sang, etc.)
// Version 2 — Précision améliorée avec dates de référence exactes
// ============================================================

export type SpecialMoonEvent =
  | 'blood_moon'
  | 'super_moon'
  | 'blue_moon'
  | 'black_moon'
  | 'harvest_moon'
  | 'rousse_moon'
  | null;

export type MoonData = {
  phaseIndex: number;                      // 0–7 (phase standard)
  illumination: number;                    // 0–1
  distanceKm: number;                      // distance Terre-Lune
  isSuper: boolean;
  specialEvent: SpecialMoonEvent;
  daysUntilFullMoon: number;
  daysUntilNewMoon: number;
  preciseName: { fr: string; en: string }; // nom précis pour le carousel
};

// ── Constantes astronomiques ──────────────────────────────────────────────
const LUNAR_CYCLE_DAYS = 29.53058867;
const J2000 = 2451545.0;

// ── Dates exactes des Nouvelles Lunes (UTC) ───────────────────────────────
// Source : NASA / USNO — timestamps précis à la minute près
// Ces dates permettent d'éviter les décalages d'un jour dus au calcul par modulo
const KNOWN_NEW_MOONS: Date[] = [
  new Date("2024-01-11T11:57:00Z"),
  new Date("2024-02-09T22:59:00Z"),
  new Date("2024-03-10T09:00:00Z"),
  new Date("2024-04-08T18:21:00Z"),
  new Date("2024-05-08T03:22:00Z"),
  new Date("2024-06-06T12:38:00Z"),
  new Date("2024-07-05T22:57:00Z"),
  new Date("2024-08-04T11:13:00Z"),
  new Date("2024-09-03T01:55:00Z"),
  new Date("2024-10-02T18:49:00Z"),
  new Date("2024-11-01T12:47:00Z"),
  new Date("2024-12-01T06:21:00Z"),
  new Date("2024-12-30T22:27:00Z"),
  new Date("2025-01-29T12:36:00Z"),
  new Date("2025-02-28T00:45:00Z"),
  new Date("2025-03-29T10:58:00Z"),
  new Date("2025-04-27T19:31:00Z"),
  new Date("2025-05-27T03:02:00Z"),
  new Date("2025-06-25T10:32:00Z"),
  new Date("2025-07-24T19:11:00Z"),
  new Date("2025-08-23T06:07:00Z"),
  new Date("2025-09-21T19:54:00Z"),
  new Date("2025-10-21T12:25:00Z"),
  new Date("2025-11-20T06:47:00Z"),
  new Date("2025-12-20T01:43:00Z"),
  new Date("2026-01-18T19:52:00Z"),
  new Date("2026-02-17T12:01:00Z"),
  new Date("2026-03-19T01:23:00Z"),
  new Date("2026-04-17T11:51:00Z"),
  new Date("2026-05-16T13:01:00Z"),
  new Date("2026-06-15T01:54:00Z"),
  new Date("2026-07-14T16:43:00Z"),
  new Date("2026-08-12T09:37:00Z"),
  new Date("2026-09-10T23:27:00Z"),
  new Date("2026-10-10T14:50:00Z"),
  new Date("2026-11-09T07:02:00Z"),
  new Date("2026-12-08T23:52:00Z"),
  new Date("2027-01-07T16:25:00Z"),
  new Date("2027-02-06T08:34:00Z"),
  new Date("2027-03-08T00:30:00Z"),
  new Date("2027-04-06T16:02:00Z"),
  new Date("2027-05-06T07:02:00Z"),
  new Date("2027-06-04T21:41:00Z"),
  new Date("2027-07-04T11:02:00Z"),
  new Date("2027-08-02T22:32:00Z"),
  new Date("2027-09-01T08:03:00Z"),
  new Date("2027-09-30T16:35:00Z"),
  new Date("2027-10-30T00:37:00Z"),
  new Date("2027-11-28T09:25:00Z"),
  new Date("2027-12-27T19:12:00Z"),
];

// ── Trouver la dernière nouvelle lune avant une date ─────────────────────
function getLastNewMoon(date: Date): Date {
  const ms = date.getTime();
  let lastNewMoon = KNOWN_NEW_MOONS[0];

  for (const nm of KNOWN_NEW_MOONS) {
    if (nm.getTime() <= ms) {
      lastNewMoon = nm;
    } else {
      break;
    }
  }

  // Si la date est avant notre première référence ou après la dernière,
  // on utilise un fallback par calcul astronomique
  const lastKnown = KNOWN_NEW_MOONS[KNOWN_NEW_MOONS.length - 1];
  if (ms > lastKnown.getTime()) {
    // Extrapolation depuis la dernière nouvelle lune connue
    const cyclesSince = Math.floor((ms - lastKnown.getTime()) / (LUNAR_CYCLE_DAYS * 86400000));
    return new Date(lastKnown.getTime() + cyclesSince * LUNAR_CYCLE_DAYS * 86400000);
  }

  return lastNewMoon;
}

// ── Âge de la lune en jours depuis la dernière nouvelle lune ─────────────
function getLunarAge(date: Date): number {
  const lastNewMoon = getLastNewMoon(date);
  const ageMs = date.getTime() - lastNewMoon.getTime();
  const ageDays = ageMs / (1000 * 60 * 60 * 24);
  // S'assurer que l'âge reste dans le cycle (cas limite)
  return ((ageDays % LUNAR_CYCLE_DAYS) + LUNAR_CYCLE_DAYS) % LUNAR_CYCLE_DAYS;
}

// ── Conversion date → Jour Julien (pour calcul de distance) ──────────────
function toJulianDay(date: Date): number {
  const y = date.getUTCFullYear();
  const m = date.getUTCMonth() + 1;
  const d = date.getUTCDate() + date.getUTCHours() / 24;
  const A = Math.floor((14 - m) / 12);
  const Y = y + 4800 - A;
  const M = m + 12 * A - 3;
  return (
    d +
    Math.floor((153 * M + 2) / 5) +
    365 * Y +
    Math.floor(Y / 4) -
    Math.floor(Y / 100) +
    Math.floor(Y / 400) -
    32045
  );
}

// ── Index de phase 0–7 ────────────────────────────────────────────────────
// Aligné sur getPrecisePhaseName pour cohérence image/description/nom.
//   0 = Nouvelle Lune  |  1 = Croissant  |  2 = Premier Quartier (inutilisé)
//   3 = Gibbeuse Crois |  4 = Pleine Lune |  5 = Gibbeuse Décr
//   6 = Dernier Quartier | 7 = Dernier Croissant
export function getMoonPhaseIndex(date: Date): number {
  const age  = getLunarAge(date);
  const half = LUNAR_CYCLE_DAYS / 2;

  // Nouvelle Lune : pic + ±1.5 jour, et fin de cycle
  if (isNewMoonPeak(date)) return 0;
  if (isFullMoonPeak(date)) return 4;

  if (age < half) {
    if (age < 1.5)  return 0; // lendemain NL si pic tôt
    if (age < 8.5)  return 1; // Croissant naissant + Premier Croissant
    return 3;                  // Gibbeuse Croissante + Presque Pleine
  }

  const ageFromFull = age - half;
  if (ageFromFull < 1.5)  return 4; // lendemain PL si pic tôt
  if (ageFromFull < 5.5)  return 5; // Gibbeuse Décroissante
  if (ageFromFull < 8.5)  return 6; // Dernier Quartier
  return 7;                          // Dernier Croissant / Bientôt NL
}

// ── Illumination 0–1 ──────────────────────────────────────────────────────
function getIllumination(date: Date): number {
  const age = getLunarAge(date);
  return (1 - Math.cos((age / LUNAR_CYCLE_DAYS) * 2 * Math.PI)) / 2;
}

// ── Distance Terre-Lune en km ──────────────────────────────────────────────
function getLunarDistance(date: Date): number {
  const jd = toJulianDay(date);
  const T = (jd - J2000) / 36525;
  const M = (134.9634 + 477198.8676 * T) * (Math.PI / 180);
  return 384400 - 20905 * Math.cos(M) - 3699 * Math.cos(2 * M);
}

// ── Distance circulaire à un âge cible ────────────────────────────────────
function circularDist(age: number, target: number): number {
  const raw = Math.abs(age - target);
  return Math.min(raw, LUNAR_CYCLE_DAYS - raw);
}

// ── Vrai pic de pleine lune ────────────────────────────────────────────────
function isFullMoonPeak(date: Date): boolean {
  const half = LUNAR_CYCLE_DAYS / 2;
  const age  = getLunarAge(date);
  const d    = circularDist(age, half);

  const prev = new Date(date); prev.setUTCDate(prev.getUTCDate() - 1);
  const next = new Date(date); next.setUTCDate(next.getUTCDate() + 1);
  return d < circularDist(getLunarAge(prev), half) &&
         d < circularDist(getLunarAge(next), half);
}

// ── Vrai pic de nouvelle lune ─────────────────────────────────────────────
function isNewMoonPeak(date: Date): boolean {
  const age = getLunarAge(date);
  const d   = circularDist(age, 0);

  const prev = new Date(date); prev.setUTCDate(prev.getUTCDate() - 1);
  const next = new Date(date); next.setUTCDate(next.getUTCDate() + 1);
  return d < circularDist(getLunarAge(prev), 0) &&
         d < circularDist(getLunarAge(next), 0);
}

// ── Super Lune ────────────────────────────────────────────────────────────
function isSupermoon(date: Date, distanceKm: number): boolean {
  return isFullMoonPeak(date) && distanceKm < 362000;
}

// ── Lune Bleue ────────────────────────────────────────────────────────────
function isBlueMoon(date: Date): boolean {
  if (!isFullMoonPeak(date)) return false;
  const month = date.getUTCMonth();
  const year  = date.getUTCFullYear();
  let count = 0;
  let firstDay = -1;
  for (let d = 1; d <= 31; d++) {
    const t = new Date(Date.UTC(year, month, d));
    if (t.getUTCMonth() !== month) break;
    if (isFullMoonPeak(t)) {
      count++;
      if (firstDay === -1) firstDay = d;
    }
  }
  return count >= 2 && date.getUTCDate() > firstDay;
}

// ── Lune Noire ────────────────────────────────────────────────────────────
function isBlackMoon(date: Date): boolean {
  if (!isNewMoonPeak(date)) return false;
  const month = date.getUTCMonth();
  const year  = date.getUTCFullYear();
  let count = 0;
  let firstDay = -1;
  for (let d = 1; d <= 31; d++) {
    const t = new Date(Date.UTC(year, month, d));
    if (t.getUTCMonth() !== month) break;
    if (isNewMoonPeak(t)) {
      count++;
      if (firstDay === -1) firstDay = d;
    }
  }
  return count >= 2 && date.getUTCDate() > firstDay;
}

// ── Lune de Sang ──────────────────────────────────────────────────────────
// Uniquement les éclipses totales (magnitude > 1.0) — source NASA
const BLOOD_MOON_DATES: string[] = [
  '2025-03-14',   // Total — magnitude 1.18
  '2025-09-07',   // Total — magnitude 1.36
  '2026-03-03',   // Total — magnitude 1.15
  '2028-12-31',   // Total — magnitude 1.25
  '2029-06-26',   // Total — magnitude 1.85
  '2029-12-20',   // Total — magnitude 1.12
  '2032-04-25',
  '2032-10-18',
  '2033-04-14',
  '2033-10-08',
  '2036-02-11',
  '2036-08-07',
  '2037-01-31',
  '2037-07-27',
];

function isBloodMoon(date: Date): boolean {
  return BLOOD_MOON_DATES.some(bd => {
    const ref  = new Date(bd);
    const diff = Math.abs(date.getTime() - ref.getTime()) / (1000 * 60 * 60 * 24);
    return diff <= 1;
  });
}

// ── Lune Rousse ───────────────────────────────────────────────────────────
function getEasterDate(year: number): Date {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day   = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(Date.UTC(year, month - 1, day));
}

function isRoesseMoon(date: Date): boolean {
  if (!isFullMoonPeak(date)) return false;
  const easter = getEasterDate(date.getUTCFullYear());
  const diff   = (date.getTime() - easter.getTime()) / (1000 * 60 * 60 * 24);
  return diff >= 0 && diff <= 30;
}

// ── Lune des Moissons ─────────────────────────────────────────────────────
function isHarvestMoon(date: Date): boolean {
  if (!isFullMoonPeak(date)) return false;
  const equinox = new Date(Date.UTC(date.getUTCFullYear(), 8, 22));
  const diff    = Math.abs(date.getTime() - equinox.getTime()) / (1000 * 60 * 60 * 24);
  return diff <= 15;
}

// ── Nom précis basé sur l'âge lunaire ─────────────────────────────────────
//
// Principe : on utilise l'âge exact en jours pour nommer chaque jour
// avec précision. "Nouvelle Lune" et "Pleine Lune" ne durent qu'1 seul jour
// (le jour du pic), les autres phases s'étalent sur plusieurs jours.
//
// Cycle de 29.53 jours répartis ainsi :
//   0.0 – 0.9  → Nouvelle Lune       (1 jour : le jour du pic)
//   0.9 – 6.4  → Croissant naissant  (phase 1a)
//   6.4 – 8.4  → Premier Croissant   (phase 1b)
//   8.4 – 13.8 → Gibbeuse Croissante (phase 3)
//  13.8 – 14.7 → Presque Pleine      (transition)
//  14.7 – 15.8 → Pleine Lune         (1 jour : le jour du pic)
//  15.8 – 21.1 → Gibbeuse Décroissante (phase 5)
//  21.1 – 23.1 → Dernier Quartier    (phase 6)
//  23.1 – 28.6 → Dernier Croissant   (phase 7)
//  28.6 – 29.5 → Bientôt Nouvelle Lune (transition fin de cycle)
//
// Note : on utilise AUSSI la détection de pic pour coller exactement
// au jour astronomique de la NL/PL, quelle que soit l'heure du pic.
//
export function getPrecisePhaseName(date: Date): { fr: string; en: string } {
  const age  = getLunarAge(date);
  const half = LUNAR_CYCLE_DAYS / 2; // ~14.765

  // Détection de pic pour NL et PL (le "vrai" jour astronomique)
  if (isNewMoonPeak(date))  return { fr: "Nouvelle Lune",          en: "New Moon" };
  if (isFullMoonPeak(date)) return { fr: "Pleine Lune",            en: "Full Moon" };

  // Phases croissantes (0 < age < half)
  if (age < half) {
    if (age < 1.5)  return { fr: "Nouvelle Lune",                  en: "New Moon" };       // lendemain NL si pic tôt
    if (age < 5.5)  return { fr: "Croissant naissant",             en: "Waxing Crescent" };
    if (age < 8.5)  return { fr: "Premier Croissant",              en: "First Quarter" };
    if (age < 12.5) return { fr: "Gibbeuse Croissante",            en: "Waxing Gibbous" };
    return                  { fr: "Presque Pleine",                 en: "Nearly Full" };
  }

  // Phases décroissantes (age > half)
  const ageFromFull = age - half; // jours depuis la PL
  if (ageFromFull < 1.5)  return { fr: "Pleine Lune",             en: "Full Moon" };       // lendemain PL si pic tôt
  if (ageFromFull < 5.5)  return { fr: "Gibbeuse Décroissante",   en: "Waning Gibbous" };
  if (ageFromFull < 8.5)  return { fr: "Dernier Quartier",        en: "Last Quarter" };
  if (ageFromFull < 13.5) return { fr: "Dernier Croissant",       en: "Waning Crescent" };
  return                          { fr: "Bientôt Nouvelle Lune",  en: "New Moon Soon" };
}

// ── Jours jusqu'à prochaine pleine/nouvelle lune ─────────────────────────
function getDaysUntilFullMoon(date: Date): number {
  const age  = getLunarAge(date);
  const half = LUNAR_CYCLE_DAYS / 2;
  let days = half - age;
  if (days < 0) days += LUNAR_CYCLE_DAYS;
  return Math.round(days);
}

function getDaysUntilNewMoon(date: Date): number {
  const age  = getLunarAge(date);
  let days = LUNAR_CYCLE_DAYS - age;
  if (days >= LUNAR_CYCLE_DAYS) days = 0;
  return Math.round(days);
}

// ── Fonction principale ────────────────────────────────────────────────────
export function getMoonData(date: Date): MoonData {
  const phaseIndex   = getMoonPhaseIndex(date);
  const illumination = getIllumination(date);
  const distanceKm   = Math.round(getLunarDistance(date));
  const isSuper      = isSupermoon(date, distanceKm);
  const preciseName  = getPrecisePhaseName(date);

  let specialEvent: SpecialMoonEvent = null;
  if (isBloodMoon(date))        specialEvent = 'blood_moon';
  else if (isRoesseMoon(date))  specialEvent = 'rousse_moon';
  else if (isHarvestMoon(date)) specialEvent = 'harvest_moon';
  else if (isBlueMoon(date))    specialEvent = 'blue_moon';
  else if (isBlackMoon(date))   specialEvent = 'black_moon';
  else if (isSuper)             specialEvent = 'super_moon';

  return {
    phaseIndex,
    illumination,
    distanceKm,
    isSuper,
    specialEvent,
    preciseName,
    daysUntilFullMoon: getDaysUntilFullMoon(date),
    daysUntilNewMoon:  getDaysUntilNewMoon(date),
  };
}

// ── Rétrocompatibilité ────────────────────────────────────────────────────
export { getMoonPhaseIndex as default };