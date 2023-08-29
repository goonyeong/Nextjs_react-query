import "styled-components";
import {
  TThemeColor,
  TThemeZIndex,
  TThemeBorderRadius,
  TThemeTypo,
  TThemeEffect,
  TThemeLayout,
  TThemeWidth,
} from "../style/theme";

declare module "styled-components" {
  export interface DefaultTheme {
    color: TThemeColor;
    zIndex: TThemeZIndex;
    borderRadius: TThemeBorderRadius;
    width: TThemeWidth;
    typo: TThemeTypo;
    effect: TThemeEffect;
    layout: TThemeLayout;
  }
}
