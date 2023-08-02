import { QueryClient } from "@tanstack/react-query";
import { cache } from "react";

const getQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        staleTime: 3000,
        cacheTime: 5000,
        keepPreviousData: true,
        refetchOnWindowFocus: false,
      },
    },
  });

export default getQueryClient;
