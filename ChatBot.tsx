
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/gemini';
import { ChatMessage } from '../types';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phone = "07415120877";
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hello! I'm your MSSG-Gas Assistant for Fareham. How can I help with your boiler today?", timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input;
    setInput('');
    const newMessages: ChatMessage[] = [
      ...messages,
      { role: 'user', text: userText, timestamp: new Date() }
    ];
    setMessages(newMessages);
    setIsLoading(true);

    const history = newMessages.slice(-6).map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const aiResponse = await getGeminiResponse(history);
    
    setMessages(prev => [
      ...prev,
      { role: 'model', text: aiResponse, timestamp: new Date() }
    ]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-orange-600 text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95"
      >
        {isOpen ? (
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[90vw] md:w-96 bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-column flex-col h-[500px] animate-in slide-in-from-bottom-4 duration-300">
          <div className="p-4 bg-orange-600 text-white">
            <h3 className="font-bold">MSSG AI Support</h3>
            <p className="text-xs opacity-80">Serving Fareham & Hampshire</p>
          </div>

          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50"
          >
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-orange-600 text-white rounded-tr-none' 
                    : 'bg-white border border-slate-200 text-slate-700 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none flex gap-1">
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-75"></div>
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t border-slate-100 bg-white">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about your boiler..."
                className="w-full pl-4 pr-12 py-3 bg-slate-100 border-none rounded-xl focus:ring-2 focus:ring-orange-500 transition-all text-sm"
              />
              <button 
                type="submit"
                disabled={isLoading}
                className="absolute right-2 top-2 w-8 h-8 rounded-lg bg-orange-600 text-white flex items-center justify-center hover:bg-orange-700 transition-colors disabled:opacity-50"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </button>
            </div>
            <p className="text-[10px] text-center text-slate-400 mt-2">
              Need Matt urgently? Call/Text <a href={`tel:${phone}`} className="font-bold text-orange-600 underline">{phone}</a>
            </p>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
