import { TMBD_API_KEY, TMBD_API_URL } from "@/types/constants";
import axios from "axios";

export const getMovieList = async ({ page }: { page: number }) => {
  const result = await axios({
    method: "get",
    url: `${TMBD_API_URL}/movie/popular`,
    params: {
      api_key: TMBD_API_KEY,
      page: page,
    },
  });
  return result.data;
};

export const getPersonList = async ({ page }: { page: number }) => {
  const result = await axios({
    method: "get",
    url: `${TMBD_API_URL}/person/popular`,
    params: {
      api_key: TMBD_API_KEY,
      page: page,
    },
  });
  return result.data;
};

export const getPersonDetail = async ({ id }: { id: number }) => {
  const result = await axios({
    method: "get",
    url: `${TMBD_API_URL}/person/${id}`,
    params: {
      api_key: TMBD_API_KEY,
      page: id,
    },
  });
  return result.data;
};
