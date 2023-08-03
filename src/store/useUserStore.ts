import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

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

type TAction = {
  setName: (newName: TState["name"]) => void;
  setMbti: (newMbti: TState["mbti"]["name"]) => void;
  addTodo: (key: string, newTodo: TTodo) => void;
};

export const useUserStore = create(
  immer<TState & TAction>((set) => ({
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
    setName: (newName: string) =>
      set((state) => {
        state.name = newName;
      }),
    setMbti: (newMbti: string) =>
      set((state) => {
        state.mbti.name = newMbti;
      }),
    addTodo: (key: string, newTodo: TTodo) =>
      set((state) => {
        state.todo[key] = newTodo;
      }),
  }))
);
