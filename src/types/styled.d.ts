import "styled-components";

interface Colors {
  primary: {
    main: string;
    hover: string;
    light: string;
    dark: string;
  };
  secondary: {
    main: string;
    hover: string;
    light: string;
    dark: string;
  };
  background: {
    primary: string;
    primaryOpacity: string;
    secondary: string;
    tertiary: string;
    paper: string;
  };
  text: {
    primary: string;
    secondary: string;
    disabled: string;
    inverse: string;
  };
  border: {
    primary: string;
    secondary: string;
    focus: string;
  };
  status: {
    success: string;
    warning: string;
    error: string;
    info: string;
    orange: string;
    purple: string;
  };
  social: {
    github: {
      primary: string;
      secondary: string;
      border: string;
    };
    google: {
      primary: string;
      secondary: string;
    };
  };
  neutral: {
    white: string;
    black: string;
    gray: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
  };
}

interface ThemeType {
  colors: Colors;
  gradients: {
    github: string;
    google: string;
    shimmer: string;
  };
  breakpoints: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    xxxl: string;
  };
  fontSize: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    xxxl: string;
    "4xl": string;
    "5xl": string;
    "6xl": string;
  };
  borderRadius: {
    none: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    full: string;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    focus: string;
  };
  zIndex: {
    dropdown: number;
    sticky: number;
    fixed: number;
    modalBackdrop: number;
    modal: number;
    popover: number;
    tooltip: number;
  };
  transitions: {
    fast: string;
    normal: string;
    slow: string;
  };
  mediaQueries: {
    up: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    down: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    between: {
      smMd: string;
      mdLg: string;
      lgXl: string;
    };
  };
  buttonSizes: {
    xsmall: {
      padding: string;
      fontSize: string;
      borderRadius: string;
    };
    small: {
      padding: string;
      fontSize: string;
      borderRadius: string;
    };
    medium: {
      padding: string;
      fontSize: string;
      borderRadius: string;
    };
    large: {
      padding: string;
      fontSize: string;
      borderRadius: string;
    };
    xlarge: {
      padding: string;
      fontSize: string;
      borderRadius: string;
    };
    xxlarge: {
      padding: string;
      fontSize: string;
      borderRadius: string;
    };
  };
}

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends ThemeType {}
}
