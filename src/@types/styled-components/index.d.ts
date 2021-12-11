import "styled-components";

interface IPalette {
  light: string;
  default: string;
  dark: string;
}
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    palette: {
      blue: IPalette;
      red: IPalette;
      green: IPalette;
      common: {
        black: string;
        white: string;
      };
      typography: IPalette;
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    typography: {
      h1: string;
      h2: string;
      h3: string;
      text: string;
    };
    spacing: {
      sm: string;
      md: string;
      lg: string;
    };
  }
}
