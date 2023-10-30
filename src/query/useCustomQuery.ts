import {
  QueryKey,
  UseQueryOptions,
  UseQueryResult,
  useQueries,
  useQuery,
} from "@tanstack/react-query";
import { AxiosError } from "axios";

/** 사용 안함 */

export interface IuseCustomQueryProps<T> {
  queryKey: QueryKey;
  queryFn: () => Promise<any>;
  options?: UseQueryOptions<T, AxiosError, T, QueryKey>;
}

export interface IuseCustomQueriesProps<T> {
  queries: IuseCustomQueryProps<T>[];
}

/** useQuery */
export const useCustomQuery = <T>({
  queryKey,
  queryFn,
  options,
}: IuseCustomQueryProps<T>): UseQueryResult<T, AxiosError> =>
  useQuery({ queryKey, queryFn, ...options });

/** useQueries */
export const useCustomQueries = <T>({ queries }: IuseCustomQueriesProps<T>) =>
  useQueries({
    queries: queries.map<UseQueryOptions<T, AxiosError, T, QueryKey>>((query) => {
      return {
        queryKey: query.queryKey,
        queryFn: query.queryFn,
        ...query.options,
      };
    }),
  });
