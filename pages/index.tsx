// React & Next
import { NextPage, GetStaticProps } from "next";
import Image from "next/image";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
// Style
import styled from "styled-components";
// Utils
import { getMovies } from "utils/apis/api";
import { useRouter } from "next/router";
import { QUERY_KEYS } from "utils/queries/queryKeys";

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  // const getParams = () => {
  //   return new Promise((res, req) => {
  //     res(JSON.stringify("from server"));
  //   });
  // };

  // await queryClient.prefetchQuery(["test"], () => getParams());
  await queryClient.prefetchQuery(QUERY_KEYS.MOVIES, () => getMovies(1, 10));

  return { props: { dehydratedState: dehydrate(queryClient) } };
};

const Home: NextPage = () => {
  const { data } = useQuery(QUERY_KEYS.MOVIES, () => getMovies(1, 10));

  return <Welcome>안뇽</Welcome>;
};

export default Home;

const Welcome = styled.h2`
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.mixin.flexCenter};
  font-size: 50px;
`;
