// ─────────────────────────────────────────────────────────────────────────────
//  dreamKeywords — base enrichie v2
//  Ajouts v2 :
//    • ~40 nouvelles catégories (FR + EN) : corps détaillé, émotions pures,
//      toilettes, sexualité, célébrités, vêtements, couleurs, chiffres, nourriture
//      spécifique, animaux supplémentaires, lieux supplémentaires, etc.
//    • Listes de mots-clés plus larges (argot, variantes, fautes courantes)
//    • Fonction interpretDream mise à jour avec fallback intelligent
// ─────────────────────────────────────────────────────────────────────────────

  import { dreamKeywordsExtra } from "./dreamKeywordsExtra";

  export const dreamKeywords = {
  fr: [

    // ═══════════════════════════════════════════════════════════════════════════
    // ─── ÉLÉMENTS / NATURE ───────────────────────────────────────────────────
    // ═══════════════════════════════════════════════════════════════════════════
    {
      keywords: [
        "eau", "mer", "océan", "rivière", "pluie", "nager", "lac", "cascade",
        "inondation", "vague", "torrent", "source", "ruisseau", "marée",
        "piscine", "plonger", "mouillé", "brouillard", "brume", "humide",
        "flaque", "fontaine", "bassin", "boue", "aquatique", "étang",
        "sous-marin", "profondeur", "abysses", "coulée", "déluge", "flot",
        "courant", "reflux", "déborder", "baignade", "tremper",
        "rosée", "vapeur", "condensation", "nappe phréatique"
      ],
      interpretation: "L'eau symbolise tes émotions profondes et ton état intérieur. Une eau calme indique la paix et la clarté émotionnelle. Une eau agitée, une inondation ou une noyade révèle des émotions submergées qui demandent à être reconnues. Plonger dans l'eau signifie l'exploration de ton inconscient. Si la sensation est de couler et suffoquer, consulte le symbole 'noyade'.",
      image: "/images/iconekeywords/eau.webp"
    },
    {
      keywords: [
        "voler", "oiseau", "ciel", "ailes", "air", "planer", "nuage", "envol",
        "s'élever", "léviter", "flotter", "survoler", "parachute", "deltaplane",
        "liberté", "hauteur", "altitude", "décollage", "plume", "ascension",
        "vol libre", "planeur", "voler haut", "planer au-dessus", "s'envoler",
        "vautour", "aile cassée", "vol nocturne", "vent porteur", "courants",
        "thermique", "sans ailes", "voler sans effort"
      ],
      interpretation: "Voler représente un désir de liberté, la libération d'un fardeau ou le sentiment de dominer une situation. S'élever très haut peut traduire une ambition ou un éveil spirituel. Avoir du mal à voler suggère un obstacle qui freine ton élan dans la vie éveillée.",
      image: "/images/iconekeywords/vole.webp"
    },
    {
      keywords: [
        "tomber", "chute", "vide", "précipice", "glisser", "abîme", "vertige",
        "bord", "falaise", "gouffre", "s'effondrer", "dévaler", "basculer",
        "perdre l'équilibre", "trou", "descente", "trébucher", "chuter",
        "dégringoler", "plonger dans le vide", "tomber de haut", "chuter dans le vide",
        "tomber dans un trou", "sol qui s'effondre", "plafond qui s'effondre",
        "tomber sans fin", "tomber lentement", "tomber en arrière"
      ],
      interpretation: "Tomber reflète souvent une perte de contrôle, des insécurités ou une peur de l'échec face à une situation actuelle. La chute symbolise aussi le lâcher-prise nécessaire. Si tu te réveilles en sursaut, c'est le signe que ton corps traite une tension émotionnelle intense.",
      image: "/images/iconekeywords/chute.webp"
    },
    {
      keywords: [
        "feu", "incendie", "brûler", "flamme", "braise", "fumée", "fumer",
        "chaleur", "explosion", "volcan", "étincelle", "torche", "bougie",
        "brûlure", "cendres", "phénix", "bûcher", "ardeur", "pyromane",
        "crémation", "feu de camp", "cheminée", "embrasement", "feu de forêt",
        "brasier", "carbonisé", "brûlé vif", "fumée noire", "flamèche",
        "incandescent", "foyer", "fournaise", "enflammer"
      ],
      interpretation: "Le feu incarne la passion, la colère ou une transformation purificatrice. Un feu doux (bougie, foyer) symbolise la chaleur affective et l'inspiration créatrice. Un incendie dévastateur révèle une émotion intense non maîtrisée ou un changement radical en cours.",
      image: "/images/iconekeywords/feu.webp"
    },
    {
      keywords: [
        "tempête", "orage", "tonnerre", "éclair", "vent", "cyclone", "ouragan",
        "tornade", "pluie battante", "grêle", "brouillard épais", "tempête de neige",
        "rafale", "typhon", "nuage noir", "ciel menaçant", "intempérie",
        "foudre", "météo violente", "déluge", "arc-en-ciel après la pluie",
        "bourrasque", "averse", "grondement", "nuages lourds"
      ],
      interpretation: "La tempête représente une période de turbulence émotionnelle, un conflit intérieur ou une crise extérieure. L'éclair peut symboliser une révélation soudaine. Après chaque tempête vient le calme — cette épreuve est en train de forger ta résilience et ta sagesse.",
      image: "/images/iconekeywords/orage.webp"
    },
    {
      keywords: [
        "neige", "hiver", "glace", "flocon", "gel", "froid", "verglas",
        "blizzard", "igloo", "paysage enneigé", "bonhomme de neige",
        "avalanche", "blanc", "givre", "stalactite", "congère",
        "ski", "patinage", "iceberg", "banquise", "manteau neigeux",
        "neige fraîche", "tempête de neige", "enneigé", "sol gelé"
      ],
      interpretation: "La neige et la glace symbolisent une période de calme, de mise en pause ou d'engourdissement émotionnel. Un paysage enneigé peut indiquer un besoin de solitude et de recentrage. La glace représente parfois des émotions ou des relations gelées qui attendent d'être dégelées.",
      image: "/images/iconekeywords/neige.webp"
    },
    {
      keywords: [
        "plage", "sable", "bronzer", "coquillages", "bord de mer",
        "rivage", "marée", "surf", "palmier", "parasol", "vacances",
        "horizon", "coucher de soleil sur mer", "crabe", "méduse", "corail",
        "nager en mer", "baignade", "bikini", "château de sable",
        "serviette de plage", "vague de sable", "rive", "bord de l'eau",
        "galets", "dune", "littoral", "côte"
      ],
      interpretation: "La plage représente la frontière entre le conscient (la terre) et l'inconscient (la mer). Un bord de mer calme invite à l'introspection et au repos. Des vagues puissantes suggèrent des émotions à apprivoiser. La plage est aussi un symbole de transitions et de nouveaux horizons.",
      image: "/images/iconekeywords/plage.webp"
    },
    {
      keywords: [
        "désert", "sable chaud", "soif", "solitude", "oasis", "mirage",
        "dunes", "chaleur accablante", "caravane", "chameau", "aridité",
        "espace vide", "errer", "perdu dans le désert", "cactus",
        "sécheresse", "steppe", "savane", "terre aride", "sol craquelé",
        "horizon sans fin", "se perdre", "brûlant", "assoiffé"
      ],
      interpretation: "Le désert symbolise un sentiment de vide, d'isolement ou de traversée d'une période aride dans ta vie. Trouver une oasis indique qu'une ressource vitale ou un soutien inattendu est proche. Le désert invite aussi à la méditation, au dépouillement et à la découverte de soi.",
      image: "/images/iconekeywords/desert.webp"
    },
    {
      keywords: [
        "montagne", "sommet", "escalader", "pic", "altitude", "colline",
        "randonnée", "rocher", "falaise", "alpinisme", "vue du sommet",
        "sentier", "vallée", "col", "glacier", "refuge", "pic enneigé",
        "grimper", "ascension", "bivouac", "via ferrata", "crête",
        "versant", "flanc", "pente", "terrain escarpé", "grimpeur",
        "câble", "mousqueton", "cordée"
      ],
      interpretation: "La montagne symbolise un défi à surmonter ou un objectif à atteindre. L'escalader avec courage reflète ta capacité à persévérer. Atteindre le sommet indique une victoire prochaine. Être bloqué à mi-chemin suggère d'identifier ce qui freine ta progression.",
      image: "/images/iconekeywords/montagne.webp"
    },
    {
      keywords: [
        "forêt", "arbres", "bois", "jungle", "feuilles", "branches",
        "sous-bois", "champignon", "racines", "lierre", "mousse", "clairière",
        "chemin forestier", "arbres gigantesques", "forêt enchantée",
        "branche cassée", "chêne", "sapin", "séquoia", "bambou",
        "forêt tropicale", "mangrove", "taillis", "lisière",
        "forêt sombre", "ombre des arbres", "tronc", "écorce",
        "bûcheron", "nuit en forêt", "perdu dans les bois"
      ],
      interpretation: "La forêt représente l'inconscient, le mystère et la croissance profonde. Se perdre en forêt suggère une confusion intérieure ou une quête de direction. Une forêt lumineuse avec une clairière invite à explorer ton moi profond. Les racines symbolisent tes origines et tes fondations.",
      image: "/images/iconekeywords/foret.webp"
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // ─── CORPS / PARTIES DÉTAILLÉES (NOUVEAU) ────────────────────────────────
    // ═══════════════════════════════════════════════════════════════════════════
    {
      keywords: [
        "orteil", "orteils", "pied", "pieds", "cheville", "talon", "plante du pied",
        "ongle de pied", "cors", "ampoule", "marcher pieds nus", "pied blessé",
        "pied qui saigne", "entorse du pied", "hallux", "doigt de pied",
        "semelle", "voûte plantaire", "crampe au pied"
      ],
      interpretation: "Les pieds et les orteils symbolisent ton ancrage à la réalité, ta stabilité et ta progression dans la vie. Un pied blessé ou douloureux indique une difficulté à avancer ou à te sentir soutenu. Un orteil cassé peut signaler qu'un petit obstacle te ralentit plus que prévu. Marcher pieds nus évoque un retour à l'essentiel et à l'authenticité.",
      image: "/images/iconekeywords/jambes.webp"
    },
    {
      keywords: [
        "ventre", "estomac", "abdomen", "nombril", "intestin", "digestion",
        "mal au ventre", "douleur abdominale", "gonflement", "ventre qui grossit",
        "tripes", "boyaux", "organes", "foie", "rate", "pancréas",
        "crampe abdominale", "nausée", "avoir des papillons dans le ventre"
      ],
      interpretation: "Le ventre représente tes instincts, tes intuitions profondes et ta capacité à 'digérer' les expériences de vie. Des douleurs abdominales en rêve signalent souvent une situation difficile à accepter ou à intégrer. Le nombril symbolise le lien originel. 'Avoir des papillons' évoque une excitation ou une anxiété anticipatoire.",
      image: "/images/iconekeywords/ventre.webp"
    },
    {
      keywords: [
        "dos", "colonne vertébrale", "vertèbre", "nuque", "épaule", "omoplate",
        "mal de dos", "dos cassé", "courbature", "rachis", "lombaire",
        "douleur dans le dos", "dos tordu", "hernie", "scoliose",
        "porter sur le dos", "charge sur les épaules", "fardeau"
      ],
      interpretation: "Le dos symbolise le soutien, la charge que tu portes et ta capacité à 'tenir bon'. Un mal de dos intense en rêve indique que tu te sens surchargé de responsabilités. Un dos cassé ou brisé évoque un épuisement profond ou un sentiment d'être à bout. La nuque représente la rigidité ou la flexibilité face aux situations.",
      image: "/images/iconekeywords/dos.webp"
    },
    {
      keywords: [
        "cou", "gorge", "larynx", "voix", "parler", "ne pas pouvoir parler",
        "voix qui s'éteint", "gorge serrée", "étrangler", "étouffer",
        "avaler", "déglutir", "mal à la gorge", "cri muet", "silencieux",
        "bâillon", "voix coupée", "aphonie", "muet"
      ],
      interpretation: "La gorge et le cou symbolisent l'expression de soi et la communication. Ne pas pouvoir parler ou crier en rêve est très fréquent : cela traduit un sentiment de ne pas être écouté ou une difficulté à exprimer une vérité importante. Une gorge serrée reflète une émotion retenue. Ce rêve t'invite à trouver ta voix.",
      image: "/images/iconekeywords/gorge.webp"
    },
    {
      keywords: [
        "cheveux", "chevelure", "coiffure", "cheveux qui tombent", "calvitie",
        "perte de cheveux", "cheveux longs", "cheveux courts", "se faire couper les cheveux",
        "coiffeur", "teinture", "mèche", "tresse", "chignon", "cheveux blancs",
        "barbe", "moustache", "poils", "épilation", "rasage", "crâne chauve"
      ],
      interpretation: "Les cheveux symbolisent la vitalité, l'identité et la force personnelle. Les voir tomber en grande quantité évoque une peur de perdre sa puissance, son attractivité ou son contrôle. Se faire couper les cheveux représente un changement volontaire d'identité ou une nouvelle phase de vie. Des cheveux blancs symbolisent la sagesse ou l'inquiétude.",
      image: "/images/iconekeywords/cheveux.webp"
    },
    {
      keywords: [
        "visage", "traits du visage", "rides", "cicatrice sur le visage",
        "bouton", "acné", "grain de beauté", "tache", "visage déformé",
        "visage qui change", "masque", "grimace", "sourire", "pleurer",
        "rougir", "pâlir", "maquillage", "peeling", "brûlure au visage"
      ],
      interpretation: "Le visage représente l'identité, l'image que tu projettes au monde et la façon dont tu te perçois. Un visage déformé ou méconnaissable signale une crise d'identité ou une période de transformation profonde. Porter un masque indique que tu caches une partie de toi-même. Des boutons ou imperfections reflètent une inquiétude liée au regard des autres.",
      image: "/images/iconekeywords/visage.webp"
    },
    {
      keywords: [
        "oreille", "oreilles", "entendre", "ne pas entendre", "surdité",
        "acouphène", "bruit dans les oreilles", "chuchotement", "murmure",
        "voix dans la tête", "écouter", "mal à l'oreille", "oreille qui saigne",
        "tympan", "ouïe", "sourd"
      ],
      interpretation: "Les oreilles symbolisent ta capacité à écouter — les autres, ton intuition, ou des vérités difficiles. Ne pas entendre en rêve peut indiquer que tu ignores un message important. Des acouphènes ou bruits représentent des pensées parasites difficiles à faire taire. Un chuchotement à l'oreille évoque souvent un secret ou une guidance intérieure.",
      image: "/images/iconekeywords/oreille.webp"
    },
    {
      keywords: [
        "nez", "sentir", "odeur", "odorat", "nez qui saigne", "epistaxis",
        "renifler", "flairer", "mauvaise odeur", "bonne odeur", "parfum",
        "puanteur", "odeur suspecte", "puer", "nez cassé", "nez bouché",
        "rhume", "éternuer"
      ],
      interpretation: "Le nez et l'odorat symbolisent l'intuition et la capacité à 'sentir' les situations avant qu'elles ne se révèlent. Un nez qui saigne indique une pression émotionnelle ou physique trop forte. Sentir une odeur désagréable en rêve suggère qu'une situation ou une relation commence à se dégrader. Un parfum envoûtant évoque la nostalgie ou le désir.",
      image: "/images/iconekeywords/nez.webp"
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // ─── ÉMOTIONS PURES (NOUVEAU) ─────────────────────────────────────────────
    // ═══════════════════════════════════════════════════════════════════════════
    {
      keywords: [
        "colère", "rage", "fureur", "crier", "hurler", "exploser",
        "frapper", "détruire", "violence intérieure", "énervement",
        "frustration", "agacement", "impatience", "hors de soi",
        "perdre son calme", "dispute", "engueulade", "s'emporter",
        "se mettre en colère", "cris", "tempête intérieure"
      ],
      interpretation: "La colère en rêve est souvent une émotion refoulée dans la vie éveillée qui cherche à s'exprimer. Elle peut signaler une injustice non dite, une frustration accumulée ou une limite personnelle franchie. Exprimer sa rage dans un rêve est libérateur — c'est l'inconscient qui évacue. Ce rêve t'invite à identifier ce qui t'affecte vraiment et à l'exprimer sainement.",
      image: "/images/iconekeywords/colere.webp"
    },
    {
      keywords: [
        "peur", "terreur", "angoisse", "anxiété", "panique", "effroi",
        "cauchemar", "phobies", "crainte", "trembler de peur", "paralysé par la peur",
        "horreur", "frayeur", "avoir peur", "sentiment de danger",
        "pressentiment", "mauvaise intuition", "sueurs froides",
        "coeur qui bat", "souffle coupé par la peur"
      ],
      interpretation: "La peur en rêve est le signal le plus direct de l'inconscient : quelque chose dans ta vie éveillée réclame ton attention. L'objet de la peur révèle ce que tu évites ou ce que tu n'as pas encore accepté. La répétition d'un cauchemar indique qu'une situation non résolue persiste. Affronter la peur dans le rêve est un acte de courage qui se prolonge dans la réalité.",
      image: "/images/iconekeywords/peur.webp"
    },
    {
      keywords: [
        "honte", "humiliation", "honteux", "rouge de honte", "gêne",
        "embarrassé", "mortifié", "ridiculisé", "se moquer de moi",
        "moquerie", "dérision", "être la risée", "culpabilité",
        "remords", "regret", "mauvaise conscience", "se sentir coupable",
        "faute", "confession"
      ],
      interpretation: "La honte en rêve touche à l'image de soi et à la peur du jugement. Se faire moquer ou humilier évoque une blessure d'estime de soi ou une peur de ne pas être accepté tel que l'on est. La culpabilité signale une action passée qui demande à être regardée avec bienveillance et pardonnée. Ces rêves t'invitent à te traiter avec plus de douceur.",
      image: "/images/iconekeywords/honte.webp"
    },
    {
      keywords: [
        "tristesse", "pleurer", "larmes", "chagrin", "déprime", "mélancolie",
        "deuil", "désespoir", "abattement", "morosité", "broyer du noir",
        "sanglots", "effondrement", "solitude profonde", "vide intérieur",
        "sentiment d'abandon", "cafard", "blues", "avoir le cœur lourd",
        "pleurer à chaudes larmes"
      ],
      interpretation: "La tristesse en rêve est souvent une tristesse refoulée qui cherche à être exprimée. Pleurer dans un rêve est une libération cathartique précieuse — laisse-toi aller. Le chagrin non exprimé dans la vie éveillée se manifeste ici pour être intégré. Ce rêve est une invitation à accorder plus d'espace à tes émotions et à ne pas minimiser ta souffrance.",
      image: "/images/iconekeywords/tristesse.webp"
    },
    {
      keywords: [
        "joie", "bonheur", "euphorie", "exaltation", "éclater de rire",
        "rire aux éclats", "rigoler", "s'amuser", "être heureux",
        "légèreté", "insouciance", "célébration", "fête", "jubilation",
        "enthousiasme", "excitation positive", "béatitude", "extase",
        "sérénité", "paix intérieure", "contentement"
      ],
      interpretation: "La joie en rêve est un cadeau de l'inconscient : elle te rappelle ce qui compte vraiment pour toi. Une fête ou un éclat de rire signale que ton âme a besoin de légèreté et de plaisir. Une béatitude profonde peut être l'expression d'un éveil ou d'un alignement intérieur. Ces rêves t'invitent à cultiver davantage ces moments de joie dans ta vie quotidienne.",
      image: "/images/iconekeywords/joie.webp"
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // ─── TOILETTES / GÊNE CORPORELLE (NOUVEAU) ───────────────────────────────
    // ═══════════════════════════════════════════════════════════════════════════
    {
      keywords: [
        "toilettes", "wc", "uriner", "faire pipi", "faire ses besoins",
        "défécation", "selle", "constipé", "diarrhée", "toilettes sales",
        "toilettes publiques", "pas de porte aux toilettes", "toilettes cassées",
        "chercher des toilettes", "ne pas trouver les toilettes",
        "faire dans son pantalon", "accident pipi", "accident urinaire", "énurésie",
        "se soulager", "se retenir", "besoin urgent"
      ],
      interpretation: "Rêver de toilettes est l'un des rêves les plus communs — et souvent tabou. Il symbolise le besoin de se libérer d'une charge émotionnelle, d'une toxine psychique ou d'une situation dont tu veux 'te débarrasser'. Des toilettes introuvables ou sales reflètent une difficulté à trouver un espace privé pour traiter tes émotions. Ce rêve t'invite à laisser partir ce qui ne t'appartient plus.",
      image: "/images/iconekeywords/toilettes.webp"
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // ─── SEXUALITÉ / INTIMITÉ (NOUVEAU) ──────────────────────────────────────
    // ═══════════════════════════════════════════════════════════════════════════
    {
      keywords: [
        "sexe", "sexuel", "faire l'amour", "rapport", "érotique", "désir charnel",
        "attirance physique", "nu", "corps dénudé", "intimité physique",
        "caresses intimes", "plaisir", "orgasme", "excitation",
        "fantasme", "séduction physique", "relation intime", "sensualité",
        "tromperie physique", "infidélité charnelle", "partenaire intime"
      ],
      interpretation: "Les rêves à caractère sexuel sont très fréquents et ne signifient pas nécessairement un désir littéral. Ils expriment souvent un besoin de connexion profonde, de fusion avec un aspect de soi représenté par la personne dans le rêve. Une relation intime avec un inconnu peut symboliser l'intégration d'une qualité que tu désires développer. Ces rêves t'invitent à explorer tes désirs et tes besoins affectifs profonds.",
      image: "/images/iconekeywords/intime.webp"
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // ─── VÊTEMENTS / APPARENCE (NOUVEAU) ─────────────────────────────────────
    // ═══════════════════════════════════════════════════════════════════════════
    {
      keywords: [
        "vêtements", "habits", "se vêtir", "s'habiller", "déshabiller",
        "robe", "costume", "pantalon", "chemise", "manteau", "imperméable",
        "chaussures", "bottes", "sandales", "basket", "talon",
        "vêtements sales", "vêtements déchirés", "mauvaise tenue",
        "uniforme", "déguisement", "costume de scène", "tenue inappropriée",
        "se retrouver en pyjama", "tenue formelle", "mode", "styliste"
      ],
      interpretation: "Les vêtements représentent l'image que tu projettes au monde et la façon dont tu veux être perçu. Se retrouver en tenue inappropriée ou déchirée reflète une peur du jugement ou un sentiment de ne pas être à la hauteur. Un déguisement indique que tu joues un rôle. Des vêtements neufs annoncent un nouveau départ ou une nouvelle façon d'être.",
      image: "/images/iconekeywords/vetements.webp"
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // ─── CÉLÉBRITÉS / PERSONNAGES CONNUS (NOUVEAU) ───────────────────────────
    // ═══════════════════════════════════════════════════════════════════════════
    {
      keywords: [
        "célébrité", "star", "acteur", "actrice", "chanteur", "chanteuse",
        "personnage connu", "personnage public", "vedette", "idole",
        "influenceur", "rêver d'une célébrité", "personnage de série",
        "héros de film", "personnage fictif", "icône", "figure publique",
        "politicien", "président", "roi", "reine", "mannequin"
      ],
      interpretation: "Rêver d'une célébrité ne parle généralement pas de cette personne mais de ce qu'elle représente pour toi — une qualité que tu admires ou désires développer. Un acteur peut symboliser ta capacité à jouer plusieurs rôles. Un chanteur évoque ta créativité et ton besoin de t'exprimer. Un politicien peut représenter l'autorité ou la justice dans ta vie.",
      image: "/images/iconekeywords/celebrite.webp"
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // ─── CHIFFRES / NOMBRES (NOUVEAU) ────────────────────────────────────────
    // ═══════════════════════════════════════════════════════════════════════════
    {
      keywords: [
        "chiffre", "nombre", "numéro", "trois", "sept", "douze", "onze",
        "treize", "quarante", "cent", "mille", "zéro", "un", "deux",
        "quatre", "cinq", "six", "huit", "neuf", "dix",
        "calcul", "addition", "multiplication", "compter", "décompte",
        "date", "heure", "année", "chiffre important"
      ],
      interpretation: "Les chiffres en rêve portent souvent une signification symbolique ou personnelle. Le 3 représente la trinité et la création. Le 7 symbolise la perfection et le spirituel. Le 13 n'est pas toujours négatif — il peut signaler une transformation. Un nombre qui revient avec insistance est un message de ton inconscient à ne pas ignorer — note-le à ton réveil.",
      image: "/images/iconekeywords/chiffres.webp"
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // ─── OBJETS MÉNAGERS / QUOTIDIEN (NOUVEAU) ───────────────────────────────
    // ═══════════════════════════════════════════════════════════════════════════
    {
      keywords: [
        "table", "chaise", "canapé", "lit", "matelas", "oreiller", "couette",
        "réfrigérateur", "frigo", "four", "micro-ondes", "machine à laver",
        "aspirateur", "balai", "vaisselle", "casserole", "poêle",
        "robinet", "évier", "douche", "baignoire", "miroir salle de bain",
        "armoire", "placard", "tiroir", "meuble"
      ],
      interpretation: "Les objets du quotidien en rêve représentent les aspects routiniers et fondamentaux de ta vie. Un lit ou matelas symbolise le repos, la vie intime et la récupération. Un réfrigérateur vide évoque un manque affectif ou matériel. Un robinet qui fuit représente une perte d'énergie ou de ressources. Ces rêves invitent à examiner le confort et la sécurité dans ton environnement quotidien.",
      image: "/images/iconekeywords/meubles.webp"
    },
    {
      keywords: [
        "télécommande", "télévision", "télé", "regarder la télé", "écran de télé",
        "émission", "film à la télé", "chaîne", "zapper", "télécommande perdue",
        "télé qui s'éteint", "image floue", "bruit parasite", "antenne",
        "série", "documentaire", "journal télévisé", "publicité"
      ],
      interpretation: "La télévision en rêve représente ton rapport aux informations, aux influences extérieures et aux histoires que tu te racontes sur ta vie. Zapper sans s'arrêter évoque une difficulté à fixer son attention ou à s'engager. Une télé qui s'éteint brusquement signale une information que tu refuses d'entendre. Un programme angoissant reflète tes préoccupations actuelles.",
      image: "/images/iconekeywords/television.webp"
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // ─── NOURRITURE SPÉCIFIQUE (NOUVEAU) ─────────────────────────────────────
    // ═══════════════════════════════════════════════════════════════════════════
    {
      keywords: [
        "gâteau", "pâtisserie", "tarte", "croissant", "brioche", "boulangerie",
        "chocolat", "bonbon", "sucreries", "confiserie", "dessert",
        "crème glacée", "glace", "sorbet", "confiture", "miel",
        "douceur", "sucré", "friandise", "se régaler", "festin sucré"
      ],
      interpretation: "Les sucreries et les gâteaux en rêve symbolisent la douceur de la vie, les plaisirs et les récompenses. Se régaler de chocolat ou de pâtisseries évoque un besoin d'affection, de consolation ou de récompense. Un gâteau d'anniversaire représente les étapes de la vie et la célébration. Une sucrerie refusée ou avariée suggère que tu te prives de plaisirs légitimes.",
      image: "/images/iconekeywords/gateau.webp"
    },
    {
      keywords: [
        "viande", "poisson", "poulet", "bœuf", "agneau", "porc", "saumon",
        "thon", "crevettes", "fruits de mer", "huître", "homard",
        "steak", "barbecue", "grillé", "saignant", "bien cuit",
        "charcuterie", "saucisse", "jambon", "pâté"
      ],
      interpretation: "La viande et le poisson en rêve représentent la nourriture de l'âme, la force vitale et les désirs fondamentaux. Une viande crue peut symboliser un instinct primaire ou une émotion brute non traitée. Manger avec appétit indique une vitalité et une ambition en bon état. Un poisson symbolise souvent la spiritualité, l'abondance ou des ressources cachées.",
      image: "/images/iconekeywords/poisson.webp"
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // ─── ANIMAUX SUPPLÉMENTAIRES (NOUVEAU) ───────────────────────────────────
    // ═══════════════════════════════════════════════════════════════════════════
    {
      keywords: [
        "rat", "souris", "rongeur", "mulot", "hamster", "cochon d'inde",
        "rat géant", "invasion de rats", "rat qui court", "rat mort",
        "souricière", "piège", "grignoter", "prolifération"
      ],
      interpretation: "Le rat ou la souris en rêve évoque souvent des peurs liées à la survie, à la trahison ou à des pensées parasites difficiles à contrôler. Une invasion de rats représente des problèmes qui se multiplient ou des inquiétudes qui envahissent ton esprit. Un rat apprivoisé peut symboliser ta capacité à transformer une peur en quelque chose de gérable.",
      image: "/images/iconekeywords/rat.webp"
    },
    {
      keywords: [
        "grenouille", "crapaud", "batracien", "coassement", "mare",
        "métamorphose", "têtard", "grenouille qui saute", "peur des grenouilles",
        "lézard", "salamandre", "gecko", "iguane", "reptile",
        "crocodile", "alligator"
      ],
      interpretation: "La grenouille symbolise la transformation, l'adaptabilité et le renouveau — elle vit entre deux mondes (eau et terre). Un crapaud peut représenter ce qui est repoussant mais précieux une fois accepté (le conte du prince crapaud). Le lézard évoque la survie instinctive et la capacité à régénérer ce qui a été perdu.",
      image: "/images/iconekeywords/grenouille.webp"
    },
    {
      keywords: [
        "vache", "taureau", "mouton", "agneau", "cochon", "porc", "lapin",
        "canard", "oie", "poule", "coq", "ferme", "animaux de ferme",
        "pré", "pâturage", "troupeau", "berger", "corrida", "bétail"
      ],
      interpretation: "Les animaux de ferme symbolisent les aspects domestiques, la prospérité et les ressources naturelles. La vache représente l'abondance et la maternité nourricière. Le taureau incarne la force brute et la virilité. Le mouton évoque la conformité ou au contraire le besoin de se démarquer du troupeau. La ferme représente tes fondations, tes racines et ce qui te nourrit.",
      image: "/images/iconekeywords/ferme.webp"
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // ─── LIEUX SUPPLÉMENTAIRES (NOUVEAU) ─────────────────────────────────────
    // ═══════════════════════════════════════════════════════════════════════════
    {
      keywords: [
        "hôtel", "chambre d'hôtel", "réception", "concierge", "hall d'hôtel",
        "ascenseur d'hôtel", "room service", "minibar", "piscine d'hôtel",
        "auberge", "pension", "chambre d'hôtes", "gîte", "lodge",
        "suite", "chambre standard"
      ],
      interpretation: "L'hôtel représente un espace transitoire, une période de passage ou d'attente dans ta vie. Une chambre d'hôtel confortable symbolise une transition bien vécue. Une chambre sale ou inconfortable reflète un malaise dans une situation temporaire. L'ascenseur de l'hôtel symbolise les montées et descentes de ton parcours actuel.",
      image: "/images/iconekeywords/hotel.webp"
    },
    {
      keywords: [
        "bibliothèque", "livres", "rayonnages", "savoir", "archives",
        "salle de lecture", "bibliothécaire", "manuscrit", "parchemin",
        "livre ancien", "encyclopédie", "dictionnaire", "atlas",
        "livre interdit", "livre secret", "tome", "volume"
      ],
      interpretation: "La bibliothèque est le temple du savoir en rêve. Elle symbolise l'accès à des connaissances, des ressources ou des souvenirs importants. Un livre que tu ne peux pas lire indique une information encore inaccessible. Un livre interdit ou secret évoque une vérité cachée que tu es prêt à découvrir. Ces rêves t'invitent à approfondir ta quête de connaissance.",
      image: "/images/iconekeywords/bibliotheque.webp"
    },
    {
      keywords: [
        "marché", "supermarché", "épicerie", "faire les courses", "chariot",
        "rayons", "caisse", "faire la queue", "acheter", "vendre",
        "marchand", "bazar", "marché aux puces", "brocante",
        "centre commercial", "vitrine", "shopping", "soldes"
      ],
      interpretation: "Le supermarché ou le marché représente les choix de vie, les ressources disponibles et ta capacité à 'faire provision' pour l'avenir. Des rayons vides évoquent un sentiment de manque ou d'anxiété. Ne pas pouvoir payer à la caisse reflète une peur de la précarité. Un marché abondant symbolise les opportunités et l'abondance qui t'entourent.",
      image: "/images/iconekeywords/marche.webp"
    },
    {
      keywords: [
        "théâtre", "scène", "spectacle", "représentation", "acteur sur scène",
        "coulisses", "rideau", "public", "applaudissements", "sifflets",
        "trou de mémoire", "oublier son texte", "premier rôle",
        "figuration", "mise en scène", "improvisation", "pièce de théâtre"
      ],
      interpretation: "Le théâtre symbolise le sentiment que ta vie est une scène où tu joues un rôle. Oublier ton texte ou manquer d'entrée reflète une peur de ne pas être à la hauteur dans une situation sociale ou professionnelle. Être dans les coulisses indique que tu observes sans participer. Monter sur scène et être applaudi annonce une reconnaissance méritée.",
      image: "/images/iconekeywords/theatre.webp"
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // ─── SPORT / ACTIVITÉ PHYSIQUE ────────────────────────────────────────────
    // ═══════════════════════════════════════════════════════════════════════════
    {
      keywords: [
        "sport", "football", "foot", "ballon", "but", "match", "terrain",
        "équipe", "gardien", "penalty", "arbitre", "coupe du monde",
        "championnat", "stade", "tribune", "supporter", "victoire sportive",
        "défaite sportive", "score", "mi-temps", "corner", "coup franc",
        "tir au but", "prolongations", "carton rouge", "carton jaune"
      ],
      interpretation: "Le football en rêve symbolise l'esprit d'équipe, la compétition et ta capacité à atteindre tes buts. Marquer un but représente une réussite imminente ou le sentiment d'enfin y arriver. Rater un penalty reflète une peur de l'échec au moment crucial. L'équipe autour de toi évoque tes soutiens dans la vie réelle.",
      image: "/images/iconekeywords/sport.webp"
    },
    {
      keywords: [
        "course", "courir", "marathon", "sprint", "athlétisme", "runner",
        "jogging", "piste", "finish", "ligne d'arrivée", "départ", "chrono",
        "endurance", "vitesse", "essoufflement", "courir vite", "courir lentement",
        "ne pas pouvoir courir", "course à pied", "trail", "jambes lourdes en course",
        "courir dans la boue", "courir en rêve", "ne pas avancer"
      ],
      interpretation: "Courir en rêve exprime ton rapport à l'effort et à la progression. Courir librement et vite symbolise confiance en soi et élan vital. Ne pas pouvoir courir ou avancer sur place révèle un sentiment de blocage ou d'impuissance dans une situation de vie. Franchir la ligne d'arrivée annonce une réussite méritée.",
      image: "/images/iconekeywords/sport.webp"
    },
    {
      keywords: [
        "natation", "nager", "piscine", "crawl", "brasse", "dos crawlé",
        "papillon", "plongeon", "bassin", "couloir de nage", "eau claire",
        "nager sous l'eau", "apnée", "nageur", "compétition de natation",
        "aquatique", "eau froide", "eau chaude", "nager seul", "noyade en piscine"
      ],
      interpretation: "Nager en rêve symbolise ta capacité à naviguer dans tes émotions. Nager avec aisance indique que tu gères bien ta vie affective. Nager contre le courant reflète un effort à contresens d'une situation. Se noyer dans la piscine signale que les émotions te dépassent. L'eau claire annonce une période de lucidité.",
      image: "/images/iconekeywords/sport.webp"
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // ─── PERSONNES / RELATIONS ────────────────────────────────────────────────
    // ═══════════════════════════════════════════════════════════════════════════
    {
      keywords: [
        "famille", "père", "papa", "mère", "maman", "frère", "sœur",
        "parents", "grands-parents", "grand-père", "grand-mère", "papi", "mamie",
        "oncle", "tante", "cousin", "cousine", "enfant", "fils", "fille",
        "mari", "femme", "conjoint", "belle-famille", "foyer",
        "maison familiale", "réunion de famille", "héritage", "ancêtres",
        "généalogie", "fratrie", "aîné", "benjamin", "parent décédé",
        "famille recomposée", "demi-frère", "demi-sœur"
      ],
      interpretation: "Rêver de membres de ta famille reflète tes liens affectifs profonds et les dynamiques familiales non résolues. Ton père symbolise l'autorité et la protection ; ta mère, l'amour inconditionnel et le soin. Tes frères et sœurs incarnent la rivalité ou la solidarité. Ces rêves invitent souvent à la réconciliation ou à l'acceptation.",
      image: "/images/iconekeywords/famille.webp"
    },
    {
      keywords: [
        "ami", "amitié", "camarade", "copain", "meilleur ami", "groupe d'amis",
        "retrouvailles", "trahison d'un ami", "dispute avec un ami", "complicité",
        "compagnon", "confident", "solidarité", "fête entre amis", "vieux ami",
        "ami d'enfance", "ami perdu de vue", "nouvelle amitié", "faux ami",
        "pote", "bande de copains", "groupe"
      ],
      interpretation: "Rêver d'un ami parle de tes besoins de connexion sociale et de loyauté. Un ami qui te trahit reflète une peur de l'abandon ou une blessure relationnelle non guérie. Un ami inconnu représente souvent une partie de toi-même ou une opportunité à venir. Les retrouvailles symbolisent une réconciliation avec ton passé.",
      image: "/images/iconekeywords/ami.webp"
    },
    {
      keywords: [
        "amour", "embrasser", "baiser", "couple", "mariage", "séparation",
        "ex", "rupture", "jalousie", "infidélité", "déclaration d'amour",
        "romance", "séduction", "rendez-vous", "premier amour", "passion",
        "désir", "tendresse", "réconciliation", "âme sœur", "relation toxique",
        "crush", "béguin", "flirter", "relation amoureuse",
        "divorce", "séparation difficile", "cœur brisé", "chagrin d'amour",
        "tomber amoureux", "tomber amoureuse", "coup de foudre", "amoureuse",
        "amoureux", "demande en mariage", "se marier", "attirer quelqu'un",
        "embrasser quelqu'un", "être embrassé", "rencontrer l'amour"
      ],
      interpretation: "Les rêves d'amour révèlent tes désirs affectifs profonds et tes besoins émotionnels. Un ex qui revient symbolise souvent une émotion non résolue. Un mariage représente une union intérieure, une intégration de deux aspects de toi-même. La jalousie en rêve invite à examiner tes insécurités avec bienveillance.",
      image: "/images/iconekeywords/amour.webp"
    },
    {
      keywords: [
        "bébé", "nourrisson", "naissance", "grossesse", "enceinte", "accouchement",
        "bercer", "biberon", "landau", "couches", "nouveau-né", "enfant qui pleure",
        "baptême", "porter un bébé", "adoption", "jumeau", "prématuré",
        "bébé qui sourit", "allaitement", "maternité", "paternité",
        "bébé abandonné", "perdre un bébé", "fausse couche"
      ],
      interpretation: "Un bébé symbolise un nouveau départ, un projet naissant ou la vulnérabilité de ton enfant intérieur. Si le bébé pleure, une partie de toi réclame attention et soin. Un accouchement représente la naissance d'une nouvelle phase de ta vie. Porter un bébé inconnu évoque une responsabilité que tu assumes ou refuses.",
      image: "/images/iconekeywords/bebe.webp"
    },
    {
      keywords: [
        "mort", "mourir", "cimetière", "fantôme", "funérailles", "cercueil",
        "deuil", "enterrement", "tombe", "défunt", "décès", "crémation",
        "fantôme d'un proche", "squelette", "agonie", "message d'un mort",
        "corps sans vie", "au-delà", "paradis", "enfer", "mourante",
        "testament", "succession", "disparaître", "mort subite",
        "voir quelqu'un mourir", "annonce d'un décès","décès d'un proche", "perdre quelqu'un", "perdre sa mère", "perdre son père",
        "perdre son enfant", "veuf", "veuve", "orphelin", "deuil d'un proche",
      ],
      interpretation: "La mort en rêve n'est pas littérale — elle symbolise la fin d'un cycle et un renouveau imminent. Rêver d'un proche décédé est souvent un message d'amour ou de guidance. La mort de soi-même représente une profonde transformation en cours. Ces rêves invitent à lâcher ce qui ne te sert plus pour renaître.",
      image: "/images/iconekeywords/mort.webp"
    },
    {
      keywords: [
        "fantôme", "esprit", "revenant", "apparition", "spectre", "âme errante",
        "poltergeist", "maison hantée", "présence invisible", "ombre qui marche",
        "voix de l'au-delà", "lumière bleue", "table tournante", "message d'outre-tombe",
        "hantise", "possession", "entité", "ombre menaçante",
        "être visité en rêve", "présence nocturne","vieille femme menaçante", "silhouette de vieille", "hag", "sorcière menaçante",
        "vieillard menaçant", "figure sombre dans la chambre",
      ],
      interpretation: "Un fantôme représente une mémoire, une émotion ou une relation du passé qui n'a pas encore été intégrée. Il peut s'agir d'un regret, d'une culpabilité ou d'un deuil inachevé. Si le fantôme est bienveillant, c'est souvent un message de réconfort. S'il est menaçant, une peur refoulée demande à être affrontée.",
      image: "/images/iconekeywords/fantome.webp"
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // ─── TECHNOLOGIE / NUMÉRIQUE ──────────────────────────────────────────────
    // ═══════════════════════════════════════════════════════════════════════════
    {
      keywords: [
        "ordinateur", "écran", "clavier", "souris", "bug", "virus informatique",
        "internet", "connexion", "réseau", "wifi", "programmer", "code",
        "application", "logiciel", "fichier", "données", "informatique",
        "cybersécurité", "hacker", "panne informatique", "écran noir",
        "ordinateur qui plante", "data", "cloud", "intelligence artificielle", "IA"
      ],
      interpretation: "L'ordinateur en rêve symbolise ta capacité d'analyse et de traitement de l'information. Un bug ou une panne informatique révèle un blocage dans ta façon de penser ou de communiquer. Internet représente ta soif de connexion et d'information. Un virus informatique évoque une pensée négative ou une influence toxique qui infiltre ton système de croyances.",
      image: "/images/iconekeywords/ordinateur.webp"
    },
    {
      keywords: [
        "téléphone", "appel", "message", "communication", "entendre",
        "appel manqué", "numéro inconnu", "voix au téléphone", "sms",
        "réseau absent", "téléphone cassé", "application", "notification",
        "vidéo call", "réseaux sociaux", "téléphone perdu", "smartphone",
        "portable", "recharge", "batterie vide", "téléphone muet",
        "ne pas pouvoir appeler", "numéro qui ne répond pas"
      ],
      interpretation: "Le téléphone représente la communication, la connexion et le besoin d'être entendu. Un appel manqué peut symboliser une opportunité passée ou un message de ton intuition à ne pas ignorer. Un téléphone cassé ou sans réseau indique une difficulté à communiquer tes besoins ou à recevoir une information importante.",
      image: "/images/iconekeywords/telephone.webp"
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // ─── ANIMAUX DOMESTIQUES ──────────────────────────────────────────────────
    // ═══════════════════════════════════════════════════════════════════════════
    {
      keywords: [
        "chien", "chiot", "aboyer", "mordre", "animal de compagnie", "fidèle",
        "laisse", "dressage", "berger allemand", "labrador", "caniche",
        "chien errant", "meute de chiens", "chien agressif", "chien perdu",
        "chien blessé", "vétérinaire", "toutou", "cabot", "clebs",
        "dog", "animal fidèle"
      ],
      interpretation: "Le chien symbolise la loyauté, l'amitié inconditionnelle et la protection. Un chien qui aboie peut indiquer un avertissement ou une alarme intérieure. Un chien qui te mord reflète une trahison perçue ou une relation qui te blesse. Un chiot représente une amitié naissante ou un aspect joueur et innocent de ta personnalité.",
      image: "/images/iconekeywords/animal.webp"
    },
    {
      keywords: [
        "chat", "chaton", "miauler", "ronronner", "griffes", "félin",
        "chat noir", "chat blanc", "chat errant", "chat sauvage",
        "indépendance", "mystère", "chat blessé", "chatterie", "moustaches",
        "minet", "minette", "chatouner", "felis"
      ],
      interpretation: "Le chat symbolise l'indépendance, l'intuition et le mystère. Un chat noir n'est pas néfaste — il représente souvent l'intuition et les pouvoirs cachés. Un chat qui ronronne évoque la satisfaction et le bien-être. Un chat qui griffe indique qu'une relation apparemment douce cache une tension.",
      image: "/images/iconekeywords/animal.webp"
    },
    {
      keywords: [
        "cheval", "cavalier", "galoper", "étalon", "jument", "poulain",
        "crinière", "sabot", "équitation", "dressage équestre", "course hippique",
        "cheval blanc", "cheval noir", "monter un cheval", "chevaux sauvages",
        "écurie", "trot", "canter", "polo", "cheval blessé", "tomber de cheval"
      ],
      interpretation: "Le cheval symbolise la liberté, la puissance et l'énergie vitale. Galoper librement annonce une période d'expansion et d'élan. Un cheval blanc représente la pureté et la guidance spirituelle. Un cheval incontrôlable évoque des instincts ou des émotions difficiles à maîtriser.",
      image: "/images/iconekeywords/animal.webp"
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // ─── CORPS / SANTÉ ────────────────────────────────────────────────────────
    // ═══════════════════════════════════════════════════════════════════════════
    {
      keywords: [
        "dent", "dents", "perdre ses dents", "dents qui tombent", "perte des dents",
        "dent qui tombe", "mes dents tombent", "mâchoire", "dent qui tombe",
        "dent cassée", "dent noire", "arracher une dent", "dentiste",
        "sourire", "bouche", "prothèse dentaire", "dent de sagesse",
        "saigner des gencives", "mordre", "mâcher", "bruxisme", "rage de dent",
        "dent qui pousse", "dents blanches", "dents qui se cassent toutes",
        "dent qui part dans la main", "bouche gonflée", "lèvres", "lèvres gonflées",
        "gonflement bouche", "mâchoire gonflée", "gencives", "abcès dentaire",
        "bouche qui gonfle", "bouche blessée", "bouche fermée", "bouche cousue"
      ],
      interpretation: "Perdre ses dents évoque une peur de perdre son pouvoir personnel, son attractivité ou sa capacité à s'exprimer. Une dent cassée suggère une parole regrettée ou un engagement non tenu. Le dentiste représente quelqu'un qui a du pouvoir sur tes décisions. Ce rêve est très fréquent dans les périodes de grande pression.",
      image: "/images/iconekeywords/dent.webp"
    },
    {
      keywords: [
        "sang", "blessure", "cicatrice", "douleur", "saigner", "coupure",
        "plaie", "hémorragie", "ecchymose", "brûlure", "fracture", "opération",
        "suture", "pansement", "sang qui coule", "trauma",
        "contusion", "bleu", "entorse", "blessure sportive",
        "se couper", "se blesser", "os cassé"
      ],
      interpretation: "Le sang symbolise l'énergie vitale, la passion et parfois une blessure émotionnelle profonde qui demande à être soignée. Une blessure qui ne cicatrise pas évoque un trauma non résolu. Voir du sang couler peut signifier une peur de perdre son énergie ou sa vitalité. C'est un appel à prendre soin de toi avec bienveillance.",
      image: "/images/iconekeywords/blessure.webp"
    },
    {
      keywords: [
        "maladie", "fièvre", "hôpital", "médecin", "médicament", "cancer",
        "guérison", "être malade", "diagnostic", "opération chirurgicale",
        "infirmière", "ambulance", "urgences", "contagion", "épidémie",
        "se remettre", "traitement", "douleur chronique", "symptôme",
        "scanner", "radios", "analyse médicale", "prise de sang",
        "malade grave", "mourir d'une maladie", "chimiothérapie"
      ],
      interpretation: "La maladie en rêve symbolise souvent une partie de toi qui a besoin d'attention et de guérison — pas forcément physique. L'hôpital représente un lieu de transformation et de prise en charge. Guérir dans un rêve annonce une résolution prochaine d'une difficulté. Ce rêve invite à écouter les signaux de ton corps et de ton âme.",
      image: "/images/iconekeywords/maladie.webp"
    },
    {
      keywords: [
        "nu", "nudité", "être dénudé", "honte d'être nu", "exposé",
        "en sous-vêtements", "déshabillé en public", "oublier de s'habiller",
        "transparence", "vulnérabilité", "regardé", "gêne", "pudeur",
        "corps dénudé", "intimité dévoilée", "se retrouver nu",
        "être nu sans s'en rendre compte"
      ],
      interpretation: "Rêver d'être nu en public traduit une peur d'être jugé, d'être transparent ou vulnérable face aux autres. Si tu n'as pas honte, c'est un signe d'authenticité et de confiance en toi grandissante. La nudité symbolise aussi la vérité nue — une invitation à te montrer tel que tu es vraiment, sans masque.",
      image: "/images/iconekeywords/nu.webp"
    },
    {
      keywords: [
        "noyade", "se noyer", "sous l'eau", "suffoquer dans l'eau", "couler",
        "ne pas pouvoir respirer", "eau qui monte", "sauvetage", "quasi-noyade",
        "engloutissement", "submersion", "asphyxie", "plongée en apnée",
        "manque d'air", "étouffer sous l'eau"
      ],
      interpretation: "La noyade symbolise le sentiment d'être submergé par les émotions, les responsabilités ou les pressions extérieures. Elle peut indiquer une situation dans laquelle tu te sens dépassé. Être sauvé de la noyade suggère qu'une aide ou une ressource intérieure est disponible. Ce rêve est un signal urgent d'écoute de soi.",
      image: "/images/iconekeywords/noyade.webp"
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // ─── COULEURS / SENSATIONS ────────────────────────────────────────────────
    // ═══════════════════════════════════════════════════════════════════════════
    {
      keywords: [
        "rouge", "couleur rouge", "rouge vif", "rouge sang", "tout est rouge",
        "vision rouge", "vêtement rouge", "chambre rouge", "lumière rouge",
        "rouge passion", "rouge colère"
      ],
      interpretation: "Le rouge en rêve est la couleur de la passion, de l'énergie vitale et parfois de la colère. Il signale une situation intense qui demande ton attention immédiate. Une vision toute rouge peut indiquer une rage refoulée ou au contraire une passion dévorante. Cette couleur t'invite à canaliser ton énergie avec conscience.",
      image: "/images/iconekeywords/couleur-rouge.webp"
    },
    {
      keywords: [
        "bleu", "couleur bleue", "bleu profond", "ciel bleu", "mer bleue",
        "tout est bleu", "vêtement bleu", "lumière bleue", "bleu azur",
        "indigo", "saphir", "nuit bleue"
      ],
      interpretation: "Le bleu en rêve symbolise la sérénité, la communication et la vérité. Un bleu profond évoque l'inconscient et la sagesse intérieure. Un ciel bleu annonce une période de clarté et d'optimisme. La lumière bleue est souvent associée à des présences spirituelles bienveillantes.",
      image: "/images/iconekeywords/couleur-bleu.webp"
    },
    {
      keywords: [
        "doré", "or", "couleur or", "lumière dorée", "objet en or",
        "pluie d'or", "tout est doré", "reflet doré", "soleil doré",
        "ocre", "ambre", "jaune doré"
      ],
      interpretation: "L'or en rêve est le symbole de la valeur suprême, de la réussite et de la guidance divine. Une lumière dorée annonce une période bénie de chance et de reconnaissance. Un objet en or représente quelque chose de précieux dans ta vie à protéger. La pluie d'or symbolise une abondance imminente, matérielle ou spirituelle.",
      image: "/images/iconekeywords/couleur-or.webp"
    },
    {
      keywords: [
        "vert", "couleur verte", "verdure", "forêt verte", "prairie verte",
        "tout est vert", "vêtement vert", "lumière verte", "jade",
        "émeraude", "nature verte", "végétation"
      ],
      interpretation: "Le vert en rêve symbolise la croissance, la guérison et l'espoir. Une nature verdoyante annonce une période de renouveau et de vitalité. Un vert profond évoque la sagesse naturelle et l'abondance. Le vert est aussi la couleur du cœur — il t'invite à ouvrir ton cœur à de nouvelles possibilités.",
      image: "/images/iconekeywords/couleur-vert.webp"
    },
    {
      keywords: [
        "violet", "mauve", "pourpre", "couleur violette", "lumière violette",
        "vêtement violet", "tout est violet", "lavande", "lilas",
        "couleur mystique", "aura violette"
      ],
      interpretation: "Le violet en rêve symbolise la transformation spirituelle, la créativité et l'intuition développée. C'est la couleur du troisième œil et de l'éveil. Une lumière violette indique une guidance spirituelle profonde. Ces rêves t'invitent à faire confiance à ton intuition et à explorer les dimensions plus profondes de ta conscience.",
      image: "/images/iconekeywords/spirituel.webp"
    },
    {
      keywords: [
        "noir", "obscurité", "ombre", "ténèbres", "sombre", "nuit noire",
        "ne rien voir", "aveuglement", "peur du noir", "tunnel sombre",
        "figure sombre", "silhouette dans l'ombre", "noirceur", "néant",
        "tout est noir", "vêtement noir", "pièce sombre"
      ],
      interpretation: "L'obscurité représente l'inconnu, le potentiel non manifesté et les parts de toi encore à explorer. Elle n'est pas néfaste — c'est dans le noir que les graines germent. Une silhouette sombre peut incarner ton ombre jungienne : les aspects de toi que tu n'as pas encore acceptés. Elle t'invite au courage et à l'exploration intérieure.",
      image: "/images/iconekeywords/obscurite.webp"
    },
    {
      keywords: [
        "blanc", "couleur blanche", "pureté", "vide blanc", "tout est blanc",
        "lumière blanche", "vêtement blanc", "chambre blanche", "page blanche",
        "neige blanche", "nuage blanc", "fond blanc"
      ],
      interpretation: "Le blanc en rêve symbolise la pureté, un nouveau départ et l'ouverture. Une lumière blanche éblouissante est souvent associée à une expérience spirituelle ou un moment de grâce. Une pièce toute blanche peut représenter un vide à remplir ou une liberté totale. Le blanc t'invite à recommencer sur une page vierge.",
      image: "/images/iconekeywords/couleur-blanc.webp"
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // ─── MOUVEMENT / ACTION ───────────────────────────────────────────────────
    // ═══════════════════════════════════════════════════════════════════════════
    {
      keywords: [
        "poursuite", "fuir", "courir", "monstre", "chassé", "attaque", "danger",
        "prédateur", "être traqué", "cache-cache menaçant", "agresseur",
        "s'échapper", "piège", "embuscade", "courir sans avancer",
        "être coincé", "fuir dans le noir", "poursuivi par un animal",
        "fuir à toute vitesse", "panique", "se cacher",
        "quelqu'un qui me court après", "se faire rattraper"
      ],
      interpretation: "Être poursuivi signifie que tu fuis une responsabilité, une peur ou une émotion dans la réalité. La nature du poursuivant révèle ce que tu évites : un monstre peut représenter la colère, un animal sauvage tes instincts. Fais face à ce qui t'effraie — souvent, la peur disparaît dès qu'on lui fait face.",
      image: "/images/iconekeywords/poursuite.webp"
    },
    {
      keywords: [
        "en retard", "retard", "manquer", "train raté", "avion raté", "bus raté",
        "oublier", "ne pas trouver", "perdre ses affaires", "panique du retard",
        "arriver trop tard", "course contre la montre", "montre bloquée",
        "examen raté", "rendez-vous manqué", "heure qui tourne",
        "en avance", "trop tôt", "délai", "deadline ratée",
        "ne pas trouver la sortie", "arriver après la fermeture"
      ],
      interpretation: "Le retard en rêve reflète une peur de manquer une opportunité, de ne pas être à la hauteur ou de ne pas avoir le contrôle du temps. C'est l'un des rêves les plus répandus lors des périodes de stress et de surcharge. Ton inconscient t'invite à réévaluer tes priorités et à te donner le droit d'avancer à ton rythme.",
      image: "/images/iconekeywords/retard.webp"
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // ─── LIEUX / STRUCTURES ───────────────────────────────────────────────────
    // ═══════════════════════════════════════════════════════════════════════════
    {
      keywords: [
        "maison", "pièce", "chambre", "porte", "fenêtre", "bâtiment",
        "couloir", "escalier", "grenier", "cave", "sous-sol", "toit",
        "jardin", "façade", "intérieur", "maison abandonnée", "déménagement",
        "maison d'enfance", "pièce secrète", "maison inconnue",
        "salon", "cuisine", "salle de bain", "murs", "appartement",
        "colocation", "logement", "immeuble résidentiel",
        "maison qui s'effondre", "maison en feu", "pièce inondée"
      ],
      interpretation: "La maison te représente. Chaque pièce symbolise un aspect de toi-même : la cave, l'inconscient ; le grenier, les souvenirs ; la cuisine, le nourricier. Découvrir une pièce inconnue signifie la découverte de potentiels cachés. Une maison en ruine suggère un besoin urgent de soins personnels et de reconstruction intérieure.",
      image: "/images/iconekeywords/maison.webp"
    },
    {
      keywords: [
        "école", "examen", "classe", "professeur", "cours", "diplôme",
        "université", "lycée", "collège", "primaire", "tableau noir",
        "cahier", "bulletin", "note", "redoubler", "passer un examen",
        "tricher", "salle d'examen", "dissertation", "interro surprise",
        "bibliothèque", "cour de récré", "cartable", "bac", "concours",
        "orientation", "stage", "alternance", "rater son exam",
        "ne pas réviser", "cours incompréhensibles"
      ],
      interpretation: "L'école en rêve évoque des peurs liées au jugement, à la performance et à la validation extérieure. Elle signale souvent qu'une leçon de vie importante se présente. Rêver de rater un examen est commun lors de toute prise de décision importante. L'inconscient teste si tu es prêt pour la prochaine étape.",
      image: "/images/iconekeywords/ecole.webp"
    },
    {
      keywords: [
        "prison", "cage", "enfermé", "piégé", "barreaux", "murs", "cellule",
        "geôlier", "condamné", "arrestation", "menottes", "isolement",
        "garde à vue", "prison intérieure", "évasion", "prisonnier",
        "tribunal", "condamnation", "enfermement", "incarcération", "détenu",
        "se sentir coincé", "pas d'issue", "murs qui se referment"
      ],
      interpretation: "L'enfermement illustre un sentiment de restriction dans une relation, un travail ou des croyances limitantes. Tu te sens peut-être prisonnier d'une situation que tu crois ne pas pouvoir quitter. Ce rêve est un appel puissant à identifier ce qui t'emprisonne — souvent, la clé de la liberté se trouve à l'intérieur.",
      image: "/images/iconekeywords/prison.webp"
    },
    {
      keywords: [
        "pont", "traverser", "fleuve", "passage", "frontière", "seuil",
        "passerelle", "viaduc", "pont fragile", "pont qui s'effondre",
        "de l'autre côté", "rive", "transition", "franchir",
        "pont suspendu", "traversée", "nouveau départ",
        "pont dans la brume", "pont très haut"
      ],
      interpretation: "Le pont symbolise une transition importante dans ta vie. Le traverser avec confiance indique que tu es prêt à franchir une nouvelle étape. Un pont qui vacille ou s'effondre évoque une hésitation face à un changement. L'autre côté représente l'avenir que tu construis.",
      image: "/images/iconekeywords/pont.webp"
    },
    {
      keywords: [
        "ville", "rue", "foule", "métro", "immeuble", "urbain", "banlieue",
        "centre-ville", "marché", "place publique", "embouteillage", "trottoir",
        "magasin", "vitrine", "café", "quartier inconnu", "ville fantôme",
        "gratte-ciel", "pollution", "nuit en ville", "néon",
        "quartier dangereux", "rue piétonne", "place de la ville",
        "se perdre en ville", "ville inconnue"
      ],
      interpretation: "La ville représente la société, les interactions sociales et le monde extérieur. Une ville animée reflète ton engagement social et ton énergie vitale. Une ville vide ou menaçante traduit un sentiment d'aliénation ou de solitude malgré l'entourage. Se perdre en ville invite à retrouver ton identité propre au milieu du collectif.",
      image: "/images/iconekeywords/ville.webp"
    },
    {
      keywords: [
        "labyrinthe", "perdu", "sortie introuvable", "couloir sans fin",
        "dédale", "mur", "tourner en rond", "chemin qui se répète",
        "carrefour", "faux chemins", "minotaure", "confusion", "piège",
        "complexité", "se perdre", "spirale", "cercle vicieux",
        "impossible de sortir", "couloir interminable"
      ],
      interpretation: "Le labyrinthe symbolise une situation complexe dont tu peines à trouver la sortie. Il représente la confusion mentale, les décisions difficiles ou un problème récurrent. Chaque chemin exploré t'apprend quelque chose. La sortie existe — fais confiance à ton intuition plutôt qu'à ta logique pour la trouver.",
      image: "/images/iconekeywords/labyrinthe.webp"
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // ─── ANIMAUX ──────────────────────────────────────────────────────────────
    // ═══════════════════════════════════════════════════════════════════════════
    {
      keywords: [
        "serpent", "vipère", "morsure", "reptile", "cobra", "python",
        "anaconda", "couleuvre", "boa", "serpent géant", "grand serpent", "serpent immense", "énorme serpent", "nid de serpents",
        "venin", "sifflement", "peau de serpent", "muer", "séduire",
        "lézard", "caméléon", "gecko", "varan"
      ],
      interpretation: "Le serpent est un puissant symbole de transformation, de guérison et de renouveau. Une morsure de serpent peut indiquer une trahison ou un éveil douloureux mais nécessaire. Le serpent qui se mord la queue (ouroboros) symbolise l'éternel cycle de la vie. Il t'invite à muer et à laisser ton ancien toi derrière.",
      image: "/images/iconekeywords/serpent.webp"
    },
    {
      keywords: [
        "animal", "loup", "lion", "tigre", "ours", "renard",
        "cerf", "éléphant", "singe", "dauphin", "baleine", "requin",
        "crocodile", "léopard", "panthère", "loup-garou", "animal sauvage",
        "animal blessé", "troupeau", "meute", "zoo", "fauve",
        "rhinocéros", "hippopotame", "girafe", "zèbre",
        "animal qui me parle", "animal géant"
      ],
      interpretation: "Les animaux incarnent tes instincts, ta nature sauvage et tes forces primitives. Le loup symbolise la loyauté et la protection ; le lion, le courage et l'autorité ; l'ours, la force et l'introspection ; le cheval, la liberté et l'énergie vitale. Un animal blessé représente un instinct ou un désir refoulé qui réclame attention.",
      image: "/images/iconekeywords/animal.webp"
    },
    {
      keywords: [
        "insecte", "araignée", "guêpe", "fourmi", "cafard", "abeille",
        "scarabée", "papillon", "moustique", "criquet", "punaise",
        "invasion d'insectes", "piqûre", "toile d'araignée", "essaim",
        "chenille", "coccinelle", "libellule", "mouche", "frelon",
        "nid de guêpes", "fourmilière", "cafard géant",
        "araignée géante", "phobie des insectes"
      ],
      interpretation: "Les insectes représentent souvent de petites irritations ou des pensées répétitives difficiles à ignorer. Une araignée symbolise la créativité, le piège ou une figure de pouvoir féminin. Un papillon annonce une métamorphose. Une invasion d'insectes traduit un sentiment d'être submergé par des détails ou des soucis mineurs.",
      image: "/images/iconekeywords/insecte.webp"
    },
    {
      keywords: [
        "oiseau", "aigle", "corbeau", "colombe", "perroquet", "hibou",
        "chouette", "hirondelle", "pigeon", "moineau", "paon", "cygne",
        "phoenix", "plumes", "nid", "envol", "chant d'oiseau", "cage à oiseaux",
        "migration", "vautour", "toucan", "perruche", "flamant rose",
        "pélican", "pingouin", "perchoir",
        "oiseau mort", "oiseau blessé", "oiseau qui parle"
      ],
      interpretation: "Les oiseaux symbolisent la liberté de l'esprit, les messages et les aspirations élevées. L'aigle représente la vision, le leadership et la connexion divine. Le corbeau évoque la sagesse, le mystère et parfois la mort symbolique. La colombe symbolise la paix. Un oiseau en cage reflète un sentiment d'être retenu ou de ne pas pouvoir s'exprimer librement.",
      image: "/images/iconekeywords/oiseau.webp"
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // ─── OBJETS ───────────────────────────────────────────────────────────────
    // ═══════════════════════════════════════════════════════════════════════════
    {
      keywords: [
        "voiture", "conduire", "véhicule", "accident", "route", "camion",
        "train", "moto", "frein", "volant", "embouteillage", "voiture en panne",
        "vitesse excessive", "perdre le contrôle", "autoroute", "gps",
        "passager", "rétroviseur", "parking", "carrefour dangereux",
        "vitesse", "permis de conduire", "garage", "capot", "moteur",
        "voiture qui ne démarre pas", "accident de voiture", "freins qui lâchent",
        "bus", "autobus", "car", "accident de bus", "métro", "tramway", "transport",
        "chauffeur", "chauffeur de bus", "collision", "carambolage", "percuter", "percuter un mur", "emboutir",
        "voiture qui explose", "pneu crevé", "capotage", "tonneau",
      ],
      interpretation: "Le véhicule représente ta trajectoire de vie et le contrôle que tu as sur ton destin. Conduire en confiance indique que tu es maître de ta direction. Perdre le contrôle suggère un sentiment de débordement. Être passager signifie que tu laisses les autres décider à ta place. La panne évoque un blocage dans ton avancement.",
      image: "/images/iconekeywords/voiture.webp"
    },
    {
      keywords: [
        "avion", "aéroport", "embarquement", "vol", "turbulences", "crash",
        "atterrissage", "décollage", "hôtesse de l'air", "pilote", "cockpit",
        "altitude", "nuages vus d'avion", "retard d'avion", "valise perdue",
        "avion qui tombe", "crash d'avion", "peur de l'avion"
      ],
      interpretation: "L'avion en rêve symbolise tes ambitions élevées et ta capacité à te projeter vers l'avenir. Des turbulences évoquent des incertitudes sur le chemin de tes projets. Un crash d'avion reflète une peur d'un effondrement soudain de tes plans. Un atterrissage réussi annonce l'aboutissement d'un long projet.",
      image: "/images/iconekeywords/voiture.webp"
    },
    {
      keywords: [
        "argent", "richesse", "billets", "pièces", "trésor", "vol",
        "perdre de l'argent", "trouver de l'argent", "dette", "banque",
        "coffre-fort", "investissement", "loterie", "gagner de l'argent",
        "être riche", "être pauvre", "héritage", "salaire", "budget",
        "billet de banque", "carte bancaire", "bitcoin", "cryptomonnaie",
        "faillite", "économies", "prêt", "remboursement",
        "billet faux", "voler de l'argent", "manquer d'argent"
      ],
      interpretation: "L'argent symbolise l'énergie, la valeur personnelle et le sentiment de sécurité. Le trouver signale une opportunité à venir. Le perdre reflète une peur de manque ou un besoin de réévaluer ses priorités. Rêver de richesse soudaine invite à examiner ton rapport à la valeur que tu t'accordes.",
      image: "/images/iconekeywords/argent.webp"
    },
    {
      keywords: [
        "clé", "serrure", "ouvrir", "coffre", "trésor caché", "porte verrouillée",
        "clé perdue", "trousseau de clés", "passe-partout", "cadenas",
        "clé qui ne rentre pas", "ouvrir une porte fermée", "secret révélé",
        "clé magnétique", "digicode", "accès interdit",
        "chercher sa clé", "clé qui disparaît"
      ],
      interpretation: "La clé représente l'accès à quelque chose de précieux : une connaissance cachée, une opportunité ou une émotion longtemps enfouie. Une clé perdue indique que tu cherches encore la solution. Tu possèdes déjà la réponse — il s'agit juste de trouver quelle porte elle ouvre.",
      image: "/images/iconekeywords/cle.webp"
    },
    {
      keywords: [
        "miroir", "reflet", "se voir", "visage", "image de soi",
        "miroir brisé", "reflet déformé", "ne pas se reconnaître",
        "double", "jumeau dans le miroir", "miroir magique", "vanité",
        "se regarder", "ombre dans le miroir", "reflet sombre",
        "miroir qui montre autre chose", "reflet différent"
      ],
      interpretation: "Le miroir invite à l'introspection et à la conscience de soi. Un reflet déformé suggère une perception altérée de toi-même. Ne pas te reconnaître dans le miroir signifie que tu traverses une profonde transformation identitaire. Un miroir brisé évoque la fin d'une illusion.",
      image: "/images/iconekeywords/miroir.webp"
    },
    {
      keywords: [
        "arme", "couteau", "pistolet", "épée", "poignard", "fusil",
        "bombe", "arme blanche", "arme à feu", "agression armée",
        "se défendre", "tirer", "brandir une arme", "duel", "combat armé",
        "couteau dans le dos", "explosion", "grenade", "arbalète",
        "se faire menacer", "tenir une arme"
      ],
      interpretation: "Les armes en rêve symbolisent le pouvoir, le conflit ou l'agression — refoulée ou extériorisée. Tenir une arme peut indiquer une volonté de te défendre ou d'affirmer ton pouvoir. Être menacé par une arme reflète une situation dans laquelle tu te sens en danger ou vulnérable. Ce rêve invite à identifier les conflits non résolus dans ta vie.",
      image: "/images/iconekeywords/arme.webp"
    },
    {
      keywords: [
        "livre", "lire", "roman", "bibliothèque", "écrire", "cahier",
        "stylo", "écriture", "lettre", "manuscrit", "encyclopédie",
        "livre ouvert", "page blanche", "auteur", "histoire",
        "lecture", "comprendre", "apprendre",
        "journal intime", "agenda", "liste"
      ],
      interpretation: "Le livre en rêve symbolise la connaissance, l'histoire personnelle et les leçons de vie. Un livre ouvert invite à l'apprentissage et à la curiosité. Une page blanche évoque un nouveau chapitre ou une peur de l'inconnu. Ne pas comprendre ce que tu lis signifie qu'une situation de ta vie manque encore de clarté.",
      image: "/images/iconekeywords/maison.webp"
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // ─── CÉLESTE / SPIRITUEL ──────────────────────────────────────────────────
    // ═══════════════════════════════════════════════════════════════════════════
    {
      keywords: [
        "lune", "pleine lune", "croissant", "nuit étoilée", "clair de lune",
        "lune rouge", "lune bleue", "éclipse de lune", "lueur lunaire",
        "marée et lune", "loups et lune", "cycle lunaire", "nouvelle lune",
        "super lune", "lune dorée", "lune qui descend", "lune géante"
      ],
      interpretation: "La lune gouverne l'intuition, les cycles féminins et les émotions cachées. La pleine lune amplifie les sentiments et les révélations. Une lune rouge évoque une passion intense ou une mise en garde. La voir en rêve t'invite à honorer tes cycles naturels, à faire confiance à ton intuition et à embrasser le mystère.",
      image: "/images/iconekeywords/lune.webp"
    },
    {
      keywords: [
        "lumière", "soleil", "étoile", "brillant", "rayons", "aurore",
        "lumière divine", "halo", "arc-en-ciel", "lumière au bout du tunnel",
        "lever du soleil", "coucher du soleil", "bioluminescence",
        "lumière dorée", "phare", "éclair de lumière", "aurore boréale",
        "étoile filante", "comète", "soleil couchant", "crépuscule",
        "aube", "lever de soleil", "soleil levant"
      ],
      interpretation: "La lumière annonce un éveil, une révélation ou une guidance divine. Elle t'invite à faire confiance à ton intuition et à avancer vers la clarté. Un arc-en-ciel symbolise une promesse après l'épreuve. La lumière au bout du tunnel signifie que tu approches de la résolution d'une difficulté importante.",
      image: "/images/iconekeywords/lumiere.webp"
    },
    {
      keywords: [
        "spirituel", "ange", "prière", "temple", "église", "dieu",
        "divinité", "méditation", "mandala", "lumière divine", "vision mystique",
        "prophétie", "oracle", "miracle", "signes du ciel", "au-delà",
        "paradis", "éden", "être de lumière", "guide spirituel", "ascension",
        "chakra", "aura", "énergie", "vibration", "âme", "karma",
        "réincarnation", "troisième œil", "éveil spirituel",
        "mosquée", "synagogue", "lieu de culte", "rituel"
      ],
      interpretation: "Les rêves spirituels sont parmi les plus puissants : ils ouvrent souvent à une guidance directe de l'inconscient profond ou du divin. Un ange représente une protection et un message de soutien. Un temple symbolise ton sanctuaire intérieur. Ces rêves t'invitent à approfondir ta pratique spirituelle et à faire confiance au grand plan de ta vie.",
      image: "/images/iconekeywords/spirituel.webp"
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // ─── VIE PERSONNELLE / PSYCHOLOGIQUE ─────────────────────────────────────
    // ═══════════════════════════════════════════════════════════════════════════
    {
      keywords: [
        "voyage", "valise", "partir", "avion", "destination", "chemin",
        "aventure", "passeport", "aéroport", "gare", "départ", "retour",
        "explorer", "road trip", "bateau", "boussole", "carte", "errer",
        "tourisme", "pays étranger", "sac à dos", "croisière", "train",
        "partir à l'étranger", "expatriation", "se perdre en voyage",
        "valise perdue", "passeport perdu"
      ],
      interpretation: "Le voyage symbolise ton chemin de vie et ta quête personnelle. Un départ précipité reflète un désir de changement ou de fuite. Une destination inconnue t'invite à faire confiance au processus. Revenir à la maison peut signifier un retour à soi-même après une période d'errance intérieure.",
      image: "/images/iconekeywords/voyage.webp"
    },
    {
      keywords: [
        "enfance", "souvenir d'enfance", "passé", "jeunesse", "grandir",
        "jouet", "jeu d'enfant", "école primaire", "maison d'enfance",
        "parents quand j'étais petit", "photo ancienne", "nostalgie",
        "enfant que j'étais", "régression", "innocent", "insouciance",
        "parc de jeux", "balançoire", "toboggan", "anniversaire d'enfant",
        "redevenir enfant", "se voir enfant", "photos d'enfance"
      ],
      interpretation: "Retourner en enfance dans un rêve invite à revisiter une émotion, une blessure ou une joie de tes premières années. C'est souvent une opportunité de consoler ton enfant intérieur ou d'intégrer une expérience fondatrice. La nostalgie en rêve signale parfois qu'une partie de toi a besoin de légèreté et d'insouciance dans ta vie actuelle.",
      image: "/images/iconekeywords/enfance.webp"
    },
    {
      keywords: [
        "travail", "bureau", "patron", "collègue", "licenciement", "promotion",
        "réunion", "projet", "deadline", "stress au travail", "chômage",
        "entretien d'embauche", "démission", "carrière", "burnout",
        "open space", "ordinateur", "email", "réussite professionnelle",
        "conflit au travail", "harcèlement", "mutation", "retraite", "salaire",
        "se faire virer", "patron qui crie", "collègue difficile"
      ],
      interpretation: "Les rêves de travail reflètent tes ambitions, tes peurs professionnelles et tes dynamiques de pouvoir. Être licencié en rêve traduit une peur de ne pas être à la hauteur ou de perdre ta place. Une promotion signifie une reconnaissance de ta valeur. Le stress au travail invite à réévaluer tes limites et tes besoins de reconnaissance.",
      image: "/images/iconekeywords/travail.webp"
    },
    {
      keywords: [
        "musique", "chanter", "mélodie", "instrument", "danse", "concert",
        "guitare", "piano", "violon", "tambour", "chanson", "opéra",
        "chorale", "rythme", "harmonie", "discordance", "musique céleste",
        "entendre une mélodie", "composer", "rap", "hip hop", "rock",
        "électro", "batterie", "basse", "studio d'enregistrement",
        "microphone", "scène musicale", "festival",
        "danser", "bal", "chorégraphie", "ballet", "valse"
      ],
      interpretation: "La musique en rêve symbolise l'harmonie intérieure, la créativité et l'expression de l'âme. Chanter librement indique une joie profonde ou un besoin de s'exprimer. Une dissonance évoque un conflit intérieur ou une relation désaccordée. Entendre une mélodie céleste est souvent considéré comme un message de l'au-delà ou de l'inconscient profond.",
      image: "/images/iconekeywords/musique.webp"
    },
    {
      keywords: [
        "guerre", "combat", "bataille", "soldats", "bombe", "explosion",
        "violence", "conflit", "armée", "résistance", "invasion", "ruines",
        "blessés de guerre", "prisonnier de guerre", "bombardement",
        "tranchées", "survie", "après-guerre", "terrorisme", "attentat",
        "révolution", "rébellion", "apocalypse", "fin du monde"
      ],
      interpretation: "La guerre symbolise un conflit intérieur intense ou une lutte externe épuisante. Elle peut représenter une lutte entre deux parties de toi-même ou une situation de vie dans laquelle tu te sens en guerre contre quelque chose. La résistance dans un rêve de guerre représente ta force intérieure et ta capacité à surmonter l'adversité.",
      image: "/images/iconekeywords/guerre.webp"
    },
    {
      keywords: [
        "fleur", "jardin", "rose", "pétales", "plante", "fleurir",
        "tulipe", "orchidée", "tournesol", "lavande", "pivoine",
        "bouquet", "cueillir des fleurs", "jardin en fleur", "herbes",
        "jardinage", "potager", "serre", "fleur qui se fane",
        "fleur qui s'ouvre", "nature en fleur", "printemps", "cerisier",
        "arbre en fleur", "pommier", "magnolia"
      ],
      interpretation: "Les fleurs annoncent l'épanouissement, la beauté et la croissance personnelle. Une rose symbolise l'amour et la beauté mais aussi la protection (épines). Un tournesol évoque la clarté et l'optimisme. Un jardin en fleur signale une période bénie de créativité et d'amour. Une fleur qui se fane suggère un deuil ou la fin d'un cycle.",
      image: "/images/iconekeywords/fleur.webp"
    },
    {
      keywords: [
        "nourriture", "manger", "repas", "faim", "festin", "table",
        "cuisiner", "banquet", "pain", "dessert", "fruits", "légumes",
        "viande", "restaurant", "dîner", "petit-déjeuner", "affamé",
        "nourriture abondante", "nourriture avariée", "goût", "saveur",
        "pizza", "gâteau", "chocolat", "alcool", "vin", "boire",
        "régime", "gloutonnerie", "partager un repas",
        "réfrigérateur vide", "manger seul", "repas de famille"
      ],
      interpretation: "La nourriture symbolise un besoin affectif, créatif ou spirituel. Un festin abondant indique une satisfaction profonde ou une prospérité à venir. La faim en rêve révèle un manque affectif ou un besoin non comblé. Cuisiner représente la créativité et le soin apporté aux autres. Nourriture avariée suggère une relation ou une situation toxique.",
      image: "/images/iconekeywords/repas.webp"
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // ─── CORPS / PARTIES ──────────────────────────────────────────────────────
    // ═══════════════════════════════════════════════════════════════════════════
    {
      keywords: [
        "yeux", "œil", "voir", "regard", "aveugle", "cécité", "lunettes",
        "larmes", "pleurer", "vision floue", "borgne", "myope", "cligner",
        "pupille", "iris", "regarder dans les yeux", "œil qui saigne",
        "vision perdue", "hallucination visuelle",
        "yeux qui s'ouvrent", "yeux fermés", "troisième œil"
      ],
      interpretation: "Les yeux symbolisent la perception, la conscience et la vérité. Perdre la vue en rêve indique une résistance à voir une réalité en face. Des yeux qui pleurent expriment une émotion refoulée qui cherche à s'extérioriser. Regarder quelqu'un dans les yeux symbolise une connexion profonde ou une confrontation nécessaire.",
      image: "/images/iconekeywords/yeux.webp"
    },
    {
      keywords: [
        "jambes", "paralysie", "ne pas pouvoir bouger", "jambes lourdes",
        "courir sans avancer", "jambes qui lâchent", "boiter", "marcher",
        "genoux", "pieds", "cheville", "immobile", "figé", "pétrifié",
        "paralysé", "ne plus sentir ses jambes", "marcher pieds nus",
        "blessure aux jambes", "jambe cassée", "jambe amputée"
      ],
      interpretation: "Les jambes représentent ta capacité à avancer dans la vie et à te soutenir toi-même. La paralysie en rêve est très fréquente : elle traduit un sentiment de blocage, d'impuissance ou de peur face à une décision importante. Des jambes lourdes signalent un épuisement profond. Ne plus pouvoir courir invite à identifier ce qui te freine réellement.",
      image: "/images/iconekeywords/jambes.webp"
    },
    {
      keywords: [
        "mains", "toucher", "donner", "prendre", "serrer la main",
        "main tendue", "mains liées", "mains sales", "mains propres",
        "caresser", "frapper", "applaudir", "poing", "doigts",
        "main coupée", "perdre une main", "main blessée", "bras",
        "épaule", "poignée de main", "empreinte",
        "doigt coupé", "ongle cassé", "main qui tremble"
      ],
      interpretation: "Les mains symbolisent le pouvoir d'action, la créativité et le lien aux autres. Tendre la main représente générosité ou appel à l'aide. Des mains liées indiquent un sentiment d'impuissance. Des mains sales évoquent une culpabilité ou une situation dont tu veux te laver. Perdre une main signale une peur de perdre tes capacités ou ton autonomie.",
      image: "/images/iconekeywords/mains.webp"
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // ─── EXPÉRIENCES ONIRIQUES ────────────────────────────────────────────────
    // ═══════════════════════════════════════════════════════════════════════════
    {
      keywords: [
        "rêve lucide", "rêve dans le rêve", "se réveiller dans le rêve",
        "savoir que l'on rêve", "contrôler son rêve", "faux réveil",
        "rêve emboîté", "sortie hors du corps", "voyage astral",
        "conscience dans le rêve", "méta-rêve", "paralyse du sommeil",
        "paralysie nocturne", "hypnagogie",
        "se voir dormir", "flotter hors de son corps"
      ],
      interpretation: "Le rêve lucide est une invitation de ton inconscient à reprendre le contrôle de ta vie éveillée. Savoir que tu rêves sans te réveiller symbolise un éveil spirituel et une conscience élargie. Un faux réveil indique que tu cherches à percer les illusions qui t'entourent. C'est le signe d'une grande intelligence intuitive en développement.",
      image: "/images/iconekeywords/lucide.webp"
    },
    {
      keywords: [
        "transformation", "se transformer", "changer de forme", "métamorphose",
        "devenir un animal", "devenir quelqu'un d'autre", "se voir changer",
        "corps qui change", "mue", "chrysalide", "loup-garou", "shapeshifting",
        "ne plus se reconnaître", "changer d'apparence", "vieillir en rêve",
        "rajeunir en rêve", "devenir géant", "devenir minuscule",
        "rapetisser", "grandir en rêve"
      ],
      interpretation: "La transformation en rêve est l'un des symboles les plus puissants : tu es en pleine mutation intérieure. Devenir un animal révèle quel instinct ou quelle énergie tu cherches à intégrer. Ne plus te reconnaître signale que ton identité est en train d'évoluer profondément. Accueille ce changement — il est le signe d'une renaissance.",
      image: "/images/iconekeywords/transformation.webp"
    },
    {
      keywords: [
        "temps", "horloge", "montre", "vieillir", "vieux", "rajeunir",
        "temps qui s'arrête", "temps qui accélère", "passé", "futur",
        "machine à remonter le temps", "retour dans le passé",
        "voir le futur", "temps figé", "pendule", "sablier", "minuterie",
        "début", "fin", "cycle", "aiguilles qui tournent", "minuit"
      ],
      interpretation: "Le temps en rêve parle de ton rapport à la vie, au changement et à la mortalité. Une horloge arrêtée indique un moment de suspension, une décision en attente. Vieillir soudainement reflète une peur du temps qui passe ou d'opportunités manquées. Retourner dans le passé signale un regret ou une leçon non intégrée.",
      image: "/images/iconekeywords/temps.webp"
    },
    {
      keywords: [
        "pouvoirs", "super pouvoirs", "magie", "télékinésie", "léviter",
        "devenir invisible", "voler sans ailes", "force surhumaine",
        "guérir par les mains", "lire dans les pensées", "téléportation",
        "contrôler les éléments", "baguette magique", "sort", "enchantement",
        "être un super-héros", "pouvoir spécial", "magie noire", "sorcier",
        "sorcellerie", "sorts", "potion",
        "pouvoir du feu", "pouvoir de l'eau", "lévitation","rêver d'avoir des pouvoirs", "super force", "force surhumaine soudaine",
        "capacités spéciales", "pouvoir contrôler", "pouvoir sur les autres",
      ],
      interpretation: "Posséder des pouvoirs en rêve reflète un désir de maîtrise, de reconnaissance ou de dépassement de soi. La télékinésie symbolise le souhait d'influencer ton environnement sans effort. L'invisibilité traduit un besoin de retrait ou une peur d'être vu. La guérison par les mains révèle un don empathique profond. Ces rêves t'invitent à reconnaître les ressources extraordinaires qui sommeillent en toi.",
      image: "/images/iconekeywords/pouvoirs.webp"
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // ─── SPORT ENRICHI ────────────────────────────────────────────────────────
    // ═══════════════════════════════════════════════════════════════════════════
    {
      keywords: [
        "basketball", "basket", "panier", "dunk", "rebond", "trois points",
        "dribble", "terrain de basket", "équipe de basket", "NBA",
        "slam dunk", "lancer franc", "pivot"
      ],
      interpretation: "Le basket en rêve représente l'ambition, la précision et le travail d'équipe. Marquer un panier symbolise l'atteinte d'un objectif avec brio. Le dribble entre adversaires évoque ta capacité à te faufiler dans les obstacles de la vie. Rater le panier invite à recalibrer tes efforts.",
      image: "/images/iconekeywords/sport.webp"
    },
    {
      keywords: [
        "tennis", "raquette", "balle", "filet", "court", "ace", "service",
        "jeu set match", "Roland Garros", "Wimbledon", "smash", "volée",
        "revers", "coup droit", "point", "tie-break"
      ],
      interpretation: "Le tennis en rêve symbolise un échange, une confrontation ou une négociation. La balle qui va et vient évoque un dialogue, une décision à prendre entre deux options. Remporter le match reflète ta confiance à défendre tes idées. Perdre invite à analyser ta stratégie dans un conflit actuel.",
      image: "/images/iconekeywords/sport.webp"
    },
    {
      keywords: [
        "boxe", "boxer", "combat", "ring", "uppercut", "ko", "knock-out",
        "gants de boxe", "punching-ball", "arts martiaux", "karaté",
        "judo", "kung-fu", "mma", "combat libre", "self-défense",
        "frapper", "se battre", "adversaire", "champion"
      ],
      interpretation: "La boxe et les arts martiaux en rêve symbolisent un conflit intérieur ou extérieur que tu dois affronter. Gagner le combat reflète ta force et ta détermination. Recevoir des coups indique que tu te sens attaqué dans ta vie éveillée. Le ring est l'arène de tes défis personnels.",
      image: "/images/iconekeywords/sport.webp"
    },
    {
      keywords: [
        "vélo", "cyclisme", "pédaler", "vtt", "route", "tour de france",
        "chaîne", "vitesses", "descente à vélo", "montée à vélo",
        "tandem", "freiner", "cycliste", "roue de vélo", "pédalier"
      ],
      interpretation: "Le vélo en rêve représente ton équilibre de vie et ta progression à ton propre rythme. Pédaler en montée symbolise un effort nécessaire face à un obstacle. La descente libre évoque le lâcher-prise et la fluidité. Une chaîne cassée ou des freins défaillants signalent qu'un mécanisme de ta vie a besoin d'attention.",
      image: "/images/iconekeywords/sport.webp"
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // ─── ENGLISH ──────────────────────────────────────────────────────────────
  // ═══════════════════════════════════════════════════════════════════════════
  en: [

    // ─── ELEMENTS / NATURE ───────────────────────────────────────────────────
    {
      keywords: [
        "water", "sea", "ocean", "river", "rain", "swim", "lake", "waterfall",
        "flood", "wave", "stream", "spring", "brook", "tide", "pool",
        "dive", "wet", "fog", "mist", "damp", "puddle", "fountain", "mud",
        "underwater", "depth", "abyss", "current", "overflow", "dew"
      ],
      interpretation: "Water symbolizes your deep emotions and inner state. Calm water indicates peace and emotional clarity. Turbulent water, floods or drowning reveals submerged emotions that need to be acknowledged. Diving into water signifies exploring your unconscious.",
      image: "/images/iconekeywords/eau.webp"
    },
    {
      keywords: [
        "fly", "flying", "bird", "sky", "wings", "air", "glide", "cloud",
        "soar", "rise", "levitate", "float", "hover", "parachute", "freedom",
        "height", "altitude", "take off", "feather", "ascend", "drift",
        "fly high", "fly without wings", "flight"
      ],
      interpretation: "Flying represents a desire for freedom, release from a burden or the feeling of dominating a situation. Rising very high can express ambition or spiritual awakening. Struggling to fly suggests an obstacle holding back your momentum in waking life.",
      image: "/images/iconekeywords/vole.webp"
    },
    {
      keywords: [
        "fall", "falling", "void", "cliff", "slip", "abyss", "drop",
        "vertigo", "edge", "chasm", "collapse", "tumble", "stumble",
        "lose balance", "hole", "descent", "plunge", "fall endlessly",
        "falling in slow motion", "ground collapsing"
      ],
      interpretation: "Falling often reflects a loss of control, insecurities or fear of failure in a current situation. The fall also symbolizes a necessary letting go. If you wake up with a jolt, your body is processing intense emotional tension.",
      image: "/images/iconekeywords/chute.webp"
    },
    {
      keywords: [
        "fire", "burning", "flame", "smoke", "blaze", "ember", "heat",
        "explosion", "volcano", "spark", "torch", "candle", "burn",
        "ashes", "phoenix", "passion", "ardor", "campfire", "wildfire",
        "inferno", "charred", "scorched"
      ],
      interpretation: "Fire embodies passion, anger or a purifying transformation. A gentle fire (candle, hearth) symbolizes warmth and creative inspiration. A devastating blaze reveals an uncontrolled intense emotion or a radical change underway.",
      image: "/images/iconekeywords/feu.webp"
    },
    {
      keywords: [
        "storm", "thunder", "lightning", "wind", "cyclone", "hurricane",
        "tornado", "heavy rain", "hail", "thick fog", "snowstorm",
        "gust", "typhoon", "dark cloud", "threatening sky", "tempest",
        "thunderstorm", "downpour", "squall"
      ],
      interpretation: "The storm represents a period of emotional turbulence, inner conflict or external crisis. Lightning can symbolize a sudden revelation. After every storm comes calm — this trial is forging your resilience and wisdom.",
      image: "/images/iconekeywords/orage.webp"
    },
    {
      keywords: [
        "snow", "winter", "ice", "snowflake", "frost", "cold", "black ice",
        "blizzard", "igloo", "snowy landscape", "snowman", "avalanche",
        "white", "icicle", "snowdrift", "skiing", "skating", "iceberg",
        "frozen ground", "frozen lake", "ice cold"
      ],
      interpretation: "Snow and ice symbolize a period of calm, pause or emotional numbness. A snowy landscape may indicate a need for solitude and recentering. Ice sometimes represents frozen emotions or relationships waiting to be thawed.",
      image: "/images/iconekeywords/neige.webp"
    },
    {
      keywords: [
        "beach", "sand", "waves", "sunbathe", "shells", "seaside",
        "shore", "tide", "surf", "palm tree", "umbrella", "vacation",
        "horizon", "sunset at sea", "crab", "jellyfish", "coral",
        "swimming in the sea", "sandcastle", "pebbles", "coast"
      ],
      interpretation: "The beach represents the boundary between the conscious (land) and the unconscious (sea). A calm shore invites introspection and rest. Powerful waves suggest emotions to be tamed. The beach is also a symbol of transitions and new horizons.",
      image: "/images/iconekeywords/plage.webp"
    },
    {
      keywords: [
        "desert", "hot sand", "thirst", "solitude", "oasis", "mirage",
        "dunes", "scorching heat", "caravan", "camel", "aridity",
        "empty space", "wandering", "lost in the desert", "cactus",
        "drought", "barren land", "cracked earth"
      ],
      interpretation: "The desert symbolizes a feeling of emptiness, isolation or crossing an arid period in your life. Finding an oasis indicates a vital resource or unexpected support is near. The desert also invites meditation, simplicity and self-discovery.",
      image: "/images/iconekeywords/desert.webp"
    },
    {
      keywords: [
        "mountain", "summit", "climb", "peak", "altitude", "hill",
        "hiking", "rock", "cliff", "alpinism", "view from the top",
        "trail", "valley", "pass", "glacier", "refuge", "snowy peak",
        "ridge", "mountaineering", "steep slope", "rope climbing"
      ],
      interpretation: "The mountain symbolizes a challenge to overcome or a goal to reach. Climbing it courageously reflects your ability to persevere. Reaching the summit signals an upcoming victory. Being stuck halfway suggests identifying what is holding back your progress.",
      image: "/images/iconekeywords/montagne.webp"
    },
    {
      keywords: [
        "forest", "trees", "woods", "jungle", "leaves", "branches",
        "undergrowth", "mushroom", "roots", "ivy", "moss", "clearing",
        "forest path", "giant trees", "enchanted forest",
        "broken branch", "oak", "pine", "sequoia", "bamboo", "rainforest",
        "lost in the woods", "dark forest"
      ],
      interpretation: "The forest represents the unconscious, mystery and deep growth. Getting lost in a forest suggests inner confusion or a search for direction. A luminous forest with a clearing invites exploring your deeper self. Roots symbolize your origins and foundations.",
      image: "/images/iconekeywords/foret.webp"
    },

    // ─── DETAILED BODY PARTS (NEW) ────────────────────────────────────────────
    {
      keywords: [
        "toe", "toes", "foot", "feet", "ankle", "heel", "sole",
        "toenail", "bunion", "blister", "walking barefoot", "injured foot",
        "bleeding foot", "sprained ankle", "foot cramp", "bare feet"
      ],
      interpretation: "Feet and toes symbolize your grounding to reality, stability and life's progression. An injured or painful foot indicates difficulty moving forward or feeling supported. A broken toe can signal that a small obstacle is slowing you down more than expected. Walking barefoot evokes a return to essentials and authenticity.",
      image: "/images/iconekeywords/jambes.webp"
    },
    {
      keywords: [
        "belly", "stomach", "abdomen", "navel", "intestine", "digestion",
        "stomachache", "abdominal pain", "bloating", "belly growing",
        "guts", "organs", "liver", "spleen", "nausea", "butterflies in stomach",
        "cramps", "gut feeling"
      ],
      interpretation: "The belly represents your instincts, deep intuition and ability to 'digest' life's experiences. Abdominal pain in a dream often signals a situation that is hard to accept or integrate. The navel symbolizes the original connection. Butterflies in the stomach evoke anticipatory excitement or anxiety.",
      image: "/images/iconekeywords/ventre.webp"
    },
    {
      keywords: [
        "back", "spine", "vertebra", "neck", "shoulder", "shoulder blade",
        "backache", "back pain", "broken back", "sore back", "lower back",
        "carrying on back", "weight on shoulders", "burden", "herniated disc"
      ],
      interpretation: "The back symbolizes support, the burden you carry and your ability to 'hold on'. Intense back pain in a dream indicates you feel overloaded with responsibilities. A broken back evokes deep exhaustion or the feeling of being at your limit. The neck represents rigidity or flexibility when facing situations.",
      image: "/images/iconekeywords/dos.webp"
    },
    {
      keywords: [
        "neck", "throat", "larynx", "voice", "speak", "can't speak",
        "losing your voice", "tight throat", "strangle", "choke",
        "swallow", "sore throat", "silent scream", "mute", "gagged",
        "cut off voice", "voiceless", "speechless", "aphonia"
      ],
      interpretation: "The throat and neck symbolize self-expression and communication. Being unable to speak or scream in a dream is very common: it conveys a feeling of not being heard or difficulty expressing an important truth. A tight throat reflects a held-back emotion. This dream invites you to find your voice.",
      image: "/images/iconekeywords/gorge.webp"
    },
    {
      keywords: [
        "hair", "locks", "hairstyle", "hair falling out", "baldness",
        "hair loss", "long hair", "short hair", "haircut", "hairdresser",
        "dye", "braid", "bun", "grey hair", "beard", "mustache",
        "body hair", "shaving", "bald head"
      ],
      interpretation: "Hair symbolizes vitality, identity and personal strength. Seeing it fall out in large quantities evokes a fear of losing power, attractiveness or control. Getting a haircut represents a deliberate identity change or a new life phase. White hair symbolizes wisdom or anxiety.",
      image: "/images/iconekeywords/cheveux.webp"
    },
    {
      keywords: [
        "face", "facial features", "wrinkles", "facial scar", "pimple",
        "acne", "mole", "spot", "deformed face", "face changing",
        "mask", "grimace", "smile", "blushing", "going pale",
        "makeup", "face burn", "unrecognizable face"
      ],
      interpretation: "The face represents identity, the image you project to the world and how you perceive yourself. A deformed or unrecognizable face signals an identity crisis or a period of profound transformation. Wearing a mask indicates you are hiding a part of yourself. Blemishes or imperfections reflect anxiety about others' judgment.",
      image: "/images/iconekeywords/visage.webp"
    },
    {
      keywords: [
        "ear", "ears", "hear", "can't hear", "deafness", "tinnitus",
        "ringing in ears", "whisper", "murmur", "voices in head",
        "listen", "earache", "bleeding ear", "eardrum", "hearing", "deaf"
      ],
      interpretation: "Ears symbolize your ability to listen — to others, your intuition, or difficult truths. Being unable to hear in a dream may indicate you are ignoring an important message. Tinnitus or ringing represents intrusive thoughts that are hard to silence. A whisper in your ear often evokes a secret or inner guidance.",
      image: "/images/iconekeywords/oreille.webp"
    },
    {
      keywords: [
        "nose", "smell", "odor", "sense of smell", "nosebleed",
        "sniff", "scent", "bad smell", "good smell", "perfume",
        "stench", "suspicious smell", "stink", "broken nose",
        "blocked nose", "cold", "sneeze"
      ],
      interpretation: "The nose and sense of smell symbolize intuition and the ability to 'sense' situations before they reveal themselves. A nosebleed indicates too much emotional or physical pressure. Smelling something unpleasant in a dream suggests a situation or relationship is beginning to deteriorate. An intoxicating perfume evokes nostalgia or desire.",
      image: "/images/iconekeywords/nez.webp"
    },

    // ─── PURE EMOTIONS (NEW) ──────────────────────────────────────────────────
    {
      keywords: [
        "anger", "rage", "fury", "yell", "scream", "explode",
        "hit", "destroy", "inner violence", "irritation",
        "frustration", "impatience", "lose temper", "losing control",
        "argument", "fight", "blow up", "get angry", "outburst"
      ],
      interpretation: "Anger in a dream is often a suppressed emotion from waking life seeking expression. It can signal an unspoken injustice, accumulated frustration or a crossed personal boundary. Expressing rage in a dream is liberating — the unconscious is releasing it. This dream invites you to identify what truly affects you and express it healthily.",
      image: "/images/iconekeywords/colere.webp"
    },
    {
      keywords: [
        "fear", "terror", "dread", "anxiety", "panic", "horror",
        "nightmare", "phobia", "fright", "trembling with fear",
        "paralyzed by fear", "feeling of danger", "premonition",
        "cold sweats", "heart racing from fear", "breathless from fear"
      ],
      interpretation: "Fear in a dream is the unconscious's most direct signal: something in your waking life demands your attention. The object of the fear reveals what you are avoiding or have not yet accepted. A recurring nightmare indicates an unresolved situation persists. Facing fear in a dream is an act of courage that extends into reality.",
      image: "/images/iconekeywords/peur.webp"
    },
    {
      keywords: [
        "shame", "humiliation", "embarrassment", "blushing with shame",
        "ridiculed", "mocked", "laughed at", "being the laughingstock",
        "guilt", "remorse", "regret", "bad conscience", "feeling guilty",
        "confession", "mortified"
      ],
      interpretation: "Shame in a dream touches on self-image and the fear of judgment. Being mocked or humiliated evokes a wound of self-esteem or fear of not being accepted as you are. Guilt signals a past action that needs to be looked at with kindness and forgiven. These dreams invite you to treat yourself more gently.",
      image: "/images/iconekeywords/honte.webp"
    },
    {
      keywords: [
        "sadness", "cry", "tears", "grief", "depression", "melancholy",
        "mourning", "despair", "despondency", "gloom", "emptiness",
        "sobs", "breakdown", "deep loneliness", "inner void",
        "feeling abandoned", "blues", "heavy heart", "weeping"
      ],
      interpretation: "Sadness in a dream is often a sadness that has been suppressed and is seeking expression. Crying in a dream is a precious cathartic release — let it happen. Unexpressed grief in waking life manifests here to be integrated. This dream is an invitation to give more space to your emotions and not minimize your suffering.",
      image: "/images/iconekeywords/tristesse.webp"
    },
    {
      keywords: [
        "joy", "happiness", "euphoria", "elation", "burst of laughter",
        "laugh", "fun", "being happy", "lightness", "celebration",
        "jubilation", "enthusiasm", "excitement", "bliss", "ecstasy",
        "serenity", "inner peace", "contentment", "delight"
      ],
      interpretation: "Joy in a dream is a gift from the unconscious: it reminds you of what truly matters to you. A party or burst of laughter signals that your soul needs lightness and pleasure. A deep bliss may be the expression of an awakening or inner alignment. These dreams invite you to cultivate more such joyful moments in your daily life.",
      image: "/images/iconekeywords/joie.webp"
    },

    // ─── BATHROOM / BODILY EMBARRASSMENT (NEW) ───────────────────────────────
    {
      keywords: [
        "toilet", "bathroom", "urinate", "pee", "relieve yourself",
        "defecation", "constipated", "diarrhea", "dirty toilet",
        "public toilet", "no door on toilet", "broken toilet",
        "looking for a toilet", "can't find a toilet",
        "wetting yourself", "wetting accident", "urgent need", "hold it in"
      ],
      interpretation: "Dreaming of toilets is one of the most common dreams — and often taboo. It symbolizes the need to release an emotional burden, a psychological toxin or a situation you want to 'get rid of'. Toilets that can't be found or are dirty reflect difficulty finding a private space to process your emotions. This dream invites you to let go of what no longer belongs to you.",
      image: "/images/iconekeywords/toilettes.webp"
    },

    // ─── SEXUALITY / INTIMACY (NEW) ───────────────────────────────────────────
    {
      keywords: [
        "sex", "sexual", "make love", "intercourse", "erotic", "carnal desire",
        "physical attraction", "naked body", "physical intimacy",
        "intimate touch", "pleasure", "orgasm", "arousal",
        "fantasy", "physical seduction", "sensuality",
        "betrayal", "physical infidelity", "intimate partner"
      ],
      interpretation: "Sexual dreams are very common and do not necessarily mean a literal desire. They often express a need for deep connection or fusion with an aspect of yourself represented by the person in the dream. An intimate encounter with a stranger may symbolize integrating a quality you wish to develop. These dreams invite you to explore your deeper desires and emotional needs.",
      image: "/images/iconekeywords/intime.webp"
    },

    // ─── CLOTHING / APPEARANCE (NEW) ─────────────────────────────────────────
    {
      keywords: [
        "clothes", "clothing", "dress", "outfit", "get dressed", "undress",
        "dress", "suit", "trousers", "shirt", "coat", "raincoat",
        "shoes", "boots", "sandals", "sneakers", "heels",
        "dirty clothes", "torn clothes", "wrong outfit",
        "uniform", "costume", "inappropriate attire",
        "in pyjamas", "formal attire", "fashion", "wardrobe"
      ],
      interpretation: "Clothing represents the image you project to the world and how you want to be perceived. Finding yourself in inappropriate or torn clothing reflects a fear of judgment or feeling inadequate. A costume indicates you are playing a role. New clothes announce a fresh start or a new way of being.",
      image: "/images/iconekeywords/vetements.webp"
    },

    // ─── CELEBRITIES / KNOWN FIGURES (NEW) ───────────────────────────────────
    {
      keywords: [
        "celebrity", "star", "actor", "actress", "singer", "famous person",
        "public figure", "idol", "influencer", "dreaming of a celebrity",
        "TV character", "movie hero", "fictional character", "icon",
        "politician", "president", "king", "queen", "model"
      ],
      interpretation: "Dreaming of a celebrity generally speaks not of that person but of what they represent to you — a quality you admire or wish to develop. An actor may symbolize your ability to play multiple roles. A singer evokes creativity and the need for self-expression. A politician may represent authority or justice in your life.",
      image: "/images/iconekeywords/celebrite.webp"
    },

    // ─── NUMBERS / FIGURES (NEW) ─────────────────────────────────────────────
    {
      keywords: [
        "number", "figure", "digit", "three", "seven", "twelve", "eleven",
        "thirteen", "forty", "hundred", "thousand", "zero", "one", "two",
        "four", "five", "six", "eight", "nine", "ten",
        "calculation", "counting", "countdown", "date", "time", "year"
      ],
      interpretation: "Numbers in dreams often carry symbolic or personal significance. The number 3 represents the trinity and creation. The number 7 symbolizes perfection and the spiritual. The number 13 is not always negative — it can signal transformation. A number that recurs insistently is a message from your unconscious not to be ignored — note it upon waking.",
      image: "/images/iconekeywords/chiffres.webp"
    },

    // ─── HOUSEHOLD OBJECTS / EVERYDAY (NEW) ──────────────────────────────────
    {
      keywords: [
        "table", "chair", "sofa", "couch", "bed", "mattress", "pillow", "duvet",
        "fridge", "refrigerator", "oven", "microwave", "washing machine",
        "vacuum", "broom", "dishes", "pot", "pan",
        "tap", "sink", "shower", "bathtub", "bathroom mirror",
        "wardrobe", "closet", "drawer", "furniture"
      ],
      interpretation: "Everyday objects in dreams represent routine and fundamental aspects of your life. A bed or mattress symbolizes rest, intimacy and recovery. An empty fridge evokes an emotional or material lack. A leaking tap represents a loss of energy or resources. These dreams invite you to examine the comfort and security in your daily environment.",
      image: "/images/iconekeywords/meubles.webp"
    },
    {
      keywords: [
        "television", "tv", "watch tv", "tv screen", "show",
        "channel", "remote control", "lost remote", "tv turning off",
        "blurry image", "static", "series", "documentary",
        "news", "advertisement", "binge watching", "streaming"
      ],
      interpretation: "The television in a dream represents your relationship to information, external influences and the stories you tell yourself about your life. Endlessly channel surfing evokes difficulty focusing or committing. A television that suddenly turns off signals information you are refusing to hear. A distressing program reflects your current preoccupations.",
      image: "/images/iconekeywords/television.webp"
    },

    // ─── SPECIFIC FOOD (NEW) ──────────────────────────────────────────────────
    {
      keywords: [
        "cake", "pastry", "pie", "croissant", "bakery",
        "chocolate", "candy", "sweets", "confectionery", "dessert",
        "ice cream", "sorbet", "jam", "honey",
        "sweetness", "sugary", "treat", "indulge", "sweet feast"
      ],
      interpretation: "Sweets and cakes in dreams symbolize life's pleasures and rewards. Indulging in chocolate or pastries evokes a need for affection, comfort or reward. A birthday cake represents life milestones and celebration. A refused or spoiled sweet suggests you are depriving yourself of legitimate pleasures.",
      image: "/images/iconekeywords/gateau.webp"
    },

    // ─── ADDITIONAL ANIMALS (NEW) ─────────────────────────────────────────────
    {
      keywords: [
        "rat", "mouse", "rodent", "hamster", "guinea pig",
        "giant rat", "rat invasion", "running rat", "dead rat",
        "mousetrap", "gnaw", "infestation"
      ],
      interpretation: "The rat or mouse in a dream often evokes fears related to survival, betrayal or parasitic thoughts that are hard to control. An invasion of rats represents problems multiplying or worries invading your mind. A tame rat may symbolize your ability to transform a fear into something manageable.",
      image: "/images/iconekeywords/rat.webp"
    },
    {
      keywords: [
        "frog", "toad", "croaking", "pond", "metamorphosis", "tadpole",
        "jumping frog", "fear of frogs", "lizard", "salamander",
        "gecko", "iguana", "reptile", "crocodile", "alligator"
      ],
      interpretation: "The frog symbolizes transformation, adaptability and renewal — it lives between two worlds (water and land). A toad may represent what is repulsive but precious once accepted (the frog prince tale). The lizard evokes instinctive survival and the ability to regenerate what has been lost.",
      image: "/images/iconekeywords/grenouille.webp"
    },
    {
      keywords: [
        "cow", "bull", "sheep", "lamb", "pig", "rabbit",
        "duck", "goose", "hen", "rooster", "farm", "farm animals",
        "meadow", "pasture", "flock", "shepherd", "herd", "cattle"
      ],
      interpretation: "Farm animals symbolize domestic aspects, prosperity and natural resources. The cow represents abundance and nurturing motherhood. The bull embodies raw strength and virility. The sheep evokes conformity or conversely the need to stand out from the flock. The farm represents your foundations, roots and what nourishes you.",
      image: "/images/iconekeywords/ferme.webp"
    },

    // ─── ADDITIONAL PLACES (NEW) ──────────────────────────────────────────────
    {
      keywords: [
        "hotel", "hotel room", "reception", "concierge", "hotel lobby",
        "hotel elevator", "room service", "minibar", "hotel pool",
        "inn", "guesthouse", "bed and breakfast", "lodge",
        "suite", "standard room"
      ],
      interpretation: "The hotel represents a transitional space, a period of passage or waiting in your life. A comfortable hotel room symbolizes a well-lived transition. A dirty or uncomfortable room reflects discomfort in a temporary situation. The hotel elevator symbolizes the ups and downs of your current journey.",
      image: "/images/iconekeywords/hotel.webp"
    },
    {
      keywords: [
        "library", "books", "bookshelves", "knowledge", "archives",
        "reading room", "librarian", "manuscript", "parchment",
        "old book", "encyclopedia", "dictionary", "atlas",
        "forbidden book", "secret book", "volume"
      ],
      interpretation: "The library is the temple of knowledge in dreams. It symbolizes access to important knowledge, resources or memories. A book you cannot read indicates information still inaccessible. A forbidden or secret book evokes a hidden truth you are ready to discover. These dreams invite you to deepen your quest for knowledge.",
      image: "/images/iconekeywords/bibliotheque.webp"
    },
    {
      keywords: [
        "supermarket", "grocery store", "shopping", "cart", "aisles",
        "checkout", "queue", "buy", "sell", "market", "flea market",
        "shopping mall", "store window", "sales", "bargain"
      ],
      interpretation: "The supermarket or market represents life choices, available resources and your ability to 'stock up' for the future. Empty shelves evoke a feeling of lack or anxiety. Not being able to pay at the checkout reflects a fear of precarity. An abundant market symbolizes the opportunities and abundance surrounding you.",
      image: "/images/iconekeywords/marche.webp"
    },
    {
      keywords: [
        "theatre", "stage", "performance", "show", "actor on stage",
        "backstage", "curtain", "audience", "applause", "booing",
        "forgetting lines", "missed entrance", "lead role",
        "extra", "directing", "improvisation", "play"
      ],
      interpretation: "The theatre symbolizes the feeling that your life is a stage on which you play a role. Forgetting your lines or missing your cue reflects a fear of not being up to the task in a social or professional situation. Being backstage indicates you are observing without participating. Taking the stage to applause announces well-deserved recognition.",
      image: "/images/iconekeywords/theatre.webp"
    },

    // ─── SPORT / PHYSICAL ACTIVITY ────────────────────────────────────────────
    {
      keywords: [
        "sport", "soccer", "football", "ball", "goal", "match", "field",
        "team", "goalkeeper", "penalty", "referee", "world cup",
        "championship", "stadium", "fan", "score", "halftime",
        "kick", "header", "offside", "red card", "yellow card"
      ],
      interpretation: "Football in dreams symbolizes teamwork, competition and your ability to reach your goals. Scoring a goal represents an imminent achievement. Missing a penalty reflects fear of failure at a crucial moment. The team around you evokes your support system in real life.",
      image: "/images/iconekeywords/sport.webp"
    },
    {
      keywords: [
        "run", "running", "marathon", "sprint", "athletics", "runner",
        "jogging", "track", "finish line", "race", "endurance", "speed",
        "out of breath", "run fast", "run slow", "can't run",
        "treadmill", "trail running", "heavy legs while running"
      ],
      interpretation: "Running in a dream expresses your relationship with effort and progress. Running freely and fast symbolizes self-confidence and vital momentum. Not being able to run or running in place reveals a feeling of blockage or powerlessness. Crossing the finish line announces a well-deserved success.",
      image: "/images/iconekeywords/sport.webp"
    },
    {
      keywords: [
        "swimming", "swim", "pool", "crawl", "breaststroke", "backstroke",
        "butterfly stroke", "dive", "lane", "clear water", "swim underwater",
        "apnea", "swimmer", "swimming competition", "cold water", "warm water",
        "drowning in pool"
      ],
      interpretation: "Swimming in a dream symbolizes your ability to navigate your emotions. Swimming with ease shows you manage your emotional life well. Swimming against the current reflects effort going against the tide. Drowning in the pool signals that emotions are overwhelming you. Clear water announces a period of lucidity.",
      image: "/images/iconekeywords/sport.webp"
    },
    {
      keywords: [
        "basketball", "hoop", "dunk", "rebound", "three pointer",
        "dribble", "basketball court", "basketball team", "nba",
        "slam dunk", "free throw", "pivot", "layup"
      ],
      interpretation: "Basketball in dreams represents ambition, precision and teamwork. Scoring a basket symbolizes achieving a goal brilliantly. Dribbling past opponents evokes your ability to navigate obstacles in life. Missing the basket invites you to recalibrate your efforts.",
      image: "/images/iconekeywords/sport.webp"
    },
    {
      keywords: [
        "tennis", "racket", "ball", "net", "court", "ace", "serve",
        "game set match", "wimbledon", "smash", "volley",
        "backhand", "forehand", "point", "tiebreak", "clay court"
      ],
      interpretation: "Tennis in dreams symbolizes an exchange, confrontation or negotiation. The ball going back and forth evokes a dialogue, a decision between two options. Winning the match reflects your confidence in defending your ideas. Losing invites you to analyze your strategy in a current conflict.",
      image: "/images/iconekeywords/sport.webp"
    },
    {
      keywords: [
        "boxing", "box", "fight", "ring", "uppercut", "knockout", "ko",
        "boxing gloves", "punching bag", "martial arts", "karate",
        "judo", "kung fu", "mma", "combat sports", "self defense",
        "hit", "fight back", "opponent", "champion", "wrestling"
      ],
      interpretation: "Boxing and martial arts in dreams symbolize a conflict — inner or outer — that you must face. Winning the fight reflects your strength and determination. Being hit indicates you feel attacked in your waking life. The ring is the arena of your personal challenges.",
      image: "/images/iconekeywords/sport.webp"
    },

    // ─── PEOPLE / RELATIONSHIPS ───────────────────────────────────────────────
    {
      keywords: [
        "family", "father", "dad", "mother", "mom", "brother", "sister",
        "parents", "grandparents", "grandfather", "grandmother",
        "uncle", "aunt", "cousin", "child", "son",
        "daughter", "husband", "wife", "spouse", "in-laws", "home",
        "family home", "family reunion", "inheritance", "ancestors",
        "siblings", "blended family", "step-brother", "step-sister"
      ],
      interpretation: "Dreaming of family members reflects your deep emotional bonds and unresolved family dynamics. Your father symbolizes authority and protection; your mother, unconditional love and care. Siblings embody rivalry or solidarity. These dreams often invite reconciliation or acceptance.",
      image: "/images/iconekeywords/famille.webp"
    },
    {
      keywords: [
        "friend", "friendship", "buddy", "best friend", "group of friends",
        "reunion", "friend's betrayal", "argument with a friend",
        "complicity", "companion", "confidant", "solidarity",
        "party with friends", "old friend", "childhood friend", "fake friend",
        "acquaintance", "squad"
      ],
      interpretation: "Dreaming of a friend speaks of your need for social connection and loyalty. A betraying friend reflects a fear of abandonment or an unhealed relational wound. An unknown friend often represents a part of yourself or an upcoming opportunity. Reunion symbolizes reconciliation with your past.",
      image: "/images/iconekeywords/ami.webp"
    },
    {
      keywords: [
        "love", "kiss", "couple", "wedding", "marriage", "breakup",
        "ex", "jealousy", "infidelity", "love declaration",
        "romance", "seduction", "date", "first love", "passion",
        "desire", "tenderness", "reconciliation", "soulmate",
        "toxic relationship", "crush", "flirt",
        "divorce", "heartbreak", "unrequited love"
      ],
      interpretation: "Love dreams reveal your deep emotional desires and needs. An ex returning often symbolizes an unresolved emotion. A wedding represents an inner union, an integration of two aspects of yourself. Jealousy in a dream invites you to examine your insecurities with kindness.",
      image: "/images/iconekeywords/amour.webp"
    },
    {
      keywords: [
        "baby", "infant", "birth", "pregnancy", "pregnant", "labor",
        "cradle", "bottle", "stroller", "diaper", "newborn", "crying baby",
        "baptism", "carrying a baby", "adoption", "twin", "premature",
        "breastfeeding", "maternity", "paternity",
        "abandoned baby", "miscarriage", "losing a baby"
      ],
      interpretation: "A baby symbolizes a new beginning, a budding project or the vulnerability of your inner child. If the baby cries, a part of you demands attention and care. Giving birth represents the dawn of a new life phase. Carrying an unknown baby evokes a responsibility you are assuming or avoiding.",
      image: "/images/iconekeywords/bebe.webp"
    },
    {
      keywords: [
        "death", "die", "dying", "cemetery", "ghost", "funeral", "coffin",
        "mourning", "burial", "grave", "deceased", "passing", "cremation",
        "ghost of a loved one", "skeleton", "agony", "message from the dead",
        "lifeless body", "afterlife", "heaven", "hell", "will", "disappear",
        "sudden death", "watching someone die",
        "death of a loved one", "losing someone", "losing your mother", "losing your father",
        "losing a child", "widower", "widow", "orphan", "grieving a loved one"
      ],
      interpretation: "Death in a dream is not literal — it symbolizes the end of a cycle and an imminent renewal. Dreaming of a deceased loved one is often a message of love or guidance. Death of yourself represents a deep transformation underway. These dreams invite you to release what no longer serves you in order to be reborn.",
      image: "/images/iconekeywords/mort.webp"
    },
    {
      keywords: [
        "ghost", "spirit", "apparition", "specter", "wandering soul",
        "poltergeist", "haunted house", "invisible presence",
        "shadow that walks", "voice from beyond", "blue light",
        "message from beyond the grave", "haunting", "possession", "entity",
        "night visitor", "being visited in a dream","threatening old woman", "menacing old woman", "silhouette of an old woman", "hag", "threatening witch", "menacing witch", "threatening old man", "menacing old man", "dark figure in the room", "shadowy figure in the room"
      ],
      interpretation: "A ghost represents a memory, emotion or relationship from the past that hasn't been integrated yet. It may be a regret, guilt or unfinished grief. If the ghost is benevolent, it's often a message of comfort. If threatening, a repressed fear is asking to be faced.",
      image: "/images/iconekeywords/fantome.webp"
    },

    // ─── TECHNOLOGY / DIGITAL ─────────────────────────────────────────────────
    {
      keywords: [
        "computer", "screen", "keyboard", "mouse", "bug", "virus",
        "internet", "connection", "network", "wifi", "programming", "code",
        "app", "software", "file", "data", "cybersecurity", "hacker",
        "computer crash", "digital", "black screen", "AI", "artificial intelligence"
      ],
      interpretation: "The computer in dreams symbolizes your analytical capacity and information processing. A bug or crash reveals a blockage in your thinking or communication. The internet represents your thirst for connection and information. A computer virus evokes a negative thought or toxic influence infiltrating your belief system.",
      image: "/images/iconekeywords/ordinateur.webp"
    },
    {
      keywords: [
        "phone", "call", "message", "communication", "hear",
        "missed call", "unknown number", "voice on the phone", "text",
        "no signal", "broken phone", "app", "notification",
        "video call", "social media", "lost phone", "smartphone",
        "battery dead", "recharge", "silent phone", "unanswered calls"
      ],
      interpretation: "The phone represents communication, connection and the need to be heard. A missed call can symbolize a missed opportunity or a message from your intuition not to be ignored. A broken or signal-less phone indicates difficulty communicating your needs or receiving important information.",
      image: "/images/iconekeywords/telephone.webp"
    },
    {
      keywords: [
        "video game", "game", "console", "controller", "game over", "level up",
        "final boss", "character", "avatar", "virtual world", "vr",
        "extra life", "score", "quest", "mission", "ps5", "xbox",
        "nintendo", "fortnite", "minecraft", "gaming"
      ],
      interpretation: "Video games in dreams symbolize how you approach life's challenges. A game over reflects fear of failure or the end of an attempt. Leveling up represents personal progression. The character you play reveals a facet of yourself you are exploring. An unfinished quest evokes a goal left in suspense.",
      image: "/images/iconekeywords/telephone.webp"
    },

    // ─── PETS / DOMESTIC ANIMALS ──────────────────────────────────────────────
    {
      keywords: [
        "dog", "puppy", "bark", "bite", "pet", "loyal", "leash",
        "training", "german shepherd", "labrador", "poodle",
        "stray dog", "pack of dogs", "aggressive dog", "lost dog",
        "injured dog", "vet", "canine"
      ],
      interpretation: "The dog symbolizes loyalty, unconditional friendship and protection. A barking dog may signal a warning or inner alarm. A dog that bites reflects a perceived betrayal or a relationship that hurts. A puppy represents a budding friendship or a playful, innocent aspect of your personality.",
      image: "/images/iconekeywords/animal.webp"
    },
    {
      keywords: [
        "cat", "kitten", "meow", "purr", "claws", "feline",
        "black cat", "white cat", "stray cat", "wild cat",
        "independence", "mystery", "injured cat", "whiskers"
      ],
      interpretation: "The cat symbolizes independence, intuition and mystery. A black cat represents intuition and hidden powers — not bad luck. A purring cat evokes satisfaction and well-being. A scratching cat indicates that an apparently gentle relationship hides tension.",
      image: "/images/iconekeywords/animal.webp"
    },
    {
      keywords: [
        "horse", "rider", "gallop", "stallion", "mare", "foal",
        "mane", "hoof", "riding", "horse racing",
        "white horse", "black horse", "ride a horse", "wild horses",
        "stable", "trot", "canter", "equestrian", "fall off horse"
      ],
      interpretation: "The horse symbolizes freedom, power and vital energy. Galloping freely announces a period of expansion and momentum. A white horse represents purity and spiritual guidance. An out-of-control horse evokes instincts or emotions difficult to master.",
      image: "/images/iconekeywords/animal.webp"
    },

    // ─── BODY / HEALTH ────────────────────────────────────────────────────────
    {
      keywords: [
        "tooth", "teeth", "losing your teeth", "teeth falling out", "tooth loss", "a tooth falling out", "my teeth are falling out", "jaw", "tooth falls out","all my teeth falling",
        "broken tooth", "black tooth", "pulling a tooth", "dentist",
        "smile", "mouth", "dentures", "wisdom tooth",
        "bleeding gums", "bite", "chew", "bruxism",
        "all teeth falling", "tooth in hand", "swollen mouth", "swollen lips",
        "lips", "swollen jaw", "gums", "dental abscess",
        "mouth swelling", "swollen face", "mouth injury", "mouth sewn shut"
      ],
      interpretation: "Losing teeth evokes a fear of losing personal power, attractiveness or ability to express yourself. A broken tooth suggests a regretted word or an unkept commitment. The dentist represents someone with power over your decisions. This dream is very common during periods of intense pressure.",
      image: "/images/iconekeywords/dent.webp"
    },
    {
      keywords: [
        "blood", "wound", "scar", "pain", "bleeding", "cut", "injury",
        "hemorrhage", "bruise", "burn", "fracture", "surgery",
        "suture", "bandage", "blood flowing", "trauma",
        "sports injury", "contusion", "broken bone", "cut yourself"
      ],
      interpretation: "Blood symbolizes vital energy, passion and sometimes a deep emotional wound that needs healing. A wound that won't heal evokes an unresolved trauma. Seeing blood flow can signify a fear of losing energy or vitality. It is a call to take care of yourself with kindness.",
      image: "/images/iconekeywords/blessure.webp"
    },
    {
      keywords: [
        "illness", "sickness", "fever", "hospital", "doctor", "medication",
        "cancer", "healing", "being sick", "diagnosis", "surgery",
        "nurse", "ambulance", "emergency room", "contagion", "epidemic",
        "recovery", "treatment", "chronic pain", "symptom",
        "scan", "xray", "blood test", "medical results",
        "seriously ill", "chemotherapy"
      ],
      interpretation: "Illness in a dream often symbolizes a part of you that needs attention and healing — not necessarily physical. The hospital represents a place of transformation and care. Healing in a dream announces an upcoming resolution of a difficulty. This dream invites you to listen to the signals of your body and soul.",
      image: "/images/iconekeywords/maladie.webp"
    },
    {
      keywords: [
        "naked", "nudity", "undressed", "ashamed of being naked",
        "exposed", "in underwear", "undressed in public",
        "forgot to get dressed", "transparency", "vulnerability",
        "being watched", "embarrassment", "modesty",
        "finding yourself naked", "naked without realizing"
      ],
      interpretation: "Dreaming of being naked in public expresses a fear of being judged, of being transparent or vulnerable in front of others. If you feel no shame, it's a sign of authenticity and growing confidence. Nudity also symbolizes bare truth — an invitation to show yourself as you truly are, without a mask.",
      image: "/images/iconekeywords/nu.webp"
    },
    {
      keywords: [
        "drowning", "drown", "underwater", "suffocating in water",
        "sinking", "can't breathe", "rising water", "rescue",
        "near-drowning", "engulfment", "submersion", "asphyxia", "freediving",
        "no air", "suffocate"
      ],
      interpretation: "Drowning symbolizes the feeling of being overwhelmed by emotions, responsibilities or external pressures. It can indicate a situation in which you feel beyond your depth. Being saved from drowning suggests help or an inner resource is available. This dream is an urgent signal to listen to yourself.",
      image: "/images/iconekeywords/noyade.webp"
    },

    // ─── COLORS / SENSATIONS ─────────────────────────────────────────────────
    {
      keywords: [
        "red", "red color", "bright red", "blood red", "everything is red",
        "red light", "red clothes", "red room", "red vision",
        "passionate red", "angry red"
      ],
      interpretation: "Red in dreams is the color of passion, vital energy and sometimes anger. It signals an intense situation demanding your immediate attention. An all-red vision may indicate repressed rage or on the contrary, an all-consuming passion. This color invites you to channel your energy consciously.",
      image: "/images/iconekeywords/couleur-rouge.webp"
    },
    {
      keywords: [
        "blue", "blue color", "deep blue", "blue sky", "blue sea",
        "everything is blue", "blue clothes", "blue light", "azure",
        "indigo", "sapphire", "night blue"
      ],
      interpretation: "Blue in dreams symbolizes serenity, communication and truth. Deep blue evokes the unconscious and inner wisdom. A blue sky announces a period of clarity and optimism. Blue light is often associated with benevolent spiritual presences.",
      image: "/images/iconekeywords/couleur-bleu.webp"
    },
    {
      keywords: [
        "golden", "gold", "gold color", "golden light", "gold object",
        "rain of gold", "everything is golden", "golden glow", "golden sun",
        "amber", "ochre", "yellow gold"
      ],
      interpretation: "Gold in dreams is the symbol of supreme value, success and divine guidance. A golden light announces a blessed period of luck and recognition. A golden object represents something precious in your life to protect. Rain of gold symbolizes imminent abundance, material or spiritual.",
      image: "/images/iconekeywords/couleur-or.webp"
    },
    {
      keywords: [
        "green", "green color", "greenery", "green forest", "green meadow",
        "everything is green", "green clothes", "green light", "jade",
        "emerald", "green nature", "vegetation"
      ],
      interpretation: "Green in dreams symbolizes growth, healing and hope. Lush green nature announces a period of renewal and vitality. Deep green evokes natural wisdom and abundance. Green is also the color of the heart — it invites you to open your heart to new possibilities.",
      image: "/images/iconekeywords/couleur-vert.webp"
    },
    {
      keywords: [
        "purple", "violet", "mauve", "purple color", "purple light",
        "purple clothes", "everything is purple", "lavender", "lilac",
        "mystical color", "purple aura"
      ],
      interpretation: "Purple in dreams symbolizes spiritual transformation, creativity and developed intuition. It is the color of the third eye and awakening. A purple light indicates deep spiritual guidance. These dreams invite you to trust your intuition and explore the deeper dimensions of your consciousness.",
      image: "/images/iconekeywords/spirituel.webp"
    },
    {
      keywords: [
        "darkness", "shadow", "dark", "black", "obscure", "pitch black",
        "seeing nothing", "blindness", "fear of dark", "dark tunnel",
        "dark figure", "silhouette in the shadows", "blackness", "void",
        "everything is black", "dark room"
      ],
      interpretation: "Darkness represents the unknown, unmanifested potential and parts of yourself still to be explored. It is not harmful — seeds germinate in the dark. A dark silhouette may embody your Jungian shadow: aspects of yourself you haven't yet accepted. It invites you toward courage and inner exploration.",
      image: "/images/iconekeywords/obscurite.webp"
    },
    {
      keywords: [
        "white", "white color", "purity", "white void", "everything is white",
        "white light", "white clothes", "white room", "blank page",
        "white snow", "white cloud", "white background"
      ],
      interpretation: "White in dreams symbolizes purity, a fresh start and openness. A dazzling white light is often associated with a spiritual experience or a moment of grace. An all-white room may represent a void to be filled or total freedom. White invites you to start on a blank page.",
      image: "/images/iconekeywords/couleur-blanc.webp"
    },

    // ─── MOVEMENT / ACTION ───────────────────────────────────────────────────
    {
      keywords: [
        "chase", "chased", "run", "running", "monster", "flee", "attack",
        "danger", "predator", "being hunted", "hide and seek threat",
        "aggressor", "escape", "trap", "ambush",
        "running in place", "cornered", "chased in the dark",
        "chased by an animal", "panic", "hide",
        "someone chasing me", "getting caught"
      ],
      interpretation: "Being chased means you are running from a responsibility, a fear or an emotion in reality. The nature of the pursuer reveals what you're avoiding: a monster may represent anger, a wild animal your instincts. Face what frightens you — often, the fear disappears as soon as you turn around.",
      image: "/images/iconekeywords/poursuite.webp"
    },
    {
      keywords: [
        "late", "being late", "miss", "missed train", "missed flight",
        "missed bus", "forget", "can't find", "lose things", "lateness panic",
        "arrive too late", "race against time", "stopped watch",
        "missed exam", "missed appointment", "time ticking", "deadline missed",
        "can't find the exit", "arriving after closing"
      ],
      interpretation: "Being late in a dream reflects a fear of missing an opportunity, of not measuring up or of not controlling time. It is one of the most common dreams during periods of stress and overload. Your unconscious invites you to reassess your priorities and give yourself the right to move at your own pace.",
      image: "/images/iconekeywords/retard.webp"
    },

    // ─── PLACES / STRUCTURES ─────────────────────────────────────────────────
    {
      keywords: [
        "house", "room", "bedroom", "door", "window", "building",
        "hallway", "stairs", "attic", "basement", "cellar", "roof",
        "garden", "facade", "interior", "abandoned house", "moving",
        "childhood home", "secret room", "unknown house",
        "living room", "kitchen", "bathroom", "walls", "apartment",
        "house collapsing", "house on fire", "flooded room"
      ],
      interpretation: "The house represents you. Each room symbolizes an aspect of yourself: the basement, the unconscious; the attic, memories; the kitchen, the nurturing. Discovering an unknown room means discovering hidden potentials. A ruined house urgently suggests a need for self-care and inner reconstruction.",
      image: "/images/iconekeywords/maison.webp"
    },
    {
      keywords: [
        "school", "exam", "class", "teacher", "lesson", "diploma",
        "university", "high school", "college", "elementary school",
        "blackboard", "notebook", "report card", "grade", "repeat a year",
        "take an exam", "cheating", "exam room", "essay", "pop quiz",
        "library", "playground", "backpack", "degree", "graduation",
        "failing an exam", "not studying", "incomprehensible lesson"
      ],
      interpretation: "School in dreams evokes fears related to judgment, performance and external validation. It often signals an important life lesson presenting itself. Dreaming of failing an exam is common whenever facing any important decision. The unconscious is testing whether you are ready for the next step.",
      image: "/images/iconekeywords/ecole.webp"
    },
    {
      keywords: [
        "prison", "cage", "trapped", "locked", "bars", "walls", "cell",
        "jailer", "convicted", "arrest", "handcuffs", "isolation",
        "detention", "inner prison", "escape", "prisoner",
        "courtroom", "conviction", "confinement", "incarceration",
        "feeling stuck", "no way out", "closing walls"
      ],
      interpretation: "Feeling trapped illustrates a sense of restriction in a relationship, job or limiting beliefs. You may feel imprisoned by a situation you believe you can't leave. This dream is a powerful call to identify what imprisons you — often, the key to freedom is found within.",
      image: "/images/iconekeywords/prison.webp"
    },
    {
      keywords: [
        "bridge", "crossing", "river", "passage", "threshold", "border",
        "footbridge", "viaduct", "fragile bridge", "bridge collapsing",
        "the other side", "bank", "transition", "crossing over",
        "suspension bridge", "bridge in fog", "very high bridge"
      ],
      interpretation: "The bridge symbolizes an important transition in your life. Crossing it with confidence shows you are ready to move on to a new chapter. A shaking or collapsing bridge evokes hesitation before change. The other side represents the future you are building.",
      image: "/images/iconekeywords/pont.webp"
    },
    {
      keywords: [
        "city", "street", "crowd", "subway", "building", "urban",
        "suburbs", "downtown", "market", "public square", "traffic jam",
        "sidewalk", "shop", "storefront", "café", "unknown neighborhood",
        "ghost town", "skyscraper", "pollution", "night in the city", "neon",
        "getting lost in the city", "unknown city"
      ],
      interpretation: "The city represents society, social interactions and the external world. A lively city reflects social engagement and vital energy. An empty or threatening city conveys a feeling of alienation or loneliness despite being surrounded by others. Getting lost in a city invites you to find your own identity within the collective.",
      image: "/images/iconekeywords/ville.webp"
    },
    {
      keywords: [
        "labyrinth", "maze", "lost", "no way out", "endless corridor",
        "dead end", "wall", "going in circles", "repeating path",
        "crossroads", "wrong paths", "minotaur", "confusion",
        "trap", "complexity", "getting lost", "spiral", "vicious circle",
        "impossible to get out", "never-ending corridor"
      ],
      interpretation: "The labyrinth symbolizes a complex situation from which you struggle to find an exit. It represents mental confusion, difficult decisions or a recurring problem. Every path explored teaches you something. The exit exists — trust your intuition rather than logic to find it.",
      image: "/images/iconekeywords/labyrinthe.webp"
    },

    // ─── ANIMALS ──────────────────────────────────────────────────────────────
    {
      keywords: [
        "snake", "viper", "bite", "reptile", "cobra", "python",
        "anaconda", "grass snake", "boa", "giant snake", "nest of snakes",
        "venom", "hiss", "snakeskin", "shed skin", "seduce",
        "lizard", "chameleon", "gecko"
      ],
      interpretation: "The snake is a powerful symbol of transformation, healing and renewal. A snakebite can indicate a betrayal or a painful but necessary awakening. The snake biting its tail (ouroboros) symbolizes the eternal cycle of life. It invites you to shed your skin and leave your old self behind.",
      image: "/images/iconekeywords/serpent.webp"
    },
    {
      keywords: [
        "animal", "wolf", "lion", "tiger", "bear", "horse", "fox",
        "deer", "elephant", "monkey", "dolphin", "whale", "shark",
        "crocodile", "leopard", "panther", "werewolf", "wild animal",
        "injured animal", "domestic animal", "herd", "pack", "zoo",
        "rhinoceros", "hippopotamus", "giraffe", "zebra",
        "animal talking to me", "giant animal"
      ],
      interpretation: "Animals embody your instincts, your wild nature and your primal forces. The wolf symbolizes loyalty and protection; the lion, courage and authority; the bear, strength and introspection; the horse, freedom and vital energy. An injured animal represents an instinct or desire that has been repressed and is demanding attention.",
      image: "/images/iconekeywords/animal.webp"
    },
    {
      keywords: [
        "insect", "spider", "wasp", "ant", "cockroach", "bee",
        "beetle", "butterfly", "mosquito", "cricket", "bug",
        "insect invasion", "sting", "spider web", "swarm",
        "caterpillar", "ladybug", "dragonfly", "fly", "hornet",
        "giant spider", "fear of insects"
      ],
      interpretation: "Insects often represent small irritations or repetitive thoughts that are hard to ignore. A spider symbolizes creativity, entrapment or a powerful feminine figure. A butterfly announces a metamorphosis. An insect invasion conveys being overwhelmed by details or minor worries.",
      image: "/images/iconekeywords/insecte.webp"
    },
    {
      keywords: [
        "bird", "eagle", "raven", "dove", "parrot", "owl",
        "barn owl", "swallow", "pigeon", "sparrow", "peacock",
        "swan", "phoenix", "feathers", "nest", "taking flight",
        "birdsong", "birdcage", "migration", "vulture", "toucan", "parakeet",
        "flamingo", "pelican", "penguin", "perch",
        "dead bird", "injured bird", "bird speaking"
      ],
      interpretation: "Birds symbolize the freedom of the spirit, messages and elevated aspirations. The eagle represents vision, leadership and divine connection. The raven evokes wisdom, mystery and sometimes symbolic death. The dove symbolizes peace. A caged bird reflects a feeling of being held back or unable to express yourself freely.",
      image: "/images/iconekeywords/oiseau.webp"
    },

    // ─── OBJECTS ──────────────────────────────────────────────────────────────
    {
      keywords: [
        "car", "drive", "vehicle", "accident", "road", "truck",
        "train", "motorbike", "brake", "steering wheel", "traffic jam",
        "broken down car", "speeding", "lose control", "highway",
        "GPS", "passenger", "rear-view mirror", "parking", "dangerous intersection",
        "engine", "hood", "driver's license",
        "car won't start", "car crash", "brakes failing",
        "bus", "bus accident", "subway", "metro", "tram", "transport",
        "driver", "bus driver", "collision", "crash into", "hit","collision", "car pile-up", "to crash into", "crashing into a wall", "rear-end collision",
        "car explosion", "exploding car", "flat tire", "car rollover", "rollover", "car flipping over"
      ],
      interpretation: "The vehicle represents your life path and the control you have over your destiny. Driving with confidence means you are directing your own path. Losing control suggests feeling overwhelmed. Being a passenger means you are letting others make decisions for you. A breakdown evokes a blockage in your progress.",
      image: "/images/iconekeywords/voiture.webp"
    },
    {
      keywords: [
        "plane", "airplane", "airport", "boarding", "flight", "turbulence",
        "crash", "landing", "takeoff", "flight attendant", "pilot",
        "cockpit", "altitude", "clouds from above", "delayed flight", "lost luggage",
        "plane falling", "fear of flying"
      ],
      interpretation: "The airplane in dreams symbolizes your high ambitions and ability to project into the future. Turbulence evokes uncertainties on the path of your projects. A plane crash reflects fear of a sudden collapse of your plans. A successful landing announces the completion of a long project.",
      image: "/images/iconekeywords/voiture.webp"
    },
    {
      keywords: [
        "money", "wealth", "bills", "coins", "treasure", "theft",
        "losing money", "finding money", "debt", "bank", "safe",
        "investment", "lottery", "earning money", "being rich",
        "being poor", "inheritance", "salary", "budget",
        "banknote", "credit card", "bitcoin", "cryptocurrency",
        "bankruptcy", "savings", "loan", "counterfeit bill"
      ],
      interpretation: "Money symbolizes energy, self-worth and security. Finding it signals an upcoming opportunity. Losing it reflects fear of scarcity or a need to reassess priorities. Dreaming of sudden wealth invites you to examine your relationship with the value you assign yourself.",
      image: "/images/iconekeywords/argent.webp"
    },
    {
      keywords: [
        "key", "lock", "open", "chest", "hidden treasure", "locked door",
        "lost key", "key ring", "master key", "padlock",
        "key that won't fit", "opening a closed door", "secret revealed",
        "keycard", "access denied", "looking for your key", "key disappearing"
      ],
      interpretation: "The key represents access to something precious: hidden knowledge, an opportunity or a long-buried emotion. A lost key indicates you are still searching for the solution. You already hold the answer — it's just a matter of finding which door it opens.",
      image: "/images/iconekeywords/cle.webp"
    },
    {
      keywords: [
        "mirror", "reflection", "see yourself", "face", "self-image",
        "broken mirror", "distorted reflection", "not recognizing yourself",
        "double", "twin in the mirror", "magic mirror", "vanity",
        "looking at yourself", "shadow in the mirror", "dark reflection",
        "mirror showing something else", "different reflection"
      ],
      interpretation: "The mirror invites introspection and self-awareness. A distorted reflection suggests an altered self-perception. Not recognizing yourself in the mirror means you are undergoing a profound identity transformation. A broken mirror symbolically marks the end of an illusion.",
      image: "/images/iconekeywords/miroir.webp"
    },
    {
      keywords: [
        "weapon", "knife", "gun", "sword", "dagger", "rifle",
        "bomb", "blade", "firearm", "armed assault",
        "self-defense", "shoot", "brandish a weapon", "duel",
        "armed combat", "knife in the back", "explosion", "grenade",
        "being threatened", "holding a weapon"
      ],
      interpretation: "Weapons in dreams symbolize power, conflict or aggression — repressed or expressed. Holding a weapon can indicate a desire to defend yourself or assert your power. Being threatened by a weapon reflects a situation in which you feel in danger or vulnerable. This dream invites you to identify unresolved conflicts in your life.",
      image: "/images/iconekeywords/arme.webp"
    },
    {
      keywords: [
        "book", "read", "novel", "library", "write", "notebook",
        "pen", "writing", "letter", "manuscript", "encyclopedia",
        "open book", "blank page", "author", "story", "reading",
        "understand", "learn", "diary", "journal", "list"
      ],
      interpretation: "The book in dreams symbolizes knowledge, personal history and life lessons. An open book invites learning and curiosity. A blank page evokes a new chapter or fear of the unknown. Not understanding what you read means a situation in your life still lacks clarity.",
      image: "/images/iconekeywords/maison.webp"
    },

    // ─── CELESTIAL / SPIRITUAL ────────────────────────────────────────────────
    {
      keywords: [
        "moon", "full moon", "crescent", "starry night", "moonlight",
        "blood moon", "blue moon", "lunar eclipse", "lunar glow",
        "tide and moon", "wolves and moon", "lunar cycle", "new moon",
        "supermoon", "golden moon", "moon descending", "giant moon"
      ],
      interpretation: "The moon governs intuition, feminine cycles and hidden emotions. The full moon amplifies feelings and revelations. A blood moon evokes intense passion or a warning. Seeing it in a dream invites you to honor your natural cycles, trust your intuition and embrace mystery.",
      image: "/images/iconekeywords/lune.webp"
    },
    {
      keywords: [
        "light", "sun", "star", "shining", "rays", "dawn", "glow",
        "divine light", "halo", "rainbow", "light at the end of the tunnel",
        "sunrise", "sunset", "bioluminescence",
        "golden light", "lighthouse", "flash of light", "northern lights",
        "shooting star", "comet", "twilight", "dawn light"
      ],
      interpretation: "Light announces an awakening, a revelation or divine guidance. It invites you to trust your intuition and move toward clarity. A rainbow symbolizes a promise after an ordeal. The light at the end of the tunnel means you are approaching the resolution of an important difficulty.",
      image: "/images/iconekeywords/lumiere.webp"
    },
    {
      keywords: [
        "spiritual", "angel", "prayer", "temple", "church", "god",
        "deity", "meditation", "mandala", "divine light", "mystical vision",
        "prophecy", "oracle", "miracle", "signs from heaven", "afterlife",
        "paradise", "eden", "being of light", "spirit guide", "ascension",
        "chakra", "aura", "energy", "vibration", "soul", "karma",
        "reincarnation", "third eye", "spiritual awakening",
        "mosque", "synagogue", "place of worship", "ritual"
      ],
      interpretation: "Spiritual dreams are among the most powerful: they often open a direct channel to the deep unconscious or the divine. An angel represents protection and a supportive message. A temple symbolizes your inner sanctuary. These dreams invite you to deepen your spiritual practice and trust in the greater plan of your life.",
      image: "/images/iconekeywords/spirituel.webp"
    },

    // ─── PERSONAL / PSYCHOLOGICAL ─────────────────────────────────────────────
    {
      keywords: [
        "travel", "suitcase", "leave", "plane", "destination", "path",
        "adventure", "passport", "airport", "train station", "departure",
        "return", "explore", "road trip", "boat", "compass", "map",
        "wander", "tourism", "foreign country", "backpack", "cruise", "expat",
        "lost passport", "lost luggage while traveling"
      ],
      interpretation: "Travel symbolizes your life journey and personal quest. A hasty departure reflects a desire for change or escape. An unknown destination invites you to trust the process. Returning home can mean a return to yourself after a period of inner wandering.",
      image: "/images/iconekeywords/voyage.webp"
    },
    {
      keywords: [
        "childhood", "childhood memory", "past", "youth", "growing up",
        "toy", "children's game", "elementary school", "childhood home",
        "parents when I was little", "old photo", "nostalgia",
        "the child I was", "regression", "innocence", "carefree",
        "playground", "swing", "slide", "birthday party",
        "seeing yourself as a child", "becoming a child again"
      ],
      interpretation: "Returning to childhood in a dream invites you to revisit an emotion, wound or joy from your early years. It is often an opportunity to comfort your inner child or integrate a foundational experience. Nostalgia in a dream sometimes signals that a part of you needs lightness and playfulness in your current life.",
      image: "/images/iconekeywords/enfance.webp"
    },
    {
      keywords: [
        "work", "office", "boss", "colleague", "fired", "promotion",
        "meeting", "project", "deadline", "work stress", "unemployment",
        "job interview", "resignation", "career", "burnout",
        "open plan office", "computer", "email", "professional success",
        "conflict at work", "harassment", "transfer", "retirement", "salary",
        "getting fired", "boss yelling", "difficult colleague"
      ],
      interpretation: "Work dreams reflect your ambitions, professional fears and power dynamics. Being fired in a dream expresses a fear of not being good enough or losing your place. A promotion signals recognition of your worth. Work stress invites you to reassess your boundaries and need for recognition.",
      image: "/images/iconekeywords/travail.webp"
    },
    {
      keywords: [
        "music", "sing", "melody", "instrument", "dance", "concert",
        "guitar", "piano", "violin", "drum", "song", "opera",
        "choir", "rhythm", "harmony", "dissonance", "celestial music",
        "hearing a melody", "composing", "rap", "hip hop", "rock",
        "electronic music", "drums", "bass", "recording studio",
        "microphone", "music stage", "festival",
        "dancing", "ball", "choreography", "ballet", "waltz"
      ],
      interpretation: "Music in dreams symbolizes inner harmony, creativity and the expression of the soul. Singing freely indicates deep joy or a need to express yourself. Dissonance evokes inner conflict or a relationship out of tune. Hearing a celestial melody is often considered a message from the beyond or the deep unconscious.",
      image: "/images/iconekeywords/musique.webp"
    },
    {
      keywords: [
        "war", "combat", "battle", "soldiers", "bomb", "explosion",
        "violence", "conflict", "army", "resistance", "invasion", "ruins",
        "war wounded", "prisoner of war", "bombing",
        "trenches", "survival", "post-war", "terrorism", "attack",
        "revolution", "rebellion", "apocalypse", "end of the world"
      ],
      interpretation: "War symbolizes an intense inner conflict or an exhausting external struggle. It may represent a fight between two parts of yourself or a life situation in which you feel at war against something. Resistance in a war dream represents your inner strength and ability to overcome adversity.",
      image: "/images/iconekeywords/guerre.webp"
    },
    {
      keywords: [
        "flower", "garden", "rose", "petals", "plant", "bloom", "blossom",
        "tulip", "orchid", "sunflower", "lavender", "peony",
        "bouquet", "picking flowers", "garden in bloom", "herbs",
        "gardening", "vegetable garden", "greenhouse", "wilting flower",
        "spring", "cherry blossom", "nature blooming", "flowering tree"
      ],
      interpretation: "Flowers announce blossoming, beauty and personal growth. A rose symbolizes love and beauty but also protection (thorns). A sunflower evokes clarity and optimism. A garden in bloom signals a blessed period of creativity and love. A wilting flower suggests a grief or the end of a cycle.",
      image: "/images/iconekeywords/fleur.webp"
    },
    {
      keywords: [
        "food", "eat", "meal", "hunger", "feast", "table", "cook",
        "banquet", "bread", "dessert", "fruit", "vegetables",
        "meat", "restaurant", "dinner", "breakfast", "starving",
        "abundant food", "spoiled food", "taste", "flavor",
        "pizza", "cake", "chocolate", "alcohol", "wine", "drink",
        "diet", "share a meal", "empty fridge", "eating alone", "family meal"
      ],
      interpretation: "Food symbolizes an emotional, creative or spiritual need. An abundant feast indicates deep satisfaction or coming prosperity. Hunger in a dream reveals an affective lack or an unmet need. Cooking represents creativity and care given to others. Spoiled food suggests a toxic relationship or situation.",
      image: "/images/iconekeywords/repas.webp"
    },

    // ─── BODY / PARTS ─────────────────────────────────────────────────────────
    {
      keywords: [
        "eyes", "eye", "see", "gaze", "blind", "blindness", "glasses",
        "tears", "cry", "blurry vision", "one-eyed", "blink",
        "pupil", "iris", "look into eyes", "bleeding eye",
        "lost sight", "visual hallucination",
        "eyes opening", "closed eyes", "third eye"
      ],
      interpretation: "Eyes symbolize perception, consciousness and truth. Losing your sight in a dream indicates resistance to facing a reality. Crying eyes express a repressed emotion seeking release. Looking someone in the eyes symbolizes a deep connection or a necessary confrontation.",
      image: "/images/iconekeywords/yeux.webp"
    },
    {
      keywords: [
        "legs", "paralysis", "can't move", "heavy legs", "running in place",
        "legs give out", "limp", "walk", "knees", "feet", "ankle",
        "immobile", "frozen", "petrified", "paralyzed", "can't feel legs",
        "walk barefoot", "leg injury", "broken leg", "amputated leg"
      ],
      interpretation: "Legs represent your ability to move forward in life and support yourself. Paralysis in a dream is very common: it conveys a feeling of blockage, helplessness or fear about an important decision. Heavy legs signal deep exhaustion. Not being able to run invites you to identify what is truly holding you back.",
      image: "/images/iconekeywords/jambes.webp"
    },
    {
      keywords: [
        "hands", "touch", "give", "take", "handshake", "outstretched hand",
        "tied hands", "dirty hands", "clean hands", "caress", "hit",
        "clap", "fist", "fingers", "severed hand", "lose a hand", "injured hand",
        "arm", "shoulder", "handprint",
        "severed finger", "broken nail", "trembling hand"
      ],
      interpretation: "Hands symbolize the power to act, creativity and connection to others. Reaching out a hand represents generosity or a call for help. Tied hands indicate a feeling of powerlessness. Dirty hands evoke guilt or a situation you want to wash your hands of. Losing a hand signals a fear of losing your abilities or autonomy.",
      image: "/images/iconekeywords/mains.webp"
    },

    // ─── DREAM EXPERIENCES ────────────────────────────────────────────────────
    {
      keywords: [
        "lucid dream", "dream within a dream", "wake up in a dream",
        "knowing you're dreaming", "control your dream", "false awakening",
        "nested dream", "out of body", "astral travel",
        "awareness in dream", "meta-dream", "sleep paralysis",
        "hypnagogia", "seeing yourself sleep", "floating out of body"
      ],
      interpretation: "A lucid dream is an invitation from your unconscious to regain control in your waking life. Knowing you are dreaming without waking symbolizes spiritual awakening and expanded consciousness. A false awakening indicates you are trying to pierce through illusions around you. It is a sign of great intuitive intelligence in development.",
      image: "/images/iconekeywords/lucide.webp"
    },
    {
      keywords: [
        "transformation", "transform", "shapeshift", "metamorphosis",
        "become an animal", "become someone else", "watch yourself change",
        "body changing", "shedding skin", "chrysalis", "werewolf",
        "no longer recognize yourself", "change appearance",
        "age in dream", "grow younger in dream",
        "become giant", "become tiny", "shrink", "grow in dream"
      ],
      interpretation: "Transformation in a dream is one of the most powerful symbols: you are in the midst of inner mutation. Becoming an animal reveals which instinct or energy you are seeking to integrate. No longer recognizing yourself signals your identity is deeply evolving. Welcome this change — it is the sign of a rebirth.",
      image: "/images/iconekeywords/transformation.webp"
    },
    {
      keywords: [
        "time", "clock", "watch", "age", "grow old", "get younger",
        "time stops", "time speeds up", "past", "future",
        "time machine", "go back in time", "see the future",
        "frozen time", "pendulum", "hourglass", "timer",
        "beginning", "end", "cycle", "clock hands turning", "midnight"
      ],
      interpretation: "Time in dreams speaks of your relationship with life, change and mortality. A stopped clock indicates a moment of suspension, a pending decision. Suddenly aging reflects a fear of time passing or missed opportunities. Going back to the past signals a regret or an unintegrated lesson.",
      image: "/images/iconekeywords/temps.webp"
    },
    {
      keywords: [
        "powers", "superpowers", "magic", "telekinesis", "levitate",
        "become invisible", "fly without wings", "superhuman strength",
        "heal with hands", "read minds", "teleportation",
        "control elements", "magic wand", "spell", "enchantment",
        "be a superhero", "special power", "black magic", "wizard",
        "sorcery", "potion", "fire power", "water power", "levitation"
      ],
      interpretation: "Having powers in a dream reflects a desire for mastery, recognition or self-transcendence. Telekinesis symbolizes the wish to influence your environment effortlessly. Invisibility conveys a need for withdrawal or a fear of being seen. Healing with your hands reveals a deep empathic gift. These dreams invite you to recognize the extraordinary resources sleeping within you.",
      image: "/images/iconekeywords/pouvoirs.webp"
    },
  ]
};

// ─────────────────────────────────────────────────────────────────────────────
//  MERGED KEYWORDS (base + extra)
// ─────────────────────────────────────────────────────────────────────────────

export const allDreamKeywords = {
  fr: [...dreamKeywords.fr, ...dreamKeywordsExtra.fr],
  en: [...dreamKeywords.en, ...dreamKeywordsExtra.en],
};

// ─────────────────────────────────────────────────────────────────────────────
//  HELPER FUNCTIONS
// ──────────────────────────────────────────────────────────────────────────────────────────

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function stem(word: string): string {
  if (word.length <= 4) return word;
  return word
    .replace(/ation$/, "")
    .replace(/ement$/, "")
    .replace(/ment$/, "")
    .replace(/tion$/, "")
    .replace(/ing$/, "")
    .replace(/ness$/, "")
    .replace(/ful$/, "")
    .replace(/less$/, "")
    .replace(/ed$/, "")
    .replace(/er$/, "")
    .replace(/es$/, "")
    .replace(/s$/, "")
    .slice(0, Math.min(word.length, 6));
}

function scoreMatch(
  categoryKeywords: string[],
  inputWords: string[],
  normalizedInput: string
): number {
  let score = 0;

  for (const kw of categoryKeywords) {
    const normalizedKw = normalize(kw);

    // Exact full-phrase match (highest score)
    if (normalizedInput.includes(normalizedKw)) {
      score += normalizedKw.split(" ").length * 3;
      continue;
    }

    // Word-level matching
    const kwWords = normalizedKw.split(" ");
    for (const kwWord of kwWords) {
      if (kwWord.length < 3) continue;
      const stemmedKw = stem(kwWord);

      for (const inputWord of inputWords) {
        if (inputWord.length < 3) continue;
        const stemmedInput = stem(inputWord);

        if (inputWord === kwWord) { score += 2; break; }
        if (stemmedInput === stemmedKw && stemmedInput.length >= 4) { score += 1.5; break; }
        if (stemmedInput.length >= 4 && stemmedKw.length >= 4) {
          if (stemmedKw.startsWith(stemmedInput) || stemmedInput.startsWith(stemmedKw)) {
            score += 1; break;
          }
        }
      }
    }
  }

  return score;
}

// ─────────────────────────────────────────────────────────────────────────────
//  FALLBACK INTERPRETATIONS
//  Retournées quand aucun mot-clé ne matche — évite le "rien trouvé"
// ─────────────────────────────────────────────────────────────────────────────
const fallbackInterpretations = {
  fr: {
    interpretation:
      "Même si ce symbole précis n'apparaît pas dans notre base, chaque rêve porte un message unique. Ce qui attire ton attention dans un rêve — même un détail insignifiant comme un orteil, un objet banal ou une couleur — est exactement ce que ton inconscient a choisi de mettre en lumière. Pose-toi ces questions : Quelle émotion ai-je ressentie dans ce rêve ? Ce symbole me rappelle-t-il quelque chose dans ma vie éveillée ? Qu'est-ce que ce détail signifie pour moi personnellement ? La réponse la plus juste sera toujours la tienne.",
    image: "/images/iconekeywords/lucide.webp",
  },
  en: {
    interpretation:
      "Even if this specific symbol doesn't appear in our database, every dream carries a unique message. What catches your attention in a dream — even a seemingly insignificant detail like a toe, an ordinary object or a color — is exactly what your unconscious chose to highlight. Ask yourself: What emotion did I feel in this dream? Does this symbol remind me of something in my waking life? What does this detail mean to me personally? The most accurate answer will always be your own.",
    image: "/images/iconekeywords/lucide.webp",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
//  MAIN INTERPRET FUNCTION (improved with fallback)
// ─────────────────────────────────────────────────────────────────────────────
export const interpretDream = (text: string, lang: "fr" | "en") => {
  const normalizedText = normalize(text);
  if (!normalizedText) return null;

  const inputWords = normalizedText.split(/\s+/).filter((w) => w.length >= 3);
  const keywords = allDreamKeywords[lang];

  const scored = keywords
    .map((category) => ({
      category,
      score: scoreMatch(category.keywords, inputWords, normalizedText),
    }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score);

  // ── Fallback: aucun résultat → réponse générique ──
  if (scored.length === 0) {
    return {
      image: fallbackInterpretations[lang].image,
      interpretation: fallbackInterpretations[lang].interpretation,
    };
  }

  if (scored.length === 1) return scored[0].category;

  // Return top matches merged if scores are close
  const top = scored[0];
  const closeMatches = scored
    .filter((s) => s.score >= top.score * 0.6)
    .slice(0, 3);

  if (closeMatches.length === 1) return closeMatches[0].category;

  return {
    image: closeMatches[0].category.image,
    interpretation: closeMatches
      .map((m) => m.category.interpretation)
      .join("\n\n"),
  };
};