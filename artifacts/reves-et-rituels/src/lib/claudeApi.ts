// 🔑 CLEF API — Remplace "" par ta clé Anthropic quand tu es prêt
// Format : "sk-ant-api03-..."
const ANTHROPIC_API_KEY = "";

export const isAIEnabled = () => ANTHROPIC_API_KEY.trim() !== "";

export async function interpretDreamWithAI(
  dreamText: string,
  lang: 'fr' | 'en'
): Promise<{ icon: string; interpretation: string } | null> {
  if (!isAIEnabled()) return null;

  const systemPrompt = lang === 'fr'
    ? `Tu es une guide spirituelle bienveillante spécialisée dans l'interprétation des rêves. 
Tu combines la symbolique jungienne, la spiritualité intuitive et la sagesse ancienne.
Réponds toujours avec chaleur, poésie et profondeur.
Format de réponse OBLIGATOIRE — réponds uniquement avec ce JSON :
{"icon": "un seul emoji qui résume le rêve", "interpretation": "ton interprétation en 3-4 phrases maximum, chaleureuse et poétique"}`
    : `You are a benevolent spiritual guide specialized in dream interpretation.
You combine Jungian symbolism, intuitive spirituality, and ancient wisdom.
Always respond with warmth, poetry, and depth.
MANDATORY response format — respond only with this JSON:
{"icon": "a single emoji summarizing the dream", "interpretation": "your interpretation in 3-4 sentences maximum, warm and poetic"}`;

  const userPrompt = lang === 'fr'
    ? `Voici le rêve à interpréter : "${dreamText}"`
    : `Here is the dream to interpret: "${dreamText}"`;

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
        "anthropic-dangerous-direct-browser-access": "true"
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 300,
        system: systemPrompt,
        messages: [{ role: "user", content: userPrompt }]
      })
    });

    if (!response.ok) return null;

    const data = await response.json();
    const text = data.content?.[0]?.text || "";
    const clean = text.replace(/```json|```/g, "").trim();
    const parsed = JSON.parse(clean);

    if (parsed.icon && parsed.interpretation) {
      return parsed;
    }
    return null;
  } catch {
    return null;
  }
}