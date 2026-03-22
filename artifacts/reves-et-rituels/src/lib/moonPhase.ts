// ============================================================
// moonPhase.ts — Calculs astronomiques lunaires complets
// Phases de base + phénomènes spéciaux (Super Lune, Sang, etc.)
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
  phaseIndex: number;       // 0–7 (phase standard)
  illumination: number;     // 0–1
  distanceKm: number;       // distance Terre-Lune
  isSuper: boolean;
  specialEvent: SpecialMoonEvent;
  daysUntilFullMoon: number;
  daysUntilNewMoon: number;
};

// ── Constantes astronomiques ──────────────────────────────────────────────
const LUNAR_CYCLE_DAYS = 29.53058867;
const J2000 = 2451545.0; // Époque J2000.0

// ── Conversion date → Jour Julien ─────────────────────────────────────────
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

// ── Âge de la lune en jours (0 = nouvelle lune) ───────────────────────────
function getLunarAge(date: Date): number {
  const jd = toJulianDay(date);
  // Nouvelle lune de référence : 6 jan 2000 18:14 UTC = JD 2451549.76
  const knownNewMoon = 2451549.76;
  const age = ((jd - knownNewMoon) % LUNAR_CYCLE_DAYS + LUNAR_CYCLE_DAYS) % LUNAR_CYCLE_DAYS;
  return age;
}

// ── Index de phase 0–7 ────────────────────────────────────────────────────
export function getMoonPhaseIndex(date: Date): number {
  const age = getLunarAge(date);
  const fraction = age / LUNAR_CYCLE_DAYS;
  // 8 phases de 1/8 de cycle chacune
  return Math.floor(fraction * 8) % 8;
}

// ── Illumination 0–1 ──────────────────────────────────────────────────────
function getIllumination(date: Date): number {
  const age = getLunarAge(date);
  const angle = (age / LUNAR_CYCLE_DAYS) * 2 * Math.PI;
  return (1 - Math.cos(angle)) / 2;
}

// ── Distance Terre-Lune en km (approximation elliptique) ──────────────────
function getLunarDistance(date: Date): number {
  const jd = toJulianDay(date);
  const T = (jd - J2000) / 36525; // siècles juliens depuis J2000
  // Anomalie moyenne de la lune
  const M = (134.9634 + 477198.8676 * T) * (Math.PI / 180);
  // Distance moyenne 384400 km, amplitude ~20905 km
  return 384400 - 20905 * Math.cos(M) - 3699 * Math.cos(2 * M);
}

// ── Super Lune : distance < 360 000 km + pleine/nouvelle lune ────────────
function isSupermoon(date: Date): boolean {
  const dist = getLunarDistance(date);
  const phase = getMoonPhaseIndex(date);
  return dist < 360000 && (phase === 4); // pleine lune proche
}

// ── Cherche la date de la prochaine nouvelle ou pleine lune ───────────────
function getNextPhaseDate(date: Date, targetPhase: 0 | 4): Date {
  const age = getLunarAge(date);
  const targetAge = targetPhase === 4 ? LUNAR_CYCLE_DAYS / 2 : 0;
  let daysUntil = targetAge - age;
  if (daysUntil <= 0) daysUntil += LUNAR_CYCLE_DAYS;
  const result = new Date(date);
  result.setDate(result.getDate() + Math.ceil(daysUntil));
  return result;
}

// ── Lune Bleue : 2ème pleine lune du même mois calendaire ────────────────
function isBlueMoon(date: Date): boolean {
  const phase = getMoonPhaseIndex(date);
  if (phase !== 4) return false;
  // Compte les pleines lunes du mois
  const month = date.getUTCMonth();
  const year = date.getUTCFullYear();
  let count = 0;
  for (let d = 1; d <= 31; d++) {
    const testDate = new Date(Date.UTC(year, month, d));
    if (testDate.getUTCMonth() !== month) break;
    if (getMoonPhaseIndex(testDate) === 4) {
      // Vérifie que c'est vraiment un pic (jour le plus illuminé)
      const prev = getMoonPhaseIndex(new Date(Date.UTC(year, month, d - 1)));
      const next = getMoonPhaseIndex(new Date(Date.UTC(year, month, d + 1)));
      if (prev === 4 || next === 3) count++;
    }
  }
  return count >= 2;
}

