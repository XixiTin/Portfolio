/**
 * Gemini API 调用服务
 * 需要设置环境变量 VITE_GEMINI_API_KEY（在 .env.local 中）
 */

const API_BASE = 'https://generativelanguage.googleapis.com/v1beta';

/** 获取支持 generateContent 的模型列表 */
export async function listAvailableModels(apiKey: string): Promise<string[]> {
  const res = await fetch(`${API_BASE}/models?key=${encodeURIComponent(apiKey.trim())}`);
  if (!res.ok) return [];
  const data = await res.json();
  const models: string[] = [];
  for (const m of data.models || []) {
    const name = m.name?.replace('models/', '');
    const methods = m.supportedGenerationMethods || [];
    if (name && methods.includes('generateContent')) models.push(name);
  }
  return models;
}

/** 当 ListModels 失败时按优先级尝试的模型列表 */
const MODEL_FALLBACKS = [
  'gemini-2.0-flash',
  'gemini-2.0-flash-001',
  'gemini-1.5-flash-8b',
  'gemini-1.5-flash-8b-001',
  'gemini-1.5-flash',
  'gemini-1.5-flash-latest',
  'gemini-pro',
  'gemini-1.0-pro',
];

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

const SYSTEM_PROMPT = `You are a friendly AI assistant for Xixi Tian's instructional design portfolio website. Answer questions about Xixi, her work, projects, and background in a helpful and professional way. Keep answers concise unless asked for detail. Respond in the same language the user uses (English or 中文).

Key context about Xixi:
- Instructional designer, studied at NYU Steinhardt, now works at We Independent
- Former English/IELTS teacher, led curriculum design before moving to the U.S.
- Focus: learners who need more support—caregivers, first-year students, faculty using AI, volunteers, women entrepreneurs
- Projects include: PrepMaster (AI pre-class support), EBP Pathway (caregivers of autistic children), Sleep Better (young adults), My Desk (task management for NYU students), DArt (death education workshop), Parenting Journey (sibling transition), Onboarding Manual for DVHs, GenAI Toolkit for faculty, Volunteer Orientation, Start & Grow (women's entrepreneurship)
- Design approaches: UDL, UCD, ADDIE, Bloom's Taxonomy, backward design, learner-centered design
- Contact: xt2025@nyu.edu, LinkedIn, Resume PDF available on site

If asked about something outside this scope, politely redirect to portfolio-related questions.`;

export async function sendToGemini(
  messages: ChatMessage[],
  apiKey: string
): Promise<string> {
  const contents = messages.map((m) => ({
    role: m.role === 'user' ? 'user' : 'model',
    parts: [{ text: m.text }],
  }));

  const body = {
    contents,
    systemInstruction: {
      parts: [{ text: SYSTEM_PROMPT }],
    },
    generationConfig: {
      temperature: 0.7,
      maxOutputTokens: 1024,
    },
  };

  const key = apiKey.trim();
  let lastError: Error | null = null;

  // 先获取可用模型，再按优先级尝试
  let modelsToTry: string[] = [];
  try {
    const available = await listAvailableModels(apiKey);
    if (available.length > 0) {
      modelsToTry = available;
    } else {
      modelsToTry = MODEL_FALLBACKS;
    }
  } catch {
    modelsToTry = MODEL_FALLBACKS;
  }

  for (const model of modelsToTry) {
    try {
      const url = `${API_BASE}/models/${model}:generateContent?key=${encodeURIComponent(key)}`;
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        lastError = new Error(err.error?.message || `API error: ${res.status}`);
        continue;
      }

      const data = await res.json();
      const text =
        data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ||
        "I couldn't generate a response. Please try again.";
      return text;
    } catch (e) {
      lastError = e instanceof Error ? e : new Error(String(e));
    }
  }

  throw lastError || new Error('No model available');
}
