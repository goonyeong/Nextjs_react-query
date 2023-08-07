"use client";

import { theme } from "@/style/theme";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

export const StyledThemeProvider = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
