import { RouterProvider, createRouter } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { routeTree } from "./routeTree.gen";

import { ThemeType } from "./theme";
import { QueryClientType } from "./query";

interface RouterContext {
  theme: ThemeType;
  queryClient: QueryClientType;
}

const router = createRouter({
  routeTree,
  context: {
    queryClient: undefined!,
    theme: undefined!,
  },
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export { router, RouterProvider, TanStackRouterDevtools, type RouterContext };
