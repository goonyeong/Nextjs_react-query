"use client";

import {
  useUserName,
  useUserAge,
  useUserMbti,
  useUserTodo,
  useUserActions,
} from "@/store/useUserStore";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styled from "styled-components";

export const Header = () => {
  const { push } = useRouter();
  const name = useUserName();
  const age = useUserAge();
  const mbti = useUserMbti();
  const todo = useUserTodo();
  const { setName, setMbti, addTodo } = useUserActions();

  const [todoKey, setTodoKey] = useState("");
  const [todoName, setTodoName] = useState("");

  return (
    <Wrapper>
      <div
        className="menu"
        onClick={() => {
          push("/");
        }}
      >
        useCustomQuery
      </div>
      <div
        className="menu"
        onClick={() => {
          push("/getQueries");
        }}
      >
        useCustomQueries
      </div>
      <div className="items">
        <input type="text" value={name} onChange={(e) => setName(e.currentTarget.value)} />
        name:: {name} / {age}
      </div>
      <div className="items">
        <input type="text" value={mbti.name} onChange={(e) => setMbti(e.currentTarget.value)} />
        mbti:: {mbti.name}
      </div>
      <div className="items">
        <input
          type="text"
          value={todoKey}
          onChange={(e) => setTodoKey(e.currentTarget.value)}
          placeholder="todo Key"
        />
        <input
          type="text"
          value={todoName}
          onChange={(e) => setTodoName(e.currentTarget.value)}
          placeholder="todo Name"
        />
        <button
          onClick={() => {
            addTodo(todoKey, {
              id: Math.random(),
              name: todoName,
            });
          }}
        >
          add
        </button>
        todo:: {JSON.stringify(todo)}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  height: 20px;
  width: 100vw;
  position: sticky;
  top: 0;
  left: 0;
  background-color: beige;
  padding: 10px 30px;
  display: flex;
  align-items: center;
  gap: 20px;
  .items {
    color: ${({ theme }) => theme.color.pink};
  }
  .menu {
    height: 100%;
    padding: 0 10px;
    cursor: pointer;
    &:hover {
      opacity: 0.5;
    }
  }
`;
