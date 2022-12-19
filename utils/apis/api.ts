import axios from "axios";

export const TMBD_API_KEY = "2aba01b0fce18e86ed1cee2e83403b06";
export const TMBD_API_URL = "https://api.themoviedb.org/3";
export const TMBD_IMAGE_URL = "https://image.tmdb.org/t/p/original";

export const getMovies = async (page: number, size: number) => {
  const { data } = await axios({
    method: "get",
    url: `${TMBD_API_URL}/movie/popular`,
    params: {
      api_key: TMBD_API_KEY,
      page,
    },
  });

  return data;
};

export const getInfiniteMovies = async (page: number, size: number) => {
  const { data } = await axios({
    method: "get",
    url: `${TMBD_API_URL}/movie/popular`,
    params: {
      api_key: TMBD_API_KEY,
      page,
      // size // page size 화면 크기에 따라서 사이즈 다르게 / 추후 추가
    },
  });

  const TOTAL_PAGES = 500;
  const nextPage = TOTAL_PAGES < page + 1 ? undefined : page + 1;

  return { result: data, nextPage, isLast: !nextPage };
};
