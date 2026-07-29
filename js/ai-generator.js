/* ============================================================
   AI STORY GENERATOR
   Uses a user-supplied Anthropic API key, stored ONLY in this
   browser's localStorage. Calls the API directly from the client
   using Anthropic's "direct browser access" header.

   ⚠️ SECURITY NOTE: any API key typed into this box is visible to
   anyone who opens devtools on this browser/device. This is fine
   for personal or demo use, but do NOT rely on it for a public
   production site with a key you care about. For production,
   replace callAI() below with a call to your own serverless
   function (see netlify/functions/generate-story.js) that keeps
   the key on the server.
   ============================================================ */

function getStoredApiKey() {
  return localStorage.getItem("ankahi-ai-key") || "";
}
function setStoredApiKey(key) {
  localStorage.setItem("ankahi-ai-key", key);
}

async function generateStoryWithAI(topic, mood, lang) {
  const apiKey = getStoredApiKey();
  if (!apiKey) {
    throw new Error("NO_KEY");
  }

  const langInstruction = lang === "hi"
    ? "Hindi (Devanagari script)"
    : "English";

  const prompt = `Write a short, emotionally resonant short story (250-350 words) in ${langInstruction}.
Theme/topic: ${topic || "an untold feeling someone has kept hidden"}
Mood: ${mood || "bittersweet, reflective"}
Do not include a title line, just the story text.`;

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
      "anthropic-dangerous-direct-browser-access": "true"
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-6",
      max_tokens: 900,
      messages: [{ role: "user", content: prompt }]
    })
  });

  if (!res.ok) {
    const errBody = await res.text();
    throw new Error("API_ERROR: " + errBody);
  }

  const data = await res.json();
  return (data.content || [])
    .filter(b => b.type === "text")
    .map(b => b.text)
    .join("\n")
    .trim();
}
