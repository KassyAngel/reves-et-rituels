export type PlantCategory =
  | 'wellbeing'
  | 'protection'
  | 'sleep'
  | 'love'
  | 'energy'
  | 'spiritual'
  | 'memory'
  | 'beauty'
  | 'abundance';

export type Plant = {
  id: string;
  category: PlantCategory;
  image: string;
  name: { fr: string; en: string };
  latin: string;
  emoji: string;
  tagline: { fr: string; en: string };
  benefits: { fr: string[]; en: string[] };
  usage: { fr: string; en: string };
  ritual: { fr: string; en: string };
  warning?: { fr: string; en: string };
};

export const plantCategories: Record<'fr' | 'en', Record<PlantCategory, string>> = {
  fr: {
    wellbeing:  "Bien-être & Stress",
    protection: "Protection & Purification",
    sleep:      "Sommeil & Rêves",
    love:       "Amour & Attraction",
    energy:     "Énergie & Vitalité",
    spiritual:  "Guérison Spirituelle",
    memory:     "Mémoire & Clarté",
    beauty:     "Beauté & Soin",
    abundance:  "Abondance & Chance",
  },
  en: {
    wellbeing:  "Well-being & Stress",
    protection: "Protection & Purification",
    sleep:      "Sleep & Dreams",
    love:       "Love & Attraction",
    energy:     "Energy & Vitality",
    spiritual:  "Spiritual Healing",
    memory:     "Memory & Clarity",
    beauty:     "Beauty & Care",
    abundance:  "Abundance & Luck",
  },
};

