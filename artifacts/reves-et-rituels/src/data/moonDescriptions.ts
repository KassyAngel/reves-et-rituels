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
  // La nouvelle lune est un moment de reset énergétique et d'intention,
  // valable toute l'année — pas de référence aux semis agricoles.
  {
    name: { fr: "Nouvelle Lune", en: "New Moon" },
    image: "/images/moon/nouvelle-lune.webp",
    variants: [
      {
        energy: {
          fr: "Reset énergétique total. Le cycle recommence depuis zéro — c'est le moment le plus propice pour poser de nouvelles intentions.",
          en: "Total energetic reset. The cycle begins anew — the most auspicious moment to set fresh intentions.",
        },
        conseil: {
          fr: "Prends le temps de noter 3 intentions claires pour ce nouveau cycle. Qu'est-ce que tu veux créer, attirer ou transformer dans ta vie ?",
          en: "Take time to write 3 clear intentions for this new cycle. What do you wish to create, attract or transform in your life?",
        },
        rituel: {
          fr: "Allume une bougie blanche, écris tes intentions sur papier et médite 5 minutes en les visualisant déjà accomplie.",
          en: "Light a white candle, write your intentions on paper and meditate 5 minutes visualizing them already fulfilled.",
        },
      },
      {
        energy: {
          fr: "Silence fertile, potentiel infini. L'obscurité n'est pas le vide — c'est l'espace où tout peut naître.",
          en: "Fertile silence, infinite potential. Darkness is not emptiness — it's the space where everything can be born.",
        },
        conseil: {
          fr: "Offre-toi un moment de solitude bienveillante. Dans le silence de cette nuit sans lune, écoute ce que ton intuition murmure.",
          en: "Give yourself a moment of kind solitude. In the silence of this moonless night, listen to what your intuition whispers.",
        },
        rituel: {
          fr: "Éteins toutes les lumières, assieds-toi en silence 10 minutes. Laisse émerger naturellement une vision de ce que tu désires profondément.",
          en: "Turn off all lights, sit in silence for 10 minutes. Let a vision of what you deeply desire emerge naturally.",
        },
      },
      {
        energy: {
          fr: "Ardoise vierge, porte ouverte. Ce que tu lâches aujourd'hui libère de la place pour ce qui veut arriver.",
          en: "Blank slate, open door. What you release today makes room for what wants to arrive.",
        },
        conseil: {
          fr: "Avant de poser de nouvelles intentions, identifie d'abord ce que tu es prêt(e) à laisser partir. La libération précède toujours la création.",
          en: "Before setting new intentions, first identify what you are ready to release. Liberation always precedes creation.",
        },
        rituel: {
          fr: "Prends un bain ou une douche en visualisant l'ancienne énergie partir avec l'eau. Après, formule à voix haute ce que tu invites dans ce nouveau cycle.",
          en: "Take a bath or shower visualizing old energy leaving with the water. Afterward, speak aloud what you invite into this new cycle.",
        },
      },
    ],
  },

  // 1 — PREMIER CROISSANT
  {
    name: { fr: "Premier Croissant", en: "Waxing Crescent" },
    image: "/images/moon/premier-croissant.webp",
    variants: [
      {
        energy: {
          fr: "Élan naissant, courage doux. La lumière revient — il est temps de passer à l'action avec légèreté.",
          en: "Nascent momentum, gentle courage. Light returns — time to act with lightness.",
        },
        conseil: {
          fr: "Commence à poser les premières actions concrètes vers tes intentions. Un tout petit pas aujourd'hui vaut mieux qu'un grand projet laissé en suspens.",
          en: "Start taking the first concrete steps toward your intentions. One small step today is worth more than a grand project left pending.",
        },
        rituel: {
          fr: "Chaque matin de cette phase, dis à voix haute une affirmation liée à ton intention principale. La répétition crée la réalité.",
          en: "Each morning of this phase, say aloud an affirmation linked to your main intention. Repetition creates reality.",
        },
      },
      {
        energy: {
          fr: "Espoir en mouvement. Le croissant invite à avancer avec foi, même sans voir encore la destination entière.",
          en: "Hope in motion. The crescent invites you to move forward with faith, even without seeing the full destination yet.",
        },
        conseil: {
          fr: "Identifie UNE action clé que tu peux faire aujourd'hui. La constance et la régularité priment sur l'intensité.",
          en: "Identify ONE key action you can take today. Consistency and regularity beat intensity.",
        },
        rituel: {
          fr: "Écris sur un papier : 'Je commence [ton intention]' et affiche-le quelque part visible. Le rappel visuel ancre l'engagement.",
          en: "Write on paper: 'I begin [your intention]' and place it somewhere visible. The visual reminder anchors commitment.",
        },
      },
      {
        energy: {
          fr: "Optimisme fertile, foi en mouvement. Les premières lueurs d'un nouveau chapitre apparaissent à l'horizon.",
          en: "Fertile optimism, faith in motion. The first light of a new chapter appears on the horizon.",
        },
        conseil: {
          fr: "Les résultats ne sont pas encore visibles — c'est normal. Les racines poussent avant les fleurs. Continue même si tu ne vois rien encore.",
          en: "Results aren't visible yet — that's normal. Roots grow before flowers. Keep going even if you see nothing yet.",
        },
        rituel: {
          fr: "Écris une lettre à ton futur toi dans 30 jours, décrivant les progrès accomplis comme s'ils étaient déjà réels.",
          en: "Write a letter to your future self in 30 days, describing the progress made as if it were already real.",
        },
      },
    ],
  },

  // 2 — PREMIER QUARTIER
  {
    name: { fr: "Premier Quartier", en: "First Quarter" },
    image: "/images/moon/premier-quartier.webp",
    variants: [
      {
        energy: {
          fr: "Tension créatrice, carrefour de choix. Les premiers obstacles apparaissent — ils testent la solidité de tes intentions.",
          en: "Creative tension, crossroads of choice. First obstacles appear — they test the solidity of your intentions.",
        },
        conseil: {
          fr: "Face aux résistances, demande-toi honnêtement : est-ce un signe de stopper, ou un test de ta détermination ? La réponse est souvent la deuxième.",
          en: "Facing resistance, ask yourself honestly: is this a sign to stop, or a test of your determination? The answer is usually the second.",
        },
        rituel: {
          fr: "Écris sur papier ce qui te résiste en ce moment, puis brûle-le consciemment — un geste symbolique pour libérer la résistance.",
          en: "Write on paper what is currently resisting you, then burn it consciously — a symbolic gesture to release resistance.",
        },
      },
      {
        energy: {
          fr: "L'heure des décisions. Ce quartier exige du courage : faire des choix clairs et s'y tenir.",
          en: "Decision time. This quarter demands courage: making clear choices and sticking to them.",
        },
        conseil: {
          fr: "Ne fuis pas les décisions difficiles que tu reports. Choisis avec ton cœur et avance — l'indécision coûte plus d'énergie que le choix lui-même.",
          en: "Don't avoid the difficult decisions you've been postponing. Choose with your heart and move forward — indecision costs more energy than the choice itself.",
        },
        rituel: {
          fr: "Médite 5 minutes sur ton intention principale et demande-toi : qu'est-ce que je dois faire de plus, ou différemment, pour l'atteindre ?",
          en: "Meditate 5 minutes on your main intention and ask yourself: what more, or differently, do I need to do to reach it?",
        },
      },
      {
        energy: {
          fr: "Persévérance et engagement. La mi-cycle approche — le moment de confirmer que tu es toujours dans la bonne direction.",
          en: "Perseverance and commitment. Mid-cycle approaches — the moment to confirm you are still heading the right way.",
        },
        conseil: {
          fr: "Identifie l'obstacle principal de ta semaine et consacre-lui une attention particulière. Les défis pointent toujours là où grandir.",
          en: "Identify your main obstacle this week and give it special attention. Challenges always point to where growth lies.",
        },
        rituel: {
          fr: "Tiens-toi debout, pieds bien ancrés dans le sol, et affirme 3 fois à voix haute : 'Je suis capable. Je persévère. J'avance.'",
          en: "Stand tall, feet firmly grounded, and affirm 3 times aloud: 'I am capable. I persevere. I move forward.'",
        },
      },
    ],
  },

  // 3 — GIBBEUSE CROISSANTE
  {
    name: { fr: "Lune Gibbeuse Croissante", en: "Waxing Gibbous" },
    image: "/images/moon/gibbeuse-croissante.webp",
    variants: [
      {
        energy: {
          fr: "Raffinement et perfectionnement avant l'apogée. La lune est presque pleine — l'énergie monte, il faut affiner.",
          en: "Refinement and perfecting before the peak. The moon is almost full — energy rises, time to fine-tune.",
        },
        conseil: {
          fr: "Observe ce qui fonctionne et ce qui doit être ajusté dans tes projets. C'est le moment d'affiner les détails, pas de tout recommencer.",
          en: "Observe what works and what needs adjusting in your projects. This is the time to refine details, not start over.",
        },
        rituel: {
          fr: "Relis les intentions que tu avais posées à la nouvelle lune et note honnêtement tes progrès. Qu'est-ce qui reste à finaliser ?",
          en: "Reread the intentions you set at the new moon and honestly note your progress. What remains to be finalized?",
        },
      },
      {
        energy: {
          fr: "Anticipation croissante. La pleine lune approche — l'énergie est à son maximum. Les émotions peuvent se faire plus intenses.",
          en: "Growing anticipation. The full moon approaches — energy is at its maximum. Emotions may feel more intense.",
        },
        conseil: {
          fr: "Finalise ce qui doit l'être. La pleine lune va illuminer tout ce qui est inachevé — autant que ce soit voulu et conscient.",
          en: "Finalize what needs to be finalized. The full moon will illuminate everything unfinished — better that it be intentional and conscious.",
        },
        rituel: {
          fr: "Nettoie et réorganise ton espace de vie ou de travail. Un environnement ordonné prépare ton énergie à recevoir la plénitude de la pleine lune.",
          en: "Clean and reorganize your living or work space. An ordered environment prepares your energy to receive the fullness of the full moon.",
        },
      },
      {
        energy: {
          fr: "Confiance et patience récompensées. Ce qui a été semé dans ce cycle murit et approche de son aboutissement.",
          en: "Trust and patience rewarded. What was initiated in this cycle is ripening and nearing completion.",
        },
        conseil: {
          fr: "Fais confiance au processus. Si tu as agi avec constance, les résultats approchent. Continue sans te précipiter ni te décourager.",
          en: "Trust the process. If you have acted consistently, results are approaching. Continue without rushing or discouraging yourself.",
        },
        rituel: {
          fr: "Tiens dans tes mains un objet symbolisant ton intention — une pierre, un bijou, une lettre — et visualise ton intention déjà accomplie pendant 3 minutes.",
          en: "Hold in your hands an object symbolizing your intention — a stone, jewel, letter — and visualize your intention already accomplished for 3 minutes.",
        },
      },
    ],
  },

  // 4 — PLEINE LUNE
  {
    name: { fr: "Pleine Lune", en: "Full Moon" },
    image: "/images/moon/pleine-lune.webp",
    variants: [
      {
        energy: {
          fr: "Réalisation, clarté et libération. La pleine lune illumine tout — les réussites comme ce qui doit être lâché. Les émotions sont amplifiées.",
          en: "Realization, clarity and release. The full moon illuminates everything — achievements and what must be let go. Emotions are amplified.",
        },
        conseil: {
          fr: "Célèbre tes avancées, même les plus petites. Puis identifie ce que tu dois laisser partir pour aller plus loin. Les deux gestes sont également importants.",
          en: "Celebrate your progress, even the smallest. Then identify what you need to let go to go further. Both gestures are equally important.",
        },
        rituel: {
          fr: "Si tu possèdes des cristaux, dispose-les à la fenêtre cette nuit pour les recharger. Écris sur papier ce que tu choisis de libérer ce soir.",
          en: "If you have crystals, place them by the window tonight to recharge. Write on paper what you choose to release tonight.",
        },
      },
      {
        energy: {
          fr: "Lumière totale sur ta vie. La pleine lune ne cache rien — elle révèle avec clarté ce qui est prêt à évoluer.",
          en: "Total light on your life. The full moon hides nothing — it reveals with clarity what is ready to evolve.",
        },
        conseil: {
          fr: "Ce que tu as longtemps évité peut se révéler ce soir avec plus de force. Accueille les prises de conscience sans jugement — elles sont des cadeaux.",
          en: "What you have long avoided may reveal itself tonight with more force. Welcome realizations without judgment — they are gifts.",
        },
        rituel: {
          fr: "Écris une liste de ce que tu es prêt(e) à laisser partir — habitudes, peurs, croyances — puis lis-la à voix haute si possible sous la lumière de la lune.",
          en: "Write a list of what you are ready to let go of — habits, fears, beliefs — then read it aloud if possible under the moonlight.",
        },
      },
      {
        energy: {
          fr: "Culmination et gratitude. La pleine lune est le sommet du cycle — un moment naturel pour célébrer et pour honorer le chemin parcouru.",
          en: "Culmination and gratitude. The full moon is the peak of the cycle — a natural moment to celebrate and honor the journey so far.",
        },
        conseil: {
          fr: "Prends un moment seul(e) pour ressentir la puissance de cette nuit. La pleine lune amplifie tout — les intentions positives comme les pensées négatives.",
          en: "Take a moment alone to feel the power of this night. The full moon amplifies everything — positive intentions as well as negative thoughts.",
        },
        rituel: {
          fr: "Pose tes mains ouvertes paumes vers le haut et répète mentalement ou à voix haute : 'Je reçois. Je libère. Je suis en paix.' pendant 5 minutes.",
          en: "Hold your hands open palms upward and repeat mentally or aloud: 'I receive. I release. I am at peace.' for 5 minutes.",
        },
      },
    ],
  },

  // 5 — GIBBEUSE DÉCROISSANTE
  {
    name: { fr: "Lune Gibbeuse Décroissante", en: "Waning Gibbous" },
    image: "/images/moon/gibbeuse-decroissante.webp",
    variants: [
      {
        energy: {
          fr: "Gratitude en mouvement. Après le pic, l'énergie commence à se retirer — c'est l'heure du partage et de la transmission.",
          en: "Gratitude in motion. After the peak, energy begins to recede — time for sharing and transmission.",
        },
        conseil: {
          fr: "Partage quelque chose de toi — une idée, un savoir, un soutien — avec quelqu'un de ton entourage. Donner amplifie l'abondance.",
          en: "Share something of yourself — an idea, knowledge, support — with someone close to you. Giving amplifies abundance.",
        },
        rituel: {
          fr: "Écris 5 choses pour lesquelles tu es profondément reconnaissant(e) en ce moment. Sois aussi précis(e) que possible.",
          en: "Write 5 things for which you are deeply grateful right now. Be as specific as possible.",
        },
      },
      {
        energy: {
          fr: "Générosité et lâcher-prise. La lune décroissante invite à donner sans compter et à relâcher ce qui n'est plus nécessaire.",
          en: "Generosity and letting go. The waning moon invites giving freely and releasing what is no longer needed.",
        },
        conseil: {
          fr: "Rends service à quelqu'un aujourd'hui sans attendre de retour. Un geste généreux sincère nourrit autant celui qui donne que celui qui reçoit.",
          en: "Do something for someone today without expecting anything in return. A sincere generous gesture nourishes both giver and receiver.",
        },
        rituel: {
          fr: "Offre quelque chose de concret aujourd'hui : du temps, un objet inutilisé, un mot d'encouragement sincère à quelqu'un qui en a besoin.",
          en: "Offer something concrete today: time, an unused object, a sincere word of encouragement to someone who needs it.",
        },
      },
      {
        energy: {
          fr: "Intégration des leçons du cycle. Ce que tu as traversé depuis la nouvelle lune t'a changé — prends le temps de le reconnaître.",
          en: "Integration of the cycle's lessons. What you have been through since the new moon has changed you — take time to acknowledge it.",
        },
        conseil: {
          fr: "Note dans un journal les 3 principales leçons de ce cycle lunaire. Ces insights sont précieux pour orienter le prochain.",
          en: "Note in a journal the 3 main lessons of this lunar cycle. These insights are valuable for orienting the next one.",
        },
        rituel: {
          fr: "Médite sur ce que tu as appris depuis la dernière nouvelle lune et remercie mentalement chaque expérience — agréable ou difficile.",
          en: "Meditate on what you have learned since the last new moon and mentally thank each experience — pleasant or difficult.",
        },
      },
    ],
  },

  // 6 — DERNIER QUARTIER
  {
    name: { fr: "Dernier Quartier", en: "Last Quarter" },
    image: "/images/moon/dernier-quartier.webp",
    variants: [
      {
        energy: {
          fr: "Libération et nettoyage profond. Le dernier quartier est le moment le plus puissant pour lâcher ce qui alourdit — habitudes, rancœurs, tensions.",
          en: "Release and deep cleansing. The last quarter is the most powerful moment to release what weighs you down — habits, grudges, tensions.",
        },
        conseil: {
          fr: "Pardonner — à toi-même et aux autres — n'est pas approuver. C'est te libérer. Quel poids portes-tu depuis trop longtemps ?",
          en: "Forgiving — yourself and others — is not approving. It is freeing yourself. What weight have you been carrying for too long?",
        },
        rituel: {
          fr: "Fais un grand ménage de ton espace — physique ou numérique. Puis prends un bain ou une douche en visualisant les tensions partir avec l'eau.",
          en: "Do a thorough cleaning of your space — physical or digital. Then take a bath or shower visualizing tensions leaving with the water.",
        },
      },
      {
        energy: {
          fr: "Courage du lâcher-prise. Il faut parfois plus de force pour laisser partir que pour s'accrocher.",
          en: "Courage to let go. It sometimes takes more strength to release than to hold on.",
        },
        conseil: {
          fr: "Identifie une habitude, une croyance ou une situation qui t'épuise réellement. Ce dernier quartier est le moment idéal pour commencer à t'en libérer.",
          en: "Identify a habit, belief or situation that is truly draining you. This last quarter is the ideal moment to start freeing yourself from it.",
        },
        rituel: {
          fr: "Écris sur papier ce que tu libères, plie-le en quatre, puis jette-le consciemment en disant à voix haute ou mentalement : 'Je me libère. Je choisis la légèreté.'",
          en: "Write what you release on paper, fold it in four, then discard it consciously saying aloud or mentally: 'I free myself. I choose lightness.'",
        },
      },
      {
        energy: {
          fr: "Bilan et honnêteté. Avant que le cycle ne se referme, il est temps d'examiner ce qui a fonctionné et ce qui n'a pas fonctionné.",
          en: "Assessment and honesty. Before the cycle closes, it is time to examine what worked and what did not.",
        },
        conseil: {
          fr: "Sois honnête avec toi-même, sans complaisance ni sévérité excessive. Qu'est-ce qui n'a pas fonctionné dans ce cycle — et pourquoi ? La vérité nourrit la croissance.",
          en: "Be honest with yourself, without complacency or excessive harshness. What didn't work in this cycle — and why? The truth nourishes growth.",
        },
        rituel: {
          fr: "Allume une bougie et observe la flamme pendant 5 minutes. Laisse partir mentalement toutes les pensées lourdes du cycle qui s'achève.",
          en: "Light a candle and watch the flame for 5 minutes. Mentally release all heavy thoughts from the ending cycle.",
        },
      },
    ],
  },

  // 7 — DERNIER CROISSANT
  {
    name: { fr: "Dernier Croissant", en: "Waning Crescent" },
    image: "/images/moon/dernier-croissant.webp",
    variants: [
      {
        energy: {
          fr: "Repos mérité et recharge profonde. Le cycle touche à sa fin — l'énergie est basse, et c'est exactement ce qu'il faut.",
          en: "Well-earned rest and deep recharge. The cycle nears its end — energy is low, and that is exactly as it should be.",
        },
        conseil: {
          fr: "Accorde-toi du repos sans culpabilité. Recharger ses énergies n'est pas une perte de temps — c'est une condition nécessaire au cycle suivant.",
          en: "Allow yourself rest without guilt. Recharging your energy is not a waste of time — it is a necessary condition for the next cycle.",
        },
        rituel: {
          fr: "Médite en silence 10 minutes en respirant profondément. Pas d'objectif, pas d'intention — juste l'espace et le calme.",
          en: "Meditate in silence for 10 minutes breathing deeply. No goal, no intention — just space and calm.",
        },
      },
      {
        energy: {
          fr: "Douceur et retrait. La lune souffle : 'Ralentis.' Ce n'est pas le moment d'agir — c'est le moment d'être.",
          en: "Gentleness and retreat. The moon whispers: 'Slow down.' This is not the time to act — it is the time to be.",
        },
        conseil: {
          fr: "Ralentis délibérément. Si possible, allège ton agenda. Élimine ce qui n'est pas essentiel et préserve ton énergie pour le prochain cycle.",
          en: "Deliberately slow down. If possible, lighten your schedule. Eliminate what is not essential and preserve your energy for the next cycle.",
        },
        rituel: {
          fr: "Prépare-toi une boisson chaude, installe-toi confortablement et lis ou écoute quelque chose de doux et apaisant. Rien que du repos.",
          en: "Prepare a warm drink, settle in comfortably and read or listen to something gentle and soothing. Nothing but rest.",
        },
      },
      {
        energy: {
          fr: "Confiance et lâcher-prise total. Dans quelques heures, un nouveau cycle commencera. Tu n'as rien à forcer — laisse venir.",
          en: "Trust and complete surrender. In a few hours, a new cycle will begin. You have nothing to force — let it come.",
        },
        conseil: {
          fr: "Lâche le contrôle sur ce que tu ne peux pas maîtriser. La confiance en la vie n'est pas de la passivité — c'est la forme la plus haute de sagesse.",
          en: "Release control over what you cannot master. Trusting life is not passivity — it is the highest form of wisdom.",
        },
        rituel: {
          fr: "Avant de t'endormir, dis à voix haute ou mentalement : 'Je confie ce cycle à ce qui est plus grand que moi. Je me repose. Je fais confiance.' Puis laisse aller.",
          en: "Before sleeping, say aloud or mentally: 'I entrust this cycle to what is greater than me. I rest. I trust.' Then let go.",
        },
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
      fr: "Transformation radicale, mort symbolique et renaissance. Une éclipse lunaire totale amplifie tout ce qui cherche à être libéré. L'énergie est rare, intense et profondément purificatrice.",
      en: "Radical transformation, symbolic death and rebirth. A total lunar eclipse amplifies everything seeking to be released. The energy is rare, intense and deeply purifying.",
    },
    conseil: {
      fr: "Les éclipses lunaires totales accélèrent les transformations — ce qui devait changer dans ta vie devient impossible à ignorer. Accueille ce changement, même s'il dérange.",
      en: "Total lunar eclipses accelerate transformations — what needed to change in your life becomes impossible to ignore. Welcome this change, even if it disturbs.",
    },
    rituel: {
      fr: "Pendant l'éclipse, écris sur papier ce que tu veux transformer définitivement dans ta vie. À la fin de l'éclipse, brûle-le symboliquement en déclarant : 'Je renais, libéré(e).'",
      en: "During the eclipse, write on paper what you want to permanently transform in your life. At the end of the eclipse, burn it symbolically declaring: 'I am reborn, free.'",
    },
  },
  super_moon: {
    name: { fr: "Super Lune", en: "Super Moon" },
    image: "/images/moon/super-lune.webp",
    energy: {
      fr: "Amplification maximale. La Lune est à son point le plus proche de la Terre (périgée) en même temps qu'elle est pleine : elle paraît jusqu'à 14% plus grande et 30% plus lumineuse. Toutes les énergies sont décuplées.",
      en: "Maximum amplification. The Moon is at its closest point to Earth (perigee) while full: it appears up to 14% larger and 30% brighter. All energies are multiplied tenfold.",
    },
    conseil: {
      fr: "Profite de cette énergie amplifiée pour tes intentions les plus importantes. Attention cependant : les émotions difficiles sont aussi amplifiées. Reste centré(e) et ancré(e).",
      en: "Take advantage of this amplified energy for your most important intentions. Be aware though: difficult emotions are also amplified. Stay centered and grounded.",
    },
    rituel: {
      fr: "Expose tes cristaux et objets symboliques à la lumière de cette super lune. Leur charge énergétique sera exceptionnellement puissante cette nuit.",
      en: "Expose your crystals and symbolic objects to this super moon's light. Their energetic charge will be exceptionally powerful tonight.",
    },
  },
  blue_moon: {
    name: { fr: "Lune Bleue", en: "Blue Moon" },
    image: "/images/moon/lune-bleue.webp",
    energy: {
      fr: "Rareté et seconde chance. La lune bleue — deuxième pleine lune d'un même mois calendaire — est un phénomène qui ne se produit qu'environ une fois tous les deux ans et demi.",
      en: "Rarity and second chance. The blue moon — second full moon in the same calendar month — is a phenomenon that occurs only about once every two and a half years.",
    },
    conseil: {
      fr: "Cette nuit rare offre une deuxième fenêtre pour ce que tu n'as pas encore accompli ce mois-ci. Quelle intention mérite une deuxième chance ?",
      en: "This rare night offers a second window for what you haven't yet accomplished this month. Which intention deserves a second chance?",
    },
    rituel: {
      fr: "Formule un vœu rare — quelque chose que tu n'oses habituellement pas demander. Les désirs profonds méritent d'être exprimés, même à la lune.",
      en: "Make a rare wish — something you don't usually dare to ask for. Deep desires deserve to be expressed, even to the moon.",
    },
  },
  black_moon: {
    name: { fr: "Lune Noire", en: "Black Moon" },
    image: "/images/moon/lune-noire.webp",
    energy: {
      fr: "Double pouvoir d'intention. La lune noire — deuxième nouvelle lune d'un même mois — est un portail rare pour poser des intentions profondes et secrètes.",
      en: "Double power of intention. The black moon — second new moon in the same month — is a rare portal for setting deep and secret intentions.",
    },
    conseil: {
      fr: "C'est l'un des moments les plus puissants du cycle lunaire pour poser de nouvelles intentions. Ce que tu sèmes sous la lune noire germe avec une intensité particulière.",
      en: "This is one of the most powerful moments in the lunar cycle for setting new intentions. What you sow under the black moon germinates with particular intensity.",
    },
    rituel: {
      fr: "Dans l'obscurité ou une lumière très tamisée, formule mentalement ton intention la plus profonde et secrète. Le silence est le réceptacle de ce qui veut naître.",
      en: "In darkness or very dim light, mentally formulate your deepest and most secret intention. Silence is the receptacle for what wants to be born.",
    },
  },
  harvest_moon: {
    name: { fr: "Lune des Moissons", en: "Harvest Moon" },
    image: "/images/moon/lune-moissons.webp",
    energy: {
      fr: "Abondance et gratitude. La lune des moissons est la pleine lune la plus proche de l'équinoxe d'automne. Astronomiquement, elle se lève juste après le coucher du soleil pendant plusieurs nuits de suite.",
      en: "Abundance and gratitude. The harvest moon is the full moon closest to the autumn equinox. Astronomically, it rises just after sunset for several consecutive nights.",
    },
    conseil: {
      fr: "Qu'as-tu accompli cette année qui mérite d'être reconnu et célébré ? La lune des moissons rappelle que l'abondance commence par la conscience de ce qu'on a déjà.",
      en: "What have you accomplished this year that deserves to be recognized and celebrated? The harvest moon reminds us that abundance begins with awareness of what we already have.",
    },
    rituel: {
      fr: "Prépare un repas ou une boisson avec soin, mange-le en pleine conscience, en remerciant pour chaque abondance présente dans ta vie — grande ou petite.",
      en: "Prepare a meal or drink with care, eat it mindfully, giving thanks for every abundance present in your life — great or small.",
    },
  },
  rousse_moon: {
    name: { fr: "Lune Rousse", en: "Pink Moon" },
    image: "/images/moon/lune-rousse.webp",
    energy: {
      fr: "Renouveau printanier et renaissance. La lune rousse est la première pleine lune après Pâques — dans les traditions agricoles, elle signalait le retour des gelées tardives. Aujourd'hui, elle symbolise le renouveau après les épreuves.",
      en: "Spring renewal and rebirth. The pink moon is the first full moon after Easter — in agricultural traditions, it signaled the return of late frosts. Today, it symbolizes renewal after trials.",
    },
    conseil: {
      fr: "Qu'est-ce qui renaît en toi en ce moment ? Même ce qui a semblé gelé ou arrêté peut reprendre vie. La patience est la vertu de cette lune.",
      en: "What is being reborn in you right now? Even what seemed frozen or stopped can come back to life. Patience is the virtue of this moon.",
    },
    rituel: {
      fr: "Place des fleurs fraîches dans ton espace de vie en affirmant : 'Je m'ouvre au renouveau. Ce qui doit fleurir en moi trouvera son chemin.'",
      en: "Place fresh flowers in your living space affirming: 'I open myself to renewal. What must bloom in me will find its way.'",
    },
  },
};