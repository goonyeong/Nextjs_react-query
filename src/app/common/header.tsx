"use client";

import styled from "styled-components";
import { useTranslation } from "../i18n/client";
import { useCustomRouter } from "@/hooks/useCustomRouter";
import { Button } from "./button";
import { useThemeAction, useThemeCurrent } from "@/store/useThemeStore";
import { E_THEME } from "@/types/constants";

export const Header = () => {
  const { t } = useTranslation(["common"]);
  const currentTheme = useThemeCurrent();
  const { setTheme } = useThemeAction();

  const { push } = useCustomRouter();

  return (
    <Wrapper>
      <div className="flexLeft">
        <div
          className="menu"
          onClick={() => {
            push(`/`);
          }}
        >
          {/* {t("menu1")} */}
        </div>
        <div
          className="menu"
          onClick={() => {
            push(`/getQueries`);
          }}
        >
          {/* {t("menu2")} */}
        </div>
        <div
          className="menu"
          onClick={() => {
            push(`/coms`);
          }}
        >
          Components
        </div>
      </div>
      <div className="flexRight">
        <div className="btnContainer">
          <Button
            label="Theme Change"
            color="quaternary"
            fontSize="16px"
            onClick={() => {
              if (currentTheme === E_THEME.dark) {
                setTheme(E_THEME.light);
              } else {
                setTheme(E_THEME.dark);
              }
            }}
            isWidthAuto
          />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  height: 50px;
  width: 100vw;
  position: sticky;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.color.bg_accent_blue_subtle};
  ${({ theme }) => theme.layout.flex_vertical_center};
  justify-content: space-between;
  padding: 0 30px;
  > .flexLeft {
    ${({ theme }) => theme.layout.flex_vertical_center};
    .menu {
      height: 30px;
      ${({ theme }) => theme.layout.flex_center};
      padding: 0 15px;
      cursor: pointer;
      color: ${({ theme }) => theme.color.fg};
      &:hover {
        color: ${({ theme }) => theme.color.fg_subtlest};
      }
    }
  }
  > .flexRight {
    > .btnContainer {
      height: 30px;
    }
  }
`;
