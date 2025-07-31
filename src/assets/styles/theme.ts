// Dark theme colors (current)
export const darkColors = {
  // Primary colors
  primary: {
    main: "#238be6",
    hover: "#1f7acc",
    light: "#58a6ff",
    dark: "#1366b3",
  },

  // Secondary colors
  secondary: {
    main: "#21262d",
    hover: "#30363d",
    light: "#484f58",
    dark: "#161b22",
  },

  // Background colors
  background: {
    primary: "#0d1117",
    primaryOpacity: "#0d11174D",
    secondary: "#161b22",
    tertiary: "#21262d",
    paper: "#30363d",
  },

  // Text colors
  text: {
    primary: "#f0f6fc",
    secondary: "#8b949e",
    disabled: "#484f58",
    inverse: "#24292f",
  },

  // Border colors
  border: {
    primary: "#30363d",
    secondary: "#21262d",
    focus: "#58a6ff",
  },

  // Status colors
  status: {
    success: "#238636",
    warning: "#d29922",
    error: "#da3633",
    info: "#58a6ff",
    orange: "#fd7e14",
    purple: "#8b5cf6",
  },

  // Social/External colors
  social: {
    github: {
      primary: "#24292e",
      secondary: "#1a1e22",
      border: "#6e7681",
    },
    google: {
      primary: "#4285f4",
      secondary: "#1a73e8",
    },
  },

  // Neutral colors
  neutral: {
    white: "#ffffff",
    black: "#000000",
    gray: {
      50: "#f6f8fa",
      100: "#eaeef2",
      200: "#d0d7de",
      300: "#afb8c1",
      400: "#8c959f",
      500: "#6e7781",
      600: "#57606a",
      700: "#424a53",
      800: "#32383f",
      900: "#24292f",
    },
  },
};

// Light theme colors (new white mode)
export const lightColors = {
  // Primary colors (mantém a identidade da marca)
  primary: {
    main: "#0969da", // Azul mais forte para contraste em fundo claro
    hover: "#0860ca",
    light: "#218bff",
    dark: "#0550ae",
  },

  // Secondary colors
  secondary: {
    main: "#f6f8fa", // Fundo cinza muito claro
    hover: "#eaeef2",
    light: "#d0d7de",
    dark: "#afb8c1",
  },

  // Background colors
  background: {
    primary: "#ffffff", // Branco puro como fundo principal
    primaryOpacity: "#ffffff99", // Branco com transparência para backdrop
    secondary: "#f6f8fa", // Cinza muito claro para seções
    tertiary: "#eaeef2", // Cinza claro para elementos terciários
    paper: "#ffffff", // Cards e papéis em branco
  },

  // Text colors
  text: {
    primary: "#1f2328", // Texto principal escuro
    secondary: "#656d76", // Texto secundário (cinza médio)
    disabled: "#8c959f", // Texto desabilitado
    inverse: "#f6f8fa", // Texto inverso (claro) para fundos escuros
  },

  // Border colors
  border: {
    primary: "#d1d9e0", // Bordas principais sutis
    secondary: "#eaeef2", // Bordas secundárias ainda mais sutis
    focus: "#0969da", // Foco mantém o azul da marca
  },

  // Status colors (ajustados para fundo claro)
  status: {
    success: "#1a7f37", // Verde mais escuro
    warning: "#bf8700", // Amarelo/laranja mais escuro
    error: "#d1242f", // Vermelho ajustado
    info: "#0969da", // Azul de informação
    orange: "#bc4c00", // Laranja mais escuro
    purple: "#8250df", // Roxo ajustado
  },

  social: {
    github: {
      primary: "#1f2328",
      secondary: "#f6f8fa",
      border: "#d1d9e0",
    },
    google: {
      primary: "#1a73e8",
      secondary: "#4285f4",
    },
  },

  neutral: {
    white: "#ffffff",
    black: "#000000",
    gray: {
      50: "#f6f8fa",
      100: "#eaeef2",
      200: "#d0d7de",
      300: "#afb8c1",
      400: "#8c959f",
      500: "#6e7781",
      600: "#57606a",
      700: "#424a53",
      800: "#32383f",
      900: "#24292f",
    },
  },
};

// Sistema de cores atual (compatibilidade)
export const colors = darkColors;

export const breakpoints = {
  xs: "320px",
  sm: "576px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  xxl: "1536px",
};

export const spacing = {
  xs: "0.25rem", // 4px
  sm: "0.5rem", // 8px
  md: "1rem", // 16px
  lg: "1.5rem", // 24px
  xl: "2rem", // 32px
  xxl: "3rem", // 48px
  xxxl: "4rem", // 64px
};

