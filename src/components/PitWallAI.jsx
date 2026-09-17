import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { queryPitWallAI } from "../services/aiService";
import {
  HiOutlineSparkles,
  HiX,
  HiOutlineKey,
  HiOutlineTrash,
  HiOutlinePaperAirplane,
  HiCheck,
} from "react-icons/hi";
import { IoRadioOutline } from "react-icons/io5";

export default function PitWallAI({ isOpen, setIsOpen }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "ai",
      text: "Radio check. This is Pit Wall AI, telemetry frequency 107.4. All telemetry feeds online. How can I assist you with Sohail Shaikh's racing profile, Car #07 specs, or motorsport data?",
      time: "RADIO // 00:01",
      source: "Pit Wall Autonomous Engine",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showKeyModal, setShowKeyModal] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [tempApiKey, setTempApiKey] = useState("");
  const [keySaved, setKeySaved] = useState(false);
  const messagesEndRef = useRef(null);

  // Load API key from localStorage or env on mount
  useEffect(() => {
    const savedKey =
      localStorage.getItem("hf_api_token") ||
      import.meta.env.VITE_HF_API_TOKEN ||
      "";
    if (savedKey) {
      setApiKey(savedKey);
      setTempApiKey(savedKey);
    }
  }, []);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSaveApiKey = (e) => {
    e.preventDefault();
    localStorage.setItem("hf_api_token", tempApiKey.trim());
    setApiKey(tempApiKey.trim());
    setKeySaved(true);
    setTimeout(() => {
      setKeySaved(false);
      setShowKeyModal(false);
    }, 1200);
  };

  const handleSendMessage = async (customText = null) => {
    const textToSend = customText || inputMessage;
    if (!textToSend.trim() || loading) return;

    const userMsg = {
      id: Date.now(),
      sender: "user",
      text: textToSend.trim(),
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" }),
    };

    const newHistory = [...messages, userMsg];
    setMessages(newHistory);
    if (!customText) setInputMessage("");
    setLoading(true);

    try {
      const response = await queryPitWallAI(
        newHistory.map((m) => ({ sender: m.sender, content: m.text, text: m.text })),
        apiKey
      );

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "ai",
          text: response.text,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" }),
          source: response.source,
        },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "ai",
          text: "Telemetry packet dropped. Pit Wall radio line static. Please retry your transmission.",
          time: "RADIO // ERR",
          source: "System Alert",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: Date.now(),
        sender: "ai",
        text: "Telemetry memory reset. Pit Wall AI standing by on frequency 107.4. Ready for telemetry query.",
        time: "RADIO // 00:00",
        source: "Pit Wall Autonomous Engine",
      },
    ]);
  };

  const quickPrompts = [
    "Who is Sohail Shaikh?",
    "Car #07 Specs & Telemetry",
    "Driving Style Breakdown",
    "Tire & Pit Strategy",
  ];

  return (
    <>
      {/* Floating Pit Wall AI Launcher Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative group flex items-center gap-3 px-4 py-3 bg-[#0D0D0D] border border-primary/50 text-white rounded-full shadow-[0_0_30px_rgba(225,6,0,0.35)] hover:border-primary transition-all duration-300"
          aria-label="Open Pit Wall AI Chat"
        >
          {/* Pulsing Red Dot */}
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-80" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
          </span>

          <IoRadioOutline className="text-primary text-xl group-hover:rotate-12 transition-transform" />

          <div className="flex flex-col text-left">
            <span className="font-heading font-bold text-xs uppercase tracking-wider text-white">
              PIT WALL AI
            </span>
            <span className="font-mono text-[9px] text-[#8A8A8A] tracking-tight">
              RADIO // 107.4 MHz
            </span>
          </div>
        </motion.button>
      </div>

      {/* Main Pit Wall AI Drawer / Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-20 right-4 sm:right-6 w-[calc(100vw-32px)] sm:w-[440px] h-[580px] max-h-[82vh] z-50 bg-[#0A0A0A] border border-[#242424] rounded-lg shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl"
          >
            {/* Top Motorsport Telemetry Header */}
            <div className="bg-[#121212] border-b border-[#242424] px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                <div>
                  <div className="font-heading font-bold text-xs uppercase tracking-wider text-white flex items-center gap-2">
                    <span>PIT WALL AI</span>
                    <span className="font-mono text-[9px] bg-primary/20 text-primary border border-primary/30 px-1.5 py-0.2 rounded">
                      F1 CO-PILOT
                    </span>
                  </div>
                  <div className="font-mono text-[9px] text-[#8A8A8A] flex items-center gap-2">
                    <span>FREQ: 107.4 MHz</span>
                    <span>•</span>
                    <span className="text-emerald-400">TELEMETRY 100Hz</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons: API Key, Clear, Close */}
              <div className="flex items-center gap-1.5 text-[#8A8A8A]">
                <button
                  onClick={() => setShowKeyModal(true)}
                  className={`p-1.5 hover:text-white rounded border border-transparent hover:border-[#242424] hover:bg-[#1A1A1A] transition-colors ${
                    apiKey ? "text-primary" : ""
                  }`}
                  title="Configure Hugging Face API Key"
                >
                  <HiOutlineKey size={16} />
                </button>
                <button
                  onClick={clearChat}
                  className="p-1.5 hover:text-white rounded border border-transparent hover:border-[#242424] hover:bg-[#1A1A1A] transition-colors"
                  title="Clear Chat History"
                >
                  <HiOutlineTrash size={16} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 hover:text-white rounded border border-transparent hover:border-[#242424] hover:bg-[#1A1A1A] transition-colors"
                  title="Close Console"
                >
                  <HiX size={18} />
                </button>
              </div>
            </div>

            {/* Quick Action Prompt Chips */}
            <div className="bg-[#0D0D0D] px-3 py-2 border-b border-[#242424]/60 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => handleSendMessage(prompt)}
                  disabled={loading}
                  className="whitespace-nowrap text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 bg-[#151515] hover:bg-primary/20 text-[#8A8A8A] hover:text-white border border-[#242424] hover:border-primary/40 rounded transition-all"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Message Stream */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 telemetry-grid">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.sender === "user" ? "items-end" : "items-start"
                  }`}
                >
                  {/* Meta tag */}
                  <div className="font-mono text-[9px] text-[#8A8A8A] mb-1 px-1 flex items-center gap-2">
                    <span className="uppercase font-semibold">
                      {msg.sender === "user" ? "DRIVER // RADIO" : "RACE ENGINEER"}
                    </span>
                    <span>{msg.time}</span>
                  </div>

                  {/* Message Bubble */}
                  <div
                    className={`max-w-[88%] rounded-sm p-3 text-xs leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-primary text-white font-medium"
                        : "bg-[#141414] border border-[#242424] text-white/90"
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.text}</p>
                    {msg.source && (
                      <div className="mt-2 pt-1.5 border-t border-white/10 font-mono text-[8px] text-[#8A8A8A] uppercase tracking-wider flex items-center justify-between">
                        <span>ENGINE: {msg.source}</span>
                        <span className="text-emerald-400">LATENCY: 22ms</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing / Radio Loading State */}
              {loading && (
                <div className="flex flex-col items-start">
                  <div className="font-mono text-[9px] text-primary mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                    <span>PIT WALL CALCULATING TELEMETRY DELTA...</span>
                  </div>
                  <div className="bg-[#141414] border border-primary/40 p-3 rounded-sm flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="bg-[#121212] border-t border-[#242424] p-3 flex items-center gap-2"
            >
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Radio transmission to Pit Wall AI..."
                className="flex-1 bg-[#070707] border border-[#242424] focus:border-primary text-white text-xs px-3 py-2.5 rounded-sm outline-none font-sans placeholder:text-[#555555] transition-colors"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={!inputMessage.trim() || loading}
                className="px-3.5 py-2.5 bg-primary hover:bg-primary-hover disabled:opacity-40 text-white rounded-sm text-sm transition-all flex items-center justify-center shadow-[0_0_12px_rgba(225,6,0,0.3)]"
                aria-label="Send Transmission"
              >
                <HiOutlinePaperAirplane className="rotate-90 text-sm" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hugging Face API Configuration Modal */}
      <AnimatePresence>
        {showKeyModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#0D0D0D] border border-[#242424] max-w-md w-full p-6 rounded-lg shadow-2xl relative"
            >
              <button
                onClick={() => setShowKeyModal(false)}
                className="absolute top-4 right-4 text-[#8A8A8A] hover:text-white"
              >
                <HiX size={20} />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded bg-[#151515] border border-[#242424] flex items-center justify-center text-primary text-lg">
                  <HiOutlineKey />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white uppercase text-base tracking-wide">
                    Hugging Face Inference Key
                  </h3>
                  <p className="font-mono text-[11px] text-[#8A8A8A]">
                    Optional: Connect your free Hugging Face API token
                  </p>
                </div>
              </div>

              <p className="text-xs text-[#8A8A8A] leading-relaxed mb-4">
                You can get a free token in 10 seconds from{" "}
                <a
                  href="https://huggingface.co/settings/tokens"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary underline hover:text-white"
                >
                  huggingface.co/settings/tokens
                </a>
                . When configured, Pit Wall queries Mistral-7B live. If left blank, the built-in autonomous F1 telemetry engine responds instantly!
              </p>

              <form onSubmit={handleSaveApiKey} className="space-y-4">
                <div>
                  <label className="block font-mono text-[10px] text-[#8A8A8A] uppercase tracking-wider mb-1">
                    API Token (hf_...)
                  </label>
                  <input
                    type="password"
                    value={tempApiKey}
                    onChange={(e) => setTempApiKey(e.target.value)}
                    placeholder="hf_xxxxxxxxxxxxxxxxxxxxxxxx"
                    className="w-full bg-[#050505] border border-[#242424] focus:border-primary text-white text-xs px-3 py-2.5 rounded outline-none font-mono"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setTempApiKey("");
                      setApiKey("");
                      localStorage.removeItem("hf_api_token");
                      setShowKeyModal(false);
                    }}
                    className="font-mono text-xs text-[#8A8A8A] hover:text-white underline"
                  >
                    Reset to Default
                  </button>

                  <button
                    type="submit"
                    className="px-5 py-2 bg-primary hover:bg-primary-hover text-white font-heading font-semibold text-xs uppercase tracking-wider rounded transition-all flex items-center gap-1.5"
                  >
                    {keySaved ? (
                      <>
                        <HiCheck />
                        <span>SAVED</span>
                      </>
                    ) : (
                      <span>SAVE KEY</span>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
