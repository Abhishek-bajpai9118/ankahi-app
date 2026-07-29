async function generateStoryWithAI(topic, mood, lang) {
  const apiKey = getStoredApiKey();
  if (!apiKey) {
    throw new Error("NO_KEY");
  }

  const langInstruction =
    lang === "hi" ? "Hindi (Devanagari script)" : "English";

  const prompt = `Write a short, emotionally resonant short story (250-350 words) in ${langInstruction}.
Theme/topic: ${topic || "an untold feeling someone has kept hidden"}
Mood: ${mood || "bittersweet, reflective"}
Do not include a title line, just the story text.`;

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: prompt
              }
            ]
          }
        ]
      })
    }
  );

  if (!res.ok) {
    const errBody = await res.text();
    throw new Error("API_ERROR: " + errBody);
  }

  const data = await res.json();

  return (
    data.candidates?.[0]?.content?.parts?.[0]?.text ||
    "No response from Gemini."
  );
}
