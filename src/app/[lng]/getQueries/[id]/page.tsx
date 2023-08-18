"use client";
import { useCustomQuery } from "@/query/useCustomQuery";
import { getPersonDetail } from "@/services/api";
import { IPersonData } from "@/types/interfaceData";
import { QK_Person_Detail } from "@/query/queryKey";
import styled from "styled-components";

interface IPageProps {
  params: {
    id: number;
    lng: string;
  };
}

const Page = ({ params: { id, lng } }: IPageProps) => {
  const { data } = useCustomQuery<IPersonData>({
    queryKey: [...QK_Person_Detail, id.toString()],
    queryFn: () => getPersonDetail({ id: id }),
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
