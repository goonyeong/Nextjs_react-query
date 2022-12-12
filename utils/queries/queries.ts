import { useInfiniteQuery, UseInfiniteQueryResult } from "@tanstack/react-query";
import { QUERY_KEYS } from "utils/queries/queryKeys";
import { getMovies } from "utils/apis/api";
import { AxiosError } from "axios";

interface IQueryDataReturn<T> {
  result: { page: number; results: T; total_pages: number; total_results: number };
  nextPage: number;
  isLast: boolean;
}

export const useFetchMovieList = ({
  pageSize,
}: {
  pageSize: number;
}): UseInfiniteQueryResult<IQueryDataReturn<IMovieDetail[]>, AxiosError> =>
  useInfiniteQuery(QUERY_KEYS.MOVIE_LIST, ({ pageParam = 1 }) => getMovies(pageParam, pageSize), {
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });
