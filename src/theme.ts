import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { coreLocale, pickerLocale } from "./locales";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    mdsm: true;
  }
}

const theme = createTheme(
  {
    palette: { mode: "dark" },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        mdsm: 750,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  },
  pickerLocale,
  coreLocale,
);

type ThemeType = typeof theme;

export { theme, ThemeProvider, CssBaseline, type ThemeType };
