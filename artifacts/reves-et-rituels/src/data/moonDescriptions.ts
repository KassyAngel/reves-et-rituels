export type MoonPhaseVariant = {
  energy: { fr: string; en: string };
  conseil: { fr: string; en: string };
  rituel: { fr: string; en: string };
};

export type MoonPhase = {
  name: { fr: string; en: string };
  image: string;
  variants: MoonPhaseVariant[];
};

export const moonDescriptions: MoonPhase[] = [
  // 0 — NOUVELLE LUNE
  {
    name: { fr: "Nouvelle Lune", en: "New Moon" },
    image: "/images/moon/nouvelle-lune.webp",
    variants: [
      {
        energy: { fr: "Nouveaux départs, intentions, introspection. C'est le moment de planter des graines.", en: "New beginnings, intentions, introspection. Time to plant seeds." },
        conseil: { fr: "Prends le temps de noter tes intentions pour le cycle à venir. Qu'est-ce que tu souhaites créer ou transformer ?", en: "Take time to write your intentions for the coming cycle. What do you wish to create or transform?" },
        rituel: { fr: "Allume une bougie blanche, écris tes intentions sur papier et médite 5 minutes en les visualisant.", en: "Light a white candle, write your intentions on paper and meditate 5 minutes visualizing them." },
      },
      {
        energy: { fr: "Silence fertile, potentiel infini. L'obscurité cache les graines de demain.", en: "Fertile silence, infinite potential. The darkness hides tomorrow's seeds." },
        conseil: { fr: "Accorde-toi un moment de solitude bienveillante. Écoute ce que ton âme murmure dans le silence.", en: "Give yourself a moment of kind solitude. Listen to what your soul whispers in silence." },
        rituel: { fr: "Éteins toutes les lumières, assieds-toi en silence 10 minutes et laisse émerger une vision claire de ce que tu désires.", en: "Turn off all lights, sit in silence for 10 minutes and let a clear vision of what you desire emerge." },
      },
      {
        energy: { fr: "Renouveau intérieur, reset énergétique. Le cycle repart à zéro avec une ardoise vierge.", en: "Inner renewal, energetic reset. The cycle restarts with a blank slate." },
        conseil: { fr: "Libère tout ce qui appartient à l'ancien cycle. Aujourd'hui est le premier jour du reste de ta vie.", en: "Release everything belonging to the old cycle. Today is the first day of the rest of your life." },
        rituel: { fr: "Prends un bain purifiant au sel de mer, visualise l'ancienne énergie partir et le nouveau cycle commencer.", en: "Take a purifying sea salt bath, visualize old energy leaving and the new cycle beginning." },
      },
    ],
  },

  // 1 — PREMIER CROISSANT
  {
    name: { fr: "Premier Croissant", en: "Waxing Crescent" },
    image: "/images/moon/premier-croissant.webp",
    variants: [
      {
        energy: { fr: "Élan, courage, action douce. L'énergie commence à monter.", en: "Momentum, courage, gentle action. Energy is rising." },
        conseil: { fr: "Commence à poser les premières actions concrètes vers tes intentions. Même un tout petit pas compte.", en: "Start taking the first concrete steps toward your intentions. Even a tiny step counts." },
        rituel: { fr: "Chaque matin, dis à voix haute une affirmation positive liée à ton intention principale du cycle.", en: "Each morning, say aloud a positive affirmation related to your main intention for the cycle." },
      },
      {
        energy: { fr: "La lumière revient timidement, portant l'espoir et le possible.", en: "Light returns timidly, carrying hope and possibility." },
        conseil: { fr: "Identifie UNE action clé que tu peux faire aujourd'hui. La constance prime sur l'intensité.", en: "Identify ONE key action you can take today. Consistency beats intensity." },
        rituel: { fr: "Plante une graine — réelle ou symbolique — en affirmant ton intention à voix haute.", en: "Plant a seed — real or symbolic — while stating your intention out loud." },
      },
      {
        energy: { fr: "Optimisme naissant, foi en mouvement. Le futur s'esquisse doucement.", en: "Nascent optimism, faith in motion. The future gently takes shape." },
        conseil: { fr: "Garde foi en tes projets même si les résultats ne sont pas encore visibles. Les racines poussent avant les fleurs.", en: "Keep faith in your projects even if results aren't visible yet. Roots grow before flowers." },
        rituel: { fr: "Écris une lettre à ton futur toi dans 30 jours, décrivant les progrès accomplis.", en: "Write a letter to your future self in 30 days, describing the progress made." },
      },
    ],
  },

  // 2 — PREMIER QUARTIER
  {
    name: { fr: "Premier Quartier", en: "First Quarter" },
    image: "/images/moon/premier-quartier.webp",
    variants: [
      {
        energy: { fr: "Défis, décisions, engagement. Surmonte les premiers obstacles.", en: "Challenges, decisions, commitment. Overcome initial obstacles." },
        conseil: { fr: "Face aux obstacles, demande-toi : est-ce un signe de stopper ou un test de ta détermination ?", en: "Facing obstacles, ask yourself: is this a sign to stop or a test of your determination?" },
        rituel: { fr: "Écris ce qui te résiste sur papier, puis brûle-le symboliquement pour libérer la résistance.", en: "Write what is resisting you on paper, then burn it symbolically to release the resistance." },
      },
      {
        energy: { fr: "Tension créatrice, carrefour de choix. Chaque décision forge ton chemin.", en: "Creative tension, crossroads of choice. Each decision forges your path." },
        conseil: { fr: "Ne fuis pas les décisions difficiles. Choisis avec ton cœur et avance sans regarder derrière.", en: "Don't avoid difficult decisions. Choose with your heart and move forward without looking back." },
        rituel: { fr: "Médite 5 minutes sur ta plus grande intention, demande-toi ce que tu dois faire de plus pour l'atteindre.", en: "Meditate 5 minutes on your greatest intention, ask yourself what more you need to do to reach it." },
      },
      {
        energy: { fr: "L'action prime sur la réflexion. Le moment est à la persévérance.", en: "Action takes priority over reflection. The moment calls for perseverance." },
        conseil: { fr: "Identifie l'obstacle principal de ta semaine et consacre-lui une attention particulière aujourd'hui.", en: "Identify the main obstacle of your week and give it special attention today." },
        rituel: { fr: "Tiens-toi debout, les pieds bien ancrés dans le sol, et affirme 3 fois : 'Je suis fort(e), je surmonte tout obstacle.'", en: "Stand tall, feet firmly grounded, and affirm 3 times: 'I am strong, I overcome every obstacle.'" },
      },
    ],
  },

  // 3 — GIBBEUSE CROISSANTE
  {
    name: { fr: "Lune Gibbeuse Croissante", en: "Waxing Gibbous" },
    image: "/images/moon/gibbeuse-croissante.webp",
    variants: [
      {
        energy: { fr: "Ajustements, raffinement, perfectionnement avant l'apogée.", en: "Adjustments, refinement, perfecting before the peak." },
        conseil: { fr: "Observe ce qui fonctionne et ce qui doit être ajusté. C'est le moment d'affiner, pas d'abandonner.", en: "Observe what works and what needs adjusting. This is the time to refine, not abandon." },
        rituel: { fr: "Relis tes intentions de nouvelle lune et note honnêtement tes progrès. Ajuste si nécessaire.", en: "Reread your new moon intentions and honestly note your progress. Adjust if needed." },
      },
      {
        energy: { fr: "Anticipation croissante, l'énergie est à son summum avant la pleine lune.", en: "Growing anticipation, energy is at its peak before the full moon." },
        conseil: { fr: "Finalise ce qui doit l'être. La pleine lune arrive — prépare-toi à recevoir ou à libérer.", en: "Finalize what needs to be finalized. The full moon is coming — prepare to receive or release." },
        rituel: { fr: "Nettoie ton espace de vie pour préparer l'arrivée de la pleine lune et de son énergie maximale.", en: "Clean your living space to prepare for the arrival of the full moon and its maximum energy." },
      },
      {
        energy: { fr: "Confiance et patience. Ce qui a été semé murit doucement.", en: "Trust and patience. What has been sown is gently ripening." },
        conseil: { fr: "Fais confiance au processus. Si tu as planté de bonnes graines, la récolte approche.", en: "Trust the process. If you have planted good seeds, the harvest is approaching." },
        rituel: { fr: "Tiens dans tes mains un objet symbolisant ton intention et visualise-le déjà accompli pendant 3 minutes.", en: "Hold in your hands an object symbolizing your intention and visualize it already accomplished for 3 minutes." },
      },
    ],
  },

  // 4 — PLEINE LUNE
  {
    name: { fr: "Pleine Lune", en: "Full Moon" },
    image: "/images/moon/pleine-lune.webp",
    variants: [
      {
        energy: { fr: "Réalisation, clarté, célébration, libération. Les émotions sont intenses.", en: "Realization, clarity, celebration, release. Emotions are high." },
        conseil: { fr: "Célèbre tes réussites, même les plus petites. Et identifie ce que tu dois laisser partir pour avancer.", en: "Celebrate your achievements, even the smallest. And identify what you need to let go to move forward." },
        rituel: { fr: "Laisse tes cristaux se charger au clair de lune. Écris ce que tu libères et lâches ce soir.", en: "Let your crystals charge in the moonlight. Write what you release and let go of tonight." },
      },
      {
        energy: { fr: "Lumière totale, révélations et prises de conscience profondes.", en: "Total light, revelations and deep realizations." },
        conseil: { fr: "Ce que tu as longtemps ignoré peut se révéler ce soir. Accueille les prises de conscience avec bienveillance.", en: "What you have long ignored may reveal itself tonight. Welcome realizations with kindness." },
        rituel: { fr: "Écris une liste de ce que tu es prêt(e) à laisser partir, puis lis-la sous la lumière de la lune si possible.", en: "Write a list of what you are ready to let go of, then read it under the moonlight if possible." },
      },
      {
        energy: { fr: "Culmination, gratitude intense, connexion spirituelle maximale.", en: "Culmination, intense gratitude, maximum spiritual connection." },
        conseil: { fr: "Prends un moment seul(e) pour ressentir la puissance de cette nuit. La pleine lune amplifie tout.", en: "Take a moment alone to feel the power of this night. The full moon amplifies everything." },
        rituel: { fr: "Pose tes mains ouvertes vers la lune et répète : 'Je reçois. Je libère. Je suis en paix.' pendant 5 minutes.", en: "Hold your hands open toward the moon and repeat: 'I receive. I release. I am at peace.' for 5 minutes." },
      },
    ],
  },

  // 5 — GIBBEUSE DÉCROISSANTE
  {
    name: { fr: "Lune Gibbeuse Décroissante", en: "Waning Gibbous" },
    image: "/images/moon/gibbeuse-decroissante.webp",
    variants: [
      {
        energy: { fr: "Gratitude, partage, lâcher-prise. L'énergie redescend.", en: "Gratitude, sharing, letting go. Energy is subsiding." },
        conseil: { fr: "Partage ta sagesse du cycle avec les autres. La générosité amplifie l'abondance.", en: "Share your cycle wisdom with others. Generosity amplifies abundance." },
        rituel: { fr: "Écris 5 choses pour lesquelles tu es profondément reconnaissant(e) en ce moment.", en: "Write 5 things for which you are deeply grateful right now." },
      },
      {
        energy: { fr: "Après le pic, le flux se retire. C'est le temps du partage et de la transmission.", en: "After the peak, the tide recedes. Time for sharing and transmission." },
        conseil: { fr: "Rends service à quelqu'un aujourd'hui sans attendre de retour. Le karma de générosité travaille pour toi.", en: "Do something for someone today without expecting anything in return. The karma of generosity works for you." },
        rituel: { fr: "Offre quelque chose — un cadeau, du temps, un mot doux — à quelqu'un qui en a besoin.", en: "Offer something — a gift, time, a kind word — to someone who needs it." },
      },
      {
        energy: { fr: "Sagesse accumulée, intégration des leçons du cycle.", en: "Accumulated wisdom, integration of the cycle's lessons." },
        conseil: { fr: "Qu'as-tu appris de ce cycle ? Note les leçons importantes dans ton journal avant qu'elles ne s'effacent.", en: "What have you learned from this cycle? Note the important lessons in your journal before they fade." },
        rituel: { fr: "Médite sur les 3 principales leçons de ce cycle lunaire et remercie chaque expérience.", en: "Meditate on the 3 main lessons of this lunar cycle and thank each experience." },
      },
    ],
  },

  // 6 — DERNIER QUARTIER
  {
    name: { fr: "Dernier Quartier", en: "Last Quarter" },
    image: "/images/moon/dernier-quartier.webp",
    variants: [
      {
        energy: { fr: "Libération, pardon, nettoyage profond. Laisse partir ce qui bloque.", en: "Release, forgiveness, deep cleansing. Let go of blockages." },
        conseil: { fr: "C'est le moment de pardonner — à toi-même et aux autres. Nettoie ton espace physique et mental.", en: "Time to forgive — yourself and others. Clean your physical and mental space." },
        rituel: { fr: "Fais un grand ménage, puis prends un bain purifiant au sel et quelques gouttes de lavande.", en: "Do a thorough cleaning, then take a purifying bath with salt and a few drops of lavender." },
      },
      {
        energy: { fr: "Rupture salutaire, courage de lâcher ce qui ne sert plus.", en: "Healthy break, courage to release what no longer serves." },
        conseil: { fr: "Identifie une habitude, croyance ou relation qui t'épuise. Il est temps de t'en libérer.", en: "Identify a habit, belief or relationship that drains you. It's time to free yourself from it." },
        rituel: { fr: "Écris ce que tu libères sur papier, plie-le, et jette-le à la poubelle consciemment en disant : 'Je me libère.'", en: "Write what you release on paper, fold it, and throw it away consciously saying: 'I free myself.'" },
      },
      {
        energy: { fr: "Introspection, bilan honnête, remise à zéro avant la renaissance.", en: "Introspection, honest assessment, reset before rebirth." },
        conseil: { fr: "Sois honnête avec toi-même. Qu'est-ce qui n'a pas fonctionné et pourquoi ? La vérité libère.", en: "Be honest with yourself. What didn't work and why? The truth liberates." },
        rituel: { fr: "Tiens une bougie allumée et regarde la flamme pendant 5 minutes en laissant aller toutes les pensées négatives.", en: "Hold a lit candle and watch the flame for 5 minutes while letting go of all negative thoughts." },
      },
    ],
  },

  // 7 — DERNIER CROISSANT
  {
    name: { fr: "Dernier Croissant", en: "Waning Crescent" },
    image: "/images/moon/dernier-croissant.webp",
    variants: [
      {
        energy: { fr: "Repos, récupération, abandon. Prépare-toi pour le nouveau cycle.", en: "Rest, recuperation, surrender. Prepare for the new cycle." },
        conseil: { fr: "Accorde-toi du repos sans culpabilité. Recharge tes énergies en vue du prochain cycle.", en: "Allow yourself rest without guilt. Recharge your energies for the next cycle." },
        rituel: { fr: "Médite en silence 10 minutes en respirant profondément. Laisse ton esprit se vider et se reposer.", en: "Meditate in silence for 10 minutes breathing deeply. Let your mind empty and rest." },
      },
      {
        energy: { fr: "Douceur, retrait, préparation silencieuse. La lune soffle : 'Repose-toi.'", en: "Gentleness, retreat, silent preparation. The moon whispers: 'Rest.'" },
        conseil: { fr: "Ralentis délibérément. Annule ce qui n'est pas essentiel et préserve ton énergie.", en: "Deliberately slow down. Cancel what is not essential and preserve your energy." },
        rituel: { fr: "Prépare-toi un thé chaud, installe-toi confortablement et lis ou écoute quelque chose d'apaisant.", en: "Prepare a warm tea, settle in comfortably and read or listen to something soothing." },
      },
      {
        energy: { fr: "Surrender et confiance en l'univers. Ce qui doit venir viendra.", en: "Surrender and trust in the universe. What must come will come." },
        conseil: { fr: "Lâche le contrôle sur ce que tu ne peux pas maîtriser. La confiance est le repos de l'âme.", en: "Release control over what you cannot master. Trust is the rest of the soul." },
        rituel: { fr: "Avant de dormir, dis : 'Je confie mon chemin à l'univers. Je me repose. Je fais confiance.' et laisse aller.", en: "Before sleeping, say: 'I entrust my path to the universe. I rest. I trust.' and let go." },
      },
    ],
  },
];

