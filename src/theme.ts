import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import darkScrollbar from "@mui/material/darkScrollbar";
import { coreLocale, pickerLocale } from "./locales";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    mdsm: true;
  }
}

const theme = createTheme(
  {
    palette: { mode: "dark" },
    components: {
      MuiCssBaseline: {
        styleOverrides: (themeParam) => ({
          body: themeParam.palette.mode === "dark" ? darkScrollbar() : null,
        }),
      },
    },
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
