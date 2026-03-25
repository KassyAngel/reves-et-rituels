export type Ritual = {
  id: string;
  title: { fr: string; en: string };
  desc: { fr: string; en: string };
  steps: { fr: string[]; en: string[] };
  category?: string;
  duration?: string;
};

export const rituals: Ritual[] = [

  // ─── PURIFICATION ────────────────────────────────────────────────────────────

  {
    id: "purification",
    title: { fr: "Purification par la Fumée", en: "Smoke Cleansing" },
    desc: {
      fr: "Nettoie les énergies stagnantes de ton espace avec de la sauge ou du palo santo.",
      en: "Clear stagnant energies from your space using sage or palo santo."
    },
    steps: {
      fr: [
        "Ouvre grand toutes les fenêtres et portes pour permettre aux énergies de circuler et de sortir.",
        "Allume ta sauge blanche, ton palo santo ou ton encens préféré. Laisse la flamme s'éteindre doucement pour que la fumée monte.",
        "Commence par les coins de la pièce — les énergies stagnantes s'y accumulent. Fais des mouvements circulaires dans le sens antihoraire pour dissoudre.",
        "Passe la fumée autour de ton corps, des pieds jusqu'au sommet du crâne, en visualisant une lumière blanche purificatrice.",
        "Répète à voix haute ou mentalement : 'Je libère tout ce qui ne me sert plus. Cet espace est pur, protégé et sacré.'",
        "Laisse la fumée se dissiper naturellement. Remets l'encens ou la sauge en sécurité dans un bol résistant."
      ],
      en: [
        "Open all windows and doors wide to allow energies to circulate and leave.",
        "Light your white sage, palo santo, or favorite incense. Let the flame go out gently so the smoke rises.",
        "Start in the corners of the room — stagnant energies accumulate there. Make counterclockwise circular movements to dissolve them.",
        "Pass the smoke around your body, from feet to the top of your head, visualizing a purifying white light.",
        "Repeat aloud or mentally: 'I release everything that no longer serves me. This space is pure, protected and sacred.'",
        "Let the smoke dissipate naturally. Return the incense or sage safely to a heat-resistant bowl."
      ]
    },
    category: "purification",
    duration: "15 min"
  },

  {
    id: "bain-de-sel",
    title: { fr: "Bain de Sel Purificateur", en: "Purifying Salt Bath" },
    desc: {
      fr: "Rituel de purification par l'eau et le sel pour dissoudre les énergies lourdes.",
      en: "A water and salt purification ritual to dissolve heavy energies."
    },
    steps: {
      fr: [
        "Prépare ton bain en versant 2 à 3 poignées de sel de mer ou de sel de l'Himalaya dans l'eau chaude. Le sel purifie depuis des millénaires.",
        "Ajoute quelques gouttes d'huile essentielle de lavande pour la paix, d'eucalyptus pour la clarté, ou de romarin pour la protection.",
        "Avant d'entrer, tiens-toi au bord du bain et pose l'intention : 'Ce bain dissout en moi toute énergie lourde, toute fatigue et toute inquiétude.'",
        "Entre dans l'eau avec conscience. Plonge entièrement le corps — visage inclus si tu le souhaites — pour une immersion totale.",
        "Reste immergé(e) au moins 20 minutes. Visualise l'eau absorbant tout ce dont tu veux te défaire : stress, émotions négatives, énergies étrangères.",
        "Quand tu rinces, dis : 'Je sors de ce bain renouvelé(e), léger(ère) et lumineux(se).' Rince à l'eau fraîche pour refermer l'aura.",
        "Vide la baignoire en regardant l'eau partir — avec elle part tout ce que tu as libéré."
      ],
      en: [
        "Prepare your bath by pouring 2 to 3 handfuls of sea salt or Himalayan salt into hot water. Salt has been used for purification for millennia.",
        "Add a few drops of lavender essential oil for peace, eucalyptus for clarity, or rosemary for protection.",
        "Before entering, stand at the edge of the bath and set the intention: 'This bath dissolves within me all heavy energy, all fatigue and all worry.'",
        "Enter the water consciously. Submerge your whole body — face included if you wish — for full immersion.",
        "Stay immersed for at least 20 minutes. Visualize the water absorbing everything you wish to release: stress, negative emotions, foreign energies.",
        "When rinsing, say: 'I emerge from this bath renewed, light and luminous.' Rinse with cool water to close the aura.",
        "Drain the bath while watching the water leave — with it goes everything you have released."
      ]
    },
    category: "purification",
    duration: "30 min"
  },

  {
    id: "protection-maison",
    title: { fr: "Protection du Foyer", en: "Home Protection" },
    desc: {
      fr: "Scelle ton espace de vie contre les énergies indésirables avec le sel et les herbes.",
      en: "Seal your living space against unwanted energies using salt and herbs."
    },
    steps: {
      fr: [
        "Rassemble du sel de mer, des herbes sèches (romarin, lavande ou thym) et optionnellement une bougie blanche.",
        "Commence par la porte d'entrée. Trace une fine ligne de sel sur le seuil en déclarant : 'Seules les énergies aimantes et bienveillantes entrent ici.'",
        "Dépose une petite pincée de sel dans chaque coin de chaque pièce. Les coins sont des points d'accumulation énergétique.",
        "Attache un bouquet de romarin sec au-dessus de ta porte d'entrée. Le romarin protège et purifie depuis l'Antiquité.",
        "Allume ta bougie blanche au centre de ton foyer. Visualise sa lumière se répandre dans toutes les pièces comme un bouclier doré.",
        "Dis à voix haute : 'Ce foyer est un sanctuaire de paix, d'amour et de lumière. Rien de nocif ne peut y pénétrer ou y résider.'",
        "Laisse la bougie brûler en sécurité au moins 1 heure. Renouvelle ce rituel chaque nouvelle lune."
      ],
      en: [
        "Gather sea salt, dried herbs (rosemary, lavender or thyme), and optionally a white candle.",
        "Start at the front door. Draw a thin line of salt across the threshold declaring: 'Only loving and benevolent energies enter here.'",
        "Place a small pinch of salt in each corner of every room. Corners are points of energetic accumulation.",
        "Tie a bunch of dried rosemary above your front door. Rosemary has been used for protection and purification since antiquity.",
        "Light your white candle at the center of your home. Visualize its light spreading through all rooms like a golden shield.",
        "Say aloud: 'This home is a sanctuary of peace, love and light. Nothing harmful can enter or remain here.'",
        "Let the candle burn safely for at least 1 hour. Renew this ritual each new moon."
      ]
    },
    category: "purification",
    duration: "25 min"
  },

  // ─── PROTECTION ──────────────────────────────────────────────────────────────

  {
    id: "protection",
    title: { fr: "Bulle de Protection", en: "Protection Bubble" },
    desc: {
      fr: "Crée un bouclier énergétique lumineux avant d'affronter le monde.",
      en: "Create a luminous energy shield before facing the world."
    },
    steps: {
      fr: [
        "Ferme les yeux et prends trois profondes inspirations en relâchant toute tension à chaque expiration.",
        "Concentre ton attention sur ton cœur. Imagine une graine de lumière dorée, chaude et vivante, au centre de ta poitrine.",
        "À chaque inspiration, fais grandir cette lumière. Elle rayonne de ton cœur vers toutes les directions.",
        "Laisse-la s'étendre jusqu'à former une sphère lumineuse qui t'enveloppe entièrement, à environ 60 cm de ton corps.",
        "Visualise la surface de cette bulle : elle est irisée, solide et scintillante. Les énergies basses rebondissent dessus. Seul l'amour peut traverser.",
        "Dis : 'Je suis protégé(e), centré(e) et ancré(e). Je circule dans le monde avec grâce et sérénité.'",
        "Quand tu te sens prêt(e), ouvre les yeux doucement. Ta bulle t'accompagne toute la journée."
      ],
      en: [
        "Close your eyes and take three deep breaths, releasing all tension with each exhale.",
        "Bring your attention to your heart. Imagine a seed of golden light, warm and alive, at the center of your chest.",
        "With each inhale, expand this light. It radiates from your heart in all directions.",
        "Let it expand until it forms a luminous sphere that completely envelops you, about 60 cm from your body.",
        "Visualize the surface of this bubble: it is iridescent, solid and shimmering. Lower energies bounce off it. Only love can pass through.",
        "Say: 'I am protected, centered and grounded. I move through the world with grace and serenity.'",
        "When you feel ready, gently open your eyes. Your bubble travels with you all day."
      ]
    },
    category: "protection",
    duration: "10 min"
  },

  {
    id: "coupure-liens",
    title: { fr: "Couper les Liens Énergétiques", en: "Cord Cutting" },
    desc: {
      fr: "Libère-toi des attachements énergétiques épuisants avec d'anciennes relations.",
      en: "Free yourself from draining energetic attachments to past relationships."
    },
    steps: {
      fr: [
        "Installe-toi confortablement, assis(e) ou allongé(e). Ferme les yeux et prends 5 respirations profondes.",
        "Visualise la personne ou la situation dont tu souhaites te détacher devant toi, à quelques mètres de distance.",
        "Observe les fils ou cordons d'énergie qui relient ton corps au leur. Note où ils s'attachent — ventre, cœur, gorge, tête — sans jugement.",
        "Dans ta main dominante, visualise une paire de ciseaux dorés ou un couteau de lumière. Il ne coupe qu'avec amour et gratitude.",
        "Coupe chaque cordon un par un en disant : 'Je te libère avec amour. Je me libère avec amour. Tu es libre. Je suis libre.'",
        "Visualise la lumière blanche guérissant chaque point de ton corps où le lien était attaché.",
        "Enfin, entoure-toi d'une lumière violette de protection. Quand tu te sens prêt(e), ouvre les yeux. Bois un grand verre d'eau pour ancrer."
      ],
      en: [
        "Settle comfortably, sitting or lying down. Close your eyes and take 5 deep breaths.",
        "Visualize the person or situation you wish to detach from in front of you, a few meters away.",
        "Observe the threads or energy cords connecting your body to theirs. Note where they attach — belly, heart, throat, head — without judgment.",
        "In your dominant hand, visualize a pair of golden scissors or a knife of light. It cuts only with love and gratitude.",
        "Cut each cord one by one saying: 'I release you with love. I release myself with love. You are free. I am free.'",
        "Visualize white light healing each point on your body where the cord was attached.",
        "Finally, surround yourself with violet protective light. When you feel ready, open your eyes. Drink a large glass of water to ground yourself."
      ]
    },
    category: "protection",
    duration: "20 min"
  },

  // ─── MANIFESTATION ────────────────────────────────────────────────────────────

  {
    id: "manifestation",
    title: { fr: "Attirer l'Abondance", en: "Attracting Abundance" },
    desc: {
      fr: "Rituel de la nouvelle lune pour semer des graines d'intentions puissantes.",
      en: "New moon ritual to plant seeds of powerful intentions."
    },
    steps: {
      fr: [
        "Prends un papier vierge et un stylo. Assure-toi d'être dans un espace calme et sans distractions.",
        "Ferme les yeux et entre dans un état de légère relaxation. Demande-toi : 'Si tout était possible, qu'est-ce que je souhaiferais vraiment attirer ?'",
        "Ouvre les yeux et écris 3 désirs au présent, comme s'ils étaient déjà accomplis : 'Je reçois / Je suis / J'ai...'",
        "Place tes deux mains à plat sur le papier. Ferme les yeux et ressens la joie, la gratitude et le soulagement comme si ces choses étaient déjà réelles.",
        "Reste dans cet état au moins 2 minutes. Laisse une petite larme de joie venir si elle vient — c'est signe d'alignement.",
        "Plie le papier en quatre et glisse-le sous ton oreiller, ou brûle-le en sécurité dans un bol pour envoyer l'intention à l'univers.",
        "Termine en disant : 'Ceci, ou quelque chose de mieux encore, vient à moi maintenant avec grâce.'",
      ],
      en: [
        "Take a blank piece of paper and a pen. Make sure you are in a calm, distraction-free space.",
        "Close your eyes and enter a state of light relaxation. Ask yourself: 'If anything were possible, what would I truly wish to attract?'",
        "Open your eyes and write 3 desires in the present tense, as if they were already accomplished: 'I receive / I am / I have...'",
        "Place both hands flat on the paper. Close your eyes and feel the joy, gratitude and relief as if these things were already real.",
        "Stay in this state for at least 2 minutes. Let a small tear of joy come if it comes — it is a sign of alignment.",
        "Fold the paper in four and slide it under your pillow, or burn it safely in a bowl to send the intention to the universe.",
        "End by saying: 'This, or something even better, comes to me now with grace.'"
      ]
    },
    category: "manifestation",
    duration: "15 min"
  },

  {
    id: "sigil",
    title: { fr: "Création de Sigil d'Intention", en: "Intention Sigil Creation" },
    desc: {
      fr: "Transforme une intention en symbole sacré personnel — pratique ancestrale de magie des symboles.",
      en: "Transform an intention into a personal sacred symbol — ancient practice of sigil magic."
    },
    steps: {
      fr: [
        "Écris ton intention en lettres majuscules sur une feuille : ex. 'JE SUIS EN BONNE SANTÉ ET EN PAIX'.",
        "Barre toutes les voyelles et toutes les lettres qui se répètent. Il ne reste que les consonnes uniques.",
        "Combine ces lettres restantes en les superposant, en les tournant, en les fusionnant — jusqu'à obtenir un symbole abstrait qui te plaît intuitivement.",
        "Recopie ce symbole au propre sur une feuille blanche. C'est ton sigil personnel.",
        "Ferme les yeux, prends une grande inspiration et fixe ton sigil jusqu'à sentir une légère excitation ou chaleur dans la poitrine.",
        "À ce moment précis — peak d'émotion — dis : 'C'est fait. C'est en cours. Je lâche et je fais confiance.'",
        "Cache ou détruis le papier (brûle-le). Tu ne dois plus penser à ce sigil — l'oubli permet à l'inconscient de travailler."
      ],
      en: [
        "Write your intention in capital letters on a sheet: e.g. 'I AM IN GOOD HEALTH AND AT PEACE'.",
        "Cross out all the vowels and all repeating letters. Only unique consonants remain.",
        "Combine the remaining letters by overlapping, rotating, merging them — until you get an abstract symbol that appeals to you intuitively.",
        "Redraw this symbol cleanly on a fresh white sheet. This is your personal sigil.",
        "Close your eyes, take a deep breath, and gaze at your sigil until you feel a slight excitement or warmth in your chest.",
        "At that precise moment — peak of emotion — say: 'It is done. It is happening. I release and I trust.'",
        "Hide or destroy the paper (burn it). You must no longer think about this sigil — forgetting allows the unconscious to do its work."
      ]
    },
    category: "manifestation",
    duration: "20 min"
  },

  {
    id: "money",
    title: { fr: "Attirer l'Argent", en: "Attracting Money" },
    desc: {
      fr: "Ouvrir le canal de la prospérité financière avec la visualisation et la bougie verte.",
      en: "Open the channel of financial prosperity with visualization and a green candle."
    },
    steps: {
      fr: [
        "Prends un billet ou une pièce de monnaie et tiens-le dans ta main droite. Sens son poids, sa texture, sa réalité.",
        "Ferme les yeux et dis : 'L'argent circule librement vers moi. Je suis en paix avec la richesse et je la mérite pleinement.'",
        "Visualise ton compte bancaire avec le solde que tu désires. Ressens la sécurité, la liberté et la joie que cela t'apporte — au moins 3 minutes.",
        "Écris sur un papier : 'Je reçois de l'argent de sources attendues et inattendues. Je suis reconnaissant(e).'",
        "Place le billet ou ce papier sous une bougie verte allumée (couleur de la prospérité). Laisse-la brûler 10 minutes en conscience.",
        "Remercie l'univers pour l'abondance déjà présente dans ta vie — même la plus petite : l'eau du robinet, ta chambre, la nourriture.",
        "Étouffe ou souffle doucement la bougie. Répète ce rituel chaque jeudi (jour de Jupiter, planète de l'abondance)."
      ],
      en: [
        "Take a banknote or coin and hold it in your right hand. Feel its weight, texture and reality.",
        "Close your eyes and say: 'Money flows freely to me. I am at peace with wealth and I fully deserve it.'",
        "Visualize your bank account with the balance you desire. Feel the security, freedom and joy it brings you — at least 3 minutes.",
        "Write on paper: 'I receive money from expected and unexpected sources. I am grateful.'",
        "Place the note or this paper under a lit green candle (color of prosperity). Let it burn 10 minutes consciously.",
        "Thank the universe for the abundance already present in your life — even the smallest: tap water, your room, food.",
        "Snuff or gently blow out the candle. Repeat this ritual every Thursday (Jupiter's day, planet of abundance)."
      ]
    },
    category: "manifestation",
    duration: "20 min"
  },

  {
    id: "love",
    title: { fr: "Attirer l'Amour", en: "Attracting Love" },
    desc: {
      fr: "Ouvrir son cœur et attirer une connexion amoureuse authentique.",
      en: "Open your heart and attract an authentic loving connection."
    },
    steps: {
      fr: [
        "Allume une bougie rose ou rouge et place des pétales de rose fraîche ou séchée autour d'elle.",
        "Ferme les yeux, pose les deux mains sur ton cœur et respire profondément. Sens ton cœur qui s'ouvre comme une fleur.",
        "Dis à voix haute : 'Mon cœur est prêt. Je mérite un amour profond, respectueux et joyeux.'",
        "Écris sur un papier les qualités de la relation que tu désires — pas l'apparence d'une personne, mais les valeurs, la complicité, le type d'amour.",
        "Lis la liste à voix haute en ressentant déjà la présence de cet amour dans ta vie. Souris. Laisse la joie monter.",
        "Plie le papier, glisse-le sous ta bougie rose et laisse-la brûler en sécurité jusqu'à extinction.",
        "Chaque soir pendant 7 jours, avant de t'endormir, répète : 'L'amour vient à moi naturellement et facilement. Je suis prêt(e).'"
      ],
      en: [
        "Light a pink or red candle and place fresh or dried rose petals around it.",
        "Close your eyes, place both hands over your heart and breathe deeply. Feel your heart opening like a flower.",
        "Say aloud: 'My heart is ready. I deserve deep, respectful and joyful love.'",
        "Write on paper the qualities of the relationship you desire — not a person's appearance, but values, chemistry, the type of love.",
        "Read the list aloud feeling the presence of this love already in your life. Smile. Let the joy rise.",
        "Fold the paper, slip it under your pink candle and let it burn safely until it goes out.",
        "Each evening for 7 days, before sleeping, repeat: 'Love comes to me naturally and easily. I am ready.'"
      ]
    },
    category: "manifestation",
    duration: "25 min"
  },

  // ─── LUNE ────────────────────────────────────────────────────────────────────

  {
    id: "new-moon",
    title: { fr: "Rituel de Nouvelle Lune", en: "New Moon Ritual" },
    desc: {
      fr: "Plante des intentions puissantes au début du cycle lunaire.",
      en: "Plant powerful intentions at the start of the lunar cycle."
    },
    steps: {
      fr: [
        "La nuit de la nouvelle lune, allume une bougie blanche et installe-toi dans un endroit calme.",
        "Tiens une feuille vierge et écris en haut : 'Avec cette nouvelle lune, j'appelle dans ma vie...'",
        "Liste 5 intentions claires, positives et formulées au présent. Sois précis(e) mais sans te fermer aux surprises de l'univers.",
        "Lis chaque intention à voix haute face à la bougie. Ressens chacune comme déjà réelle dans ton corps.",
        "Plie le papier en quatre et glisse-le sous ta bougie ou sous ton oreiller.",
        "Médite quelques minutes en regardant la flamme. Envoie ta gratitude pour ce qui vient.",
        "Laisse la bougie brûler en sécurité jusqu'à extinction. Ce rituel peut être répété à chaque cycle."
      ],
      en: [
        "On the night of the new moon, light a white candle and settle in a quiet place.",
        "Hold a blank sheet and write at the top: 'With this new moon, I call into my life...'",
        "List 5 clear, positive intentions written in the present tense. Be specific but open to the universe's surprises.",
        "Read each intention aloud facing the candle. Feel each one as already real in your body.",
        "Fold the paper in four and slip it under your candle or under your pillow.",
        "Meditate a few minutes watching the flame. Send gratitude for what is coming.",
        "Let the candle burn safely until it goes out. This ritual can be repeated at every cycle."
      ]
    },
    category: "lune",
    duration: "20 min"
  },

  {
    id: "full-moon",
    title: { fr: "Rituel de Pleine Lune", en: "Full Moon Ritual" },
    desc: {
      fr: "Libère ce qui ne te sert plus au pic du cycle lunaire.",
      en: "Release what no longer serves you at the peak of the lunar cycle."
    },
    steps: {
      fr: [
        "La nuit de la pleine lune, place-toi si possible sous sa lumière — balcon, jardin, fenêtre ouverte.",
        "Prends quelques respirations profondes en levant le visage vers la lune. Ressens son énergie puissante et révélatrice.",
        "Prends une feuille et écris tout ce que tu souhaites libérer : peurs, rancœurs, habitudes, croyances limitantes, relations toxiques.",
        "Lis chaque ligne à voix haute en disant : 'Je te libère avec amour et gratitude. Tu as rempli ton rôle.'",
        "Brûle la feuille en sécurité dans un bol résistant à la chaleur. Regarde les flammes consumer chaque mot.",
        "Observe les cendres avec respect. Ressens le soulagement physique de ce lâcher-prise.",
        "Remercie la pleine lune pour sa lumière révélatrice. Verse les cendres dans la terre ou à l'eau courante."
      ],
      en: [
        "On the night of the full moon, stand in its light if possible — balcony, garden, open window.",
        "Take a few deep breaths while raising your face toward the moon. Feel its powerful and revealing energy.",
        "Take a sheet and write everything you wish to release: fears, grudges, habits, limiting beliefs, toxic relationships.",
        "Read each line aloud saying: 'I release you with love and gratitude. You have served your purpose.'",
        "Burn the sheet safely in a heat-resistant bowl. Watch the flames consume each word.",
        "Observe the ashes with respect. Feel the physical relief of this release.",
        "Thank the full moon for its revealing light. Pour the ashes into soil or running water."
      ]
    },
    category: "lune",
    duration: "25 min"
  },

  {
    id: "eau-de-lune",
    title: { fr: "Eau de Lune", en: "Moon Water" },
    desc: {
      fr: "Charge de l'eau sous la lumière lunaire pour en faire un outil de purification et de manifestation.",
      en: "Charge water under moonlight to create a powerful purification and manifestation tool."
    },
    steps: {
      fr: [
        "La nuit d'une pleine lune ou d'une nouvelle lune, prépare un verre ou un bocal en verre propre rempli d'eau de source.",
        "Pose le récipient à l'extérieur ou sur le rebord d'une fenêtre exposée à la lumière lunaire.",
        "Pose les deux mains autour du verre et programme l'eau avec ton intention : ferme les yeux et visualise ce que tu souhaites. Exemple : 'Cette eau est chargée de paix et de clarté.'",
        "Laisse l'eau reposer sous la lune toute la nuit — de la tombée de la nuit jusqu'à l'aube.",
        "Au matin, récupère ton eau de lune avant que le soleil ne la touche (si pleine lune, l'énergie lunaire peut s'inverser sous le soleil).",
        "Utilise cette eau pour : t'asperger le visage en te levant, arroser tes plantes, nettoyer tes cristaux, t'en boire une gorgée en posant une intention."
      ],
      en: [
        "On the night of a full moon or new moon, prepare a clean glass or glass jar filled with spring water.",
        "Place the container outside or on a windowsill exposed to moonlight.",
        "Place both hands around the glass and program the water with your intention: close your eyes and visualize what you wish for. Example: 'This water is charged with peace and clarity.'",
        "Let the water rest under the moon all night — from nightfall to dawn.",
        "In the morning, retrieve your moon water before the sun touches it (with full moon, the lunar energy can reverse under the sun).",
        "Use this water to: splash your face upon rising, water your plants, cleanse your crystals, sip a mouthful while setting an intention."
      ]
    },
    category: "lune",
    duration: "12h (nuit)"
  },

  {
    id: "cristaux",
    title: { fr: "Recharger ses Cristaux", en: "Charging Your Crystals" },
    desc: {
      fr: "Purifie et recharge tes cristaux sous la lumière lunaire ou solaire.",
      en: "Purify and recharge your crystals under moonlight or sunlight."
    },
    steps: {
      fr: [
        "Lave tes cristaux à l'eau claire (attention : certains comme la sélénite, la calcite ou la pyrite ne supportent pas l'eau — renseigne-toi).",
        "Sèche-les doucement avec un linge propre en leur parlant avec gratitude : 'Merci pour tout ce que tu m'apportes.'",
        "La nuit d'une pleine lune, dispose tes cristaux sur un tissu naturel (lin, coton) à l'extérieur ou sur un rebord de fenêtre exposé à la lune.",
        "Place les deux paumes ouvertes au-dessus d'eux et visualise une lumière argentée et purificatrice qui les traverse et les recharge.",
        "Programme chaque cristal en le tenant dans ta main : ferme les yeux et répète mentalement 3 fois ce pour quoi tu le destines.",
        "Laisse-les recharger sous la lune toute la nuit.",
        "Au matin, remercie tes cristaux. Tu peux aussi les recharger au soleil du matin (évite pour les améthystes et quartz rose qui peuvent se décolorer)."
      ],
      en: [
        "Rinse your crystals under clean water (note: some like selenite, calcite or pyrite cannot tolerate water — check first).",
        "Dry them gently with a clean cloth while speaking to them with gratitude: 'Thank you for all you bring me.'",
        "On the night of a full moon, arrange your crystals on natural fabric (linen, cotton) outside or on a windowsill exposed to the moon.",
        "Place both open palms above them and visualize a silver, purifying light passing through and recharging them.",
        "Program each crystal by holding it in your hand: close your eyes and mentally repeat 3 times what you are dedicating it to.",
        "Leave them to charge under the moon all night.",
        "In the morning, thank your crystals. You can also charge them in the morning sun (avoid this for amethyst and rose quartz which may fade)."
      ]
    },
    category: "lune",
    duration: "10 min + nuit"
  },

  // ─── BIEN-ÊTRE ────────────────────────────────────────────────────────────────

  {
    id: "peace",
    title: { fr: "Ancrage à la Terre", en: "Earth Grounding" },
    desc: {
      fr: "Calme l'anxiété et reviens au moment présent en te connectant à l'énergie de la Terre.",
      en: "Calm anxiety and return to the present moment by connecting with Earth's energy."
    },
    steps: {
      fr: [
        "Assieds-toi pieds nus sur le sol — directement sur la terre, l'herbe ou du carrelage. Si possible, sors dans la nature.",
        "Sens la texture sous tes pieds. La fraîcheur, la solidité, le réel. Ici, maintenant.",
        "Concentre toute ton attention sur la plante de tes pieds. Imagine des racines épaisses comme des racines d'arbre qui partent de tes talons et s'enfoncent dans la Terre.",
        "À chaque inspiration, imagine que tu puises une énergie calmante, verte et stable depuis le cœur de la Terre.",
        "À chaque expiration, relâche dans ces racines tout ce qui pèse — stress, peurs, ruminations — pour qu'elles soient transformées.",
        "Reste ainsi au moins 5 minutes. Si des pensées arrivent, ramène doucement ton attention sur tes pieds et tes racines.",
        "Quand tu te sens prêt(e), presse les pieds un moment sur le sol avec gratitude. Bois un verre d'eau pour finaliser l'ancrage."
      ],
      en: [
        "Sit barefoot on the ground — directly on earth, grass or tiles. If possible, go outside in nature.",
        "Feel the texture beneath your feet. The coolness, the solidity, the real. Here, now.",
        "Bring all your attention to the soles of your feet. Imagine thick roots like tree roots growing from your heels deep into the Earth.",
        "With each inhale, imagine drawing up calming, green, stable energy from the Earth's core.",
        "With each exhale, release into these roots everything that weighs on you — stress, fears, rumination — for them to be transformed.",
        "Stay like this for at least 5 minutes. If thoughts arise, gently bring your attention back to your feet and roots.",
        "When you feel ready, press your feet to the ground for a moment in gratitude. Drink a glass of water to complete the grounding."
      ]
    },
    category: "bien-être",
    duration: "10 min"
  },

  {
    id: "respiration-478",
    title: { fr: "Respiration 4-7-8", en: "4-7-8 Breathing" },
    desc: {
      fr: "Technique de respiration du Dr Andrew Weil pour calmer le système nerveux en quelques minutes.",
      en: "Dr. Andrew Weil's breathing technique to calm the nervous system in minutes."
    },
    steps: {
      fr: [
        "Assieds-toi avec le dos droit ou allonge-toi. Pose la langue contre le palais, juste derrière les dents du haut.",
        "Expire complètement par la bouche avec un son 'whoosh'. Vide tes poumons entièrement.",
        "Ferme la bouche et inspire silencieusement par le nez en comptant mentalement jusqu'à 4.",
        "Retiens ton souffle en comptant jusqu'à 7. (Si c'est difficile au début, adapte le rythme en gardant le ratio 4-7-8.)",
        "Expire complètement par la bouche avec le son 'whoosh' en comptant jusqu'à 8.",
        "C'est un cycle. Effectue 4 cycles complets.",
        "Observe le calme qui s'installe. Cette technique active le système nerveux parasympathique — le frein naturel de ton corps contre le stress. Pratique matin et soir pour des effets durables."
      ],
      en: [
        "Sit with a straight back or lie down. Place your tongue against the roof of your mouth, just behind your upper teeth.",
        "Exhale completely through your mouth making a 'whoosh' sound. Empty your lungs entirely.",
        "Close your mouth and inhale silently through your nose while counting mentally to 4.",
        "Hold your breath counting to 7. (If this is difficult at first, adapt the pace while keeping the 4-7-8 ratio.)",
        "Exhale completely through your mouth making a 'whoosh' sound while counting to 8.",
        "That is one cycle. Complete 4 full cycles.",
        "Notice the calm settling in. This technique activates the parasympathetic nervous system — your body's natural brake against stress. Practice morning and evening for lasting effects."
      ]
    },
    category: "bien-être",
    duration: "5 min"
  },

  {
    id: "ancrage-nature",
    title: { fr: "Bain de Forêt (Shinrin-yoku)", en: "Forest Bathing (Shinrin-yoku)" },
    desc: {
      fr: "Pratique japonaise ancestrale de régénération par l'immersion consciente dans la nature.",
      en: "Ancient Japanese practice of regeneration through conscious immersion in nature."
    },
    steps: {
      fr: [
        "Rends-toi dans un parc, une forêt ou un jardin. Éteins ton téléphone ou mets-le en mode avion.",
        "Marche lentement sans destination précise. Le but n'est pas l'exercice — c'est la présence. Laisse tes pas être guidés par ce qui t'attire.",
        "Arrête-toi. Regarde autour de toi avec des yeux neufs comme si tu découvrais cet endroit pour la première fois.",
        "Engage les 5 sens : Touche l'écorce d'un arbre. Écoute les oiseaux. Sens les odeurs de la terre humide. Observe les nuances de vert. Perçois l'air sur ta peau.",
        "Si tu en as envie, enlève tes chaussures et marche pieds nus sur l'herbe ou la terre — la connexion directe avec le sol a des effets scientifiquement mesurés sur le stress.",
        "Reste au moins 20 minutes dans cet état de présence consciente. Pas de photos, pas de podcasts — juste toi et la nature.",
        "Avant de partir, pose les deux mains sur un arbre, ferme les yeux et remercie la nature pour cette ressource."
      ],
      en: [
        "Go to a park, forest or garden. Turn off your phone or switch to airplane mode.",
        "Walk slowly without a specific destination. The goal is not exercise — it is presence. Let your steps be guided by what attracts you.",
        "Stop. Look around with fresh eyes as if discovering this place for the first time.",
        "Engage all 5 senses: Touch the bark of a tree. Listen to birds. Smell the damp earth. Observe the shades of green. Feel the air on your skin.",
        "If you feel like it, remove your shoes and walk barefoot on grass or soil — direct connection with the ground has scientifically measurable effects on stress.",
        "Stay at least 20 minutes in this state of conscious presence. No photos, no podcasts — just you and nature.",
        "Before leaving, place both hands on a tree, close your eyes and thank nature for this gift."
      ]
    },
    category: "bien-être",
    duration: "30 min"
  },

  {
    id: "bain-fleur",
    title: { fr: "Bain Floral Régénérateur", en: "Regenerating Flower Bath" },
    desc: {
      fr: "Rituel de purification et d'élévation vibratoire pratiqué dans de nombreuses cultures (Caraïbes, Brésil, Cuba).",
      en: "Purification and vibrational elevation ritual practiced across many cultures (Caribbean, Brazil, Cuba)."
    },
    steps: {
      fr: [
        "Rassemble des fleurs fraîches aux vertus symboliques : roses rouges (amour, force), œillets blancs (purification), lavande (paix), tournesol (joie et soleil).",
        "Fais chauffer de l'eau sans la bouillir. Verse-la dans un grand saladier ou directement dans ton bain.",
        "Plonge les fleurs dans l'eau et laisse-les infuser 10 minutes en pensant à l'intention que tu poses : guérison, chance, amour, succès.",
        "Avant de te baigner, tiens le saladier entre tes mains et remercie chaque fleur pour son énergie.",
        "Verse lentement l'eau florale sur ton corps en commençant par le haut du crâne. Laisse-la couler le long de ton corps sans te rincer immédiatement.",
        "Reste dans l'eau ou laisse sécher naturellement quelques minutes pour laisser l'énergie des fleurs s'imprégner.",
        "Sèche-toi en douceur. Dispose les fleurs utilisées dans la nature, dans un jardin ou à l'eau courante — elles ont absorbé ce dont tu voulais te défaire."
      ],
      en: [
        "Gather fresh flowers with symbolic virtues: red roses (love, strength), white carnations (purification), lavender (peace), sunflower (joy and sun).",
        "Heat water without boiling it. Pour into a large bowl or directly into your bath.",
        "Submerge the flowers in the water and let them infuse for 10 minutes while thinking of the intention you are setting: healing, luck, love, success.",
        "Before bathing, hold the bowl in your hands and thank each flower for its energy.",
        "Slowly pour the floral water over your body starting from the top of your head. Let it run along your body without rinsing immediately.",
        "Remain in the water or let yourself air-dry for a few minutes to let the flowers' energy absorb.",
        "Dry yourself gently. Leave the used flowers in nature, in a garden or in running water — they have absorbed what you wished to release."
      ]
    },
    category: "bien-être",
    duration: "30 min"
  },

  // ─── CROISSANCE PERSONNELLE ───────────────────────────────────────────────────

  {
    id: "healing",
    title: { fr: "Guérison de l'Enfant Intérieur", en: "Inner Child Healing" },
    desc: {
      fr: "Envoie de l'amour et de la compassion à tes blessures passées pour commencer à guérir.",
      en: "Send love and compassion to your past wounds to begin healing."
    },
    steps: {
      fr: [
        "Assieds-toi confortablement, pose les deux mains sur ton cœur et ferme les yeux.",
        "Prends 5 grandes respirations. À chaque expiration, relâche un peu plus la garde.",
        "Pense à une blessure passée — une humiliation, un abandon, une peur d'enfant — sans chercher à l'analyser. Laisse juste l'image ou le sentiment venir.",
        "Visualise ton toi plus jeune dans ce moment douloureux. Approche-toi de cet enfant avec une tendresse infinie.",
        "Agenouille-toi face à lui dans ta visualisation. Regarde-le dans les yeux et dis-lui :",
        "'Je te vois. Je te crois. Tu n'étais pas responsable. Tu as fait de ton mieux. Je t'aime inconditionnellement et je suis là maintenant.'",
        "Prends cet enfant dans tes bras. Reste dans cette chaleur aussi longtemps que nécessaire. Quand tu es prêt(e), prends une grande inspiration et reviens doucement."
      ],
      en: [
        "Sit comfortably, place both hands over your heart and close your eyes.",
        "Take 5 deep breaths. With each exhale, let your guard down a little more.",
        "Think of a past wound — a humiliation, an abandonment, a childhood fear — without trying to analyze it. Just let the image or feeling come.",
        "Visualize your younger self in that painful moment. Approach this child with infinite tenderness.",
        "Kneel before them in your visualization. Look them in the eyes and say:",
        "'I see you. I believe you. You were not responsible. You did your best. I love you unconditionally and I am here now.'",
        "Take this child in your arms. Stay in this warmth for as long as needed. When you are ready, take a deep breath and gently return."
      ]
    },
    category: "croissance",
    duration: "20 min"
  },

  {
    id: "ho-oponopono",
    title: { fr: "Ho'oponopono", en: "Ho'oponopono" },
    desc: {
      fr: "Prière hawaïenne ancestrale de réconciliation, pardon et guérison intérieure.",
      en: "Ancient Hawaiian prayer of reconciliation, forgiveness and inner healing."
    },
    steps: {
      fr: [
        "Installe-toi confortablement dans le silence. Ferme les yeux et pose les mains sur ton cœur.",
        "Pense à une personne, une situation ou même une partie de toi-même qui t'a blessé(e) ou que tu as blessé(e).",
        "Maintiens cette image dans ton esprit — sans jugement, avec douceur.",
        "Répète lentement ces 4 phrases, en ressentant chaque mot :",
        "'Je suis désolé(e). Pardonne-moi. Merci. Je t'aime.'",
        "Répète ce mantra en boucle pendant 10 à 15 minutes, en laissant les émotions venir et partir comme des vagues.",
        "Cette prière s'adresse à la divinité en toi et en l'autre — elle nettoie les données (memories) qui créent la souffrance. Avec la pratique régulière, des tensions profondes se dissolvent naturellement."
      ],
      en: [
        "Settle comfortably in silence. Close your eyes and place your hands over your heart.",
        "Think of a person, a situation, or even a part of yourself that has hurt you or that you have hurt.",
        "Hold this image in your mind — without judgment, with gentleness.",
        "Slowly repeat these 4 phrases, feeling each word:",
        "'I'm sorry. Please forgive me. Thank you. I love you.'",
        "Repeat this mantra in a loop for 10 to 15 minutes, letting emotions come and go like waves.",
        "This prayer addresses the divinity in you and the other — it cleans the data (memories) that create suffering. With regular practice, deep tensions dissolve naturally."
      ]
    },
    category: "croissance",
    duration: "15 min"
  },

  {
    id: "miroir",
    title: { fr: "Travail du Miroir", en: "Mirror Work" },
    desc: {
      fr: "Pratique de Louise Hay pour développer l'amour de soi par le regard direct et la parole bienveillante.",
      en: "Louise Hay's practice to cultivate self-love through direct eye contact and kind words."
    },
    steps: {
      fr: [
        "Place-toi face à un miroir, de préférence le matin, dans un moment de calme et de solitude.",
        "Regarde-toi dans les yeux. Pas ton apparence — tes yeux. La personne vivante qui est là.",
        "Tiens ce regard pendant 30 secondes sans détourner les yeux. C'est plus difficile qu'il n'y paraît — note ce qui remonte.",
        "Maintenant, dis ton prénom et prononce à voix haute (même si ça te semble ridicule au début) :",
        "'[Ton prénom], je t'aime vraiment. Je t'aime et je t'accepte exactement tel(le) que tu es, maintenant.'",
        "Continue avec des affirmations personnalisées sur tes peurs actuelles. Si tu as peur de manquer d'argent : 'Je suis en sécurité.' Si tu doutes de toi : 'Je suis suffisant(e).'",
        "Pratique chaque matin pendant 21 jours. Les premières fois, tu peux pleurer ou rire — les deux sont des signes que quelque chose se libère."
      ],
      en: [
        "Stand in front of a mirror, preferably in the morning, in a moment of calm and solitude.",
        "Look yourself in the eyes. Not your appearance — your eyes. The living person who is there.",
        "Hold this gaze for 30 seconds without looking away. It is harder than it seems — notice what surfaces.",
        "Now, say your name and speak aloud (even if it feels silly at first):",
        "'[Your name], I truly love you. I love you and I accept you exactly as you are, right now.'",
        "Continue with personalized affirmations about your current fears. If you fear lack of money: 'I am safe.' If you doubt yourself: 'I am enough.'",
        "Practice every morning for 21 days. The first times you may cry or laugh — both are signs that something is releasing."
      ]
    },
    category: "croissance",
    duration: "10 min"
  },

  {
    id: "journalisme",
    title: { fr: "Travail de l'Ombre (Shadow Work)", en: "Shadow Work Journal" },
    desc: {
      fr: "Exploration jungienne des parts cachées de toi-même pour les intégrer avec compassion.",
      en: "Jungian exploration of your hidden self to integrate it with compassion."
    },
    steps: {
      fr: [
        "Prends un carnet dédié uniquement à ce travail. La confidentialité est essentielle — personne ne lira ces pages.",
        "Choisis une émotion ou un comportement qui t'agace chez les autres. Ce qui nous irrite le plus chez autrui révèle souvent nos propres angles morts.",
        "Écris sans filtre : 'Ce que je déteste chez [la personne], c'est ___.' Puis : 'Ce que ça révèle de moi, c'est peut-être ___.'",
        "Continue avec ces questions guide : Quand est-ce que je me suis interdit(e) cette qualité dans mon enfance ? Qui me l'a dit que c'était mal ? Qu'est-ce que cette part de moi veut vraiment ?",
        "À la fin, écris une lettre à cette part d'ombre : 'Je te vois. Je comprends pourquoi tu es là. Je ne te fuis plus. Je t'accueille.'",
        "Ferme le carnet avec respect. Ce travail peut provoquer de fortes émotions — c'est normal et sain.",
        "Pratique une fois par semaine. Avec le temps, les projections diminuent et la conscience de soi s'approfondit."
      ],
      en: [
        "Take a notebook dedicated only to this work. Confidentiality is essential — no one will read these pages.",
        "Choose an emotion or behavior that annoys you in others. What irritates us most in others often reveals our own blind spots.",
        "Write without filter: 'What I hate about [this person] is ___.' Then: 'What this reveals about me is perhaps ___.'",
        "Continue with these guide questions: When did I forbid myself this quality in childhood? Who told me it was bad? What does this part of me truly want?",
        "At the end, write a letter to this shadow part: 'I see you. I understand why you are here. I no longer flee from you. I welcome you.'",
        "Close the notebook with respect. This work can provoke strong emotions — this is normal and healthy.",
        "Practice once a week. Over time, projections decrease and self-awareness deepens."
      ]
    },
    category: "croissance",
    duration: "30 min"
  },

  {
    id: "forgiveness",
    title: { fr: "Rituel du Pardon", en: "Forgiveness Ritual" },
    desc: {
      fr: "Se libérer des rancœurs et retrouver la paix intérieure par le pardon authentique.",
      en: "Free yourself from grudges and find inner peace through authentic forgiveness."
    },
    steps: {
      fr: [
        "Assied-toi en silence et pense à la personne ou à la situation que tu souhaites pardonner.",
        "Écris tout ce que tu ressens — la colère, la douleur, la déception, la trahison — sans filtre et sans t'autocensurer. Laisse tout sortir.",
        "Lis ce que tu as écrit à voix haute. Valide chaque émotion : 'Oui, j'ai été blessé(e). Et c'est vrai.'",
        "Maintenant, rappelle-toi que pardonner n'est pas excuser. C'est te libérer, toi, du poids que tu portes.",
        "Dis à voix haute : 'Je choisis de me libérer de cette douleur. Je te libère et je me libère. Je choisis ma paix.'",
        "Brûle le papier en sécurité dans un bol résistant à la chaleur. Regarde la fumée emporter ces émotions.",
        "Pose la main sur ton cœur et prends 3 grandes respirations de paix et de gratitude pour toi-même."
      ],
      en: [
        "Sit in silence and think of the person or situation you wish to forgive.",
        "Write everything you feel — anger, pain, disappointment, betrayal — without filter and without self-censorship. Let it all out.",
        "Read what you wrote aloud. Validate each emotion: 'Yes, I was hurt. And that is true.'",
        "Now, remember that forgiving is not excusing. It is freeing yourself from the weight you carry.",
        "Say aloud: 'I choose to free myself from this pain. I release you and I release myself. I choose my peace.'",
        "Burn the paper safely in a heat-resistant bowl. Watch the smoke carry these emotions away.",
        "Place your hand on your heart and take 3 deep breaths of peace and gratitude for yourself."
      ]
    },
    category: "croissance",
    duration: "20 min"
  },

  {
    id: "confidence",
    title: { fr: "Ancrer la Confiance en Soi", en: "Anchoring Self-Confidence" },
    desc: {
      fr: "Rituel du miroir et de la posture pour activer la puissance personnelle avant un grand défi.",
      en: "Mirror and posture ritual to activate personal power before a major challenge."
    },
    steps: {
      fr: [
        "Tiens-toi debout, les pieds bien ancrés dans le sol, écartés à la largeur des épaules. Épaules en arrière. Menton relevé.",
        "Prends cette posture de puissance et maintiens-la pendant 2 minutes. Des études montrent qu'elle augmente la testostérone et réduit le cortisol.",
        "Regarde-toi dans un miroir droit dans les yeux pendant 30 secondes. Soutiens ce regard.",
        "Dis à voix haute, avec conviction, 3 fois : 'Je suis fort(e). Je suis capable. Je suis digne de réussir.'",
        "Pense à une victoire passée — même petite. Revis ce moment dans ton corps : la posture que tu avais, l'émotion que tu ressentais.",
        "Nomme cette émotion : fierté, soulagement, joie. Ressens-la maintenant, dans ton corps.",
        "Porte cette fierté comme une armure invisible. Chaque fois que le doute vient, reviens à ces 3 phrases et à ce souvenir de victoire."
      ],
      en: [
        "Stand tall, feet firmly grounded, shoulder-width apart. Shoulders back. Chin up.",
        "Hold this power pose for 2 minutes. Studies show it increases testosterone and reduces cortisol.",
        "Look yourself in the mirror straight in the eyes for 30 seconds. Hold this gaze.",
        "Say aloud, with conviction, 3 times: 'I am strong. I am capable. I am worthy of success.'",
        "Think of a past victory — even a small one. Relive this moment in your body: the posture you held, the emotion you felt.",
        "Name this emotion: pride, relief, joy. Feel it now, in your body.",
        "Carry this pride as invisible armor. Every time doubt comes, return to these 3 phrases and this memory of victory."
      ]
    },
    category: "croissance",
    duration: "10 min"
  },

  // ─── SPIRITUALITÉ ─────────────────────────────────────────────────────────────

  {
    id: "chakra",
    title: { fr: "Équilibre des 7 Chakras", en: "7 Chakra Balancing" },
    desc: {
      fr: "Harmonise les 7 centres énergétiques du corps par visualisation et respiration.",
      en: "Harmonize the 7 energy centers of the body through visualization and breathing."
    },
    steps: {
      fr: [
        "Allonge-toi confortablement, les bras le long du corps, et ferme les yeux. Prends 5 respirations profondes.",
        "Chakra racine (base de la colonne) : visualise une sphère de lumière rouge vif, chaude et stable. Répète : 'Je suis en sécurité. Je suis ancré(e).'",
        "Chakra sacré (bas ventre) : lumière orange créative et fluide. 'Je suis créatif(ve). Je ressens librement.'",
        "Chakra solaire plexus : lumière jaune dorée rayonnante. 'Je suis puissant(e). J'agis avec confiance.'",
        "Chakra cœur : lumière verte émeraude ou rose. 'Je donne et reçois l'amour librement. Je suis guéri(e).'",
        "Chakra gorge : lumière bleue claire. 'Je m'exprime avec vérité et douceur. Ma voix compte.'",
        "Troisième œil (centre du front) : lumière indigo profond. 'Je fais confiance à mon intuition. Je vois clairement.'",
        "Chakra couronne (sommet du crâne) : lumière violette puis blanche. 'Je suis connecté(e) au divin. Je suis guidé(e).'",
        "Visualise maintenant tous les chakras illuminés ensemble, formant une colonne de lumière de la Terre jusqu'au ciel."
      ],
      en: [
        "Lie down comfortably, arms alongside your body, and close your eyes. Take 5 deep breaths.",
        "Root chakra (base of spine): visualize a bright red sphere, warm and stable. Repeat: 'I am safe. I am grounded.'",
        "Sacral chakra (lower abdomen): creative, fluid orange light. 'I am creative. I feel freely.'",
        "Solar plexus chakra: radiant golden yellow light. 'I am powerful. I act with confidence.'",
        "Heart chakra: emerald green or pink light. 'I give and receive love freely. I am healed.'",
        "Throat chakra: clear blue light. 'I express myself with truth and gentleness. My voice matters.'",
        "Third eye (center of forehead): deep indigo light. 'I trust my intuition. I see clearly.'",
        "Crown chakra (top of skull): violet then white light. 'I am connected to the divine. I am guided.'",
        "Now visualize all chakras illuminated together, forming a column of light from the Earth to the sky."
      ]
    },
    category: "spiritualité",
    duration: "20 min"
  },

  {
    id: "mantra",
    title: { fr: "Méditation par Mantra", en: "Mantra Meditation" },
    desc: {
      fr: "Utilise la vibration sonore des mantras sanskrits pour calmer l'esprit et éveiller la conscience.",
      en: "Use the sonic vibration of Sanskrit mantras to calm the mind and awaken consciousness."
    },
    steps: {
      fr: [
        "Assieds-toi en tailleur ou sur une chaise, le dos droit. Pose les mains sur tes genoux, paumes vers le haut.",
        "Ferme les yeux et prends 3 respirations profondes pour te centrer.",
        "Choisis ton mantra selon ton intention :",
        "• Om (ॐ) : connexion à l'univers, paix universelle",
        "• So Hum : 'Je suis cela' — conscience pure",
        "• Om Namah Shivaya : transformation et libération",
        "• Lokah Samastah Sukhino Bhavantu : que tous les êtres soient heureux",
        "Commence à répéter ton mantra — à voix haute, puis en murmure, puis mentalement. Laisse-le devenir une pulsation naturelle.",
        "Si ton esprit part ailleurs, accueille la pensée sans la juger, et reviens doucement au mantra.",
        "Continue 10 à 20 minutes. Pour finir, laisse le mantra s'éteindre naturellement dans le silence. Reste dans ce silence sacré quelques instants avant d'ouvrir les yeux."
      ],
      en: [
        "Sit cross-legged or on a chair, back straight. Place your hands on your knees, palms facing up.",
        "Close your eyes and take 3 deep breaths to center yourself.",
        "Choose your mantra according to your intention:",
        "• Om (ॐ): connection to the universe, universal peace",
        "• So Hum: 'I am that' — pure consciousness",
        "• Om Namah Shivaya: transformation and liberation",
        "• Lokah Samastah Sukhino Bhavantu: may all beings be happy",
        "Begin repeating your mantra — aloud, then as a whisper, then mentally. Let it become a natural pulse.",
        "If your mind wanders, welcome the thought without judging it, and gently return to the mantra.",
        "Continue for 10 to 20 minutes. To finish, let the mantra fade naturally into silence. Rest in this sacred silence for a few moments before opening your eyes."
      ]
    },
    category: "spiritualité",
    duration: "20 min"
  },

  {
    id: "ancetre",
    title: { fr: "Connexion aux Ancêtres", en: "Ancestor Connection" },
    desc: {
      fr: "Rituel de vénération et de connexion avec la sagesse de tes lignées ancestrales.",
      en: "Ritual of veneration and connection with the wisdom of your ancestral lineages."
    },
    steps: {
      fr: [
        "Installe un petit autel simple : une photo de proches disparus, une bougie blanche, un verre d'eau fraîche (offert aux esprits dans de nombreuses traditions), et éventuellement de la nourriture ou une fleur.",
        "Allume la bougie et le verre d'eau. Prends 5 respirations profondes pour entrer dans un état de respect et de réceptivité.",
        "Appelle tes ancêtres à voix haute : 'J'appelle les esprits de mes ancêtres bienveillants, ceux qui me veulent du bien, ceux dont le nom a été oublié mais dont le sang coule en moi.'",
        "Parle-leur comme à des personnes présentes. Remercie-les pour les dons, la vie et les sacrifices qui t'ont permis d'être ici.",
        "Pose-leur une question ou une intention : 'Quelle sagesse ai-je besoin de recevoir en ce moment ?'",
        "Reste en silence 5 à 10 minutes. Note les images, sensations, mots ou émotions qui viennent spontanément — c'est souvent là que les réponses arrivent.",
        "Clôture en disant : 'Merci pour votre présence et votre amour. Je vous honore. Que la paix soit avec vous et avec moi.' Laisse la bougie brûler au moins 1 heure."
      ],
      en: [
        "Set up a simple altar: a photo of deceased loved ones, a white candle, a glass of fresh water (offered to spirits in many traditions), and optionally food or a flower.",
        "Light the candle and place the glass of water. Take 5 deep breaths to enter a state of respect and receptivity.",
        "Call your ancestors aloud: 'I call upon the spirits of my benevolent ancestors, those who wish me well, those whose names have been forgotten but whose blood flows in me.'",
        "Speak to them as to people present. Thank them for the gifts, life and sacrifices that made it possible for you to be here.",
        "Ask them a question or state an intention: 'What wisdom do I need to receive right now?'",
        "Remain in silence for 5 to 10 minutes. Note the images, sensations, words or emotions that come spontaneously — this is often where answers arrive.",
        "Close by saying: 'Thank you for your presence and your love. I honor you. May peace be with you and with me.' Let the candle burn for at least 1 hour."
      ]
    },
    category: "spiritualité",
    duration: "30 min"
  },

  {
    id: "meditation-flamme",
    title: { fr: "Méditation sur la Flamme (Trataka)", en: "Candle Flame Meditation (Trataka)" },
    desc: {
      fr: "Technique yogique ancienne de concentration intense sur une flamme pour purifier l'esprit.",
      en: "Ancient yogic technique of intense concentration on a flame to purify the mind."
    },
    steps: {
      fr: [
        "Installe une bougie à hauteur des yeux, à environ 60-90 cm de toi. Éteins toutes les autres lumières.",
        "Assieds-toi avec le dos droit dans une posture stable. Prends 5 respirations profondes.",
        "Fixe le centre de la flamme — la partie la plus brillante, juste au-dessus de la mèche — sans cligner des yeux autant que possible.",
        "Tes yeux vont se mettre à pleurer. C'est normal et même bénéfique selon la tradition yogique — c'est un signe de purification.",
        "Quand tes yeux ne peuvent plus tenir, ferme-les. Visualise la flamme entre tes sourcils (au troisième œil). Maintiens cette image le plus longtemps possible.",
        "Quand l'image disparaît, rouvre les yeux et refixe la flamme. Alterne 5 à 7 fois.",
        "Pour terminer, ferme les yeux et reste dans le silence intérieur. Observe la clarté et le calme de l'esprit. Le Trataka renforce la concentration, améliore la vision et calme les pensées obsessionnelles."
      ],
      en: [
        "Place a candle at eye level, about 60-90 cm from you. Turn off all other lights.",
        "Sit with a straight back in a stable posture. Take 5 deep breaths.",
        "Fix your gaze on the center of the flame — the brightest part, just above the wick — without blinking as much as possible.",
        "Your eyes will begin to water. This is normal and even beneficial according to yogic tradition — it is a sign of purification.",
        "When your eyes can no longer hold, close them. Visualize the flame between your eyebrows (at the third eye). Hold this image for as long as possible.",
        "When the image fades, open your eyes and refocus on the flame. Alternate 5 to 7 times.",
        "To finish, close your eyes and remain in inner silence. Observe the clarity and calm of the mind. Trataka strengthens concentration, improves vision and calms obsessive thoughts."
      ]
    },
    category: "spiritualité",
    duration: "15 min"
  },

  // ─── QUOTIDIEN ────────────────────────────────────────────────────────────────

  {
    id: "morning",
    title: { fr: "Rituel du Matin Sacré", en: "Sacred Morning Ritual" },
    desc: {
      fr: "Démarrer chaque journée avec intention, clarté et énergie lumineuse.",
      en: "Start each day with intention, clarity and luminous energy."
    },
    steps: {
      fr: [
        "Avant de regarder ton téléphone, laisse-toi 5 minutes. Ce premier moment de la journée t'appartient.",
        "Prends 3 grandes inspirations profondes. À chaque expiration, relâche la nuit et tout ce qu'elle contenait.",
        "Pose la main sur ton cœur et demande-toi : 'Quelle est mon intention pour aujourd'hui ? Comment est-ce que je veux me sentir ?'",
        "Dis à voix haute une affirmation : 'Je suis capable, aligné(e) et guidé(e). Cette journée m'apporte des opportunités que j'accueille avec gratitude.'",
        "Bois un grand verre d'eau à jeun — en pleine conscience, en imaginant qu'elle remplit ton corps de clarté et de lumière.",
        "Note dans un carnet : une chose pour laquelle tu es reconnaissant(e) ce matin. Juste une, mais vraiment ressentie.",
        "Souris pendant 10 secondes. Ton cerveau ne fait pas la différence entre un vrai sourire et un faux — il sécrète les mêmes neurotransmetteurs du bonheur."
      ],
      en: [
        "Before looking at your phone, give yourself 5 minutes. This first moment of the day belongs to you.",
        "Take 3 deep breaths. With each exhale, release the night and all it contained.",
        "Place your hand on your heart and ask yourself: 'What is my intention for today? How do I want to feel?'",
        "Say aloud an affirmation: 'I am capable, aligned and guided. This day brings me opportunities I welcome with gratitude.'",
        "Drink a large glass of water on an empty stomach — mindfully, imagining it filling your body with clarity and light.",
        "Note in a journal: one thing you are grateful for this morning. Just one, but truly felt.",
        "Smile for 10 seconds. Your brain cannot distinguish a genuine smile from a forced one — it releases the same happiness neurotransmitters."
      ]
    },
    category: "quotidien",
    duration: "10 min"
  },

  {
    id: "retour-soi",
    title: { fr: "Retour à Soi du Soir", en: "Evening Return to Self" },
    desc: {
      fr: "Rituel du coucher pour déposer la journée, te reconnecter à toi et glisser doucement dans le sommeil.",
      en: "Bedtime ritual to release the day, reconnect with yourself and slide gently into sleep."
    },
    steps: {
      fr: [
        "30 minutes avant de dormir, éteins tous les écrans. Le rituel du soir commence maintenant.",
        "Assieds-toi en silence ou allonge-toi. Ferme les yeux et prends 5 respirations lentes.",
        "Passe mentalement en revue ta journée — sans jugement. Qu'est-ce qui t'a coûté de l'énergie ? Qu'est-ce qui t'en a donné ?",
        "Dépose symboliquement chaque émotion lourde : visualise-la comme un objet lourd que tu poses à côté de toi. Tu n'en as plus besoin pour cette nuit.",
        "Pense à 3 petits moments de lumière de la journée — même infimes. Un sourire reçu. Une tasse de café. Un rayon de soleil. Ressens la gratitude.",
        "Si tu as des inquiétudes pour demain, note-les dans un carnet. Les transférer sur papier libère ton esprit.",
        "Pose la main sur ton cœur et dis : 'J'ai fait de mon mieux aujourd'hui. Je me pardonne et je me repose. Demain est un nouveau commencement.' Laisse-toi glisser dans le sommeil."
      ],
      en: [
        "30 minutes before sleeping, turn off all screens. The evening ritual begins now.",
        "Sit in silence or lie down. Close your eyes and take 5 slow breaths.",
        "Mentally review your day — without judgment. What drained your energy? What gave you energy?",
        "Symbolically set down each heavy emotion: visualize it as a heavy object you place beside you. You no longer need it tonight.",
        "Think of 3 small moments of light from the day — even tiny ones. A smile received. A cup of coffee. A ray of sunshine. Feel the gratitude.",
        "If you have worries about tomorrow, write them in a notebook. Transferring them to paper frees your mind.",
        "Place your hand on your heart and say: 'I did my best today. I forgive myself and I rest. Tomorrow is a new beginning.' Let yourself drift into sleep."
      ]
    },
    category: "quotidien",
    duration: "20 min"
  },

  {
    id: "sleep",
    title: { fr: "Préparation au Voyage Nocturne", en: "Dream Preparation" },
    desc: {
      fr: "Rituel pour préparer l'esprit aux rêves clairs, lucides et porteurs de messages.",
      en: "Ritual to prepare the mind for clear, lucid and meaningful dreams."
    },
    steps: {
      fr: [
        "Éteins tous les écrans au moins 30 minutes avant de dormir. La lumière bleue perturbe la mélatonine naturelle.",
        "Prépare ton espace : aère la chambre quelques minutes, dispose un cristal (améthyste ou quartz) à côté de ton lit si tu en possèdes.",
        "Prends un carnet de rêves et pose-le sur ta table de nuit avec un stylo — l'acte de le préparer envoie un signal à l'inconscient.",
        "Bois une gorgée d'eau en posant l'intention à voix haute : 'Cette nuit, je me souviens de mes rêves. Mes rêves me donnent des messages clairs.'",
        "Allongé(e), détends progressivement chaque partie de ton corps en commençant par les orteils jusqu'au sommet du crâne.",
        "Imagine que tu entres dans un couloir de brume dorée et douce. Au bout de ce couloir, ton prochain rêve t'attend.",
        "Répète mentalement, 3 fois, en entrant dans le sommeil : 'Je me souviendrai de mes rêves à mon réveil. Je suis conscient(e) de rêver.'"
      ],
      en: [
        "Turn off all screens at least 30 minutes before sleeping. Blue light disrupts natural melatonin.",
        "Prepare your space: air out the room for a few minutes, place a crystal (amethyst or quartz) beside your bed if you have one.",
        "Take a dream journal and place it on your nightstand with a pen — the act of preparing it sends a signal to the unconscious.",
        "Drink a sip of water while setting the intention aloud: 'Tonight I remember my dreams. My dreams give me clear messages.'",
        "Lying down, progressively relax each part of your body starting from your toes to the top of your skull.",
        "Imagine you are entering a corridor of soft golden mist. At the end of this corridor, your next dream awaits.",
        "Mentally repeat, 3 times, as you enter sleep: 'I will remember my dreams when I wake. I am aware that I am dreaming.'"
      ]
    },
    category: "quotidien",
    duration: "15 min"
  },

  {
    id: "gratitude",
    title: { fr: "Rituel de Gratitude Profonde", en: "Deep Gratitude Ritual" },
    desc: {
      fr: "Ancre la gratitude dans le corps pour reprogrammer ton esprit vers l'abondance.",
      en: "Anchor gratitude in the body to reprogram your mind toward abundance."
    },
    steps: {
      fr: [
        "Installe-toi dans un endroit calme. Ferme les yeux et prends 3 respirations pour te centrer.",
        "Pense à 3 personnes ou situations pour lesquelles tu éprouves une vraie gratitude. Prends le temps pour chacune — pas de liste mécanique.",
        "Pour la première : revis le moment précis. Où étais-tu ? Que ressentais-tu ? Laisse la chaleur monter dans ta poitrine.",
        "Pose la main gauche sur ton cœur. Dis à voix haute ou mentalement : 'Merci pour [ce don]. Je le reçois pleinement dans mon cœur.'",
        "Fais de même pour la deuxième et la troisième. Prends le temps de vraiment ressentir chaque gratitude dans ton corps.",
        "Visualise une lumière dorée dans ta poitrine qui grandit à chaque remerciement jusqu'à déborder de toi.",
        "Termine en déclarant : 'Je suis ouvert(e) à recevoir encore plus de grâces aujourd'hui. La vie est généreuse et je le reconnais.'"
      ],
      en: [
        "Settle in a quiet place. Close your eyes and take 3 breaths to center yourself.",
        "Think of 3 people or situations for which you feel genuine gratitude. Take time for each one — no mechanical list.",
        "For the first: relive the exact moment. Where were you? What were you feeling? Let the warmth rise in your chest.",
        "Place your left hand on your heart. Say aloud or mentally: 'Thank you for [this gift]. I fully receive it in my heart.'",
        "Do the same for the second and third. Take time to truly feel each gratitude in your body.",
        "Visualize a golden light in your chest growing with each thank you until it overflows from you.",
        "End by declaring: 'I am open to receiving even more grace today. Life is generous and I acknowledge it.'"
      ]
    },
    category: "quotidien",
    duration: "10 min"
  },

  {
    id: "soin-plante",
    title: { fr: "Rituel de Soin des Plantes", en: "Plant Tending Ritual" },
    desc: {
      fr: "Les plantes d'intérieur sont des alliées spirituelles — les soigner consciemment devient un rituel de paix et de connexion.",
      en: "Indoor plants are spiritual allies — tending to them consciously becomes a ritual of peace and connection."
    },
    steps: {
      fr: [
        "Rassemble ton arrosoir, un chiffon propre et ton intention. Éteins la musique et les distractions.",
        "Approche-toi de chaque plante comme d'un être vivant sensible — parce qu'elle l'est. Salue-la. Oui, à voix haute si tu le souhaites.",
        "Observe-la vraiment : son feuillage, ses couleurs, la terre. Y a-t-il des feuilles mortes à enlever ? Des feuilles jaunies ? Chaque détail te parle.",
        "Arrose-la si nécessaire en disant : 'Je te nourris avec amour et gratitude. Tu embellis mon espace et purifie mon air.'",
        "Essuie doucement les feuilles larges avec un linge humide. Cette action simple aide la plante à respirer et à capter la lumière.",
        "Place ta main à quelques centimètres des feuilles et ressens sa présence. Certains pratiquants envoient de l'énergie de guérison aux plantes malades par ce geste.",
        "Remercie tes plantes pour leur présence silencieuse et purifiante dans ton foyer. Ce rituel hebdomadaire devient une méditation active."
      ],
      en: [
        "Gather your watering can, a clean cloth and your intention. Turn off music and distractions.",
        "Approach each plant as a sensitive living being — because it is. Greet it. Yes, aloud if you wish.",
        "Truly observe it: its foliage, colors, the soil. Are there dead leaves to remove? Yellowed leaves? Every detail speaks to you.",
        "Water it if needed saying: 'I nourish you with love and gratitude. You beautify my space and purify my air.'",
        "Gently wipe large leaves with a damp cloth. This simple action helps the plant breathe and capture light.",
        "Place your hand a few centimeters from the leaves and feel its presence. Some practitioners send healing energy to sick plants through this gesture.",
        "Thank your plants for their silent, purifying presence in your home. This weekly ritual becomes an active meditation."
      ]
    },
    category: "quotidien",
    duration: "15 min"
  },

  {
    id: "bain-soleil",
    title: { fr: "Bain de Soleil Méditatif", en: "Meditative Sun Bath" },
    desc: {
      fr: "Rituel de connexion solaire pour recharger l'énergie vitale et ancrer la joie.",
      en: "Solar connection ritual to recharge vital energy and anchor joy."
    },
    steps: {
      fr: [
        "Choisis un endroit où le soleil du matin (idéalement entre 7h et 10h) peut toucher ta peau. Balcon, jardin ou même fenêtre ouverte.",
        "Installe-toi confortablement, le visage tourné vers le soleil. Ferme les yeux et sens la chaleur commencer à se poser sur ta peau.",
        "Ouvre les bras, paumes vers le ciel, comme pour accueillir le soleil. Visualise ses rayons dorés entrer par tes paumes.",
        "À chaque inspiration, imagine que tu inhales de l'énergie solaire pure — lumineuse, chaude et vitalisante.",
        "À chaque expiration, envoie de la gratitude au soleil. Il est à l'origine de toute vie sur cette planète.",
        "Répète mentalement : 'Je suis rechargé(e). Je suis vivant(e). Je rayonne.'",
        "Reste ainsi 10 à 20 minutes. Le matin, l'exposition solaire régule le cortisol, stimule la sérotonine et ancre ton rythme circadien — c'est scientifiquement prouvé."
      ],
      en: [
        "Choose a spot where the morning sun (ideally between 7 and 10 am) can touch your skin. Balcony, garden or even an open window.",
        "Settle comfortably, face turned toward the sun. Close your eyes and feel the warmth beginning to land on your skin.",
        "Open your arms, palms toward the sky, as if welcoming the sun. Visualize its golden rays entering through your palms.",
        "With each inhale, imagine you are breathing in pure solar energy — luminous, warm and vitalizing.",
        "With each exhale, send gratitude to the sun. It is the origin of all life on this planet.",
        "Mentally repeat: 'I am recharged. I am alive. I radiate.'",
        "Stay for 10 to 20 minutes. Morning sun exposure regulates cortisol, stimulates serotonin and anchors your circadian rhythm — scientifically proven."
      ]
    },
    category: "quotidien",
    duration: "15 min"
  },

  {
    id: "pleine-conscience",
    title: { fr: "Pleine Conscience au Quotidien", en: "Daily Mindfulness" },
    desc: {
      fr: "Transforme un geste ordinaire du quotidien en méditation vivante et en rituel sacré.",
      en: "Transform an ordinary daily action into a living meditation and sacred ritual."
    },
    steps: {
      fr: [
        "Choisis une activité que tu fais tous les jours : te brosser les dents, boire ton café, faire la vaisselle.",
        "Décide qu'aujourd'hui, ce moment banal devient sacré. Pose l'intention avant de commencer.",
        "Accomplis ce geste en mobilisant tous tes sens : les couleurs, les sons, les textures, les odeurs, les saveurs.",
        "Quand ton esprit part — et il partira — reviens doucement, sans te juger, à la sensation immédiate présente.",
        "Observe les pensées qui surgissent comme des nuages dans le ciel. Tu es le ciel — pas les nuages.",
        "Termine ce geste en prenant une respiration consciente et en disant mentalement : 'Je suis là. Entièrement là. C'est suffisant.'",
        "La pleine conscience n'est pas une pratique de 20 minutes sur un coussin — c'est une façon d'être dans chaque moment. Pratique-la 3 fois par jour sur des gestes ordinaires."
      ],
      en: [
        "Choose an activity you do every day: brushing your teeth, drinking your coffee, washing dishes.",
        "Decide that today, this mundane moment becomes sacred. Set the intention before beginning.",
        "Perform this action by engaging all your senses: colors, sounds, textures, smells, tastes.",
        "When your mind wanders — and it will — gently return, without judging yourself, to the immediate present sensation.",
        "Observe thoughts arising like clouds in the sky. You are the sky — not the clouds.",
        "Finish this action by taking a conscious breath and saying mentally: 'I am here. Fully here. That is enough.'",
        "Mindfulness is not a 20-minute practice on a cushion — it is a way of being in each moment. Practice it 3 times a day on ordinary gestures."
      ]
    },
    category: "quotidien",
    duration: "5 min"
  },
];
