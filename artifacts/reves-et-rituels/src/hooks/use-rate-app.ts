const KEY_SESSION_COUNT = "rr_session_count";
const KEY_LAST_DATE     = "rr_session_date";
const KEY_RATED         = "rr_has_rated";
const KEY_CLICK_COUNT   = "rr_rate_click_count";

export function useRateApp() {

  const checkAndPrompt = (): boolean => {
    // Si déjà noté, on ne redemande jamais
    if (localStorage.getItem(KEY_RATED) === "true") return false;

    const today = new Date().toDateString();
    const lastDate = localStorage.getItem(KEY_LAST_DATE);

    // Nouveau jour → incrémenter le compteur de sessions
    if (lastDate !== today) {
      localStorage.setItem(KEY_LAST_DATE, today);
      const sessions = parseInt(localStorage.getItem(KEY_SESSION_COUNT) || "0") + 1;
      localStorage.setItem(KEY_SESSION_COUNT, String(sessions));
    }

    return false; // le popup est géré séparément via trackClick
  };

  const trackClick = (): boolean => {
    if (localStorage.getItem(KEY_RATED) === "true") return false;

    const count = parseInt(localStorage.getItem(KEY_CLICK_COUNT) || "0") + 1;
    localStorage.setItem(KEY_CLICK_COUNT, String(count));

    const sessions = parseInt(localStorage.getItem(KEY_SESSION_COUNT) || "0");

    // Déclenche au 6e clic ET si au moins 1 jour de connexion
    if (count % 6 === 0 && sessions >= 1) {
      return true; // afficher le popup
    }
    return false;
  };

  const markRated = () => {
    localStorage.setItem(KEY_RATED, "true");
  };

  return { checkAndPrompt, trackClick, markRated };
}