import { Plant } from "./plants";

// ─── NOUVELLES PLANTES — plants-extra.ts ──────────────────────────────────────
// Ces plantes viennent en complément de plants.ts.
// Toutes sont dans LOCKED_PLANTS (pub récompensée ou premium).
// Images à placer dans : public/images/plants/
// Noms exacts des fichiers listés à la fin de ce fichier.

export const plantsExtra: Plant[] = [

  // ─── BIEN-ÊTRE & STRESS ────────────────────────────────────────────────────
  {
    id: "pissenlit",
    category: "wellbeing",
    image: "/images/plants/pissenlit.webp",
    name: { fr: "Pissenlit", en: "Dandelion" },
    latin: "Taraxacum officinale",
    emoji: "🌼",
    tagline: {
      fr: "La mauvaise herbe aux mille vertus",
      en: "The weed with a thousand virtues",
    },
    benefits: {
      fr: [
        "Draine le foie et les reins en douceur",
        "Réduit la rétention d'eau",
        "Riche en vitamines A, C et K",
        "Soutient la digestion et le transit",
      ],
      en: [
        "Gently drains liver and kidneys",
        "Reduces water retention",
        "Rich in vitamins A, C and K",
        "Supports digestion and bowel function",
      ],
    },
    usage: {
      fr: "Infusion de feuilles : 1 à 2 c. à café de feuilles séchées pour 200 ml, 10 min. Racine torréfiée : en décoction 10 min comme substitut de café. 2 tasses par jour maximum.",
      en: "Leaf infusion: 1 to 2 tsp dried leaves per 200 ml, 10 min. Roasted root: decoction 10 min as coffee substitute. Maximum 2 cups per day.",
    },
    ritual: {
      fr: "Souffle sur un pissenlit en graines et laisse partir ce qui t'alourdit, visualise chaque graine emportant un souci.",
      en: "Blow on a dandelion seed head and let go of what weighs you down, visualizing each seed carrying away a worry.",
    },
    warning: {
      fr: "Déconseillé en cas d'obstruction des voies biliaires. Peut interagir avec les diurétiques et les anticoagulants. Allergie possible (famille des Astéracées).",
      en: "Not recommended in bile duct obstruction. May interact with diuretics and anticoagulants. Possible allergy (Asteraceae family).",
    },
  },
  {
    id: "tulsi",
    category: "wellbeing",
    image: "/images/plants/tulsi.webp",
    name: { fr: "Tulsi", en: "Holy Basil" },
    latin: "Ocimum tenuiflorum",
    emoji: "🌿",
    tagline: {
      fr: "Le basilic sacré de l'Inde",
      en: "India's sacred basil",
    },
    benefits: {
      fr: [
        "Adaptogène doux contre le stress chronique",
        "Équilibre le cortisol",
        "Renforce l'immunité",
        "Favorise la clarté mentale et la sérénité",
      ],
      en: [
        "Gentle adaptogen against chronic stress",
        "Balances cortisol",
        "Strengthens immunity",
        "Promotes mental clarity and serenity",
      ],
    },
    usage: {
      fr: "Infusion : 1 c. à café de feuilles fraîches ou séchées pour 200 ml, 5 à 8 min. 2 à 3 tasses par jour. Cure de 4 à 8 semaines.",
      en: "Infusion: 1 tsp fresh or dried leaves per 200 ml, 5 to 8 min. 2 to 3 cups per day. 4 to 8 week course.",
    },
    ritual: {
      fr: "Prépare une tisane de tulsi au lever, assieds-toi en silence et dédie ta journée à la paix intérieure.",
      en: "Prepare a tulsi tea at sunrise, sit in silence and dedicate your day to inner peace.",
    },
    warning: {
      fr: "Peut interagir avec les anticoagulants. Déconseillé avant une chirurgie. Consulter un médecin en cas de traitement antidiabétique.",
      en: "May interact with anticoagulants. Not recommended before surgery. Consult a doctor if on antidiabetic treatment.",
    },
  },
  {
    id: "kava",
    category: "wellbeing",
    image: "/images/plants/kava.webp",
    name: { fr: "Kava", en: "Kava" },
    latin: "Piper methysticum",
    emoji: "🥥",
    tagline: {
      fr: "La racine apaisante du Pacifique",
      en: "The soothing root of the Pacific",
    },
    benefits: {
      fr: [
        "Réduit l'anxiété profonde",
        "Favorise la détente musculaire",
        "Améliore l'humeur et la sociabilité",
        "Utilisé depuis des millénaires en Océanie",
      ],
      en: [
        "Reduces deep anxiety",
        "Promotes muscle relaxation",
        "Improves mood and sociability",
        "Used for millennia in Oceania",
      ],
    },
    usage: {
      fr: "Extrait standardisé (kavalactones 30%) : 100 à 250 mg par prise, 1 à 2 fois par jour. Ne pas dépasser 250 mg de kavalactones/jour. Ne pas prendre quotidiennement plus de 4 semaines.",
      en: "Standardized extract (30% kavalactones): 100 to 250 mg per dose, 1 to 2 times per day. Do not exceed 250 mg kavalactones/day. Do not take daily for more than 4 weeks.",
    },
    ritual: {
      fr: "Prépare le kava dans un bol commun, bois-le lentement en laissant la tension quitter chaque muscle de ton corps.",
      en: "Prepare kava in a communal bowl, drink it slowly letting tension leave every muscle in your body.",
    },
    warning: {
      fr: "⚠️ HÉPATOTOXIQUE à haute dose ou en usage prolongé : surveillance hépatique recommandée. Contre-indiqué avec l'alcool, les médicaments hépatotoxiques et les sédatifs. Interdit chez la femme enceinte.",
      en: "⚠️ HEPATOTOXIC at high doses or prolonged use: liver monitoring recommended. Contraindicated with alcohol, hepatotoxic medications and sedatives. Forbidden during pregnancy.",
    },
  },

  // ─── PROTECTION & PURIFICATION ─────────────────────────────────────────────
  {
    id: "hysope",
    category: "protection",
    image: "/images/plants/hysope.webp",
    name: { fr: "Hysope", en: "Hyssop" },
    latin: "Hyssopus officinalis",
    emoji: "💙",
    tagline: {
      fr: "L'herbe de purification biblique",
      en: "The biblical purification herb",
    },
    benefits: {
      fr: [
        "Purification énergétique et spirituelle",
        "Expectorant naturel pour les voies respiratoires",
        "Protège contre les mauvais sorts dans la tradition",
        "Stimule et tonifie",
      ],
      en: [
        "Energetic and spiritual purification",
        "Natural expectorant for the airways",
        "Protects against ill will in tradition",
        "Stimulates and tones",
      ],
    },
    usage: {
      fr: "Infusion : 1 c. à café de sommités fleuries séchées pour 200 ml, 10 min. Maximum 2 tasses/jour, cure courte (2 semaines). Fumigation : brûler les rameaux séchés.",
      en: "Infusion: 1 tsp dried flowering tops per 200 ml, 10 min. Maximum 2 cups/day, short course (2 weeks). Fumigation: burn dried branches.",
    },
    ritual: {
      fr: "Asperge ton espace avec de l'infusion d'hysope refroidie en visualisant une lumière bleue purifiante remplir chaque coin.",
      en: "Sprinkle your space with cooled hyssop infusion visualizing a purifying blue light filling every corner.",
    },
    warning: {
      fr: "⚠️ L'huile essentielle d'hysope est épileptisante : réservée aux professionnels. La plante en infusion est contre-indiquée chez la femme enceinte, les enfants et les épileptiques.",
      en: "⚠️ Hyssop essential oil is epileptogenic: reserved for professionals. The plant as infusion is contraindicated for pregnant women, children and epileptics.",
    },
  },
  {
    id: "armoise-blanche",
    category: "protection",
    image: "/images/plants/armoise-blanche.webp",
    name: { fr: "Armoise Blanche", en: "White Mugwort" },
    latin: "Artemisia ludoviciana",
    emoji: "🌫️",
    tagline: {
      fr: "La purificatrice des Premières Nations",
      en: "The purifier of First Nations",
    },
    benefits: {
      fr: [
        "Purifie l'énergie des personnes et des lieux",
        "Alternative douce à la sauge blanche",
        "Renforce les boucliers énergétiques",
        "Facilite les transitions spirituelles",
      ],
      en: [
        "Purifies energy of people and places",
        "Gentle alternative to white sage",
        "Strengthens energetic shields",
        "Facilitates spiritual transitions",
      ],
    },
    usage: {
      fr: "Fumigation uniquement : brûle un bâton en faisant le tour de l'espace ou de la personne. Fenêtre ouverte obligatoire.",
      en: "Fumigation only: burn a stick around the space or person. Open window required.",
    },
    ritual: {
      fr: "Utilise l'armoise blanche après une période difficile pour marquer symboliquement un nouveau départ.",
      en: "Use white mugwort after a difficult period to symbolically mark a new beginning.",
    },
    warning: {
      fr: "Usage externe uniquement. Déconseillé aux asthmatiques et femmes enceintes. Ne pas inhaler directement la fumée.",
      en: "External use only. Not recommended for asthmatics and pregnant women. Do not inhale smoke directly.",
    },
  },

  // ─── SOMMEIL & RÊVES ───────────────────────────────────────────────────────
  {
    id: "escholtzia",
    category: "sleep",
    image: "/images/plants/escholtzia.webp",
    name: { fr: "Eschscholtzia", en: "California Poppy" },
    latin: "Eschscholzia californica",
    emoji: "🌸",
    tagline: {
      fr: "Le pavot californien sans opium",
      en: "The Californian poppy without opium",
    },
    benefits: {
      fr: [
        "Favorise l'endormissement naturel",
        "Réduit les réveils nocturnes",
        "Anxiolytique doux et non addictif",
        "Particulièrement efficace pour les enfants (sous avis médical)",
      ],
      en: [
        "Promotes natural sleep onset",
        "Reduces nighttime waking",
        "Mild and non-addictive anxiolytic",
        "Particularly effective for children (under medical advice)",
      ],
    },
    usage: {
      fr: "Teinture-mère : 30 à 50 gouttes dans un peu d'eau, 30 min avant le coucher. Gélules : 200 à 400 mg d'extrait sec. Non addictif, pas d'effet rebond.",
      en: "Tincture: 30 to 50 drops in a little water, 30 min before bedtime. Capsules: 200 to 400 mg dry extract. Non-addictive, no rebound effect.",
    },
    ritual: {
      fr: "Prends ton eschscholtzia dans la pénombre, allume une bougie et note l'intention que tu poses pour ta nuit.",
      en: "Take your eschscholtzia in dim light, light a candle and note the intention you set for your night.",
    },
    warning: {
      fr: "Déconseillé pendant la grossesse par précaution. Peut amplifier les effets des médicaments sédatifs. Ne pas conduire après la prise.",
      en: "Not recommended during pregnancy as a precaution. May amplify sedative medications. Do not drive after taking.",
    },
  },
  {
    id: "camomille-romaine",
    category: "sleep",
    image: "/images/plants/camomille-romaine.webp",
    name: { fr: "Camomille Romaine", en: "Roman Chamomile" },
    latin: "Chamaemelum nobile",
    emoji: "🌼",
    tagline: {
      fr: "La berceuse du soir",
      en: "The evening lullaby",
    },
    benefits: {
      fr: [
        "Calmant nerveux doux et efficace",
        "Facilite l'endormissement des enfants",
        "Apaise les angoisses du soir",
        "Soulage les douleurs digestives nocturnes",
      ],
      en: [
        "Gentle and effective nerve calmer",
        "Helps children fall asleep",
        "Soothes evening anxiety",
        "Relieves nocturnal digestive discomfort",
      ],
    },
    usage: {
      fr: "HE en diffusion : 3 à 4 gouttes le soir dans la chambre. Infusion : 1 c. à café de fleurs séchées pour 200 ml, 10 min, 30 min avant le coucher.",
      en: "EO in diffusion: 3 to 4 drops in the bedroom in the evening. Infusion: 1 tsp dried flowers per 200 ml, 10 min, 30 min before bed.",
    },
    ritual: {
      fr: "Diffuse la camomille romaine pendant que tu lis quelques pages, laissant le parfum préparer ton corps au sommeil.",
      en: "Diffuse Roman chamomile while you read a few pages, letting the scent prepare your body for sleep.",
    },
    warning: {
      fr: "Allergie possible si sensible aux Astéracées. L'HE ne doit pas être ingérée. Toujours diluer avant application cutanée.",
      en: "Possible allergy if sensitive to Asteraceae. EO should not be ingested. Always dilute before skin application.",
    },
  },

  // ─── AMOUR & ATTRACTION ────────────────────────────────────────────────────
  {
    id: "damiana",
    category: "love",
    image: "/images/plants/damiana.webp",
    name: { fr: "Damiana", en: "Damiana" },
    latin: "Turnera diffusa",
    emoji: "💕",
    tagline: {
      fr: "L'herbe de l'amour mexicaine",
      en: "The Mexican herb of love",
    },
    benefits: {
      fr: [
        "Aphrodisiaque traditionnel reconnu",
        "Stimule le désir et la sensualité",
        "Réduit l'anxiété de performance",
        "Tonique nerveux général",
      ],
      en: [
        "Recognized traditional aphrodisiac",
        "Stimulates desire and sensuality",
        "Reduces performance anxiety",
        "General nervous tonic",
      ],
    },
    usage: {
      fr: "Infusion : 1 c. à café de feuilles séchées pour 200 ml, 10 min. 1 à 2 tasses par jour. Teinture : 2 ml dans de l'eau, 2 fois par jour. Cure de 4 semaines.",
      en: "Infusion: 1 tsp dried leaves per 200 ml, 10 min. 1 to 2 cups per day. Tincture: 2 ml in water, twice a day. 4 week course.",
    },
    ritual: {
      fr: "Prépare une tisane de damiana à deux, en silence, en te connectant à la présence de l'autre.",
      en: "Prepare a damiana tea for two, in silence, connecting to the other's presence.",
    },
    warning: {
      fr: "Peut interagir avec les médicaments antidiabétiques. Déconseillé pendant la grossesse et l'allaitement. Éviter à haute dose en cas de troubles psychiatriques.",
      en: "May interact with antidiabetic medications. Not recommended during pregnancy and breastfeeding. Avoid high doses in psychiatric disorders.",
    },
  },
  {
    id: "musc-rose",
    category: "love",
    image: "/images/plants/musc-rose.webp",
    name: { fr: "Géranium Rosat", en: "Rose Geranium" },
    latin: "Pelargonium graveolens",
    emoji: "🌸",
    tagline: {
      fr: "La fleur de l'harmonie amoureuse",
      en: "The flower of loving harmony",
    },
    benefits: {
      fr: [
        "Équilibre les émotions dans la relation",
        "Attire la tendresse et la douceur",
        "Régule les hormones féminines",
        "Apaise les tensions relationnelles",
      ],
      en: [
        "Balances emotions within the relationship",
        "Attracts tenderness and gentleness",
        "Regulates female hormones",
        "Soothes relational tension",
      ],
    },
    usage: {
      fr: "HE en diffusion : 4 à 5 gouttes. Application cutanée : 2 gouttes diluées dans 10 ml d'huile végétale sur les poignets ou derrière les oreilles.",
      en: "EO in diffusion: 4 to 5 drops. Skin application: 2 drops diluted in 10 ml carrier oil on wrists or behind ears.",
    },
    ritual: {
      fr: "Applique une goutte de géranium rosat dilué sur ton cœur avant une conversation importante avec ton partenaire.",
      en: "Apply one drop of diluted rose geranium over your heart before an important conversation with your partner.",
    },
    warning: {
      fr: "Déconseillé pendant les 3 premiers mois de grossesse. Peut interagir avec les traitements hormonaux. Toujours diluer l'HE avant application cutanée.",
      en: "Not recommended during the first 3 months of pregnancy. May interact with hormonal treatments. Always dilute EO before skin application.",
    },
  },

  // ─── ÉNERGIE & VITALITÉ ────────────────────────────────────────────────────
  {
    id: "schisandra",
    category: "energy",
    image: "/images/plants/schisandra.webp",
    name: { fr: "Schisandra", en: "Schisandra" },
    latin: "Schisandra chinensis",
    emoji: "🍒",
    tagline: {
      fr: "La baie aux cinq saveurs",
      en: "The five-flavor berry",
    },
    benefits: {
      fr: [
        "Adaptogène hépatoprotecteur",
        "Améliore l'endurance physique et mentale",
        "Renforce la concentration sous pression",
        "Soutient la fonction hépatique",
      ],
      en: [
        "Hepatoprotective adaptogen",
        "Improves physical and mental endurance",
        "Strengthens focus under pressure",
        "Supports liver function",
      ],
    },
    usage: {
      fr: "Extrait standardisé (2% schizandrines) : 500 mg à 1 g par jour le matin. Baies séchées : 1 c. à café en décoction 15 min. Cure de 6 à 8 semaines.",
      en: "Standardized extract (2% schizandrins): 500 mg to 1 g per day in the morning. Dried berries: 1 tsp decoction 15 min. 6 to 8 week course.",
    },
    ritual: {
      fr: "Commence ta journée avec la schisandra en nommant à voix haute 3 choses sur lesquelles tu vas concentrer ton énergie.",
      en: "Start your day with schisandra by naming aloud 3 things you will focus your energy on.",
    },
    warning: {
      fr: "Déconseillé pendant la grossesse. Peut interagir avec certains médicaments hépatiques. Éviter en cas d'hypertension non contrôlée.",
      en: "Not recommended during pregnancy. May interact with certain liver medications. Avoid in uncontrolled hypertension.",
    },
  },
  {
    id: "moringa",
    category: "energy",
    image: "/images/plants/moringa.webp",
    name: { fr: "Moringa", en: "Moringa" },
    latin: "Moringa oleifera",
    emoji: "🥬",
    tagline: {
      fr: "L'arbre miracle de la vitalité",
      en: "The miracle tree of vitality",
    },
    benefits: {
      fr: [
        "Extrêmement riche en nutriments essentiels",
        "Combat la fatigue profonde",
        "Renforce le système immunitaire",
        "Propriétés antioxydantes exceptionnelles",
      ],
      en: [
        "Extremely rich in essential nutrients",
        "Fights deep fatigue",
        "Strengthens the immune system",
        "Exceptional antioxidant properties",
      ],
    },
    usage: {
      fr: "Poudre : 1 à 2 c. à café par jour dans un smoothie, jus ou eau. Gélules : 400 à 800 mg par jour. À consommer le matin de préférence.",
      en: "Powder: 1 to 2 tsp per day in a smoothie, juice or water. Capsules: 400 to 800 mg per day. Preferably in the morning.",
    },
    ritual: {
      fr: "Ajoute le moringa à ton smoothie matinal avec l'intention de nourrir chaque cellule de ton corps avec abondance.",
      en: "Add moringa to your morning smoothie with the intention of nourishing every cell of your body with abundance.",
    },
    warning: {
      fr: "Déconseillé pendant la grossesse (la racine est abortive ; s'en tenir aux feuilles). Peut interagir avec les médicaments antihypertenseurs et antidiabétiques.",
      en: "Not recommended during pregnancy (root is abortive; stick to leaves). May interact with antihypertensive and antidiabetic medications.",
    },
  },

  // ─── GUÉRISON SPIRITUELLE ──────────────────────────────────────────────────
  {
    id: "cedar",
    category: "spiritual",
    image: "/images/plants/cedar.webp",
    name: { fr: "Cèdre Rouge", en: "Red Cedar" },
    latin: "Thuja plicata",
    emoji: "🌲",
    tagline: {
      fr: "L'arbre sacré de la sagesse",
      en: "The sacred tree of wisdom",
    },
    benefits: {
      fr: [
        "Ancre et stabilise l'énergie spirituelle",
        "Purification profonde des espaces",
        "Connecte à la sagesse ancestrale",
        "Favorise la force intérieure",
      ],
      en: [
        "Grounds and stabilizes spiritual energy",
        "Deep purification of spaces",
        "Connects to ancestral wisdom",
        "Promotes inner strength",
      ],
    },
    usage: {
      fr: "Fumigation : brûle des copeaux ou un bâton de cèdre rouge. Toujours dans une pièce ventilée. Usage exclusivement externe.",
      en: "Fumigation: burn cedar chips or a red cedar stick. Always in a ventilated room. Exclusively external use.",
    },
    ritual: {
      fr: "Brûle le cèdre avant une méditation ou une décision importante, en demandant la guidance de tes ancêtres.",
      en: "Burn cedar before a meditation or important decision, asking for guidance from your ancestors.",
    },
    warning: {
      fr: "Usage externe uniquement. Ne pas ingérer. Déconseillé aux asthmatiques. Aérer la pièce obligatoirement.",
      en: "External use only. Do not ingest. Not recommended for asthmatics. Room ventilation is mandatory.",
    },
  },
  {
    id: "benjoin",
    category: "spiritual",
    image: "/images/plants/benjoin.webp",
    name: { fr: "Benjoin", en: "Benzoin" },
    latin: "Styrax benzoin",
    emoji: "🍯",
    tagline: {
      fr: "La résine de la douceur divine",
      en: "The resin of divine sweetness",
    },
    benefits: {
      fr: [
        "Attire la paix et la bienveillance",
        "Purifie en douceur les espaces sacrés",
        "Soutient la méditation et la prière",
        "Propriétés antiseptiques et cicatrisantes",
      ],
      en: [
        "Attracts peace and benevolence",
        "Gently purifies sacred spaces",
        "Supports meditation and prayer",
        "Antiseptic and healing properties",
      ],
    },
    usage: {
      fr: "Résine brûlée sur charbon ardent (quelques grains). Teinture de benjoin : usage cutané dilué uniquement. Toujours dans une pièce ventilée.",
      en: "Resin burned on charcoal (a few grains). Benzoin tincture: diluted skin use only. Always in a ventilated room.",
    },
    ritual: {
      fr: "Brûle le benjoin lors d'un rituel d'intention en visualisant une lumière dorée douce enveloppant ton espace.",
      en: "Burn benzoin during an intention ritual visualizing a soft golden light enveloping your space.",
    },
    warning: {
      fr: "Usage externe uniquement pour la fumigation. Déconseillé aux asthmatiques. Peut provoquer des allergies cutanées en application directe.",
      en: "External use only for fumigation. Not recommended for asthmatics. May cause skin allergies on direct application.",
    },
  },

  // ─── MÉMOIRE & CLARTÉ ──────────────────────────────────────────────────────
  {
    id: "pervenche",
    category: "memory",
    image: "/images/plants/pervenche.webp",
    name: { fr: "Petite Pervenche", en: "Lesser Periwinkle" },
    latin: "Vinca minor",
    emoji: "💜",
    tagline: {
      fr: "La fleur de la mémoire retrouvée",
      en: "The flower of recovered memory",
    },
    benefits: {
      fr: [
        "Améliore la microcirculation cérébrale",
        "Soutient la mémoire et la concentration",
        "Utilisée en gériatrie pour le déclin cognitif",
        "Propriétés vasoprotectrices",
      ],
      en: [
        "Improves brain microcirculation",
        "Supports memory and concentration",
        "Used in geriatrics for cognitive decline",
        "Vasoprotective properties",
      ],
    },
    usage: {
      fr: "Extrait standardisé de vincamine : selon prescription médicale uniquement. En phytothérapie douce : infusion légère de feuilles, 1 c. à café pour 200 ml, 1 tasse/jour maximum.",
      en: "Standardized vincamine extract: by medical prescription only. Gentle herbal use: light leaf infusion, 1 tsp per 200 ml, maximum 1 cup/day.",
    },
    ritual: {
      fr: "Pose une fleur de pervenche séchée dans ton cahier d'étude ou ton espace de travail pour renforcer la concentration.",
      en: "Place a dried periwinkle flower in your study notebook or workspace to strengthen concentration.",
    },
    warning: {
      fr: "⚠️ La vincamine (principe actif concentré) est un médicament sur ordonnance. La plante entière en tisane est plus douce mais peut interagir avec les anticoagulants et antihypertenseurs.",
      en: "⚠️ Vincamine (concentrated active compound) is a prescription drug. The whole plant as tea is gentler but may interact with anticoagulants and antihypertensives.",
    },
  },
  {
    id: "noix-de-muscade",
    category: "memory",
    image: "/images/plants/noix-de-muscade.webp",
    name: { fr: "Noix de Muscade", en: "Nutmeg" },
    latin: "Myristica fragrans",
    emoji: "🫚",
    tagline: {
      fr: "L'épice de la clarté mentale",
      en: "The spice of mental clarity",
    },
    benefits: {
      fr: [
        "Stimule la mémoire à petites doses",
        "Propriétés anti-inflammatoires cérébrales",
        "Améliore la concentration",
        "Utilisée en médecine ayurvédique",
      ],
      en: [
        "Stimulates memory in small doses",
        "Brain anti-inflammatory properties",
        "Improves concentration",
        "Used in Ayurvedic medicine",
      ],
    },
    usage: {
      fr: "En cuisine uniquement : une pincée (moins de 0,5 g) dans les plats. Jamais en grande quantité. Lait chaud : une pincée dans du lait avant de dormir.",
      en: "In cooking only: a pinch (less than 0.5 g) in dishes. Never in large quantities. Warm milk: a pinch in milk before sleep.",
    },
    ritual: {
      fr: "Ajoute une pincée de muscade à ton café ou lait du matin en visualisant ton esprit s'affûter et s'éclaircir.",
      en: "Add a pinch of nutmeg to your morning coffee or milk visualizing your mind sharpening and brightening.",
    },
    warning: {
      fr: "⚠️ TOXIQUE À HAUTE DOSE : plus de 5 g peuvent causer hallucinations, convulsions et troubles graves. Usage strictement culinaire (pincée). Interdit pendant la grossesse.",
      en: "⚠️ TOXIC AT HIGH DOSE: more than 5 g can cause hallucinations, convulsions and serious disorders. Strictly culinary use (pinch). Forbidden during pregnancy.",
    },
  },

  // ─── BEAUTÉ & SOIN ─────────────────────────────────────────────────────────
  {
    id: "camelia",
    category: "beauty",
    image: "/images/plants/camelia.webp",
    name: { fr: "Huile de Camélia", en: "Camellia Oil" },
    latin: "Camellia sinensis / japonica",
    emoji: "🌺",
    tagline: {
      fr: "Le secret de beauté japonais",
      en: "The Japanese beauty secret",
    },
    benefits: {
      fr: [
        "Pénètre profondément pour hydrater sans graisser",
        "Lisse et illumine le teint",
        "Fortifie et donne du brillant aux cheveux",
        "Riche en oméga-9 et antioxydants",
      ],
      en: [
        "Penetrates deeply to moisturize without greasing",
        "Smooths and brightens complexion",
        "Strengthens and adds shine to hair",
        "Rich in omega-9 and antioxidants",
      ],
    },
    usage: {
      fr: "Visage : 3 à 4 gouttes sur peau légèrement humide matin et soir. Cheveux : quelques gouttes en sérum sur les longueurs avant le coiffage. Peut être mélangée aux soins habituels.",
      en: "Face: 3 to 4 drops on slightly damp skin morning and evening. Hair: a few drops as serum on lengths before styling. Can be mixed with regular care.",
    },
    ritual: {
      fr: "Masse ton visage avec l'huile de camélia en remontant vers les tempes, en prenant le temps d'honorer chaque trait.",
      en: "Massage your face with camellia oil moving upward toward the temples, taking time to honor every feature.",
    },
    warning: {
      fr: "Très bien tolérée. Vérifier la qualité : choisir une huile vierge première pression à froid. Peut ne pas convenir aux peaux très acnéiques.",
      en: "Very well tolerated. Check quality: choose a virgin cold-pressed oil. May not suit very acne-prone skin.",
    },
  },
  {
    id: "morinda",
    category: "beauty",
    image: "/images/plants/morinda.webp",
    name: { fr: "Noni", en: "Noni" },
    latin: "Morinda citrifolia",
    emoji: "🍈",
    tagline: {
      fr: "Le fruit polynésien de la régénération",
      en: "The Polynesian fruit of regeneration",
    },
    benefits: {
      fr: [
        "Régénère et éclaire la peau",
        "Propriétés antioxydantes puissantes",
        "Soutient l'élasticité cutanée",
        "Utilisé en cosmétique polynésienne depuis des siècles",
      ],
      en: [
        "Regenerates and brightens skin",
        "Powerful antioxidant properties",
        "Supports skin elasticity",
        "Used in Polynesian cosmetics for centuries",
      ],
    },
    usage: {
      fr: "Jus pur : 30 ml le matin à jeun (goût fort, à commencer progressivement). Huile de noni : application cutanée directe. Sérum cosmétique : selon les indications produit.",
      en: "Pure juice: 30 ml in the morning on an empty stomach (strong taste, start gradually). Noni oil: direct skin application. Cosmetic serum: according to product instructions.",
    },
    ritual: {
      fr: "Applique l'huile de noni sur ton visage en remerciant la nature polynésienne de son pouvoir régénérateur.",
      en: "Apply noni oil to your face thanking Polynesian nature for its regenerative power.",
    },
    warning: {
      fr: "Le jus de noni peut être hépatotoxique à haute dose. Déconseillé en cas de maladie rénale (taux élevé de potassium). Consulter un médecin si traitement en cours.",
      en: "Noni juice may be hepatotoxic at high doses. Not recommended in kidney disease (high potassium levels). Consult a doctor if on treatment.",
    },
  },

  // ─── ABONDANCE & CHANCE ────────────────────────────────────────────────────
  {
    id: "alfalfa",
    category: "abundance",
    image: "/images/plants/alfalfa.webp",
    name: { fr: "Luzerne", en: "Alfalfa" },
    latin: "Medicago sativa",
    emoji: "🌾",
    tagline: {
      fr: "L'herbe de la prospérité verte",
      en: "The herb of green prosperity",
    },
    benefits: {
      fr: [
        "Attire l'abondance matérielle dans la tradition",
        "Extrêmement riche en minéraux et vitamines",
        "Renforce la vitalité générale",
        "Symbole de croissance et de fertilité",
      ],
      en: [
        "Attracts material abundance in tradition",
        "Extremely rich in minerals and vitamins",
        "Strengthens general vitality",
        "Symbol of growth and fertility",
      ],
    },
    usage: {
      fr: "Graines germées : à consommer fraîches en salade. Poudre : 1 c. à café dans un smoothie. Infusion : 1 c. à café de feuilles séchées pour 200 ml.",
      en: "Sprouted seeds: consume fresh in salad. Powder: 1 tsp in a smoothie. Infusion: 1 tsp dried leaves per 200 ml.",
    },
    ritual: {
      fr: "Place un sachet de graines de luzerne dans ton espace de travail pour attirer la prospérité et la croissance.",
      en: "Place a sachet of alfalfa seeds in your workspace to attract prosperity and growth.",
    },
    warning: {
      fr: "Contient des phyto-œstrogènes : déconseillé en cas de cancer hormono-dépendant. Déconseillé en cas de lupus (peut aggraver la maladie). Consulter un médecin avant usage régulier.",
      en: "Contains phytoestrogens: not recommended in hormone-dependent cancer. Not recommended in lupus (may worsen the disease). Consult a doctor before regular use.",
    },
  },
  {
    id: "epine-vinette",
    category: "abundance",
    image: "/images/plants/epine-vinette.webp",
    name: { fr: "Épine-vinette", en: "Barberry" },
    latin: "Berberis vulgaris",
    emoji: "🔴",
    tagline: {
      fr: "La baie dorée de la fortune",
      en: "The golden berry of fortune",
    },
    benefits: {
      fr: [
        "Attire la chance et la prospérité dans la tradition",
        "Puissant antimicrobien naturel (berbérine)",
        "Régule la glycémie",
        "Soutient la digestion et la vésicule biliaire",
      ],
      en: [
        "Attracts luck and prosperity in tradition",
        "Powerful natural antimicrobial (berberine)",
        "Regulates blood sugar",
        "Supports digestion and gallbladder",
      ],
    },
    usage: {
      fr: "Extrait de berbérine : 500 mg, 2 fois par jour avec les repas. Baies séchées : quelques baies en infusion légère (1 c. à café pour 200 ml). Cure de 4 semaines.",
      en: "Berberine extract: 500 mg, twice a day with meals. Dried berries: a few berries in light infusion (1 tsp per 200 ml). 4 week course.",
    },
    ritual: {
      fr: "Porte quelques baies séchées d'épine-vinette dans une petite bourse rouge pour attirer la chance et la vitalité.",
      en: "Carry a few dried barberries in a small red pouch to attract luck and vitality.",
    },
    warning: {
      fr: "Contre-indiqué pendant la grossesse (peut stimuler les contractions). Interactions importantes avec de nombreux médicaments (via le cytochrome P450). Consulter un médecin obligatoirement.",
      en: "Contraindicated during pregnancy (may stimulate contractions). Important interactions with many medications (via cytochrome P450). Consult a doctor.",
    },
  },

];

// ─── LISTE DES IMAGES À CRÉER ──────────────────────────────────────────────────
// Dossier : public/images/plants/
// Format recommandé : .webp (optimisé mobile)
// Résolution conseillée : 400×400 px minimum, carré ou paysage
//
// Fichiers à créer (noms exacts) :
//  1. pissenlit.webp
//  2. tulsi.webp
//  3. kava.webp
//  4. hysope.webp
//  5. armoise-blanche.webp
//  6. escholtzia.webp
//  7. camomille-romaine.webp
//  8. damiana.webp
//  9. musc-rose.webp        ← géranium rosat
// 10. schisandra.webp
// 11. moringa.webp
// 12. cedar.webp
// 13. benjoin.webp
// 14. pervenche.webp
// 15. noix-de-muscade.webp
// 16. camelia.webp
// 17. morinda.webp          ← noni
// 18. alfalfa.webp
// 19. epine-vinette.webp