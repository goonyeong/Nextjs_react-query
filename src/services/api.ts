import { TMBD_API_KEY, TMBD_API_URL } from "@/types/constants";
import { IFrontendMember } from "@/types/interfaceData";
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

export const getFrontendMembers = async () => {
  const result = await axios({
    method: "get",
    url: `/api/frontend/members`,
  });

  return result.data;
};

export const addFrontendMembers = async (member: IFrontendMember) => {
  const result = await axios({
    method: "post",
    url: `/api/frontend/members`,
    data: member,
  });

  return result.data;
};
