import { QueryKey, QueryOptions, UseQueryOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";

export interface IuseCustomQueryProps<T> {
  queryKey: QueryKey;
  path: string;
  accessToken: string;
  params?: any;
  options?: UseQueryOptions<T, AxiosError, T, QueryKey>;
}

export interface IuseCustomQueriesProps<T> {
  queries: IuseCustomQueryProps<T>[];
}
