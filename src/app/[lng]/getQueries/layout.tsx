"use client";

import styled from "styled-components";
import { PersonList } from "./personList";
import { ILayoutProps } from "@/types/interfaceNext";
import { languages } from "@/app/i18n/settings";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

interface IProps extends ILayoutProps {
  params: {
    lng: string;
  };
}

const PersonsLayout = ({ children, params: { lng } }: IProps) => {
  return (
    <Main>
      <PersonList lng={lng} />
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
