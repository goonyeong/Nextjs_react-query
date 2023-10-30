import { QueryClient } from "@tanstack/react-query";

const getQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        staleTime: 0,
        gcTime: 0,
        refetchOnWindowFocus: false,
      },
    },
  });

export default getQueryClient;
