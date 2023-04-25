"use client";

import { TMBD_API_KEY } from "@/config";
import { useCustomQuery } from "@/hooks/useCustomQuery";
import { IPersonData } from "@/types/interfaceData";
import { QK_Person_Detail } from "@/types/queryKey";
import { useQueryClient } from "@tanstack/react-query";
import styled from "styled-components";

interface IPageProps {
  params: {
    id: number;
  };
}

const Page = ({ params: { id } }: IPageProps) => {
  const queryClient = useQueryClient();

  const { data } = useCustomQuery<IPersonData>({
    queryKey: [...QK_Person_Detail, id.toString()],
    path: `/person/${id}`,
    accessToken: "",
    params: {
      api_key: TMBD_API_KEY,
    },
    options: {
      onSuccess: (res) => {
        console.log("res", res);
      },
    },
  });

  return (
    <Wrapper>
      <p className="p">Name: {data?.name}</p>
      <p className="p">Popularity: {data?.popularity}</p>
    </Wrapper>
  );
};

export default Page;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  .p {
  }
`;
