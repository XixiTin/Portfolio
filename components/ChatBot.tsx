
import React, { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'assistant';
  text: string;
}

const ChatBot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      text: "Hi! I'm Xixi's portfolio assistant. Ask me about her work, projects, or background—in English or 中文.",
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const apiKey = (import.meta.env.VITE_GEMINI_API_KEY as string | undefined)?.trim();

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  useEffect(() => { scrollToBottom(); }, [messages]);

  const handleSend = async () => {
    const text = input.trim();
    if (!text || loading) return;

    if (!apiKey) {
      setMessages((m) => [
        ...m,
        {
          role: 'assistant',
          text: 'The AI assistant is not configured. Add VITE_GEMINI_API_KEY to your .env.local file to enable it. For deployment, set GEMINI_API_KEY as a GitHub secret.',
        },
      ]);
      setInput('');
      return;
    }

    setInput('');
    setMessages((m) => [...m, { role: 'user', text }]);
    setLoading(true);

    try {
      const { sendToGemini } = await import('../services/gemini');
      const history = [...messages, { role: 'user' as const, text }].map((m) => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        text: m.text,
      }));

      const reply = await sendToGemini(history, apiKey!.trim());
      setMessages((m) => [...m, { role: 'assistant', text: reply }]);
    } catch (err) {
      let msg = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      if (msg.toLowerCase().includes('api key not valid')) {
        msg += ' 请确认：1) 从 https://aistudio.google.com/apikey 获取 Key；2) .env.local 格式为 VITE_GEMINI_API_KEY=你的key（无空格、无引号）；3) 重启 dev 服务器。';
      }
      setMessages((m) => [...m, { role: 'assistant', text: `Error: ${msg}` }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => {
          setOpen((o) => !o);
          if (!open) setTimeout(() => inputRef.current?.focus(), 300);
        }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-sage-500 text-white shadow-xl hover:bg-sage-600 hover:scale-110 transition-all duration-300 flex items-center justify-center"
        aria-label={open ? 'Close chat' : 'Open chat'}
      >
        {open ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Chat panel */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-[min(380px,calc(100vw-48px))] bg-white rounded-3xl shadow-2xl border border-stone-100 overflow-hidden transition-all duration-300 ${
          open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-5 py-4 bg-sage-600 text-white">
          <h3 className="font-serif text-lg font-medium">Portfolio Assistant</h3>
          <p className="text-sage-100 text-xs mt-0.5">Ask about Xixi&apos;s work & projects</p>
        </div>

        <div className="h-64 overflow-y-auto p-4 space-y-4 bg-warm-50">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                  m.role === 'user'
                    ? 'bg-sage-500 text-white'
                    : 'bg-white border border-stone-100 text-stone-700 shadow-sm'
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-white border border-stone-100 rounded-2xl px-4 py-2.5 text-stone-400 text-sm">
                <span className="inline-block animate-pulse">Thinking...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 border-t border-stone-100 bg-white">
          <div className="flex gap-2">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about Xixi's work..."
              rows={1}
              className="flex-1 resize-none rounded-2xl border border-stone-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sage-300 focus:border-sage-400"
              disabled={loading}
            />
            <button
              onClick={handleSend}
              disabled={loading || !input.trim()}
              className="px-4 py-2.5 bg-sage-500 text-white rounded-2xl text-sm font-medium hover:bg-sage-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
