import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { produce } from "immer";
import { TLng } from "@/types/constants";

interface IState {
  lng: TLng;
}

interface IAction {
  setLng: (newLng: TLng) => void;
}

const useLngStore = create<IState & { actions: IAction }>()(
  devtools((set) => ({
    lng: "",
    actions: {
      setLng: (newLng: TLng) =>
        set(
          produce((state: IState) => {
            state.lng = newLng;
          })
        ),
    },
  }))
);

export const useLngCurrent = () => useLngStore((state) => state.lng);
export const useLngAction = () => useLngStore((state) => state.actions);
