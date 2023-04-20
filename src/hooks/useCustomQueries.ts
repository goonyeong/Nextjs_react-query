import { TMBD_API_URL } from "@/config";
import { IuseCustomQueriesProps } from "@/types/interfaceQuery";
import { QueryKey, useQueries, UseQueryOptions } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

export const useCustomQueries = <T>({ queries }: IuseCustomQueriesProps<T>) =>
  useQueries({
    queries: queries.map<UseQueryOptions<T, AxiosError, T, QueryKey>>((query) => {
      return {
        queryKey: query.queryKey,
        queryFn: async () => {
          const result = await axios({
            method: "get",
            url: `${TMBD_API_URL}${query.path}`,
            headers: {
              authorization: query.accessToken,
            },
            params: query.params,
          });

          return result.data;
        },
        ...query.options,
      };
    }),
  });
