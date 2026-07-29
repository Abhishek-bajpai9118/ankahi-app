// Optional: secure server-side AI proxy for Netlify deployments.
// 1. Deploy this project to Netlify.
// 2. In Netlify dashboard → Site settings → Environment variables,
//    add ANTHROPIC_API_KEY = your real key (never commit it to git).
// 3. In js/ai-generator.js, swap generateStoryWithAI() to fetch
//    "/.netlify/functions/generate-story" instead of calling
//    Anthropic directly, and remove the client-side key prompt.
// This keeps your API key on the server, not in the browser.

exports.handler = async function (event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not allowed" };
  }
  try {
    const { topic, mood, lang } = JSON.parse(event.body || "{}");
    const langInstruction = lang === "hi" ? "Hindi (Devanagari script)" : "English";
    const prompt = `Write a short, emotionally resonant short story (250-350 words) in ${langInstruction}.
Theme/topic: ${topic || "an untold feeling someone has kept hidden"}
Mood: ${mood || "bittersweet, reflective"}
Do not include a title line, just the story text.`;

    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 900,
        messages: [{ role: "user", content: prompt }]
      })
    });

    const data = await res.json();
    const text = (data.content || [])
      .filter(b => b.type === "text")
      .map(b => b.text)
      .join("\n")
      .trim();

    return { statusCode: 200, body: JSON.stringify({ text }) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
