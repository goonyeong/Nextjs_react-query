"use client";

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./fonts.css";

export const GlobalStyles = createGlobalStyle`
  ${reset}

  *, *::before, *::after{
        box-sizing: border-box;
        color: inherit;
    }
  body{
    font-family: "FontTest";
  }
  input, textarea, select, button {
        outline: none;
        font-size: inherit;
        font-family: inherit;
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
