"use client";
import styled from "styled-components";
import { useCustomRouter } from "@/hooks/useCustomRouter";
import { useGetPersonDetails } from "@/query/queries";

export const PersonList = () => {
  const { push } = useCustomRouter();

  const PERSON_ID = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // 같은 api를 params만 변경하여 여러번 호출함
  const res = useGetPersonDetails({ personIdArr: PERSON_ID });

  console.log(res);

  return (
    <List>
      {res.map((person) => {
        if (person.data) {
          const personData = person.data;
          return (
            <li
              className="li"
              key={personData.id}
              onClick={() => {
                push(`/getQueries/${personData.id}`);
              }}
            >
              {personData.name}
            </li>
          );
        }
      })}
    </List>
  );
};

const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  .li {
    width: 100%;
    cursor: pointer;
    &:hover {
      background-color: brown;
    }
  }
`;
