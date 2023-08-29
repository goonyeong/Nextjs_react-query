import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { produce } from "immer";
import { E_THEME } from "@/types/constants";

interface IState {
  theme: E_THEME;
}

interface IAction {
  setTheme: (newTheme: E_THEME) => void;
}

const useThemeStore = create<IState & { actions: IAction }>()(
  devtools((set) => ({
    theme: E_THEME.light,
    actions: {
      setTheme: (newTheme: E_THEME) =>
        set(
          produce((state: IState) => {
            state.theme = newTheme;
          })
        ),
    },
  }))
);

export const useThemeCurrent = () => useThemeStore((state) => state.theme);
export const useThemeAction = () => useThemeStore((state) => state.actions);
