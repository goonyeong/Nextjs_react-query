// React & Next
import { NextPage, GetStaticProps } from "next";
import Image from "next/image";
import { dehydrate, QueryClient } from "@tanstack/react-query";
// Style
import styled from "styled-components";
// Utils
import { getMovies } from "utils/apis/api";
import { useRouter } from "next/router";

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  // await queryClient.prefetchQuery(QUERY_KEYS.MOVIE_LIST, () => getMovies());

  return { props: { dehydratedState: dehydrate(queryClient) } };
};

const Home: NextPage = () => {
  return <Welcome>안뇽</Welcome>;
};

export default Home;

const Welcome = styled.h2`
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.mixin.flexCenter};
  font-size: 50px;
`;
