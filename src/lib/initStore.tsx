"use client";

import { useLngAction } from "@/store/useLngStore";
import { useThemeAction } from "@/store/useThemeStore";
import { THEME_LOCALSTORAGE, TLng } from "@/types/constants";
import { ReactNode, useEffect } from "react";

interface IProps {
  children: ReactNode;
  lng: TLng;
}

export const InitStore = ({ children, lng }: IProps) => {
  const { setLng } = useLngAction();
  const { setTheme } = useThemeAction();

  useEffect(() => {
    const themeLocalStorage = Number(window.localStorage.getItem(THEME_LOCALSTORAGE)) ?? 0;

    if (themeLocalStorage !== undefined) {
      setTheme(themeLocalStorage);
    }
  }, []);

  useEffect(() => {
    setLng(lng);
  }, [lng]);

  return <>{children}</>;
};
