import { LocalNotifications, ScheduleEvery } from "@capacitor/local-notifications";

export const NOTIFICATION_MESSAGES = {
  fr: [
    { title: "🌙 Rêves & Rituels", body: "As-tu noté ton rêve de cette nuit ?" },
    { title: "✨ Énergie du jour", body: "Consulte ta phase lunaire du moment." },
    { title: "🔮 Rituel du matin", body: "Un rituel t'attend pour bien démarrer." },
    { title: "🌿 Sagesse des plantes", body: "Découvre une plante pour aujourd'hui." },
    { title: "🙏 Moment de paix", body: "Une prière pour apaiser ton esprit." },
  ],
  en: [
    { title: "🌙 Dreams & Rituals", body: "Did you write down last night's dream?" },
    { title: "✨ Daily energy", body: "Check your current lunar phase." },
    { title: "🔮 Morning ritual", body: "A ritual awaits to start your day right." },
    { title: "🌿 Plant wisdom", body: "Discover a plant for today." },
    { title: "🙏 Peaceful moment", body: "A prayer to calm your mind." },
  ],
};

export async function requestNotificationPermission(): Promise<boolean> {
  const { display } = await LocalNotifications.requestPermissions();
  return display === "granted";
}

export async function scheduleDaily(
  hour: number,
  minute: number,
  lang: "fr" | "en"
): Promise<void> {
  // Annule les anciennes notifs avant d'en créer de nouvelles
  await cancelDailyNotifications();

  const messages = NOTIFICATION_MESSAGES[lang];

  await LocalNotifications.schedule({
    notifications: messages.map((msg, i) => ({
      id: 100 + i,
      title: msg.title,
      body: msg.body,
      schedule: {
        on: { hour, minute },
        allowWhileIdle: true,
        every: "day" as ScheduleEvery,
      },
      sound: "beep.wav",
      smallIcon: "ic_stat_icon_config_sample",
      iconColor: "#B8A9E8",
    })),
  });
}

export async function cancelDailyNotifications(): Promise<void> {
  const pending = await LocalNotifications.getPending();
  const ours = pending.notifications.filter(n => n.id >= 100 && n.id < 200);
  if (ours.length > 0) {
    await LocalNotifications.cancel({ notifications: ours });
  }
}

export async function getNotificationSettings(): Promise<{
  enabled: boolean;
  hour: number;
  minute: number;
} | null> {
  const pending = await LocalNotifications.getPending();
  const first = pending.notifications.find(n => n.id >= 100 && n.id < 200);
  if (!first?.schedule?.on) return null;
  return {
    enabled: true,
    hour: first.schedule.on.hour ?? 8,
    minute: first.schedule.on.minute ?? 0,
  };
}