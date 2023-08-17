"use client";

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
    ${reset}
    *, *::after, *::before{
    box-sizing: border-box;
  }

`;
