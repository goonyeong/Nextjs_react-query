"use client";
import styled from "styled-components";
import { useGetPersonDetail } from "@/query/queries";

interface IPageProps {
  params: {
    id: number;
  };
}

const Page = ({ params: { id } }: IPageProps) => {
  const { data } = useGetPersonDetail({ id });

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
