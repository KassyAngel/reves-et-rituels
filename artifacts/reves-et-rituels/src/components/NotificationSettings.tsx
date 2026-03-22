import { useState, useEffect } from "react";
import { useLanguage } from "@/hooks/use-language";
import { LocalNotifications } from "@capacitor/local-notifications";
import {
  requestNotificationPermission,
  scheduleDaily,
  cancelDailyNotifications,
  getNotificationSettings,
} from "@/lib/notifications";

export function NotificationSettings() {
  const { lang } = useLanguage();
  const [enabled, setEnabled] = useState(false);
  const [hour, setHour] = useState(10);
  const [minute, setMinute] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const check = async () => {
      try {
        // Vérifie si la permission est toujours accordée
        const { display } = await LocalNotifications.checkPermissions();

        if (display !== "granted") {
          // Permission révoquée depuis les paramètres Android
          setEnabled(false);
          setLoading(false);
          return;
        }

        // Permission OK — vérifie si des notifs sont programmées
        const settings = await getNotificationSettings();
        if (settings) {
          setEnabled(settings.enabled);
          setHour(settings.hour);
          setMinute(settings.minute);
        }
      } catch {
        // Web / Capacitor non disponible — pas de crash
      } finally {
        setLoading(false);
      }
    };
    check();
  }, []);

  const handleToggle = async () => {
    if (enabled) {
      try {
        await cancelDailyNotifications();
      } catch {
        console.warn("Erreur annulation notifs");
      }
      setEnabled(false);
    } else {
      try {
        const granted = await requestNotificationPermission();
        if (!granted) return;
        await scheduleDaily(hour, minute, lang as "fr" | "en");
        setEnabled(true);
      } catch {
        console.warn("Erreur activation notifs");
        // Sur web, bascule quand même visuellement
        setEnabled(true);
      }
    }
  };

  const handleTimeChange = async (newHour: number, newMinute: number) => {
    setHour(newHour);
    setMinute(newMinute);
    if (enabled) {
      try {
        await scheduleDaily(newHour, newMinute, lang as "fr" | "en");
      } catch {
        console.warn("Erreur reprogrammation notifs");
      }
    }
  };

  if (loading) return null;

  return (
    <div className="w-full space-y-2">

      {/* ── Toggle ── */}
      <div className="w-full flex items-center justify-between gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
            enabled ? "bg-violet-100" : "bg-slate-200"
          }`}>
            <span className="text-sm">{enabled ? "🔔" : "🔕"}</span>
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-xs text-foreground">
              {lang === "fr" ? "Rappel quotidien" : "Daily reminder"}
            </p>
            <p className="text-[10px] text-muted-foreground truncate">
              {enabled
                ? (lang === "fr" ? "Activé" : "Enabled")
                : (lang === "fr" ? "Désactivé" : "Disabled")}
            </p>
          </div>
        </div>

        {/* Switch pill */}
        <button
          onClick={handleToggle}
          aria-label="Toggle notifications"
          className={`relative flex-shrink-0 w-11 h-6 rounded-full transition-colors duration-200 focus:outline-none ${
            enabled ? "bg-violet-400" : "bg-slate-300"
          }`}
        >
          <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-200 ${
            enabled ? "translate-x-5" : "translate-x-0.5"
          }`} />
        </button>
      </div>

      {/* ── Sélecteur heure (visible si activé) ── */}
      {enabled && (
        <div className="w-full flex items-center justify-between gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-200 flex items-center justify-center flex-shrink-0">
              <span className="text-sm">⏰</span>
            </div>
            <div>
              <p className="font-semibold text-xs text-foreground">
                {lang === "fr" ? "Heure du rappel" : "Reminder time"}
              </p>
              <p className="text-[10px] text-muted-foreground">
                {lang === "fr" ? "Chaque jour à cette heure" : "Every day at this time"}
              </p>
            </div>
          </div>
          <input
            type="time"
            value={`${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`}
            onChange={(e) => {
              const [h, m] = e.target.value.split(":").map(Number);
              handleTimeChange(h, m);
            }}
            className="text-xs font-bold text-foreground bg-white border border-slate-200 rounded-lg px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-violet-300"
          />
        </div>
      )}

    </div>
  );
}