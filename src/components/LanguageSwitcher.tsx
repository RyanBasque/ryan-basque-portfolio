"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "pt" : "en")}
      className="flex items-center bg-zinc-900 rounded-full p-1 border border-zinc-800 cursor-pointer hover:border-zinc-700 transition-colors"
    >
      <div
        className={`relative px-3 py-1 text-xs font-medium rounded-full transition-colors ${
          language === "en" ? "text-black" : "text-gray-400"
        }`}
      >
        {language === "en" && (
          <motion.div
            layoutId="active-lang"
            className="absolute inset-0 bg-white rounded-full"
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        )}
        <span className="relative z-10">EN</span>
      </div>
      <div
        className={`relative px-3 py-1 text-xs font-medium rounded-full transition-colors ${
          language === "pt" ? "text-black" : "text-gray-400"
        }`}
      >
        {language === "pt" && (
          <motion.div
            layoutId="active-lang"
            className="absolute inset-0 bg-white rounded-full"
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        )}
        <span className="relative z-10">PT</span>
      </div>
    </button>
  );
}
