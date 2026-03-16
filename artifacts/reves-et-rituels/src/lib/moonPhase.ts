export function getMoonPhaseIndex(date = new Date()): number {
  const lp = 2551443; 
  const now = date.getTime();
  const new_moon = new Date(1970, 0, 7, 20, 35, 0).getTime();
  const phase = ((now - new_moon) / 1000) % lp;
  const result = Math.floor(phase / (24 * 3600)) + 1;
  const age = result / 29.53;
  
  if (age < 0.05) return 0; // New Moon
  if (age < 0.20) return 1; // Waxing Crescent
  if (age < 0.30) return 2; // First Quarter
  if (age < 0.45) return 3; // Waxing Gibbous
  if (age < 0.55) return 4; // Full Moon
  if (age < 0.70) return 5; // Waning Gibbous
  if (age < 0.80) return 6; // Last Quarter
  return 7; // Waning Crescent
}

export function getMoonPhaseInfo(date = new Date(), lang: 'fr'|'en') {
  const index = getMoonPhaseIndex(date);
  // @ts-ignore
  import('../data/moonDescriptions').then(); // ensure it's in bundle
  // Since we can't top-level import to avoid circular issues in some setups, we pass data or just import normally.
  // Wait, I can just import normally.
  return index;
}
