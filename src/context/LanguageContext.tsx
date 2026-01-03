"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import translationsData from "@/data/translations.json";

type Language = "en" | "pt";

interface Translations {
  [key: string]: {
    [key: string]: string | string[] | any;
  };
}

const translations: Record<Language, Translations> = translationsData as unknown as Record<Language, Translations>;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
