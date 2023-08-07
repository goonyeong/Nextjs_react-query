import "styled-components";
import { TThemeColor } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    color: TThemeColor;
  }
}
