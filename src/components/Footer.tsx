"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="w-full py-6 text-center text-gray-500 text-sm border-t border-zinc-900">
      <p>
        {t.footer.madeWith} <span className="text-red-500">❤️</span> {t.footer.by}
      </p>
    </footer>
  );
}