export const fontSize = {
  xs: "0.75rem", // 12px
  sm: "0.875rem", // 14px
  md: "1rem", // 16px
  lg: "1.125rem", // 18px
  xl: "1.25rem", // 20px
  xxl: "1.375rem", // 22px
  xxxl: "1.5rem", // 24px
  "4xl": "2rem", // 32px
  "5xl": "2.5rem", // 40px
  "6xl": "3rem", // 48px
};

export const borderRadius = {
  none: "0",
  xs: "0.125rem", // 2px
  sm: "0.25rem", // 4px
  md: "0.375rem", // 6px
  lg: "0.5rem", // 8px
  xl: "0.625rem", // 10px
  xxl: "0.75rem", // 12px
  full: "9999px",
};

export const shadows = {
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  focus: "0 0 0 0.2rem rgba(35, 139, 230, 0.25)",
};

export const zIndex = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
};

export const transitions = {
  fast: "0.15s ease-in-out",
  normal: "0.3s ease-in-out",
  slow: "0.5s ease-in-out",
};

export const mediaQueries = {
  up: {
    xs: `@media (min-width: ${breakpoints.xs})`,
    sm: `@media (min-width: ${breakpoints.sm})`,
    md: `@media (min-width: ${breakpoints.md})`,
    lg: `@media (min-width: ${breakpoints.lg})`,
    xl: `@media (min-width: ${breakpoints.xl})`,
    xxl: `@media (min-width: ${breakpoints.xxl})`,
  },
  down: {
    xs: `@media (max-width: ${breakpoints.xs})`,
    sm: `@media (max-width: ${breakpoints.sm})`,
    md: `@media (max-width: ${breakpoints.md})`,
    lg: `@media (max-width: ${breakpoints.lg})`,
    xl: `@media (max-width: ${breakpoints.xl})`,
    xxl: `@media (max-width: ${breakpoints.xxl})`,
  },
  between: {
    smMd: `@media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md})`,
    mdLg: `@media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg})`,
    lgXl: `@media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl})`,
  },
};

export const buttonSizes = {
  xsmall: {
    padding: `${spacing.xs} ${spacing.sm}`,
    fontSize: fontSize.xs,
    borderRadius: borderRadius.xs,
  },
  small: {
    padding: `0.375rem 0.75rem`,
    fontSize: fontSize.sm,
    borderRadius: borderRadius.sm,
  },
  medium: {
    padding: `${spacing.sm} ${spacing.md}`,
    fontSize: fontSize.md,
    borderRadius: borderRadius.md,
  },
  large: {
    padding: `0.75rem 1.25rem`,
    fontSize: fontSize.lg,
    borderRadius: borderRadius.lg,
  },
  xlarge: {
    padding: `0.875rem 1.75rem`,
    fontSize: fontSize.xl,
    borderRadius: borderRadius.xl,
  },
  xxlarge: {
    padding: `${spacing.md} 2.5rem`,
    fontSize: fontSize.xxl,
    borderRadius: borderRadius.xxl,
  },
};

export const darkGradients = {
  github: `linear-gradient(135deg, #24292e 0%, #1a1e22 100%)`,
  google: `linear-gradient(135deg, #4285f4 0%, #1a73e8 100%)`,
  shimmer: `linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)`,
};

export const lightGradients = {
  github: `linear-gradient(135deg, #f6f8fa 0%, #eaeef2 100%)`,
  google: `linear-gradient(135deg, #1a73e8 0%, #0969da 100%)`,
  shimmer: `linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.05), transparent)`,
};

export const gradients = darkGradients;

export const getThemeColors = (isDarkMode: boolean = true) => {
  return isDarkMode ? darkColors : lightColors;
};

export const getThemeGradients = (isDarkMode: boolean = true) => {
  return isDarkMode ? darkGradients : lightGradients;
};

export const getTheme = (isDarkMode: boolean = true) => ({
  colors: getThemeColors(isDarkMode),
  gradients: getThemeGradients(isDarkMode),
  breakpoints,
  spacing,
  fontSize,
  borderRadius,
  shadows,
  zIndex,
  transitions,
  mediaQueries,
  buttonSizes,
});

export const theme = {
  colors,
  breakpoints,
  spacing,
  fontSize,
  borderRadius,
  shadows,
  zIndex,
  transitions,
  mediaQueries,
  buttonSizes,
  gradients,
};

export default theme;
