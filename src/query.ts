import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

type QueryClientType = typeof queryClient;

export {
  queryClient,
  QueryClientProvider,
  ReactQueryDevtools,
  type QueryClientType,
};