export const plants: Plant[] = [

  // ─── BIEN-ÊTRE & STRESS ───────────────────────────────────────────────────
  {
    id: "lavande",
    category: "wellbeing",
    image: "/images/plants/lavande.webp",
    name: { fr: "Lavande", en: "Lavender" },
    latin: "Lavandula angustifolia",
    emoji: "💜",
    tagline: { fr: "La fleur de la sérénité", en: "The flower of serenity" },
    benefits: {
      fr: ["Apaise l'anxiété et le stress", "Favorise un sommeil profond", "Soulage les maux de tête", "Équilibre les émotions"],
      en: ["Soothes anxiety and stress", "Promotes deep sleep", "Relieves headaches", "Balances emotions"],
    },
    usage: {
      fr: "En diffusion (quelques gouttes dans un diffuseur), en infusion (1 c. à café de fleurs séchées pour 200 ml, 10 min), ou 2 gouttes d'HE sur l'oreiller.",
      en: "In diffusion (a few drops in a diffuser), as herbal tea (1 tsp dried flowers per 200 ml, 10 min), or 2 drops of EO on the pillow.",
    },
    ritual: {
      fr: "Place un sachet de lavande séchée sous ton oreiller en visualisant une nuit paisible.",
      en: "Place a sachet of dried lavender under your pillow while visualizing a peaceful night.",
    },
  },
  {
    id: "camomille",
    category: "wellbeing",
    image: "/images/plants/camomille.webp",
    name: { fr: "Camomille", en: "Chamomile" },
    latin: "Matricaria chamomilla",
    emoji: "🌼",
    tagline: { fr: "La douceur de la nature", en: "Nature's gentleness" },
    benefits: {
      fr: ["Calme le système nerveux", "Aide à la digestion", "Réduit l'inflammation", "Apaise les angoisses"],
      en: ["Calms the nervous system", "Aids digestion", "Reduces inflammation", "Soothes anxiety"],
    },
    usage: {
      fr: "Infusion : 1 à 2 c. à café de fleurs séchées pour 200 ml d'eau à 90°C, laisser infuser 5 à 10 min. 2 à 3 tasses par jour maximum.",
      en: "Infusion: 1 to 2 tsp dried flowers per 200 ml of water at 90°C, steep 5 to 10 min. Maximum 2 to 3 cups per day.",
    },
    ritual: {
      fr: "Tiens la tasse entre tes mains et visualise ton stress se dissoudre dans la chaleur.",
      en: "Hold the cup in your hands and visualize your stress dissolving in the warmth.",
    },
    warning: {
      fr: "Allergie possible si sensible aux Astéracées (marguerites, ambroisie). Déconseillée en début de grossesse.",
      en: "Possible allergy if sensitive to Asteraceae (daisies, ragweed). Not recommended in early pregnancy.",
    },
  },
  {
    id: "millepertuis",
    category: "wellbeing",
    image: "/images/plants/millepertuis.webp",
    name: { fr: "Millepertuis", en: "St. John's Wort" },
    latin: "Hypericum perforatum",
    emoji: "🌞",
    tagline: { fr: "Le soleil de l'âme", en: "The sunshine of the soul" },
    benefits: {
      fr: ["Soulage la dépression légère à modérée", "Équilibre l'humeur", "Réduit l'anxiété saisonnière", "Favorise la sérénité"],
      en: ["Relieves mild to moderate depression", "Balances mood", "Reduces seasonal anxiety", "Promotes serenity"],
    },
    usage: {
      fr: "En complément alimentaire standardisé (300 mg, 3x/jour) ou infusion légère. Cure de 4 à 6 semaines minimum.",
      en: "As standardized supplement (300 mg, 3x/day) or light infusion. Minimum 4 to 6 week course.",
    },
    ritual: {
      fr: "Bois une infusion au lever du soleil en observant la lumière et en accueillant la joie du jour.",
      en: "Drink an infusion at sunrise while observing the light and welcoming the joy of the day.",
    },
    warning: {
      fr: "⚠️ INTERACTIONS IMPORTANTES : réduit l'efficacité de la pilule contraceptive, des antidépresseurs, anticoagulants et immunosuppresseurs. Consulter un médecin obligatoirement avant usage.",
      en: "⚠️ IMPORTANT INTERACTIONS: reduces the effectiveness of the contraceptive pill, antidepressants, anticoagulants and immunosuppressants. Consult a doctor before use.",
    },
  },

  // ─── PROTECTION & PURIFICATION ────────────────────────────────────────────
  {
    id: "sauge",
    category: "protection",
    image: "/images/plants/sauge.webp",
    name: { fr: "Sauge Blanche", en: "White Sage" },
    latin: "Salvia apiana",
    emoji: "🌿",
    tagline: { fr: "La purificatrice sacrée", en: "The sacred purifier" },
    benefits: {
      fr: ["Purifie les énergies négatives", "Assainit l'air ambiant", "Favorise la clarté mentale", "Protège l'espace sacré"],
      en: ["Purifies negative energies", "Cleanses the air", "Promotes mental clarity", "Protects sacred space"],
    },
    usage: {
      fr: "Brûle un bâton de sauge en faisant le tour de chaque pièce. Usage externe uniquement (fumigation). Ne pas inhaler directement la fumée.",
      en: "Burn a sage stick walking around each room. External use only (fumigation). Do not inhale the smoke directly.",
    },
    ritual: {
      fr: "Ouvre une fenêtre, allume la sauge et trace des cercles dans les coins en disant : 'Je libère ce qui ne sert plus.'",
      en: "Open a window, light the sage and trace circles in corners saying: 'I release what no longer serves.'",
    },
    warning: {
      fr: "Ne pas brûler dans un espace confiné. Aérer la pièce. Déconseillé aux asthmatiques et femmes enceintes.",
      en: "Do not burn in a confined space. Ventilate the room. Not recommended for asthmatics and pregnant women.",
    },
  },
  {
    id: "romarin",
    category: "protection",
    image: "/images/plants/romarin.webp",
    name: { fr: "Romarin", en: "Rosemary" },
    latin: "Salvia rosmarinus",
    emoji: "🌱",
    tagline: { fr: "Le gardien de la mémoire", en: "The guardian of memory" },
    benefits: {
      fr: ["Protège contre les énergies négatives", "Stimule la mémoire", "Renforce la confiance en soi", "Clarifie l'esprit"],
      en: ["Protects against negative energies", "Stimulates memory", "Strengthens self-confidence", "Clarifies the mind"],
    },
    usage: {
      fr: "Infusion : 1 c. à café de feuilles séchées pour 200 ml, 10 min. Maximum 2 tasses/jour. En HE : diffusion ou application diluée (2% max).",
      en: "Infusion: 1 tsp dried leaves per 200 ml, 10 min. Maximum 2 cups/day. As EO: diffusion or diluted application (2% max).",
    },
    ritual: {
      fr: "Place une branche de romarin frais au-dessus de ta porte d'entrée pour protéger ton foyer.",
      en: "Place a fresh rosemary branch above your front door to protect your home.",
    },
    warning: {
      fr: "Déconseillé en cas d'épilepsie. L'huile essentielle est contre-indiquée chez la femme enceinte et les enfants de moins de 6 ans.",
      en: "Not recommended in case of epilepsy. Essential oil is contraindicated for pregnant women and children under 6.",
    },
  },
  {
    id: "genievre",
    category: "protection",
    image: "/images/plants/genievre.webp",
    name: { fr: "Genévrier", en: "Juniper" },
    latin: "Juniperus communis",
    emoji: "🛡️",
    tagline: { fr: "Le bouclier des anciens", en: "The shield of the ancients" },
    benefits: {
      fr: ["Purifie l'espace énergétique", "Protège les voyageurs", "Renforce l'aura", "Chasse les énergies stagnantes"],
      en: ["Purifies energetic space", "Protects travelers", "Strengthens the aura", "Drives away stagnant energies"],
    },
    usage: {
      fr: "Fumigation : brûle des baies ou rameaux séchés. Usage interne (baies) : quelques baies en cuisine uniquement, pas en cure prolongée.",
      en: "Fumigation: burn dried berries or branches. Internal use (berries): a few berries in cooking only, not for extended use.",
    },
    ritual: {
      fr: "Brûle du genévrier avant un voyage en visualisant une lumière protectrice t'entourant.",
      en: "Burn juniper before a journey while visualizing a protective light surrounding you.",
    },
    warning: {
      fr: "Contre-indiqué en cas de maladie rénale. Interdit pendant la grossesse (peut provoquer des contractions). Ne pas utiliser en cure interne prolongée.",
      en: "Contraindicated in kidney disease. Forbidden during pregnancy (may cause contractions). Do not use in prolonged internal courses.",
    },
  },

  // ─── SOMMEIL & RÊVES ──────────────────────────────────────────────────────
  {
    id: "valerian",
    category: "sleep",
    image: "/images/plants/valeriane.webp",
    name: { fr: "Valériane", en: "Valerian" },
    latin: "Valeriana officinalis",
    emoji: "😴",
    tagline: { fr: "La reine du sommeil", en: "The queen of sleep" },
    benefits: {
      fr: ["Favorise l'endormissement", "Améliore la qualité du sommeil", "Réduit l'insomnie", "Calme le système nerveux"],
      en: ["Promotes falling asleep", "Improves sleep quality", "Reduces insomnia", "Calms the nervous system"],
    },
    usage: {
      fr: "Gélules : 300 à 600 mg d'extrait, 30 min avant le coucher. Infusion : 1 c. à café de racine séchée pour 200 ml, 10 min. Cure de 2 à 4 semaines.",
      en: "Capsules: 300 to 600 mg extract, 30 min before bedtime. Infusion: 1 tsp dried root per 200 ml, 10 min. 2 to 4 week course.",
    },
    ritual: {
      fr: "Bois une infusion de valériane en écrivant dans ton journal de rêves ton intention pour la nuit.",
      en: "Drink a valerian infusion while writing your dream intention for the night in your journal.",
    },
    warning: {
      fr: "Provoque une somnolence : ne pas conduire après la prise. Déconseillé avec l'alcool et les médicaments sédatifs. Déconseillé chez la femme enceinte et l'enfant.",
      en: "Causes drowsiness: do not drive after taking. Not recommended with alcohol and sedative medications. Not recommended for pregnant women and children.",
    },
  },
  {
    id: "mugwort",
    category: "sleep",
    image: "/images/plants/armoise.webp",
    name: { fr: "Armoise", en: "Mugwort" },
    latin: "Artemisia vulgaris",
    emoji: "🌙",
    tagline: { fr: "L'herbe des rêves lucides", en: "The herb of lucid dreams" },
    benefits: {
      fr: ["Intensifie les rêves", "Favorise les rêves lucides", "Stimule l'intuition", "Connecte au monde onirique"],
      en: ["Intensifies dreams", "Promotes lucid dreaming", "Stimulates intuition", "Connects to the dream world"],
    },
    usage: {
      fr: "Sachet sous l'oreiller (usage externe, non ingéré). Infusion très légère : 1/2 c. à café max pour 200 ml. Ne pas utiliser en cure prolongée.",
      en: "Sachet under the pillow (external use, not ingested). Very light infusion: 1/2 tsp max per 200 ml. Do not use in prolonged courses.",
    },
    ritual: {
      fr: "Tiens un sachet d'armoise et dis : 'Cette nuit, je me souviens de mes rêves et je les comprends.'",
      en: "Hold a mugwort sachet and say: 'Tonight, I remember my dreams and understand them.'",
    },
    warning: {
      fr: "⚠️ FORMELLEMENT CONTRE-INDIQUÉ pendant la grossesse (peut provoquer une fausse couche). Déconseillé en cas d'allergie aux Astéracées. Ne pas ingérer en grande quantité.",
      en: "⚠️ STRICTLY CONTRAINDICATED during pregnancy (may cause miscarriage). Not recommended if allergic to Asteraceae. Do not ingest in large quantities.",
    },
  },
  {
    id: "passiflore",
    category: "sleep",
    image: "/images/plants/passiflore.webp",
    name: { fr: "Passiflore", en: "Passionflower" },
    latin: "Passiflora incarnata",
    emoji: "🌸",
    tagline: { fr: "La fleur du repos profond", en: "The flower of deep rest" },
    benefits: {
      fr: ["Réduit l'insomnie", "Apaise le mental agité", "Diminue l'anxiété nocturne", "Favorise un sommeil réparateur"],
      en: ["Reduces insomnia", "Calms a restless mind", "Decreases nighttime anxiety", "Promotes restorative sleep"],
    },
    usage: {
      fr: "Infusion : 1 à 2 c. à café de plante séchée pour 200 ml, 10 min, 30 min avant de dormir. Teinture-mère : 30 à 40 gouttes dans un peu d'eau.",
      en: "Infusion: 1 to 2 tsp dried plant per 200 ml, 10 min, 30 min before sleep. Tincture: 30 to 40 drops in a little water.",
    },
    ritual: {
      fr: "Bois lentement ton infusion en respirant profondément et en libérant les pensées du jour.",
      en: "Slowly drink your infusion while breathing deeply and releasing the thoughts of the day.",
    },
    warning: {
      fr: "Peut amplifier l'effet des médicaments sédatifs et anxiolytiques. Déconseillée pendant la grossesse. Ne pas dépasser les doses recommandées.",
      en: "May amplify the effect of sedative and anxiolytic medications. Not recommended during pregnancy. Do not exceed recommended doses.",
    },
  },

  // ─── AMOUR & ATTRACTION ───────────────────────────────────────────────────
  {
    id: "rose",
    category: "love",
    image: "/images/plants/rose.webp",
    name: { fr: "Rose", en: "Rose" },
    latin: "Rosa damascena",
    emoji: "🌹",
    tagline: { fr: "Le symbole universel de l'amour", en: "The universal symbol of love" },
    benefits: {
      fr: ["Ouvre le chakra du cœur", "Attire l'amour et la tendresse", "Apaise les peines de cœur", "Favorise l'amour de soi"],
      en: ["Opens the heart chakra", "Attracts love and tenderness", "Soothes heartbreak", "Promotes self-love"],
    },
    usage: {
      fr: "Infusion de pétales : 1 c. à soupe de pétales frais ou séchés pour 200 ml. Eau de rose : application sur le visage matin et soir. HE : toujours diluée.",
      en: "Petal infusion: 1 tbsp fresh or dried petals per 200 ml. Rose water: apply to face morning and evening. EO: always diluted.",
    },
    ritual: {
      fr: "Prends un bain avec des pétales de rose en visualisant l'amour que tu mérites entrer dans ta vie.",
      en: "Take a bath with rose petals while visualizing the love you deserve entering your life.",
    },
  },
  {
    id: "jasmin",
    category: "love",
    image: "/images/plants/jasmin.webp",
    name: { fr: "Jasmin", en: "Jasmine" },
    latin: "Jasminum officinale",
    emoji: "🤍",
    tagline: { fr: "Le parfum de la séduction", en: "The scent of seduction" },
    benefits: {
      fr: ["Stimule la confiance en soi", "Attire l'amour romantique", "Réduit l'anxiété sociale", "Élève la vibration énergétique"],
      en: ["Boosts self-confidence", "Attracts romantic love", "Reduces social anxiety", "Raises energetic vibration"],
    },
    usage: {
      fr: "HE en diffusion (4 à 5 gouttes), infusion de fleurs (1 c. à café pour 200 ml), ou 1 à 2 gouttes d'HE diluées dans une huile végétale sur les poignets.",
      en: "EO in diffusion (4 to 5 drops), flower infusion (1 tsp per 200 ml), or 1 to 2 drops of EO diluted in carrier oil on wrists.",
    },
    ritual: {
      fr: "Applique une goutte d'huile de jasmin diluée sur ton cœur chaque matin : 'Je suis ouvert(e) à recevoir l'amour.'",
      en: "Apply a drop of diluted jasmine oil over your heart each morning: 'I am open to receiving love.'",
    },
    warning: {
      fr: "L'huile essentielle de jasmin est très concentrée, toujours diluer à 1% max dans une huile végétale. Déconseillée pendant la grossesse.",
      en: "Jasmine essential oil is very concentrated, always dilute to 1% max in a carrier oil. Not recommended during pregnancy.",
    },
  },
  {
    id: "hibiscus",
    category: "love",
    image: "/images/plants/hibiscus.webp",
    name: { fr: "Hibiscus", en: "Hibiscus" },
    latin: "Hibiscus sabdariffa",
    emoji: "🌺",
    tagline: { fr: "La fleur du désir", en: "The flower of desire" },
    benefits: {
      fr: ["Stimule la passion", "Attire les nouvelles rencontres", "Ouvre le cœur", "Riche en antioxydants"],
      en: ["Stimulates passion", "Attracts new encounters", "Opens the heart", "Rich in antioxidants"],
    },
    usage: {
      fr: "Infusion : 1 à 2 c. à café de fleurs séchées pour 200 ml d'eau chaude, 5 à 10 min. Peut se boire chaud ou froid. 1 à 2 tasses par jour.",
      en: "Infusion: 1 to 2 tsp dried flowers per 200 ml hot water, 5 to 10 min. Can be drunk hot or cold. 1 to 2 cups per day.",
    },
    ritual: {
      fr: "Prépare une infusion d'hibiscus rouge en pensant à l'amour idéal que tu souhaites attirer dans ta vie.",
      en: "Prepare a red hibiscus infusion while thinking of the ideal love you wish to attract into your life.",
    },
    warning: {
      fr: "Peut abaisser la tension artérielle : prudence en cas d'hypotension. Déconseillé avec certains médicaments contre l'hypertension. Consulter un médecin si traitement en cours.",
      en: "May lower blood pressure: caution with hypotension. Not recommended with certain blood pressure medications. Consult a doctor if on treatment.",
    },
  },

  // ─── ÉNERGIE & VITALITÉ ───────────────────────────────────────────────────
  {
    id: "gingembre",
    category: "energy",
    image: "/images/plants/gingembre.webp",
    name: { fr: "Gingembre", en: "Ginger" },
    latin: "Zingiber officinale",
    emoji: "🔥",
    tagline: { fr: "Le feu de la vitalité", en: "The fire of vitality" },
    benefits: {
      fr: ["Booste l'énergie vitale", "Stimule la circulation", "Renforce le système immunitaire", "Active le courage"],
      en: ["Boosts vital energy", "Stimulates circulation", "Strengthens the immune system", "Activates courage"],
    },
    usage: {
      fr: "Infusion fraîche : 2 à 3 tranches de gingembre frais dans 250 ml d'eau chaude, 10 min. Ajouter citron et miel. Maximum 4 g de gingembre par jour.",
      en: "Fresh infusion: 2 to 3 slices of fresh ginger in 250 ml hot water, 10 min. Add lemon and honey. Maximum 4 g of ginger per day.",
    },
    ritual: {
      fr: "Bois une infusion de gingembre debout, face à la lumière, en affirmant ta force du jour.",
      en: "Drink a ginger infusion standing, facing the light, affirming your strength for the day.",
    },
    warning: {
      fr: "Déconseillé à forte dose en cas de traitement anticoagulant. Peut aggraver les brûlures d'estomac. Consulter un médecin si grossesse.",
      en: "Not recommended in high doses with anticoagulant treatment. May worsen heartburn. Consult a doctor if pregnant.",
    },
  },
  {
    id: "menthe",
    category: "energy",
    image: "/images/plants/menthe.webp",
    name: { fr: "Menthe Poivrée", en: "Peppermint" },
    latin: "Mentha piperita",
    emoji: "💚",
    tagline: { fr: "L'éveilleur des sens", en: "The awakener of senses" },
    benefits: {
      fr: ["Stimule la concentration", "Booste l'énergie mentale", "Clarifie les idées", "Rafraîchit et revitalise"],
      en: ["Stimulates concentration", "Boosts mental energy", "Clarifies thoughts", "Refreshes and revitalizes"],
    },
    usage: {
      fr: "Infusion : 1 c. à café de feuilles séchées pour 200 ml, 5 min. HE : 1 goutte sur les tempes ou inhalation directe du flacon (jamais pure sur la peau).",
      en: "Infusion: 1 tsp dried leaves per 200 ml, 5 min. EO: 1 drop on temples or direct inhalation from bottle (never pure on skin).",
    },
    ritual: {
      fr: "Frotte des feuilles de menthe entre tes paumes, inhale et dis : 'Je suis alerte, clair(e) et plein(e) d'énergie.'",
      en: "Rub mint leaves between your palms, inhale and say: 'I am alert, clear and full of energy.'",
    },
    warning: {
      fr: "L'HE de menthe poivrée est contre-indiquée chez les enfants de moins de 6 ans, les femmes enceintes et les personnes épileptiques. Ne jamais appliquer pure sur la peau.",
      en: "Peppermint EO is contraindicated in children under 6, pregnant women and people with epilepsy. Never apply pure on skin.",
    },
  },
  {
    id: "eleutherocoque",
    category: "energy",
    image: "/images/plants/eleutherocoque.webp",
    name: { fr: "Éleuthérocoque", en: "Siberian Ginseng" },
    latin: "Eleutherococcus senticosus",
    emoji: "⚡",
    tagline: { fr: "L'adaptogène sibérien", en: "The Siberian adaptogen" },
    benefits: {
      fr: ["Augmente la résistance au stress", "Booste l'endurance physique", "Renforce le système immunitaire", "Combat la fatigue chronique"],
      en: ["Increases stress resistance", "Boosts physical endurance", "Strengthens immunity", "Fights chronic fatigue"],
    },
    usage: {
      fr: "Gélules : 300 à 400 mg d'extrait standardisé le matin. Cure de 4 à 6 semaines, pause de 2 semaines entre les cures.",
      en: "Capsules: 300 to 400 mg standardized extract in the morning. 4 to 6 week course, 2 week break between courses.",
    },
    ritual: {
      fr: "Prends ta dose chaque matin en affirmant : 'Mon corps est fort, mon esprit est clair, je suis prêt(e).'",
      en: "Take your dose each morning affirming: 'My body is strong, my mind is clear, I am ready.'",
    },
    warning: {
      fr: "Déconseillé en cas d'hypertension artérielle, troubles cardiaques, ou insomnie sévère. Interactions possibles avec les anticoagulants et certains médicaments. Consulter un médecin avant usage.",
      en: "Not recommended in case of high blood pressure, heart disorders, or severe insomnia. Possible interactions with anticoagulants and certain medications. Consult a doctor before use.",
    },
  },

  // ─── GUÉRISON SPIRITUELLE ─────────────────────────────────────────────────
  {
    id: "palo-santo",
    category: "spiritual",
    image: "/images/plants/palosanto.webp",
    name: { fr: "Palo Santo", en: "Palo Santo" },
    latin: "Bursera graveolens",
    emoji: "✨",
    tagline: { fr: "Le bois sacré de l'Amazonie", en: "The sacred wood of the Amazon" },
    benefits: {
      fr: ["Élève la vibration spirituelle", "Purification en douceur", "Favorise la méditation", "Attire les énergies positives"],
      en: ["Raises spiritual vibration", "Gentle purification", "Promotes meditation", "Attracts positive energies"],
    },
    usage: {
      fr: "Allume la pointe du bâton, souffle pour éteindre la flamme et laisse la fumée parfumée se diffuser. Aérer la pièce.",
      en: "Light the tip of the stick, blow to extinguish the flame and let the fragrant smoke spread. Ventilate the room.",
    },
    ritual: {
      fr: "Allume le palo santo avant ta méditation, ferme les yeux et laisse le parfum te transporter vers la paix.",
      en: "Light palo santo before your meditation, close your eyes and let the fragrance transport you to peace.",
    },
    warning: {
      fr: "Usage externe uniquement (fumigation). Ne pas inhaler directement et abondamment la fumée. Aérer la pièce. Déconseillé aux asthmatiques.",
      en: "External use only (fumigation). Do not inhale the smoke directly or abundantly. Ventilate the room. Not recommended for asthmatics.",
    },
  },
  {
    id: "encens",
    category: "spiritual",
    image: "/images/plants/encens.webp",
    name: { fr: "Encens Oliban", en: "Frankincense" },
    latin: "Boswellia sacra",
    emoji: "🕯️",
    tagline: { fr: "La résine des temples", en: "The resin of temples" },
    benefits: {
      fr: ["Élève la conscience spirituelle", "Favorise la prière et la méditation", "Purifie l'espace sacré", "Connecte au divin"],
      en: ["Elevates spiritual consciousness", "Promotes prayer and meditation", "Purifies sacred space", "Connects to the divine"],
    },
    usage: {
      fr: "Brûle des grains sur un charbon ardent ou des bâtons d'encens. Toujours dans une pièce ventilée.",
      en: "Burn grains on a charcoal disk or incense sticks. Always in a ventilated room.",
    },
    ritual: {
      fr: "Allume l'encens, assieds-toi en silence et laisse la fumée monter comme le symbole de tes prières.",
      en: "Light the incense, sit in silence and let the smoke rise as a symbol of your prayers.",
    },
    warning: {
      fr: "Usage externe uniquement. Ne pas inhaler directement. Pièce bien ventilée obligatoire. Déconseillé en cas d'asthme ou de pathologie respiratoire.",
      en: "External use only. Do not inhale directly. Well-ventilated room required. Not recommended for asthma or respiratory conditions.",
    },
  },
  {
    id: "yerbasanta",
    category: "spiritual",
    image: "/images/plants/yerbasanta.webp",
    name: { fr: "Yerba Santa", en: "Yerba Santa" },
    latin: "Eriodictyon californicum",
    emoji: "🌟",
    tagline: { fr: "L'herbe sainte de guérison", en: "The holy herb of healing" },
    benefits: {
      fr: ["Libère les émotions bloquées", "Guérit les blessures émotionnelles", "Ouvre le cœur", "Renforce l'intuition"],
      en: ["Releases blocked emotions", "Heals emotional wounds", "Opens the heart", "Strengthens intuition"],
    },
    usage: {
      fr: "Fumigation : brûle les feuilles séchées. Infusion respiratoire : traditionnellement utilisée pour les voies respiratoires (1 c. à café pour 200 ml).",
      en: "Fumigation: burn dried leaves. Respiratory infusion: traditionally used for airways (1 tsp per 200 ml).",
    },
    ritual: {
      fr: "Brûle la yerba santa en posant une main sur ton cœur, en libérant toute tristesse retenue.",
      en: "Burn yerba santa while placing a hand on your heart, releasing any held sadness.",
    },
    warning: {
      fr: "Données scientifiques limitées. Usage principalement traditionnel. Consulter un professionnel de santé avant toute prise interne.",
      en: "Limited scientific data. Mainly traditional use. Consult a healthcare professional before any internal use.",
    },
  },

  // ─── MÉMOIRE & CLARTÉ ─────────────────────────────────────────────────────
  {
    id: "ginkgo",
    category: "memory",
    image: "/images/plants/ginkgo.webp",
    name: { fr: "Ginkgo Biloba", en: "Ginkgo Biloba" },
    latin: "Ginkgo biloba",
    emoji: "🧠",
    tagline: { fr: "L'arbre aux 40 écus", en: "The maidenhair tree" },
    benefits: {
      fr: ["Améliore la mémoire et la concentration", "Stimule la circulation cérébrale", "Protège les neurones", "Ralentit le déclin cognitif"],
      en: ["Improves memory and concentration", "Stimulates brain circulation", "Protects neurons", "Slows cognitive decline"],
    },
    usage: {
      fr: "Extrait standardisé (EGb 761) : 120 à 240 mg par jour en 2 prises, au moment des repas. Effets visibles après 4 à 8 semaines.",
      en: "Standardized extract (EGb 761): 120 to 240 mg per day in 2 doses, with meals. Effects visible after 4 to 8 weeks.",
    },
    ritual: {
      fr: "Avant d'étudier, tiens une feuille de ginkgo et visualise ton esprit s'ouvrir comme l'éventail de ses feuilles.",
      en: "Before studying, hold a ginkgo leaf and visualize your mind opening like its fan-shaped leaves.",
    },
    warning: {
      fr: "Contre-indiqué avec les anticoagulants (risque hémorragique). Arrêter 2 semaines avant une chirurgie. Déconseillé chez la femme enceinte.",
      en: "Contraindicated with anticoagulants (bleeding risk). Stop 2 weeks before surgery. Not recommended for pregnant women.",
    },
  },
  {
    id: "bacopa",
    category: "memory",
    image: "/images/plants/bacopa.webp",
    name: { fr: "Bacopa", en: "Bacopa" },
    latin: "Bacopa monnieri",
    emoji: "📚",
    tagline: { fr: "L'herbe des sages", en: "The herb of the wise" },
    benefits: {
      fr: ["Améliore la mémoire à long terme", "Réduit le stress mental", "Favorise l'apprentissage", "Effet neuroprotecteur"],
      en: ["Improves long-term memory", "Reduces mental stress", "Promotes learning", "Neuroprotective effect"],
    },
    usage: {
      fr: "Gélules : 300 à 450 mg d'extrait standardisé par jour, avec un repas. Poudre : 1/2 c. à café dans du lait chaud. Effets après 4 à 8 semaines.",
      en: "Capsules: 300 to 450 mg standardized extract per day, with a meal. Powder: 1/2 tsp in warm milk. Effects after 4 to 8 weeks.",
    },
    ritual: {
      fr: "Prépare un lait doré avec du bacopa avant d'étudier en affirmant : 'Mon esprit retient et comprend tout.'",
      en: "Prepare a golden milk with bacopa before studying affirming: 'My mind retains and understands everything.'",
    },
    warning: {
      fr: "Peut ralentir le rythme cardiaque. Déconseillé en cas de bradycardie ou de problèmes thyroïdiens. Peut causer des troubles digestifs au début. Consulter un médecin avant usage.",
      en: "May slow heart rate. Not recommended in bradycardia or thyroid problems. May cause digestive upset initially. Consult a doctor before use.",
    },
  },
  {
    id: "sauge-officinale",
    category: "memory",
    image: "/images/plants/sauge-officinale.webp",
    name: { fr: "Sauge Officinale", en: "Common Sage" },
    latin: "Salvia officinalis",
    emoji: "🌿",
    tagline: { fr: "La sage des jardins", en: "The wise one of gardens" },
    benefits: {
      fr: ["Stimule la mémoire et la concentration", "Améliore les fonctions cognitives", "Équilibre hormonal (ménopause)", "Propriétés antioxydantes"],
      en: ["Stimulates memory and concentration", "Improves cognitive functions", "Hormonal balance (menopause)", "Antioxidant properties"],
    },
    usage: {
      fr: "Infusion légère : 3 feuilles fraîches ou 1 c. à café de feuilles séchées pour 200 ml, 5 min. Maximum 2 tasses par jour. Pas plus de 4 semaines consécutives.",
      en: "Light infusion: 3 fresh leaves or 1 tsp dried leaves per 200 ml, 5 min. Maximum 2 cups per day. No more than 4 consecutive weeks.",
    },
    ritual: {
      fr: "Frotte une feuille de sauge entre tes doigts avant un examen ou une réunion importante pour activer ta mémoire.",
      en: "Rub a sage leaf between your fingers before an exam or important meeting to activate your memory.",
    },
    warning: {
      fr: "Contre-indiquée pendant la grossesse et l'allaitement (peut réduire la lactation). Déconseillée en cas d'épilepsie. L'HE est très concentrée, ne pas ingérer.",
      en: "Contraindicated during pregnancy and breastfeeding (may reduce lactation). Not recommended for epilepsy. EO is very concentrated, do not ingest.",
    },
  },

  // ─── BEAUTÉ & SOIN ────────────────────────────────────────────────────────
  {
    id: "aloevera",
    category: "beauty",
    image: "/images/plants/aloevera.webp",
    name: { fr: "Aloe Vera", en: "Aloe Vera" },
    latin: "Aloe barbadensis miller",
    emoji: "🪴",
    tagline: { fr: "Le génie de la nature", en: "Nature's genius" },
    benefits: {
      fr: ["Hydrate et répare la peau", "Apaise brûlures et irritations", "Favorise la cicatrisation", "Nourrit et fortifie les cheveux"],
      en: ["Hydrates and repairs skin", "Soothes burns and irritations", "Promotes healing", "Nourishes and strengthens hair"],
    },
    usage: {
      fr: "Gel pur : appliquer directement sur la peau ou les cheveux. Jus à boire : 20 à 30 ml le matin à jeun, bien choisir un jus sans aloïne (décolorisé).",
      en: "Pure gel: apply directly on skin or hair. Drinking juice: 20 to 30 ml in the morning on an empty stomach, choose a juice without aloin (decolorized).",
    },
    ritual: {
      fr: "Applique le gel d'aloe vera sur ton visage en murmurant : 'Je nourris ma beauté intérieure et extérieure.'",
      en: "Apply aloe vera gel on your face whispering: 'I nourish my inner and outer beauty.'",
    },
    warning: {
      fr: "Le jus d'aloe vera contenant de l'aloïne est laxatif et contre-indiqué (grossesse, maladies inflammatoires intestinales). Toujours choisir un jus décolorisé pour la consommation orale.",
      en: "Aloe vera juice containing aloin is laxative and contraindicated (pregnancy, inflammatory bowel diseases). Always choose decolorized juice for oral consumption.",
    },
  },
  {
    id: "calendula",
    category: "beauty",
    image: "/images/plants/calendula.webp",
    name: { fr: "Calendula", en: "Calendula" },
    latin: "Calendula officinalis",
    emoji: "🌻",
    tagline: { fr: "La fleur solaire de la peau", en: "The solar flower of skin" },
    benefits: {
      fr: ["Répare les peaux sensibles et abîmées", "Puissant anti-inflammatoire naturel", "Favorise la régénération cellulaire", "Éclat et douceur naturels"],
      en: ["Repairs sensitive and damaged skin", "Powerful natural anti-inflammatory", "Promotes cell regeneration", "Natural glow and softness"],
    },
    usage: {
      fr: "Huile de calendula : appliquer quelques gouttes sur le visage ou le corps. Infusion : 1 c. à soupe de fleurs pour 200 ml, utilisée comme lotion ou compresse.",
      en: "Calendula oil: apply a few drops on face or body. Infusion: 1 tbsp flowers per 200 ml, used as lotion or compress.",
    },
    ritual: {
      fr: "Masse ton visage avec une huile de calendula au coucher en remerciant ton corps de te porter chaque jour.",
      en: "Massage your face with calendula oil at bedtime while thanking your body for carrying you each day.",
    },
    warning: {
      fr: "Allergie possible si sensible aux Astéracées (marguerites, camomille). Tester sur une petite zone de peau avant application étendue.",
      en: "Possible allergy if sensitive to Asteraceae (daisies, chamomile). Test on a small skin area before widespread application.",
    },
  },
  {
    id: "ortie",
    category: "beauty",
    image: "/images/plants/ortie.webp",
    name: { fr: "Ortie", en: "Nettle" },
    latin: "Urtica dioica",
    emoji: "💇",
    tagline: { fr: "Le secret des cheveux forts", en: "The secret of strong hair" },
    benefits: {
      fr: ["Fortifie et stimule la pousse des cheveux", "Réduit la chute de cheveux", "Purifie la peau", "Riche en fer, silice et minéraux"],
      en: ["Strengthens and stimulates hair growth", "Reduces hair loss", "Purifies skin", "Rich in iron, silica and minerals"],
    },
    usage: {
      fr: "Infusion à boire : 2 c. à café de feuilles séchées pour 250 ml, 10 min, 2 tasses/jour. Rinçage capillaire : infusion refroidie, versée après le shampooing.",
      en: "Infusion to drink: 2 tsp dried leaves per 250 ml, 10 min, 2 cups/day. Hair rinse: cooled infusion, poured after shampooing.",
    },
    ritual: {
      fr: "Rince tes cheveux avec une infusion d'ortie en affirmant : 'Mes cheveux sont forts, sains et lumineux.'",
      en: "Rinse your hair with a nettle infusion affirming: 'My hair is strong, healthy and luminous.'",
    },
    warning: {
      fr: "Peut interagir avec les anticoagulants et médicaments antihypertenseurs. Déconseillé en cas d'insuffisance rénale. Consulter un médecin si traitement en cours.",
      en: "May interact with anticoagulants and antihypertensive medications. Not recommended in kidney failure. Consult a doctor if on treatment.",
    },
  },

  // ─── ABONDANCE & CHANCE ───────────────────────────────────────────────────
  {
    id: "basilic",
    category: "abundance",
    image: "/images/plants/basilic.webp",
    name: { fr: "Basilic", en: "Basil" },
    latin: "Ocimum basilicum",
    emoji: "🍀",
    tagline: { fr: "L'herbe de la prospérité", en: "The herb of prosperity" },
    benefits: {
      fr: ["Attire l'abondance et la chance", "Protège le foyer", "Favorise les nouvelles opportunités", "Propriétés adaptogènes légères"],
      en: ["Attracts abundance and luck", "Protects the home", "Favors new opportunities", "Light adaptogenic properties"],
    },
    usage: {
      fr: "Plante vivante près de l'entrée ou en cuisine. Infusion : quelques feuilles fraîches dans 200 ml d'eau chaude. En cuisine : utilisation libre.",
      en: "Living plant near the entrance or in the kitchen. Infusion: a few fresh leaves in 200 ml hot water. In cooking: free use.",
    },
    ritual: {
      fr: "Glisse quelques feuilles de basilic dans ton portefeuille en visualisant l'abondance couler vers toi.",
      en: "Slip a few basil leaves into your wallet while visualizing abundance flowing toward you.",
    },
  },
  {
    id: "cannelle",
    category: "abundance",
    image: "/images/plants/cannelle.webp",
    name: { fr: "Cannelle", en: "Cinnamon" },
    latin: "Cinnamomum verum",
    emoji: "🌟",
    tagline: { fr: "L'épice de la fortune", en: "The spice of fortune" },
    benefits: {
      fr: ["Stimule la manifestation et l'action", "Attire la chance", "Régule la glycémie", "Propriétés anti-inflammatoires"],
      en: ["Stimulates manifestation and action", "Attracts luck", "Regulates blood sugar", "Anti-inflammatory properties"],
    },
    usage: {
      fr: "En poudre : 1/2 c. à café par jour maximum dans les boissons ou aliments. Bâton en infusion : 1 bâton pour 300 ml d'eau. Usage externe en fumigation.",
      en: "As powder: 1/2 tsp per day maximum in drinks or food. Stick in infusion: 1 stick per 300 ml water. External use as fumigation.",
    },
    ritual: {
      fr: "Le 1er de chaque mois, souffle de la poudre de cannelle depuis ta porte vers l'extérieur : 'J'accueille l'abondance.'",
      en: "On the 1st of each month, blow cinnamon powder from your door outward: 'I welcome abundance.'",
    },
    warning: {
      fr: "La cannelle de Chine (Cassia) contient de la coumarine : ne pas dépasser 1/2 c. à café/jour. Déconseillée à forte dose pendant la grossesse. Interagit avec les médicaments contre le diabète.",
      en: "Chinese cinnamon (Cassia) contains coumarin: do not exceed 1/2 tsp/day. Not recommended in high doses during pregnancy. Interacts with diabetes medications.",
    },
  },
  {
    id: "trefle",
    category: "abundance",
    image: "/images/plants/trefle.webp",
    name: { fr: "Trèfle Rouge", en: "Red Clover" },
    latin: "Trifolium pratense",
    emoji: "🍀",
    tagline: { fr: "Le porte-bonheur des prairies", en: "The lucky charm of meadows" },
    benefits: {
      fr: ["Attire la chance et les opportunités", "Riche en isoflavones (phyto-œstrogènes)", "Soutient l'équilibre hormonal", "Favorise la circulation"],
      en: ["Attracts luck and opportunities", "Rich in isoflavones (phytoestrogens)", "Supports hormonal balance", "Promotes circulation"],
    },
    usage: {
      fr: "Infusion : 1 à 2 c. à café de fleurs séchées pour 200 ml, 10 min. Maximum 2 tasses/jour. Usage externe en sachet porte-bonheur.",
      en: "Infusion: 1 to 2 tsp dried flowers per 200 ml, 10 min. Maximum 2 cups/day. External use in lucky sachet.",
    },
    ritual: {
      fr: "Place un sachet de trèfle dans ta poche avant un moment important en disant : 'La chance m'accompagne.'",
      en: "Place a clover sachet in your pocket before an important moment saying: 'Luck accompanies me.'",
    },
    warning: {
      fr: "Contient des phyto-œstrogènes : déconseillé en cas de cancer hormono-dépendant, d'endométriose ou de traitement hormonal. Consulter un médecin avant usage régulier.",
      en: "Contains phytoestrogens: not recommended in hormone-dependent cancer, endometriosis or hormonal treatment. Consult a doctor before regular use.",
    },
  },
  {
    id: "menthe-verte",
    category: "abundance",
    image: "/images/plants/menthe-verte.webp",
    name: { fr: "Menthe Verte", en: "Spearmint" },
    latin: "Mentha spicata",
    emoji: "💰",
    tagline: { fr: "La menthe de la prospérité", en: "The mint of prosperity" },
    benefits: {
      fr: ["Attire les opportunités financières", "Clarifie les décisions", "Favorise la communication", "Légèrement stimulante"],
      en: ["Attracts financial opportunities", "Clarifies decisions", "Promotes communication", "Mildly stimulating"],
    },
    usage: {
      fr: "Infusion : 1 c. à café de feuilles fraîches ou séchées pour 200 ml, 5 min. Plante vivante dans le bureau ou l'espace de travail.",
      en: "Infusion: 1 tsp fresh or dried leaves per 200 ml, 5 min. Living plant in the office or workspace.",
    },
    ritual: {
      fr: "Frotte des feuilles de menthe entre tes mains avant une négociation ou une demande importante.",
      en: "Rub mint leaves between your hands before a negotiation or important request.",
    },
  },
];