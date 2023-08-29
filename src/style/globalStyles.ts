"use client";

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./fonts/fonts.css";

export const GlobalStyles = createGlobalStyle`
  ${reset}

  *, *::before, *::after{
        box-sizing: border-box;
        color: inherit;
    }
  body{
    font-family: "fontTest";
    color: ${({ theme }) => theme.color.fg};
  }
  input, textarea, select, button {
        outline: none;
        font-size: inherit;
        font-family: inherit;
        border: 0;
        padding-block: 0;
        padding-inline: 0;
        background-color: transparent;
     }
    input:focus, textarea:focus, select:focus {
        outline: none;
    }
    a{
        color: inherit;
        text-decoration: none;
    }
    ol, ul, li {  
        list-style: none;
    }

`;
