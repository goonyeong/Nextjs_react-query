import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { produce } from "immer";

type TTodo = {
  id: number;
  name: string;
};

type TState = {
  name: string;
  age: number;
  mbti: {
    name: string;
    attributes: {
      1: "E" | "I";
      2: "N" | "S";
      3: "F" | "T";
      4: "P" | "J";
    };
  };
  todo: Record<string, TTodo>;
};

interface IAction {
  actions: {
    setName: (newName: TState["name"]) => void;
    setMbti: (newMbti: TState["mbti"]["name"]) => void;
    addTodo: (key: string, newTodo: TTodo) => void;
  };
}

const useUserStore = create<TState & IAction>()(
  devtools(
    persist(
      (set) => ({
        name: "??",
        age: 0,
        mbti: {
          name: "ENFP",
          attributes: {
            1: "E",
            2: "N",
            3: "F",
            4: "P",
          },
        },
        todo: {},
        actions: {
          setName: (newName: string) =>
            set(
              produce((state) => {
                state.name = newName;
              })
            ),
          setMbti: (newMbti: string) =>
            set(
              produce((state) => {
                state.mbti.name = newMbti;
              })
            ),
          addTodo: (key: string, newTodo: TTodo) =>
            set(
              produce((state) => {
                state.todo[key] = newTodo;
              })
            ),
        },
      }),
      {
        name: "zustand-storage",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
  // )
);

/** make atomic through seperating each state and actions group */
export const useUserName = () => useUserStore((state) => state.name);
export const useUserAge = () => useUserStore((state) => state.age);
export const useUserMbti = () => useUserStore((state) => state.mbti);
export const useUserTodo = () => useUserStore((state) => state.todo);
export const useUserActions = () => useUserStore((state) => state.actions);
