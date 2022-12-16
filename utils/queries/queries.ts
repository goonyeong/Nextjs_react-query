import {
  useInfiniteQuery,
  UseInfiniteQueryResult,
  useQuery,
  UseQueryResult,
} from "@tanstack/react-query";
import { QUERY_KEYS } from "utils/queries/queryKeys";
import { getMovies, _getMovies } from "utils/apis/api";
import { AxiosError } from "axios";

interface IInfiniteFetchReturn<T> {
  result: { page: number; results: T; total_pages: number; total_results: number };
  nextPage: number;
  isLast: boolean;
}

export const useInfiniteFetchMovies = ({
  size,
}: {
  size: number;
}): UseInfiniteQueryResult<IInfiniteFetchReturn<IMovieDetail[]>, AxiosError> =>
  useInfiniteQuery(QUERY_KEYS.MOVIES_INFINITE, ({ pageParam = 1 }) => getMovies(pageParam, size), {
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

export const useFetchMovies = ({
  size,
  page,
}: {
  page: number;
  size: number;
}): UseQueryResult<{ results: IMovieDetail[] }, AxiosError> =>
  useQuery([...QUERY_KEYS.MOVIES, page], () => _getMovies(page, size), {
    keepPreviousData: true,
    staleTime: 0,
  });
