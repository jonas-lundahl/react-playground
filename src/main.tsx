import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { router, RouterProvider, TanStackRouterDevtools } from "./router";
import { queryClient, QueryClientProvider, ReactQueryDevtools } from "./query";
import { theme, ThemeProvider, CssBaseline } from "./theme";
import {
  LocalizationProvider,
  AdapterDateFns,
  adapterLocale,
} from "./date-picker";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <LocalizationProvider
        dateAdapter={AdapterDateFns}
        adapterLocale={adapterLocale}
      >
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} context={{ theme, queryClient }} />
        </QueryClientProvider>
        <TanStackRouterDevtools router={router} />
        <ReactQueryDevtools client={queryClient} />
      </LocalizationProvider>
    </ThemeProvider>
  </StrictMode>,
);
