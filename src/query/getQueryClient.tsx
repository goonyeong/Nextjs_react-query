import { QueryClient } from "@tanstack/react-query";

const getQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        staleTime: 0,
        cacheTime: 0,
        keepPreviousData: true,
        refetchOnWindowFocus: false,
      },
    },
  });

export default getQueryClient;
