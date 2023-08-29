import { lightColor, darkColor } from "./colors";
import { zIndex, borderRadius, width } from "./variables";
import { typo } from "./typo";
import { effect } from "./effect";
import { layout } from "./layout";

export const lightTheme = {
  color: lightColor,
  zIndex,
  borderRadius,
  typo,
  effect,
  layout,
  width,
};

export const darkTheme = {
  color: darkColor,
  zIndex,
  borderRadius,
  typo,
  effect,
  layout,
  width,
};

export type TThemeColor = typeof lightColor;
export type TThemeZIndex = typeof zIndex;
export type TThemeBorderRadius = typeof borderRadius;
export type TThemeWidth = typeof width;
export type TThemeTypo = typeof typo;
export type TThemeEffect = typeof effect;
export type TThemeLayout = typeof layout;
