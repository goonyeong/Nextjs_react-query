"use client";
import styled from "styled-components";
import { Age } from "../mutate/age";
import { Azoom } from "../mutate/azoom";
import { Gender } from "../mutate/gender";
import { Add } from "../mutate/add";

export default function Mutate() {
  return (
    <Main>
      <Add />
      <Age />
      <Azoom />
      <Gender />
      mutate2
    </Main>
  );
}

const Main = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 200px);
  gap: 30px;
  padding: 30px;
`;
