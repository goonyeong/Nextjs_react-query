import { TMBD_API_KEY } from "@/config";
import { useCustomQueries } from "@/hooks/useCustomQueries";
import { IPersonData } from "@/types/interfaceData";
import { QK_Person_Detail } from "@/types/queryKey";
import { useRouter } from "next/navigation";
import styled from "styled-components";

export const PersonList = () => {
  const { push } = useRouter();

  const PERSON_ID = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // 같은 api를 params만 변경하여 여러번 호출함
  const res = useCustomQueries<IPersonData>({
    queries: PERSON_ID.map((person) => {
      return {
        queryKey: [...QK_Person_Detail, person.toString()],
        path: `/person/${person}`,
        accessToken: "",
        params: {
          api_key: TMBD_API_KEY,
        },
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
