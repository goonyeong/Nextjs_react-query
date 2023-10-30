import { UseQueryResult, useQueries, useQuery } from "@tanstack/react-query";
import {
  QK_Frontend_Member,
  QK_Movie_Popular,
  QK_Person_Detail,
  QK_Person_Popular,
} from "./queryKey";
import { getFrontendMembers, getMovieList, getPersonDetail, getPersonList } from "@/services/api";
import { AxiosError } from "axios";
import { IFrontendMember, IMovieData, IPersonData } from "@/types/interfaceData";

export const useGetFrontendMembers = (): UseQueryResult<IFrontendMember[], AxiosError> =>
  useQuery({
    queryKey: [...QK_Frontend_Member],
    queryFn: () => getFrontendMembers(),
    staleTime: 3000,
    gcTime: 50000,
  });

export const useGetMovieList = ({
  page,
}: {
  page: number;
}): UseQueryResult<{ results: IMovieData[] }, AxiosError> =>
  useQuery({
    queryKey: [...QK_Movie_Popular, page],
    queryFn: () => getMovieList({ page }),
  });

export const useGetPersonList = ({
  page,
}: {
  page: number;
}): UseQueryResult<{ results: IPersonData[] }, AxiosError> =>
  useQuery({
    queryKey: [...QK_Person_Popular, page],
    queryFn: () => getPersonList({ page }),
  });

export const useGetPersonDetail = ({
  id,
}: {
  id: number;
}): UseQueryResult<IPersonData, AxiosError> =>
  useQuery({
    queryKey: [...QK_Person_Detail, id],
    queryFn: () => getPersonDetail({ id: id }),
  });

export const useGetPersonDetails = ({ personIdArr }: { personIdArr: number[] }) =>
  useQueries({
    queries: personIdArr.map((personId) => ({
      queryKey: [...QK_Person_Detail, personId],
      queryFn: () => getPersonDetail({ id: personId }),
    })),
  });