// ── Helper : choisit la variante selon le jour du mois ────────────────────
export function getMoonVariant(phaseIndex: number, date: Date): MoonPhaseVariant {
  const phase = moonDescriptions[phaseIndex];
  const dayOfMonth = date.getDate();
  const variantIndex = dayOfMonth % phase.variants.length;
  return phase.variants[variantIndex];
}

// ============================================================
// Descriptions des événements spéciaux
// ============================================================
export type SpecialMoonDescription = {
  name: { fr: string; en: string };
  image: string;
  energy: { fr: string; en: string };
  conseil: { fr: string; en: string };
  rituel: { fr: string; en: string };
};

export const specialMoonEvents: Record<string, SpecialMoonDescription> = {
  blood_moon: {
    name: { fr: "Lune de Sang", en: "Blood Moon" },
    image: "/images/moon/lune-de-sang.webp",
    energy: {
      fr: "Transformation radicale, mort symbolique et renaissance. Une éclipse totale amplifie tout ce qui doit être libéré. L'énergie est intense et purificatrice.",
      en: "Radical transformation, symbolic death and rebirth. A total eclipse amplifies everything that needs to be released. The energy is intense and purifying.",
    },
    conseil: {
      fr: "C'est un moment rare et puissant. Ce qui doit changer dans ta vie se révèle clairement. N'aie pas peur de la transformation — elle te libère.",
      en: "This is a rare and powerful moment. What needs to change in your life becomes clearly revealed. Don't fear transformation — it sets you free.",
    },
    rituel: {
      fr: "Pendant l'éclipse, écris sur papier ce que tu veux transformer définitivement. Brûle-le à la fin de l'éclipse en déclarant : 'Je renais, libéré(e).'",
      en: "During the eclipse, write on paper what you want to transform definitively. Burn it at the end of the eclipse declaring: 'I am reborn, free.'",
    },
  },
  super_moon: {
    name: { fr: "Super Lune", en: "Super Moon" },
    image: "/images/moon/super-lune.webp",
    energy: {
      fr: "Amplification maximale de toutes les énergies. La lune est 14% plus grande et 30% plus lumineuse. Tes émotions, intuitions et manifestations sont décuplées.",
      en: "Maximum amplification of all energies. The moon is 14% larger and 30% brighter. Your emotions, intuitions and manifestations are multiplied tenfold.",
    },
    conseil: {
      fr: "Profite de cette énergie amplifiée pour tes intentions les plus importantes. Mais attention : les émotions négatives sont aussi amplifiées — reste centré(e).",
      en: "Take advantage of this amplified energy for your most important intentions. But beware: negative emotions are also amplified — stay centered.",
    },
    rituel: {
      fr: "Expose tes objets sacrés, cristaux et eau lunaire sous cette super lune. Leur charge sera exceptionnellement puissante cette nuit.",
      en: "Expose your sacred objects, crystals and lunar water under this super moon. Their charge will be exceptionally powerful tonight.",
    },
  },
  blue_moon: {
    name: { fr: "Lune Bleue", en: "Blue Moon" },
    image: "/images/moon/lune-bleue.webp",
    energy: {
      fr: "Rare et magique, la lune bleue offre une seconde chance. Ce qui n'a pas été accompli lors de la première pleine lune peut se réaliser maintenant.",
      en: "Rare and magical, the blue moon offers a second chance. What was not accomplished during the first full moon can manifest now.",
    },
    conseil: {
      fr: "Quelle intention avais-tu ce mois-ci que tu n'as pas encore manifestée ? La lune bleue t'offre une deuxième fenêtre magique.",
      en: "What intention did you have this month that you haven't manifested yet? The blue moon offers you a second magical window.",
    },
    rituel: {
      fr: "Formule un vœu rare — quelque chose que tu n'oses habituellement pas demander — car la lune bleue exauce les désirs les plus profonds.",
      en: "Make a rare wish — something you don't usually dare to ask for — because the blue moon grants the deepest desires.",
    },
  },
  black_moon: {
    name: { fr: "Lune Noire", en: "Black Moon" },
    image: "/images/moon/lune-noire.webp",
    energy: {
      fr: "Double pouvoir d'intention et de mystère. La deuxième nouvelle lune du mois amplifie la magie du commencement. Un portail rare s'ouvre.",
      en: "Double power of intention and mystery. The second new moon of the month amplifies the magic of beginning. A rare portal opens.",
    },
    conseil: {
      fr: "C'est le moment le plus puissant pour poser de nouvelles intentions profondes. Ce que tu plantes sous la lune noire germe avec une force double.",
      en: "This is the most powerful moment to set deep new intentions. What you plant under the black moon germinates with double force.",
    },
    rituel: {
      fr: "Dans l'obscurité totale, tiens tes mains ouvertes et formule mentalement ton intention la plus secrète. Laisse le silence l'accueillir.",
      en: "In total darkness, hold your hands open and mentally formulate your most secret intention. Let the silence receive it.",
    },
  },
  harvest_moon: {
    name: { fr: "Lune des Moissons", en: "Harvest Moon" },
    image: "/images/moon/lune-moissons.webp",
    energy: {
      fr: "Abondance, récolte et gratitude. La lune des moissons illumine la nuit pour permettre aux agriculteurs de travailler — symbole de labeur récompensé.",
      en: "Abundance, harvest and gratitude. The harvest moon illuminates the night to allow farmers to work — symbol of labor rewarded.",
    },
    conseil: {
      fr: "Qu'as-tu semé cette année qui est maintenant prêt à être récolté ? Prends conscience de tout ce que tu as accompli et reçois-le avec gratitude.",
      en: "What have you sown this year that is now ready to be harvested? Become aware of everything you have accomplished and receive it with gratitude.",
    },
    rituel: {
      fr: "Prépare un repas avec des produits de saison, mange-le en pleine conscience en remerciant pour chaque abondance de ta vie.",
      en: "Prepare a meal with seasonal produce, eat it mindfully while giving thanks for every abundance in your life.",
    },
  },
  rousse_moon: {
    name: { fr: "Lune Rousse", en: "Pink Moon" },
    image: "/images/moon/lune-rousse.webp",
    energy: {
      fr: "Renouveau printanier, amour et fertilité. La lune rousse annonce le retour de la vie après l'hiver. Une énergie douce et chaleureuse enveloppe la terre.",
      en: "Spring renewal, love and fertility. The pink moon announces the return of life after winter. A gentle, warm energy envelops the earth.",
    },
    conseil: {
      fr: "Ouvre-toi au renouveau. Qu'est-ce qui renaît en toi ce printemps ? Accueille les nouvelles opportunités avec la légèreté d'une fleur qui éclot.",
      en: "Open yourself to renewal. What is being reborn in you this spring? Welcome new opportunities with the lightness of a blooming flower.",
    },
    rituel: {
      fr: "Cueille ou achète des fleurs printanières, place-les chez toi en affirmant : 'Je m'ouvre à la beauté, à l'amour et au renouveau de ma vie.'",
      en: "Pick or buy spring flowers, place them in your home affirming: 'I open myself to beauty, love and renewal in my life.'",
    },
  },
};