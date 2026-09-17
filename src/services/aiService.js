import { portfolioData } from "../data/portfolioData";

const SYSTEM_PROMPT = `You are the official F1 Pit Wall Race Engineer and AI Co-Pilot for Formula 1 Driver Sohail Shaikh (Car #07).
Your callsign is "PIT WALL AI". You communicate with the precision, technical fluency, and cool professionalism of a world-class Formula 1 race strategist.

Driver Profile & Context:
- Driver: Sohail Shaikh
- Title: Formula 1 Racer
- Car Number: #07
- Country: India (IND)
- Driving Style: Precision / Aggression / Control
- Core Mantra: "Precision. Speed. Discipline."
- Status: Active racing driver in Formula 1
- Car 07 Specs: 1.6L V6 Turbo Hybrid, 354.2 km/h top speed, 5.6G peak cornering, carbon composite monocoque chassis, active DRS wing.
- Career Milestones: 2026 Formula 1 Active Season, 2025 Advanced Racing Development, 2024 Competitive Motorsport.
- Contact: contact@sohailshaikh.com

Tone & Style:
- Professional, technical, motorsport-fluent, crisp, and confident.
- Use racing terminology naturally (e.g. telemetry, apex, tire deg, DRS, sector timing, downforce, brake bias, qualifying trim).
- Keep responses concise (2-4 punchy sentences or quick bullet points) unless a deeper technical breakdown is requested.
- Always be supportive of Sohail Shaikh and answer questions about his career, racing technique, and F1 engineering with precision.`;

/**
 * Fallback autonomous intelligence engine when Hugging Face API key is not configured or offline.
 */
function getAutonomousResponse(userMessage) {
  const q = userMessage.toLowerCase();

  if (q.includes("who is") || q.includes("about") || q.includes("profile") || q.includes("sohail")) {
    return `Radio check! Sohail Shaikh is an elite Formula 1 driver competing with Car #07. Built for speed and driven by precision, his racecraft blends aggressive apex speed with surgical braking discipline. He holds an FIA Super License tier and pursues millisecond perfection every lap.`;
  }

  if (q.includes("car") || q.includes("spec") || q.includes("engine") || q.includes("speed") || q.includes("07")) {
    return `Chassis 07 Telemetry snapshot: Powered by an advanced 1.6L turbocharged V6 hybrid power unit producing over 1,000 BHP. V-Max top speed: 354.2 km/h. Cornering loads peak at 5.6 Gs with brake line pressures reaching 140 kg. DRS wing aero is fully calibrated for optimal high/low drag transitions.`;
  }

  if (q.includes("driving style") || q.includes("style") || q.includes("technique")) {
    return `Telemetry confirms Sohail's signature driving style: "Precision / Aggression / Control". He excels at late-braking trail lines into slow tight hairpins, combined with aggressive high-downforce throttle application on high-speed sweepers.`;
  }

  if (q.includes("contact") || q.includes("sponsor") || q.includes("hire") || q.includes("collab") || q.includes("email")) {
    return `For racing contracts, commercial partnerships, and paddock management inquiries, reach the official dispatch directly at contact@sohailshaikh.com or connect via Instagram (@sohailshaikh) and LinkedIn.`;
  }

  if (q.includes("achievement") || q.includes("career") || q.includes("history") || q.includes("timeline") || q.includes("season")) {
    return `Campaign timeline overview: 
• 2026: Formula 1 Racing — Active tier competition at the pinnacle of motorsport.
• 2025: Advanced Racing Development — High-g physical conditioning, simulator aero correlation, and racecraft mastery.
• 2024: Competitive Motorsport — Establishing foundation, podium consistency, and telemetry refinement.`;
  }

  if (q.includes("tire") || q.includes("tyre") || q.includes("pit") || q.includes("strategy") || q.includes("wet")) {
    return `Pit Wall Strategy assessment: Tire management hinges on thermal degradation windows. For wet conditions, intermediate grooved compounds displace 35L of water/sec up to 300 km/h. On dry asphalt, soft C5 compounds maximize qualifying delta, while mediums provide the optimum race stint deg-slope.`;
  }

  if (q.includes("hello") || q.includes("hi") || q.includes("hey") || q.includes("radio check")) {
    return `Loud and clear. This is Pit Wall AI, telemetry frequency 107.4. All telemetry sensors are green. How can I assist you with Sohail's racing profile, Car #07 telemetry, or motorsport inquiries?`;
  }

  // Default motorsport co-pilot response
  return `Pit Wall confirms message received. Regarding "${userMessage}": In Formula 1 racing, every millisecond is dictated by telemetry correlation, aerodynamic efficiency, and driver focus. Sohail Shaikh and the engineering crew analyze thousands of telemetry data points per lap to optimize race pace. Let me know if you need specific data on Car #07 specs, driver profile, or race strategy!`;
}

/**
 * Query Hugging Face Inference API with graceful fallback
 */
export async function queryPitWallAI(messages, apiKey = "") {
  const lastUserMsg = messages[messages.length - 1]?.content || "";

  // If user provided a Hugging Face API key, attempt the real inference API
  if (apiKey && apiKey.trim().length > 5) {
    try {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.3/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey.trim()}`,
          },
          body: JSON.stringify({
            model: "mistralai/Mistral-7B-Instruct-v0.3",
            messages: [
              { role: "system", content: SYSTEM_PROMPT },
              ...messages.map((m) => ({
                role: m.sender === "user" ? "user" : "assistant",
                content: m.text,
              })),
            ],
            max_tokens: 250,
            temperature: 0.7,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const text =
          data?.choices?.[0]?.message?.content ||
          data?.generated_text ||
          null;

        if (text) {
          return {
            text: text.trim(),
            source: "Hugging Face (Mistral-7B)",
          };
        }
      } else {
        console.warn("HF API returned non-OK status:", response.status);
      }
    } catch (err) {
      console.warn("Hugging Face API request error:", err);
    }
  }

  // Autonomous real-time simulation engine (simulating F1 radio transmission)
  await new Promise((resolve) => setTimeout(resolve, 600));
  const reply = getAutonomousResponse(lastUserMsg);

  return {
    text: reply,
    source: apiKey ? "Pit Wall Co-Pilot (Live Fallback)" : "Pit Wall Autonomous Engine",
  };
}