// ── Lune Noire : 2ème nouvelle lune du même mois ─────────────────────────
function isBlackMoon(date: Date): boolean {
  const phase = getMoonPhaseIndex(date);
  if (phase !== 0) return false;
  const month = date.getUTCMonth();
  const year = date.getUTCFullYear();
  const age = getLunarAge(date);
  if (age > 1.5) return false; // Seulement les vrais pics de nouvelle lune
  // Cherche une autre nouvelle lune dans le mois
  let count = 0;
  for (let d = 1; d <= 31; d++) {
    const testDate = new Date(Date.UTC(year, month, d));
    if (testDate.getUTCMonth() !== month) break;
    const testAge = getLunarAge(testDate);
    if (testAge < 1.5 || testAge > LUNAR_CYCLE_DAYS - 1.5) count++;
  }
  return count >= 2;
}

// ── Lune de Sang : éclipse lunaire totale (approximation) ────────────────
// Les éclipses surviennent quand pleine lune + nœuds lunaires alignés
// Dates réelles codées pour précision 2025-2030
const BLOOD_MOON_DATES: string[] = [
  '2025-03-14',
  '2025-09-07',
  '2026-03-03',
  '2026-08-28',
  '2028-12-31',
  '2029-06-26',
  '2029-12-20',
];

function isBloodMoon(date: Date): boolean {
  const dateStr = date.toISOString().split('T')[0];
  return BLOOD_MOON_DATES.some(d => {
    // ±1 jour de tolérance
    const ref = new Date(d);
    const diff = Math.abs(date.getTime() - ref.getTime()) / (1000 * 60 * 60 * 24);
    return diff <= 1;
  });
}

// ── Lune Rousse : 1ère pleine lune après Pâques (tradition française) ────
function getEasterDate(year: number): Date {
  // Algorithme de Butcher
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
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(Date.UTC(year, month - 1, day));
}

function isRoesseMoon(date: Date): boolean {
  const phase = getMoonPhaseIndex(date);
  if (phase !== 4) return false;
  const easter = getEasterDate(date.getUTCFullYear());
  const diff = (date.getTime() - easter.getTime()) / (1000 * 60 * 60 * 24);
  // Pleine lune entre Pâques et 30 jours après
  return diff >= 0 && diff <= 30;
}

// ── Lune des Moissons : pleine lune la + proche de l'équinoxe d'automne ──
function isHarvestMoon(date: Date): boolean {
  const phase = getMoonPhaseIndex(date);
  if (phase !== 4) return false;
  const year = date.getUTCFullYear();
  // Équinoxe d'automne ~22-23 septembre (hémisphère nord)
  const autumnEquinox = new Date(Date.UTC(year, 8, 22)); // 22 sept
  const diff = Math.abs(date.getTime() - autumnEquinox.getTime()) / (1000 * 60 * 60 * 24);
  return diff <= 15; // Pleine lune dans les 15 jours autour de l'équinoxe
}

// ── Jours jusqu'à prochaine pleine/nouvelle lune ─────────────────────────
function getDaysUntil(date: Date, targetPhaseAge: number): number {
  const age = getLunarAge(date);
  let days = targetPhaseAge - age;
  if (days < 0) days += LUNAR_CYCLE_DAYS;
  return Math.round(days);
}

// ── Fonction principale : retourne toutes les données lunaires ─────────────
export function getMoonData(date: Date): MoonData {
  const phaseIndex = getMoonPhaseIndex(date);
  const illumination = getIllumination(date);
  const distanceKm = getLunarDistance(date);
  const isSuper = isSupermoon(date);

  // Détermine l'événement spécial (priorité : sang > rousse > moissons > bleue > noire > super)
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
    distanceKm: Math.round(distanceKm),
    isSuper,
    specialEvent,
    daysUntilFullMoon: getDaysUntil(date, LUNAR_CYCLE_DAYS / 2),
    daysUntilNewMoon: getDaysUntil(date, 0),
  };
}

// ── Rétrocompatibilité avec l'ancien code ─────────────────────────────────
export { getMoonPhaseIndex as default };