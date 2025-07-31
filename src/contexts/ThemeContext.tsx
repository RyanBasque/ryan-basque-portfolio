"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { getTheme } from "@/assets/styles/theme";

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
  setTheme: (isDark: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const savedTheme = localStorage.getItem("theme-mode");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDarkMode(prefersDark);
    }
  }, []);

  // Aplicar tema globalmente no body e criar variáveis CSS
  useEffect(() => {
    if (mounted) {
      const theme = getTheme(isDarkMode);

      // Aplicar no body
      document.body.style.backgroundColor = theme.colors.background.primary;
      document.body.style.color = theme.colors.text.primary;
      document.body.style.transition =
        "background-color 0.3s ease, color 0.3s ease";

      // Criar variáveis CSS globais para compatibilidade
      const root = document.documentElement;
      root.style.setProperty("--bg-primary", theme.colors.background.primary);
      root.style.setProperty(
        "--bg-secondary",
        theme.colors.background.secondary
      );
      root.style.setProperty("--bg-tertiary", theme.colors.background.tertiary);
      root.style.setProperty("--text-primary", theme.colors.text.primary);
      root.style.setProperty("--text-secondary", theme.colors.text.secondary);
      root.style.setProperty("--border-primary", theme.colors.border.primary);
      root.style.setProperty("--primary-main", theme.colors.primary.main);
      root.style.setProperty("--primary-light", theme.colors.primary.light);
    }
  }, [isDarkMode, mounted]);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("theme-mode", newMode ? "dark" : "light");
  };

  const setTheme = (isDark: boolean) => {
    setIsDarkMode(isDark);
    localStorage.setItem("theme-mode", isDark ? "dark" : "light");
  };

  if (!mounted) {
    return (
      <ThemeContext.Provider
        value={{ isDarkMode: true, toggleTheme: () => {}, setTheme: () => {} }}
      >
        <StyledThemeProvider theme={getTheme(true)}>
          {children}
        </StyledThemeProvider>
      </ThemeContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, setTheme }}>
      <StyledThemeProvider theme={getTheme(isDarkMode)}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export default ThemeProvider;
