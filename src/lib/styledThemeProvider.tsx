"use client";

import { useThemeCurrent } from "@/store/useThemeStore";
import { darkTheme, lightTheme } from "@/style/theme";
import { E_THEME } from "@/types/constants";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

export const StyledThemeProvider = ({ children }: { children: ReactNode }) => {
  const currentTheme = useThemeCurrent();

  return (
    <ThemeProvider theme={currentTheme === E_THEME.light ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  );
};
