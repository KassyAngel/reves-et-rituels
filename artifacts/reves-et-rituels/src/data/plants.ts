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

import { plantsExtra } from "./plants-extra";

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

const plantsBase: Plant[] = [

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
  {
    id: "ashwagandha",
    category: "wellbeing",
    image: "/images/plants/ashwagandha.webp",
    name: { fr: "Ashwagandha", en: "Ashwagandha" },
    latin: "Withania somnifera",
    emoji: "🌿",
    tagline: { fr: "Le ginseng indien de la sérénité", en: "The Indian ginseng of serenity" },
    benefits: {
      fr: ["Réduit le cortisol et le stress chronique", "Améliore la résistance physique et mentale", "Favorise un sommeil réparateur", "Équilibre le système hormonal"],
      en: ["Reduces cortisol and chronic stress", "Improves physical and mental resilience", "Promotes restorative sleep", "Balances the hormonal system"],
    },
    usage: {
      fr: "Gélules : 300 à 600 mg d'extrait standardisé (KSM-66 ou Sensoril) par jour, de préférence le soir. Poudre : 1/2 à 1 c. à café dans du lait chaud. Cure de 8 semaines minimum.",
      en: "Capsules: 300 to 600 mg standardized extract (KSM-66 or Sensoril) per day, preferably in the evening. Powder: 1/2 to 1 tsp in warm milk. Minimum 8 week course.",
    },
    ritual: {
      fr: "Prépare un lait chaud à l'ashwagandha le soir et bois-le lentement en lâchant les tensions de la journée.",
      en: "Prepare a warm ashwagandha milk in the evening and drink it slowly while releasing the tensions of the day.",
    },
    warning: {
      fr: "Déconseillé pendant la grossesse et l'allaitement. Peut interagir avec les médicaments pour la thyroïde, les immunosuppresseurs et les sédatifs. Consulter un médecin si traitement en cours.",
      en: "Not recommended during pregnancy and breastfeeding. May interact with thyroid medications, immunosuppressants and sedatives. Consult a doctor if on treatment.",
    },
  },
  {
    id: "mélisse",
    category: "wellbeing",
    image: "/images/plants/melisse.webp",
    name: { fr: "Mélisse", en: "Lemon Balm" },
    latin: "Melissa officinalis",
    emoji: "🍋",
    tagline: { fr: "La citronnelle apaisante du jardin", en: "The soothing citrus herb of the garden" },
    benefits: {
      fr: ["Réduit l'anxiété et la nervosité", "Améliore la concentration et l'humeur", "Aide à l'endormissement", "Soulage les spasmes digestifs"],
      en: ["Reduces anxiety and nervousness", "Improves concentration and mood", "Aids in falling asleep", "Relieves digestive spasms"],
    },
    usage: {
      fr: "Infusion : 1 à 2 c. à café de feuilles fraîches ou séchées pour 200 ml, 5 à 10 min. 2 à 3 tasses par jour. Teinture-mère : 20 à 30 gouttes dans de l'eau.",
      en: "Infusion: 1 to 2 tsp fresh or dried leaves per 200 ml, 5 to 10 min. 2 to 3 cups per day. Tincture: 20 to 30 drops in water.",
    },
    ritual: {
      fr: "Bois une tisane de mélisse le soir en écrivant 3 choses positives de ta journée.",
      en: "Drink a lemon balm tea in the evening while writing 3 positive things from your day.",
    },
    warning: {
      fr: "Peut interagir avec les médicaments pour la thyroïde (réduit l'absorption). Déconseillée en cas d'hypothyroïdie sans avis médical.",
      en: "May interact with thyroid medications (reduces absorption). Not recommended in hypothyroidism without medical advice.",
    },
  },
  {
    id: "rhodiola",
    category: "wellbeing",
    image: "/images/plants/rhodiola.webp",
    name: { fr: "Rhodiola", en: "Rhodiola" },
    latin: "Rhodiola rosea",
    emoji: "🏔️",
    tagline: { fr: "La racine dorée des montagnes arctiques", en: "The golden root of the Arctic mountains" },
    benefits: {
      fr: ["Adaptogène puissant contre le stress", "Combat la fatigue mentale et physique", "Améliore les performances cognitives", "Réduit les symptômes du burn-out"],
      en: ["Powerful adaptogen against stress", "Fights mental and physical fatigue", "Improves cognitive performance", "Reduces burnout symptoms"],
    },
    usage: {
      fr: "Extrait standardisé (3% rosavines, 1% salidroside) : 200 à 400 mg le matin à jeun. Ne pas prendre le soir (stimulant). Cure de 6 à 8 semaines.",
      en: "Standardized extract (3% rosavins, 1% salidroside): 200 to 400 mg in the morning on an empty stomach. Do not take in the evening (stimulating). 6 to 8 week course.",
    },
    ritual: {
      fr: "Prends ta rhodiola chaque matin en te rappelant ta force intérieure et ta capacité à surmonter les défis.",
      en: "Take your rhodiola each morning reminding yourself of your inner strength and ability to overcome challenges.",
    },
    warning: {
      fr: "Déconseillée en cas de trouble bipolaire ou de traitement aux IMAO. Peut perturber le sommeil si prise le soir. Éviter en cas de grossesse.",
      en: "Not recommended in bipolar disorder or MAOI treatment. May disrupt sleep if taken in the evening. Avoid during pregnancy.",
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
  {
    id: "angélique",
    category: "protection",
    image: "/images/plants/angelique.webp",
    name: { fr: "Angélique", en: "Angelica" },
    latin: "Angelica archangelica",
    emoji: "👼",
    tagline: { fr: "La racine archangélique", en: "The archangelic root" },
    benefits: {
      fr: ["Puissante protection spirituelle", "Éloigne les mauvaises énergies", "Tonique digestif et respiratoire", "Renforce le courage intérieur"],
      en: ["Powerful spiritual protection", "Wards off negative energies", "Digestive and respiratory tonic", "Strengthens inner courage"],
    },
    usage: {
      fr: "Racine séchée : infusion légère (1/2 c. à café pour 200 ml, 10 min). Teinture : 20 à 30 gouttes dans de l'eau avant les repas. Sachets de protection.",
      en: "Dried root: light infusion (1/2 tsp per 200 ml, 10 min). Tincture: 20 to 30 drops in water before meals. Protection sachets.",
    },
    ritual: {
      fr: "Porte un morceau de racine d'angélique dans ta poche comme talisman de protection lors des journées difficiles.",
      en: "Carry a piece of angelica root in your pocket as a protection talisman during difficult days.",
    },
    warning: {
      fr: "Photo-sensibilisante : éviter l'exposition solaire après application cutanée. Contre-indiquée pendant la grossesse. Interaction possible avec les anticoagulants.",
      en: "Photo-sensitizing: avoid sun exposure after skin application. Contraindicated during pregnancy. Possible interaction with anticoagulants.",
    },
  },
  {
    id: "charbon-vegetal",
    category: "protection",
    image: "/images/plants/charbon-vegetal.webp",
    name: { fr: "Chardon-Marie", en: "Milk Thistle" },
    latin: "Silybum marianum",
    emoji: "🌸",
    tagline: { fr: "Le protecteur du foie", en: "The liver protector" },
    benefits: {
      fr: ["Protège et régénère les cellules du foie", "Aide à l'élimination des toxines", "Propriétés anti-inflammatoires puissantes", "Soutient la détoxification naturelle"],
      en: ["Protects and regenerates liver cells", "Helps eliminate toxins", "Powerful anti-inflammatory properties", "Supports natural detoxification"],
    },
    usage: {
      fr: "Extrait standardisé de silymarine : 140 à 420 mg par jour en 2 à 3 prises, pendant les repas. Cure de 4 à 8 semaines.",
      en: "Standardized silymarin extract: 140 to 420 mg per day in 2 to 3 doses, with meals. 4 to 8 week course.",
    },
    ritual: {
      fr: "Avant de prendre ta dose, pose une main sur ton foie et remercie ton corps pour tout ce qu'il filtre et transforme.",
      en: "Before taking your dose, place a hand on your liver and thank your body for everything it filters and transforms.",
    },
    warning: {
      fr: "Généralement bien toléré. Peut provoquer un léger effet laxatif au début. Déconseillé en cas d'allergie aux Astéracées.",
      en: "Generally well tolerated. May cause a mild laxative effect initially. Not recommended if allergic to Asteraceae.",
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
  {
    id: "houblon",
    category: "sleep",
    image: "/images/plants/houblon.webp",
    name: { fr: "Houblon", en: "Hops" },
    latin: "Humulus lupulus",
    emoji: "🍺",
    tagline: { fr: "Le calmant des nuits agitées", en: "The sedative for restless nights" },
    benefits: {
      fr: ["Sédatif naturel reconnu", "Réduit le temps d'endormissement", "Apaise l'irritabilité et la nervosité", "Souvent associé à la valériane pour plus d'efficacité"],
      en: ["Recognized natural sedative", "Reduces time to fall asleep", "Soothes irritability and nervousness", "Often combined with valerian for greater effect"],
    },
    usage: {
      fr: "Gélules : 60 à 500 mg d'extrait 30 min avant le coucher. Infusion : 1 à 2 c. à café de cônes séchés pour 200 ml, 10 min. Souvent en association avec valériane et mélisse.",
      en: "Capsules: 60 to 500 mg extract 30 min before bedtime. Infusion: 1 to 2 tsp dried cones per 200 ml, 10 min. Often combined with valerian and lemon balm.",
    },
    ritual: {
      fr: "Glisse un sachet de cônes de houblon séchés dans ta taie d'oreiller pour un effet sédatif par aromathérapie.",
      en: "Slip a sachet of dried hop cones into your pillowcase for a sedative aromatherapy effect.",
    },
    warning: {
      fr: "Provoque une somnolence : ne pas conduire. Déconseillé en cas de dépression (peut aggraver les symptômes), grossesse et allaitement.",
      en: "Causes drowsiness: do not drive. Not recommended in depression (may worsen symptoms), pregnancy and breastfeeding.",
    },
  },
  {
    id: "tilleul",
    category: "sleep",
    image: "/images/plants/tilleul.webp",
    name: { fr: "Tilleul", en: "Linden" },
    latin: "Tilia cordata",
    emoji: "🌳",
    tagline: { fr: "La tisane des douces nuits", en: "The tea of gentle nights" },
    benefits: {
      fr: ["Favorise la détente et le sommeil", "Réduit l'anxiété légère", "Antispasmodique naturel", "Soulage les maux de tête tensionnels"],
      en: ["Promotes relaxation and sleep", "Reduces mild anxiety", "Natural antispasmodic", "Relieves tension headaches"],
    },
    usage: {
      fr: "Infusion : 1 à 2 c. à soupe de fleurs et bractées séchées pour 200 ml d'eau à 90°C, infuser 10 min. 2 tasses par jour, dont une le soir.",
      en: "Infusion: 1 to 2 tbsp dried flowers and bracts per 200 ml water at 90°C, steep 10 min. 2 cups per day, including one in the evening.",
    },
    ritual: {
      fr: "Prépare ta tisane de tilleul en silence, assieds-toi confortablement et laisse chaque gorgée emporter les tensions.",
      en: "Prepare your linden tea in silence, sit comfortably and let each sip carry away the tensions.",
    },
    warning: {
      fr: "En usage prolongé et à haute dose, le tilleul peut avoir un effet paradoxal (excitant). Déconseillé en cas d'allergie aux plantes de la famille des Tiliacées.",
      en: "With prolonged use and at high doses, linden may have a paradoxical effect (stimulating). Not recommended if allergic to plants of the Tiliaceae family.",
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
  {
    id: "ylang-ylang",
    category: "love",
    image: "/images/plants/ylang-ylang.webp",
    name: { fr: "Ylang-Ylang", en: "Ylang-Ylang" },
    latin: "Cananga odorata",
    emoji: "💛",
    tagline: { fr: "La fleur de la sensualité tropicale", en: "The flower of tropical sensuality" },
    benefits: {
      fr: ["Aphrodisiaque naturel reconnu", "Réduit le stress et l'anxiété", "Stimule la confiance et la séduction", "Régule la tension artérielle"],
      en: ["Recognized natural aphrodisiac", "Reduces stress and anxiety", "Stimulates confidence and seduction", "Regulates blood pressure"],
    },
    usage: {
      fr: "HE en diffusion : 2 à 3 gouttes maximum (odeur puissante). Application cutanée : 1 goutte diluée dans 10 ml d'huile végétale sur la nuque ou le thorax.",
      en: "EO in diffusion: 2 to 3 drops maximum (powerful scent). Skin application: 1 drop diluted in 10 ml carrier oil on the neck or chest.",
    },
    ritual: {
      fr: "Diffuse quelques gouttes d'ylang-ylang dans ta chambre avant un moment intime en affirmant : 'Je suis désirable et aimé(e).'",
      en: "Diffuse a few drops of ylang-ylang in your room before an intimate moment affirming: 'I am desirable and loved.'",
    },
    warning: {
      fr: "Ne jamais utiliser pure sur la peau (irritante). Odeur très intense : ne pas sur-doser en diffusion (maux de tête). Déconseillée en cas de pression artérielle basse.",
      en: "Never use pure on skin (irritating). Very intense scent: do not overdose in diffusion (headaches). Not recommended with low blood pressure.",
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
  {
    id: "maca",
    category: "energy",
    image: "/images/plants/maca.webp",
    name: { fr: "Maca", en: "Maca" },
    latin: "Lepidium meyenii",
    emoji: "💪",
    tagline: { fr: "Le superaliment des Andes", en: "The superfood of the Andes" },
    benefits: {
      fr: ["Augmente l'énergie et l'endurance", "Équilibre les hormones", "Améliore la libido chez l'homme et la femme", "Réduit la fatigue chronique"],
      en: ["Increases energy and endurance", "Balances hormones", "Improves libido in men and women", "Reduces chronic fatigue"],
    },
    usage: {
      fr: "Poudre : 1 à 3 c. à café par jour dans un smoothie, yaourt ou lait chaud. Gélules : 1 500 à 3 000 mg par jour. Cure de 4 à 12 semaines.",
      en: "Powder: 1 to 3 tsp per day in a smoothie, yogurt or warm milk. Capsules: 1,500 to 3,000 mg per day. 4 to 12 week course.",
    },
    ritual: {
      fr: "Ajoute la maca à ton petit-déjeuner chaque matin en visualisant ta journée remplie d'énergie et de vitalité.",
      en: "Add maca to your breakfast each morning while visualizing your day filled with energy and vitality.",
    },
    warning: {
      fr: "Déconseillée en cas de troubles hormonaux (cancer hormono-dépendant, SOPK non stabilisé). Peut interagir avec les traitements hormonaux. Consulter un médecin si traitement en cours.",
      en: "Not recommended in hormonal disorders (hormone-dependent cancer, unstabilized PCOS). May interact with hormonal treatments. Consult a doctor if on treatment.",
    },
  },
  {
    id: "guarana",
    category: "energy",
    image: "/images/plants/guarana.webp",
    name: { fr: "Guarana", en: "Guarana" },
    latin: "Paullinia cupana",
    emoji: "🌱",
    tagline: { fr: "Le stimulant naturel d'Amazonie", en: "The natural stimulant from the Amazon" },
    benefits: {
      fr: ["Stimulant naturel puissant (caféine)", "Améliore la concentration et l'alertness", "Augmente l'endurance sportive", "Coupe-faim naturel léger"],
      en: ["Powerful natural stimulant (caffeine)", "Improves concentration and alertness", "Increases sporting endurance", "Mild natural appetite suppressant"],
    },
    usage: {
      fr: "Poudre : 1 à 2 c. à café dans une boisson le matin. Gélules : 200 à 800 mg par jour. Ne pas dépasser 400 mg de caféine totale par jour (toutes sources confondues).",
      en: "Powder: 1 to 2 tsp in a drink in the morning. Capsules: 200 to 800 mg per day. Do not exceed 400 mg total caffeine per day (all sources combined).",
    },
    ritual: {
      fr: "Prépare ta boisson au guarana avec intention, chaque gorgée t'apportant clarté et élan pour accomplir tes objectifs du jour.",
      en: "Prepare your guarana drink with intention, each sip bringing you clarity and momentum to achieve your daily goals.",
    },
    warning: {
      fr: "Contre-indiqué en cas de troubles cardiaques, hypertension, anxiété sévère, grossesse et allaitement. Ne pas combiner avec d'autres sources de caféine. Éviter après 14h (troubles du sommeil).",
      en: "Contraindicated in heart disorders, hypertension, severe anxiety, pregnancy and breastfeeding. Do not combine with other sources of caffeine. Avoid after 2pm (sleep disruption).",
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
  {
    id: "copal",
    category: "spiritual",
    image: "/images/plants/copal.webp",
    name: { fr: "Copal", en: "Copal" },
    latin: "Bursera bipinnata",
    emoji: "🌬️",
    tagline: { fr: "La résine sacrée des Mayas", en: "The sacred resin of the Mayas" },
    benefits: {
      fr: ["Élève l'énergie spirituelle rapidement", "Clarifie et purifie l'espace rituel", "Favorise la connexion aux ancêtres", "Chasse les énergies lourdes"],
      en: ["Rapidly raises spiritual energy", "Clarifies and purifies ritual space", "Promotes connection to ancestors", "Drives away heavy energies"],
    },
    usage: {
      fr: "Brûle des larmes de copal sur un charbon ardent dans un encensoir. Usage exclusivement externe. Fenêtre entrouverte obligatoire.",
      en: "Burn copal tears on a charcoal disk in a censer. Exclusively external use. Window must be ajar.",
    },
    ritual: {
      fr: "Brûle le copal en début de rituel en disant : 'Je purifie cet espace et l'ouvre à la lumière divine.'",
      en: "Burn copal at the start of a ritual saying: 'I purify this space and open it to divine light.'",
    },
    warning: {
      fr: "Usage externe uniquement. Ventiler abondamment. Déconseillé en cas d'asthme ou de pathologies respiratoires. Ne pas inhaler directement la fumée.",
      en: "External use only. Ventilate thoroughly. Not recommended for asthma or respiratory conditions. Do not inhale smoke directly.",
    },
  },
  {
    id: "myrrhe",
    category: "spiritual",
    image: "/images/plants/myrrhe.webp",
    name: { fr: "Myrrhe", en: "Myrrh" },
    latin: "Commiphora myrrha",
    emoji: "🟤",
    tagline: { fr: "La résine des pharaons et prophètes", en: "The resin of pharaohs and prophets" },
    benefits: {
      fr: ["Ancre et protège l'énergie spirituelle", "Favorise la méditation profonde", "Propriétés antiseptiques puissantes", "Connecte à la sagesse ancestrale"],
      en: ["Grounds and protects spiritual energy", "Promotes deep meditation", "Powerful antiseptic properties", "Connects to ancestral wisdom"],
    },
    usage: {
      fr: "Résine brûlée sur charbon ardent (usage spirituel). HE très diluée (0,5%) en application cutanée. Teinture de myrrhe : usage buccal dilué (gargarismes).",
      en: "Resin burned on charcoal (spiritual use). Highly diluted EO (0.5%) for skin application. Myrrh tincture: diluted oral use (gargling).",
    },
    ritual: {
      fr: "Mélange encens et myrrhe pour une purification spirituelle profonde avant une méditation ou une prière importante.",
      en: "Blend frankincense and myrrh for a deep spiritual purification before an important meditation or prayer.",
    },
    warning: {
      fr: "L'HE de myrrhe est contre-indiquée pendant la grossesse. Ne pas ingérer l'HE pure. La résine est réservée à la fumigation avec ventilation.",
      en: "Myrrh EO is contraindicated during pregnancy. Do not ingest pure EO. The resin is reserved for fumigation with ventilation.",
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
  {
    id: "lion-mane",
    category: "memory",
    image: "/images/plants/lion-mane.webp",
    name: { fr: "Crinière de Lion", en: "Lion's Mane" },
    latin: "Hericium erinaceus",
    emoji: "🍄",
    tagline: { fr: "Le champignon du cerveau", en: "The brain mushroom" },
    benefits: {
      fr: ["Stimule la production de NGF (facteur de croissance nerveux)", "Améliore la mémoire et la concentration", "Réduit l'anxiété et la dépression légère", "Protège les neurones"],
      en: ["Stimulates NGF production (nerve growth factor)", "Improves memory and concentration", "Reduces mild anxiety and depression", "Protects neurons"],
    },
    usage: {
      fr: "Extrait : 500 à 1 000 mg par jour (extrait double), de préférence le matin. Poudre : 1 à 2 c. à café dans café, thé ou smoothie. Effets notables après 4 à 6 semaines.",
      en: "Extract: 500 to 1,000 mg per day (dual extract), preferably in the morning. Powder: 1 to 2 tsp in coffee, tea or smoothie. Notable effects after 4 to 6 weeks.",
    },
    ritual: {
      fr: "Ajoute la poudre de crinière de lion à ton café du matin en visualisant tes neurones s'illuminer et se connecter.",
      en: "Add lion's mane powder to your morning coffee while visualizing your neurons lighting up and connecting.",
    },
    warning: {
      fr: "Peut provoquer des réactions allergiques chez les personnes sensibles aux champignons. Déconseillé avant une chirurgie (effets sur la coagulation). Peu de données sur la grossesse.",
      en: "May cause allergic reactions in people sensitive to mushrooms. Not recommended before surgery (effects on coagulation). Limited data during pregnancy.",
    },
  },
  {
    id: "gotu-kola",
    category: "memory",
    image: "/images/plants/gotu-kola.webp",
    name: { fr: "Gotu Kola", en: "Gotu Kola" },
    latin: "Centella asiatica",
    emoji: "🍃",
    tagline: { fr: "L'herbe de la longévité cérébrale", en: "The herb of brain longevity" },
    benefits: {
      fr: ["Améliore la mémoire et l'apprentissage", "Favorise la circulation cérébrale", "Réduit l'anxiété", "Régénère les tissus nerveux"],
      en: ["Improves memory and learning", "Promotes brain circulation", "Reduces anxiety", "Regenerates nerve tissues"],
    },
    usage: {
      fr: "Extrait : 60 à 120 mg d'asiaticosides par jour. Gélules : 500 à 1 000 mg par jour. Infusion : 1 c. à café de feuilles séchées pour 200 ml. Cure de 4 à 8 semaines.",
      en: "Extract: 60 to 120 mg asiaticoside per day. Capsules: 500 to 1,000 mg per day. Infusion: 1 tsp dried leaves per 200 ml. 4 to 8 week course.",
    },
    ritual: {
      fr: "Bois une tisane de gotu kola en méditant 5 minutes, visualisant ta clarté mentale s'affûter comme une lame.",
      en: "Drink a gotu kola tea while meditating for 5 minutes, visualizing your mental clarity sharpening like a blade.",
    },
    warning: {
      fr: "Peut être hépatotoxique à haute dose ou en usage prolongé sans pause. Contre-indiqué pendant la grossesse. Déconseillé avec des médicaments hépatotoxiques.",
      en: "May be hepatotoxic at high doses or with prolonged use without breaks. Contraindicated during pregnancy. Not recommended with hepatotoxic medications.",
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
  {
    id: "rose-musquee",
    category: "beauty",
    image: "/images/plants/rose-musquee.webp",
    name: { fr: "Rose Musquée", en: "Rosehip" },
    latin: "Rosa rubiginosa",
    emoji: "🌸",
    tagline: { fr: "L'or liquide anti-âge", en: "The liquid gold of anti-aging" },
    benefits: {
      fr: ["Réduit les rides et cicatrices", "Régénère et illumine le teint", "Riche en vitamine C naturelle et acides gras", "Traite les vergetures et taches brunes"],
      en: ["Reduces wrinkles and scars", "Regenerates and brightens complexion", "Rich in natural vitamin C and fatty acids", "Treats stretch marks and brown spots"],
    },
    usage: {
      fr: "Huile pure de rose musquée : 3 à 5 gouttes sur le visage sec le soir. Peut être mélangée à la crème habituelle. Cure de 4 à 6 semaines pour voir les résultats.",
      en: "Pure rosehip oil: 3 to 5 drops on dry face in the evening. Can be mixed with regular cream. 4 to 6 week course to see results.",
    },
    ritual: {
      fr: "Masse ton visage avec l'huile de rose musquée en effectuant des mouvements ascendants, en honorant la beauté naturelle de ton visage.",
      en: "Massage your face with rosehip oil using upward movements, honoring the natural beauty of your face.",
    },
    warning: {
      fr: "Photo-sensibilisante : appliquer de préférence le soir. Certaines personnes à peau grasse peuvent avoir des réactions acnéiques. Tester d'abord sur une petite zone.",
      en: "Photo-sensitizing: preferably apply in the evening. Some oily-skinned people may have acne reactions. Test on a small area first.",
    },
  },
  {
    id: "hamamélis",
    category: "beauty",
    image: "/images/plants/hamamelis.webp",
    name: { fr: "Hamamélis", en: "Witch Hazel" },
    latin: "Hamamelis virginiana",
    emoji: "🍂",
    tagline: { fr: "L'astringent naturel de la peau", en: "Nature's natural skin astringent" },
    benefits: {
      fr: ["Resserre les pores dilatés", "Réduit les rougeurs et l'inflammation", "Apaise les peaux à tendance acnéique", "Tonifie et purifie le teint"],
      en: ["Tightens enlarged pores", "Reduces redness and inflammation", "Soothes acne-prone skin", "Tones and purifies complexion"],
    },
    usage: {
      fr: "Eau d'hamamélis : appliquer avec un coton sur le visage propre matin et soir, comme tonique. Extrait standardisé : en gélules pour les problèmes veineux (150 à 300 mg/jour).",
      en: "Witch hazel water: apply with a cotton pad on clean face morning and evening, as a toner. Standardized extract: in capsules for venous problems (150 to 300 mg/day).",
    },
    ritual: {
      fr: "Applique l'eau d'hamamélis chaque matin en affirmant : 'Mon visage est pur, frais et rayonnant de lumière.'",
      en: "Apply witch hazel water each morning affirming: 'My face is pure, fresh and radiant with light.'",
    },
    warning: {
      fr: "Certains produits commerciaux contiennent de l'alcool : préférer les hydrolats sans alcool pour les peaux sensibles. Ne pas appliquer sur des plaies ouvertes.",
      en: "Some commercial products contain alcohol: prefer alcohol-free hydrosols for sensitive skin. Do not apply on open wounds.",
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
  {
    id: "laurier",
    category: "abundance",
    image: "/images/plants/laurier.webp",
    name: { fr: "Laurier Noble", en: "Bay Laurel" },
    latin: "Laurus nobilis",
    emoji: "🏆",
    tagline: { fr: "L'herbe de la victoire et du succès", en: "The herb of victory and success" },
    benefits: {
      fr: ["Symbole de réussite et de gloire", "Favorise la manifestation des désirs", "Stimule la clarté mentale", "Propriétés digestives et anti-inflammatoires"],
      en: ["Symbol of success and glory", "Promotes the manifestation of desires", "Stimulates mental clarity", "Digestive and anti-inflammatory properties"],
    },
    usage: {
      fr: "Feuilles séchées : en cuisine librement. Infusion légère : 1 à 2 feuilles pour 200 ml, 10 min. Rituel d'écriture : écrire un souhait sur une feuille de laurier et la brûler.",
      en: "Dried leaves: freely in cooking. Light infusion: 1 to 2 leaves per 200 ml, 10 min. Writing ritual: write a wish on a bay leaf and burn it.",
    },
    ritual: {
      fr: "Écris ton vœu sur une feuille de laurier séchée, puis brûle-la avec intention en visualisant ta réussite.",
      en: "Write your wish on a dried bay leaf, then burn it with intention while visualizing your success.",
    },
    warning: {
      fr: "L'huile essentielle de laurier est irritante : toujours diluer. Les feuilles entières en cuisine sont sûres mais ne doivent pas être ingérées (risque d'étouffement).",
      en: "Bay laurel essential oil is irritating: always dilute. Whole leaves in cooking are safe but should not be swallowed (choking risk).",
    },
  },
  {
    id: "verveine",
    category: "abundance",
    image: "/images/plants/verveine.webp",
    name: { fr: "Verveine Odorante", en: "Lemon Verbena" },
    latin: "Aloysia citrodora",
    emoji: "🌿",
    tagline: { fr: "L'herbe magique des sorcières", en: "The magical herb of witches" },
    benefits: {
      fr: ["Attire la chance et les bénédictions", "Apaise et équilibre les émotions", "Favorise la créativité", "Propriétés digestives et relaxantes"],
      en: ["Attracts luck and blessings", "Soothes and balances emotions", "Promotes creativity", "Digestive and relaxing properties"],
    },
    usage: {
      fr: "Infusion : 1 à 2 c. à café de feuilles séchées pour 200 ml d'eau à 90°C, 5 à 8 min. 2 à 3 tasses par jour. Eau florale en vaporisation.",
      en: "Infusion: 1 to 2 tsp dried leaves per 200 ml water at 90°C, 5 to 8 min. 2 to 3 cups per day. Floral water as spray.",
    },
    ritual: {
      fr: "Vaporise de l'eau de verveine dans ton espace de travail en affirmant : 'Je suis créatif(ve), inspiré(e) et chanceux(se).'",
      en: "Spray verbena water in your workspace affirming: 'I am creative, inspired and lucky.'",
    },
    warning: {
      fr: "Photo-sensibilisante : éviter l'exposition solaire après application cutanée. L'infusion est très bien tolérée. Déconseillée à forte dose pendant la grossesse.",
      en: "Photo-sensitizing: avoid sun exposure after skin application. The infusion is very well tolerated. Not recommended in high doses during pregnancy.",
    },
  },
];
export const plants: Plant[] = [
  ...plantsBase,
  ...plantsExtra,
];