import { LocalNotifications } from "@capacitor/local-notifications";

export const NOTIFICATION_MESSAGES = {
  fr: [
    { title: "🌙 Rêves & Rituels", body: "As-tu noté ton rêve de cette nuit ?" },
    { title: "✨ Énergie du jour", body: "Consulte ta phase lunaire du moment." },
    { title: "🔮 Rituel du matin", body: "Un rituel t'attend pour bien démarrer." },
    { title: "🌿 Sagesse des plantes", body: "Découvre une plante pour aujourd'hui." },
    { title: "🙏 Moment de paix", body: "Une prière pour apaiser ton esprit." },
    { title: "🌙 Voyage nocturne", body: "Tes rêves ont des messages pour toi." },
    { title: "🌕 Pleine lune", body: "L'énergie lunaire est à son maximum ce soir." },
    { title: "🌱 Rituel du soir", body: "Prépare ton esprit pour un sommeil profond." },
    { title: "💫 Intention du jour", body: "Pose une intention positive pour aujourd'hui." },
    { title: "🔮 Symbole de rêve", body: "Un symbole t'attend dans ton dictionnaire." },
    { title: "🌸 Rituel de gratitude", body: "Note 3 choses pour lesquelles tu es reconnaissant·e." },
    { title: "🌙 Monde intérieur", body: "Prends un moment pour explorer ton monde intérieur." },
    { title: "✨ Cycle lunaire", body: "La lune guide tes énergies aujourd'hui." },
    { title: "🌿 Plante du jour", body: "Une plante peut transformer ton quotidien." },
    { title: "🙏 Mantra du matin", body: "Un mantra pour commencer la journée en conscience." },
  ],
  en: [
    { title: "🌙 Dreams & Rituals", body: "Did you write down last night's dream?" },
    { title: "✨ Daily energy", body: "Check your current lunar phase." },
    { title: "🔮 Morning ritual", body: "A ritual awaits to start your day right." },
    { title: "🌿 Plant wisdom", body: "Discover a plant for today." },
    { title: "🙏 Peaceful moment", body: "A prayer to calm your mind." },
    { title: "🌙 Night journey", body: "Your dreams carry messages for you." },
    { title: "🌕 Full moon", body: "Lunar energy is at its peak tonight." },
    { title: "🌱 Evening ritual", body: "Prepare your mind for a deep sleep." },
    { title: "💫 Daily intention", body: "Set a positive intention for today." },
    { title: "🔮 Dream symbol", body: "A symbol awaits you in your dictionary." },
    { title: "🌸 Gratitude ritual", body: "Write down 3 things you are grateful for." },
    { title: "🌙 Inner world", body: "Take a moment to explore your inner world." },
    { title: "✨ Lunar cycle", body: "The moon is guiding your energy today." },
    { title: "🌿 Plant of the day", body: "A plant can transform your daily life." },
    { title: "🙏 Morning mantra", body: "A mantra to start the day with awareness." },
  ],
};

const DAYS_AHEAD = 365;

export async function requestNotificationPermission(): Promise<boolean> {
  const { display } = await LocalNotifications.requestPermissions();
  return display === "granted";
}

export async function scheduleDaily(
  hour: number,
  minute: number,
  lang: "fr" | "en"
): Promise<void> {
  await cancelDailyNotifications();

  const messages = NOTIFICATION_MESSAGES[lang];
  const notifications = [];
  const now = new Date();

  // ✅ Crée un ordre mélangé une fois, puis le répète si besoin
  const shuffled = [...messages]
    .map((msg, i) => ({ msg, sort: Math.sin(i * 7919 + now.getDate()) })) // pseudo-aléatoire déterministe
    .sort((a, b) => a.sort - b.sort)
    .map(x => x.msg);

  for (let i = 0; i < DAYS_AHEAD; i++) {
    const date = new Date();
    date.setDate(now.getDate() + i);
    date.setHours(hour, minute, 0, 0);

    if (i === 0 && date <= now) continue;

    // ✅ Utilise le jour de la semaine (0-6) + semaine (0-51) pour varier
    const dayOfWeek = date.getDay();
    const weekOfYear = Math.floor(i / 7);
    const msgIndex = (dayOfWeek + weekOfYear * 3 + i) % shuffled.length;

    notifications.push({
      id: 100 + i,
      title: shuffled[msgIndex].title,
      body: shuffled[msgIndex].body,
      schedule: {
        at: date,
        allowWhileIdle: true,
      },
      sound: "beep.wav",
      smallIcon: "ic_stat_icon_config_sample",
      iconColor: "#B8A9E8",
    });
  }

  if (notifications.length > 0) {
    await LocalNotifications.schedule({ notifications });
  }
}

export async function cancelDailyNotifications(): Promise<void> {
  const pending = await LocalNotifications.getPending();
  const ours = pending.notifications.filter(n => n.id >= 100 && n.id < 500);
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
  const first = pending.notifications
    .filter(n => n.id >= 100 && n.id < 500)
    .sort((a, b) => a.id - b.id)[0];
  if (!first?.schedule?.at) return null;
  const date = new Date(first.schedule.at as unknown as string);
  return {
    enabled: true,
    hour: date.getHours(),
    minute: date.getMinutes(),
  };
}