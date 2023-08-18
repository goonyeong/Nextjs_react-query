"use client";

import { useCustomQueries } from "@/query/useCustomQuery";
import { getPersonDetail } from "@/services/api";
import { IPersonData } from "@/types/interfaceData";
import { QK_Person_Detail } from "@/query/queryKey";
import { useRouter } from "next/navigation";
import styled from "styled-components";

interface IProps {
  lng: string;
}

export const PersonList = ({ lng }: IProps) => {
  const { push } = useRouter();

  const PERSON_ID = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // 같은 api를 params만 변경하여 여러번 호출함
  const res = useCustomQueries<IPersonData>({
    queries: PERSON_ID.map((person) => {
      return {
        queryKey: [...QK_Person_Detail, person.toString()],
        queryFn: () => getPersonDetail({ id: person }),
      };
    }),
  });

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
                push(`/${lng}/getQueries/${personData.id}`);
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
