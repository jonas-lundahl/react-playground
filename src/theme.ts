import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

const theme = createTheme({ palette: { mode: "dark" } });

type ThemeType = typeof theme;

export { theme, ThemeProvider, CssBaseline, type ThemeType };
