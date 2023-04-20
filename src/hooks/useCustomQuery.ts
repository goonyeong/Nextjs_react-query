import { TMBD_API_URL } from "@/config";
import { IuseCustomQueryProps } from "@/types/interfaceQuery";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

export const useCustomQuery = <T>({
  queryKey,
  path,
  accessToken,
  params,
  options,
}: IuseCustomQueryProps<T>): UseQueryResult<T, AxiosError> =>
  useQuery(
    queryKey,
    async () => {
      const result = await axios({
        method: "get",
        url: `${TMBD_API_URL}${path}`,
        headers: {
          authorization: accessToken,
        },
        params: params,
      });
      return result.data;
    },
    options && options
  );
