import React from "react";
import Image from "next/image";

import { useTheme } from "@/contexts/ThemeContext";

import * as S from "./styles";

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <S.ThemeToggleButton
      onClick={toggleTheme}
      title={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
      aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
    >
      {isDarkMode ? (
        <Image src="/lightmode.svg" alt="Sun Icon" width={24} height={24} />
      ) : (
        <Image src="/darkmode.svg" alt="Moon Icon" width={24} height={24} />
      )}
    </S.ThemeToggleButton>
  );
};

export default ThemeToggle;
