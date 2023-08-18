"use client";
import styled from "styled-components";

interface IProps {
  params: {
    lng: string;
  };
}

export default function GetQueries({ params: { lng } }: IProps) {
  return <Main>No Select</Main>;
}

const Main = styled.section``;
