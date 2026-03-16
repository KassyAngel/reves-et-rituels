export const dreamKeywords = {
  fr: [
    {
      keywords: ["eau", "mer", "océan", "rivière", "pluie", "nager"],
      interpretation: "L'eau symbolise tes émotions profondes. Une eau calme indique la paix intérieure, tandis qu'une eau agitée suggère des émotions tumultueuses ou une purification nécessaire.",
      icon: "🌊"
    },
    {
      keywords: ["voler", "oiseau", "ciel", "ailes", "air"],
      interpretation: "Voler représente un désir de liberté, une libération d'un fardeau, ou le sentiment de dominer une situation dans ta vie éveillée.",
      icon: "🕊️"
    },
    {
      keywords: ["tomber", "chute", "vide", "précipice", "glisser"],
      interpretation: "Tomber reflète souvent une perte de contrôle, des insécurités ou des angoisses face à une situation actuelle. C'est un appel à lâcher prise en douceur.",
      icon: "🍂"
    },
    {
      keywords: ["serpent", "vipère", "morsure", "reptile"],
      interpretation: "Le serpent est un puissant symbole de transformation, de guérison et de renouveau. Il t'invite à muer, à laisser ton ancien toi derrière.",
      icon: "🐍"
    },
    {
      keywords: ["maison", "pièce", "chambre", "porte", "fenêtre", "bâtiment"],
      interpretation: "La maison te représente. Découvrir de nouvelles pièces signifie la découverte de potentiels cachés en toi. Une maison en ruine suggère un besoin de soins personnels.",
      icon: "🗝️"
    },
    {
      keywords: ["mort", "mourir", "cimetière", "fantôme"],
      interpretation: "La mort en rêve n'est pas littérale. Elle symbolise la fin d'un cycle, un grand changement ou la nécessité de laisser le passé derrière soi.",
      icon: "🌙"
    },
    {
      keywords: ["feu", "incendie", "brûler", "flamme"],
      interpretation: "Le feu incarne la passion, la colère ou une transformation purificatrice fulgurante. Il révèle une énergie intense qui demande à être canalisée.",
      icon: "🔥"
    },
    {
      keywords: ["poursuite", "fuir", "courir", "monstre", "chassé"],
      interpretation: "Être poursuivi indique que tu fuis une responsabilité, une peur ou une émotion dans la réalité. Fais face à ce qui t'effraie.",
      icon: "🏃"
    },
    {
      keywords: ["dent", "dents", "perdre", "tomber"],
      interpretation: "Perdre ses dents évoque une perte de pouvoir personnel, une peur de vieillir ou une difficulté à s'exprimer et à s'affirmer.",
      icon: "🦷"
    },
    {
      keywords: ["bébé", "enfant", "naissance", "grossesse", "enceinte"],
      interpretation: "Un bébé symbolise un nouveau départ, un projet naissant, une vulnérabilité ou l'éveil de ton enfant intérieur.",
      icon: "🌱"
    }
  ],
  en: [
    {
      keywords: ["water", "sea", "ocean", "river", "rain", "swim", "swimming"],
      interpretation: "Water symbolizes your deep emotions. Calm water indicates inner peace, while turbulent water suggests chaotic emotions or a necessary purification.",
      icon: "🌊"
    },
    {
      keywords: ["fly", "flying", "bird", "sky", "wings", "air"],
      interpretation: "Flying represents a desire for freedom, release from a burden, or the feeling of being on top of a situation in your waking life.",
      icon: "🕊️"
    },
    {
      keywords: ["fall", "falling", "void", "cliff", "slip"],
      interpretation: "Falling often reflects a loss of control, insecurities, or anxieties about a current situation. It's a call to let go gently.",
      icon: "🍂"
    },
    {
      keywords: ["snake", "viper", "bite", "reptile"],
      interpretation: "The snake is a powerful symbol of transformation, healing, and renewal. It invites you to shed your skin and leave your old self behind.",
      icon: "🐍"
    },
    {
      keywords: ["house", "room", "bedroom", "door", "window", "building"],
      interpretation: "The house represents you. Discovering new rooms means discovering hidden potentials within yourself. A ruined house suggests a need for self-care.",
      icon: "🗝️"
    },
    {
      keywords: ["death", "die", "dying", "cemetery", "ghost"],
      interpretation: "Death in a dream is not literal. It symbolizes the end of a cycle, a major change, or the need to leave the past behind.",
      icon: "🌙"
    },
    {
      keywords: ["fire", "burning", "flame"],
      interpretation: "Fire embodies passion, anger, or a rapid purifying transformation. It reveals an intense energy that needs to be channeled.",
      icon: "🔥"
    },
    {
      keywords: ["chase", "chased", "run", "running", "monster", "flee"],
      interpretation: "Being chased indicates you are running away from a responsibility, a fear, or an emotion in reality. Face what frightens you.",
      icon: "🏃"
    },
    {
      keywords: ["tooth", "teeth", "lose", "falling"],
      interpretation: "Losing teeth evokes a loss of personal power, a fear of aging, or difficulty expressing and asserting yourself.",
      icon: "🦷"
    },
    {
      keywords: ["baby", "child", "birth", "pregnancy", "pregnant"],
      interpretation: "A baby symbolizes a new beginning, a budding project, vulnerability, or the awakening of your inner child.",
      icon: "🌱"
    }
  ]
};

export const interpretDream = (text: string, lang: 'fr' | 'en') => {
  const lowerText = text.toLowerCase();
  const keywords = dreamKeywords[lang];
  
  for (const category of keywords) {
    if (category.keywords.some(kw => lowerText.includes(kw))) {
      return category;
    }
  }
  return null;
};
