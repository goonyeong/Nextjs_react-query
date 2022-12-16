import { useRouter } from "next/router";
import styled from "styled-components";

const Nav = () => {
  const { push, pathname } = useRouter();

  return (
    <Wrapper>
      <Lists>
        <Content
          onClick={() => {
            push("/infinite");
          }}
          isFocus={pathname === "/infinite"}
        >
          Infinite Query
        </Content>
        <Content
          onClick={() => {
            push("/table");
          }}
          isFocus={pathname === "/table"}
        >
          Table
        </Content>
        <Content
          onClick={() => {
            push("/infinite-table");
          }}
          isFocus={pathname === "/infinite-table"}
        >
          Infinite-Table
        </Content>
      </Lists>
    </Wrapper>
  );
};

export default Nav;

const Wrapper = styled.nav`
  top: 70px;
  height: calc(100vh - 70px);
  width: 200px;
  flex-shrink: 0;
  position: sticky;
  background-color: ${({ theme }) => theme.colors.nav_color};
`;

const Lists = styled.ul`
  width: 100%;
  padding: 100px 20px;
`;

const Content = styled.li<{ isFocus: boolean }>`
  width: 100%;
  text-align: center;
  padding: 10px 0;
  font-size: 20px;
  cursor: pointer;
  color: ${(props) =>
    props.isFocus
      ? ({ theme }) => theme.colors.primary_color
      : ({ theme }) => theme.colors.text_color};
`;
