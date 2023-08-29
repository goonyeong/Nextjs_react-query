"use client";

import styled from "styled-components";
import { PersonList } from "./personList";
import { ILayoutProps } from "@/types/interfaceNext";

const PersonsLayout = ({ children }: ILayoutProps) => {
  return (
    <Main>
      <PersonList />
      {children}
    </Main>
  );
};

export default PersonsLayout;

const Main = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 50px;
`;
