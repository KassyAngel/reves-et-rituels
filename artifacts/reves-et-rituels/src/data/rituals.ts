export type Ritual = {
  id: string;
  title: { fr: string; en: string };
  desc: { fr: string; en: string };
  steps: { fr: string[]; en: string[] };
};

export const rituals: Ritual[] = [
  {
    id: "purification",
    title: { fr: "Purification de l'Espace", en: "Space Purification" },
    desc: { fr: "Nettoie les énergies stagnantes de ta chambre.", en: "Clear stagnant energies from your room." },
    steps: {
      fr: ["Ouvre grand les fenêtres pour laisser entrer l'air frais.", "Allume de la sauge, du palo santo ou de l'encens.", "Passe la fumée dans chaque coin de la pièce en visualisant une lumière blanche.", "Répète mentalement : 'Je libère ce qui ne me sert plus. Cet espace est pur et protégé.'"],
      en: ["Open the windows wide to let in fresh air.", "Light some sage, palo santo, or incense.", "Pass the smoke into every corner of the room visualizing a white light.", "Mentally repeat: 'I release what no longer serves me. This space is pure and protected.'"]
    }
  },
  {
    id: "protection",
    title: { fr: "Bulle de Protection", en: "Protection Bubble" },
    desc: { fr: "Bouclier énergétique avant d'affronter le monde.", en: "Energy shield before facing the world." },
    steps: {
      fr: ["Ferme les yeux et prends trois profondes inspirations.", "Imagine une lumière dorée émanant de ton cœur.", "Fais grandir cette lumière jusqu'à ce qu'elle forme une bulle lumineuse autour de toi.", "Ressens la chaleur et la sécurité de cette bulle. Seules les énergies positives peuvent y pénétrer."],
      en: ["Close your eyes and take three deep breaths.", "Imagine a golden light emanating from your heart.", "Expand this light until it forms a luminous bubble around you.", "Feel the warmth and safety of this bubble. Only positive energies can enter."]
    }
  },
  {
    id: "manifestation",
    title: { fr: "Attirer l'Abondance", en: "Attracting Abundance" },
    desc: { fr: "Rituel de la nouvelle lune pour semer des graines.", en: "New moon ritual to plant seeds." },
    steps: {
      fr: ["Prends un papier vierge et un stylo.", "Écris 3 choses que tu souhaites attirer dans ta vie, au présent (ex: 'Je suis en paix').", "Place tes mains sur le papier, ferme les yeux et ressens la joie comme si c'était déjà accompli.", "Garde ce papier sous ton oreiller ou brûle-le en toute sécurité pour envoyer l'intention à l'univers."],
      en: ["Take a blank piece of paper and a pen.", "Write 3 things you wish to attract, in the present tense (e.g., 'I am at peace').", "Place your hands on the paper, close your eyes, and feel the joy as if it were already accomplished.", "Keep this paper under your pillow or burn it safely to release the intention to the universe."]
    }
  },
  {
    id: "peace",
    title: { fr: "Ancrage Émotionnel", en: "Emotional Grounding" },
    desc: { fr: "Calmer l'anxiété et revenir au moment présent.", en: "Calm anxiety and return to the present moment." },
    steps: {
      fr: ["Assieds-toi confortablement, les pieds à plat sur le sol.", "Concentre-toi sur la plante de tes pieds. Imagine des racines qui s'enfoncent profondément dans la Terre.", "À chaque inspiration, puise l'énergie calmante de la Terre.", "À chaque expiration, relâche tes tensions dans les racines pour qu'elles soient recyclées."],
      en: ["Sit comfortably with your feet flat on the floor.", "Focus on the soles of your feet. Imagine roots sinking deep into the Earth.", "With each inhale, draw up the calming energy of the Earth.", "With each exhale, release your tensions into the roots to be recycled."]
    }
  },
  {
    id: "sleep",
    title: { fr: "Préparation au Voyage Nocturne", en: "Dream Preparation" },
    desc: { fr: "Pour des rêves clairs et lucides.", en: "For clear and lucid dreams." },
    steps: {
      fr: ["Éteins tous les écrans 30 minutes avant de dormir.", "Bois une gorgée d'eau en posant l'intention : 'Cette eau clarifie mon esprit'.", "Allongé(e), détends chaque muscle de ton corps, des orteils jusqu'au sommet du crâne.", "Répète 3 fois : 'Je me souviendrai de mes rêves à mon réveil'."],
      en: ["Turn off all screens 30 minutes before sleeping.", "Drink a sip of water setting the intention: 'This water clarifies my mind'.", "Lying down, relax every muscle in your body, from your toes to the top of your head.", "Repeat 3 times: 'I will remember my dreams when I wake up'."]
    }
  },
  {
    id: "gratitude",
    title: { fr: "Rituel de Gratitude", en: "Gratitude Ritual" },
    desc: { fr: "Ancrer la gratitude pour attirer plus d'abondance.", en: "Anchor gratitude to attract more abundance." },
    steps: {
      fr: ["Installe-toi dans un endroit calme, assis confortablement.", "Ferme les yeux et pense à 3 personnes ou situations pour lesquelles tu es profondément reconnaissant(e).", "Pour chacune, pose la main sur ton cœur et dis : 'Merci pour cette grâce dans ma vie.'", "Visualise une lumière dorée dans ta poitrine qui grandit à chaque remerciement.", "Termine en disant : 'Je suis ouvert(e) à recevoir encore plus de blessings aujourd'hui.'"],
      en: ["Settle in a quiet place, sitting comfortably.", "Close your eyes and think of 3 people or situations you are deeply grateful for.", "For each one, place your hand on your heart and say: 'Thank you for this grace in my life.'", "Visualize a golden light in your chest growing with each thank you.", "End by saying: 'I am open to receiving even more blessings today.'"]
    }
  },
  {
    id: "new-moon",
    title: { fr: "Rituel de Nouvelle Lune", en: "New Moon Ritual" },
    desc: { fr: "Planter des intentions puissantes au début du cycle.", en: "Plant powerful intentions at the start of the cycle." },
    steps: {
      fr: ["La nuit de la nouvelle lune, allume une bougie blanche.", "Prends une feuille vierge et écris : 'Avec cette nouvelle lune, j'appelle dans ma vie...'", "Liste 5 intentions claires et positives, formulées au présent.", "Lis-les à voix haute face à la bougie, en ressentant chaque intention comme déjà réelle.", "Plie le papier et glisse-le sous ta bougie. Laisse-la brûler en sécurité jusqu'à extinction."],
      en: ["On the night of the new moon, light a white candle.", "Take a blank sheet and write: 'With this new moon, I call into my life...'", "List 5 clear, positive intentions written in the present tense.", "Read them aloud facing the candle, feeling each intention as already real.", "Fold the paper and slide it under your candle. Let it burn safely until it goes out."]
    }
  },
  {
    id: "full-moon",
    title: { fr: "Rituel de Pleine Lune", en: "Full Moon Ritual" },
    desc: { fr: "Libérer ce qui ne te sert plus au pic du cycle.", en: "Release what no longer serves you at the cycle's peak." },
    steps: {
      fr: ["La nuit de la pleine lune, place-toi si possible sous la lumière de la lune.", "Prends une feuille et écris tout ce que tu souhaites libérer : peurs, rancœurs, habitudes.", "Lis chaque ligne en disant : 'Je te libère avec amour et gratitude.'", "Brûle la feuille en sécurité dans un bol résistant à la chaleur.", "Observe les cendres et ressens le soulagement de ce lâcher prise."],
      en: ["On the night of the full moon, stand in the moonlight if possible.", "Take a sheet and write everything you wish to release: fears, grudges, habits.", "Read each line saying: 'I release you with love and gratitude.'", "Burn the sheet safely in a heat-resistant bowl.", "Watch the ashes and feel the relief of letting go."]
    }
  },
  {
    id: "healing",
    title: { fr: "Guérison Intérieure", en: "Inner Healing" },
    desc: { fr: "Envoyer de l'amour à tes blessures passées.", en: "Send love to your past wounds." },
    steps: {
      fr: ["Assieds-toi confortablement et pose les deux mains sur ton cœur.", "Ferme les yeux et pense à une blessure passée qui demande encore à guérir.", "Visualise ton toi plus jeune dans cette douleur, et approche-toi de lui avec tendresse.", "Dis-lui intérieurement : 'Je te vois. Tu as fait de ton mieux. Je t'aime et je prends soin de toi.'", "Reste dans cette chaleur quelques minutes, puis prends une grande inspiration et ouvre les yeux doucement."],
      en: ["Sit comfortably and place both hands over your heart.", "Close your eyes and think of a past wound that still needs healing.", "Visualize your younger self in that pain, and approach with tenderness.", "Say inwardly: 'I see you. You did your best. I love you and I take care of you.'", "Stay in this warmth for a few minutes, then take a deep breath and gently open your eyes."]
    }
  },
  {
    id: "morning",
    title: { fr: "Rituel du Matin Sacré", en: "Sacred Morning Ritual" },
    desc: { fr: "Démarrer chaque journée avec intention et clarté.", en: "Start each day with intention and clarity." },
    steps: {
      fr: ["Avant de regarder ton téléphone, prends 3 grandes inspirations profondes.", "Pose la main sur ton cœur et demande-toi : 'Quelle est mon intention pour aujourd'hui ?'", "Dis à voix haute une affirmation positive : 'Je suis capable, aligné(e) et guidé(e).'", "Bois un verre d'eau en conscience, en imaginant qu'elle remplit ton corps de lumière.", "Souris pendant 10 secondes. Ton cerveau y croit."],
      en: ["Before looking at your phone, take 3 deep breaths.", "Place your hand on your heart and ask: 'What is my intention for today?'", "Say aloud: 'I am capable, aligned, and guided.'", "Drink a glass of water mindfully, imagining it filling your body with light.", "Smile for 10 seconds. Your brain believes it."]
    }
  },
  {
    id: "money",
    title: { fr: "Attirer l'Argent", en: "Attracting Money" },
    desc: { fr: "Ouvrir le canal de la prospérité financière.", en: "Open the channel of financial prosperity." },
    steps: {
      fr: ["Prends un billet ou une pièce de monnaie et tiens-le dans ta main droite.", "Ferme les yeux et dis : 'L'argent circule librement vers moi. Je suis un aimant pour la prospérité.'", "Visualise ton compte bancaire avec le chiffre que tu désires. Ressens la sécurité et la joie que cela t'apporte.", "Écris sur un papier : 'Je reçois de l'argent de sources attendues et inattendues.'", "Place le billet sous une bougie verte allumée et laisse-la brûler 10 minutes en conscience.", "Remercie l'univers pour l'abondance déjà présente dans ta vie."],
      en: ["Take a banknote or coin and hold it in your right hand.", "Close your eyes and say: 'Money flows freely to me. I am a magnet for prosperity.'", "Visualize your bank account with the figure you desire. Feel the security and joy it brings.", "Write on paper: 'I receive money from expected and unexpected sources.'", "Place the note under a lit green candle and let it burn 10 minutes consciously.", "Thank the universe for the abundance already present in your life."]
    }
  },
  {
    id: "love",
    title: { fr: "Attirer l'Amour", en: "Attracting Love" },
    desc: { fr: "Ouvrir son cœur et attirer l'âme sœur.", en: "Open your heart and attract your soulmate." },
    steps: {
      fr: ["Allume une bougie rose ou rouge et place des pétales de rose autour d'elle.", "Ferme les yeux, pose les mains sur ton cœur et dis : 'Mon cœur est ouvert. Je suis prêt(e) à aimer et être aimé(e).'", "Écris sur un papier les qualités de la personne que tu souhaites attirer — pas son apparence, mais ses valeurs.", "Lis la liste à voix haute en ressentant déjà la présence de cet amour dans ta vie.", "Plie le papier, glisse-le sous ta bougie rose et laisse-la brûler en sécurité.", "Répète chaque soir pendant 7 jours : 'L'amour vient à moi naturellement et facilement.'"],
      en: ["Light a pink or red candle and place rose petals around it.", "Close your eyes, place your hands on your heart and say: 'My heart is open. I am ready to love and be loved.'", "Write on paper the qualities of the person you wish to attract — not appearance, but values.", "Read the list aloud feeling the presence of this love already in your life.", "Fold the paper, slip it under your pink candle and let it burn safely.", "Repeat each evening for 7 days: 'Love comes to me naturally and easily.'"]
    }
  },
  {
    id: "confidence",
    title: { fr: "Confiance en Soi", en: "Self-Confidence" },
    desc: { fr: "Ancrer la confiance et affronter les défis.", en: "Anchor confidence and face challenges." },
    steps: {
      fr: ["Tiens-toi debout, les pieds écartés, les mains sur les hanches — posture de puissance.", "Regarde-toi dans un miroir droit dans les yeux pendant 30 secondes.", "Dis à voix haute 3 fois : 'Je suis fort(e), capable et digne de réussir.'", "Pense à une victoire passée — même petite — et ressens la fierté qu'elle t'a apportée.", "Porte cette fierté comme une armure tout au long de ta journée."],
      en: ["Stand tall, feet apart, hands on hips — power pose.", "Look at yourself in a mirror straight in the eyes for 30 seconds.", "Say aloud 3 times: 'I am strong, capable and worthy of success.'", "Think of a past victory — even small — and feel the pride it brought you.", "Carry this pride as armor throughout your day."]
    }
  },
  {
    id: "forgiveness",
    title: { fr: "Rituel du Pardon", en: "Forgiveness Ritual" },
    desc: { fr: "Se libérer des rancœurs et retrouver la paix.", en: "Free yourself from grudges and find peace." },
    steps: {
      fr: ["Assieds-toi en silence et pense à la personne ou situation que tu souhaites pardonner.", "Écris tout ce que tu ressens — la colère, la douleur, la déception — sans filtre.", "Lis ce que tu as écrit, puis dis : 'Je te libère. Je me libère. Je choisis la paix.'", "Brûle le papier en sécurité. Regarde la fumée emporter ces émotions loin de toi.", "Pose la main sur ton cœur et prends 3 grandes respirations de gratitude."],
      en: ["Sit in silence and think of the person or situation you wish to forgive.", "Write everything you feel — anger, pain, disappointment — without filter.", "Read what you wrote, then say: 'I release you. I release myself. I choose peace.'", "Burn the paper safely. Watch the smoke carry these emotions away from you.", "Place your hand on your heart and take 3 deep breaths of gratitude."]
    }
  },
  {
    id: "chakra",
    title: { fr: "Équilibre des Chakras", en: "Chakra Balancing" },
    desc: { fr: "Harmoniser les centres énergétiques du corps.", en: "Harmonize the body's energy centers." },
    steps: {
      fr: ["Allonge-toi confortablement et ferme les yeux.", "Commence par le chakra racine (base de la colonne) : visualise une lumière rouge chaude et stable.", "Monte vers le chakra sacré (bas ventre) : lumière orange créative et fluide.", "Chakra solaire (plexus) : lumière jaune dorée de confiance et de puissance.", "Chakra cœur : lumière verte d'amour et de guérison.", "Chakra gorge : lumière bleue de vérité et d'expression.", "Troisième œil et couronne : lumière indigo puis violette de sagesse et connexion divine.", "Visualise tous les chakras illuminés ensemble, formant une colonne de lumière."],
      en: ["Lie down comfortably and close your eyes.", "Start with the root chakra (base of spine): visualize a warm, stable red light.", "Move to the sacral chakra (lower abdomen): creative, fluid orange light.", "Solar plexus chakra: golden yellow light of confidence and power.", "Heart chakra: green light of love and healing.", "Throat chakra: blue light of truth and expression.", "Third eye and crown: indigo then violet light of wisdom and divine connection.", "Visualize all chakras illuminated together, forming a column of light."]
    }
  },
];