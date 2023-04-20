"use client";

import { useRouter } from "next/navigation";
import styled from "styled-components";

export const Header = () => {
  const { push } = useRouter();

  return (
    <Wrapper>
      <div
        className="menu"
        onClick={() => {
          push("/");
        }}
      >
        useCustomQuery
      </div>
      <div
        className="menu"
        onClick={() => {
          push("/getQueries");
        }}
      >
        useCustomQueries
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  height: 20px;
  width: 100vw;
  position: sticky;
  top: 0;
  left: 0;
  background-color: beige;
  padding: 10px 30px;
  display: flex;
  align-items: center;
  gap: 20px;
  .menu {
    height: 100%;
    padding: 0 10px;
    cursor: pointer;
    &:hover {
      opacity: 0.5;
    }
  }
`;
