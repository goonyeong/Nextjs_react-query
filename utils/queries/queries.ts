import {
  useInfiniteQuery,
  UseInfiniteQueryResult,
  useQuery,
  UseQueryResult,
} from "@tanstack/react-query";
import { QUERY_KEYS } from "utils/queries/queryKeys";
import { getMovies, getInfiniteMovies } from "utils/apis/api";
import { AxiosError } from "axios";

export interface IInfiniteFetchReturn<T> {
  result: { page: number; results: T; total_pages: number; total_results: number };
  nextPage: number;
  isLast: boolean;
}

export const useFetchMovies = ({
  size,
  page,
}: {
  page: number;
  size: number;
}): UseQueryResult<{ results: IMovieDetail[]; page: number; total_pages: number }, AxiosError> =>
  useQuery([...QUERY_KEYS.MOVIES, page], () => getMovies(page, size), {
    keepPreviousData: true,
  });

export const useInfiniteFetchMovies = ({
  size,
}: {
  size: number;
}): UseInfiniteQueryResult<IInfiniteFetchReturn<IMovieDetail[]>, AxiosError> =>
  useInfiniteQuery(
    QUERY_KEYS.MOVIES_INFINITE,
    ({ pageParam = 1 }) => getInfiniteMovies(pageParam, size),
    {
      getNextPageParam: (lastPage) => lastPage.nextPage,
      keepPreviousData: true,
    }
  );
