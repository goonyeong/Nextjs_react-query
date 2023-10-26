"use client";
import styled from "styled-components";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useCustomQuery } from "@/query/useCustomQuery";
import { IFrontendMember } from "@/types/interfaceData";
import { QK_Frontend_Member } from "@/query/queryKey";
import { addFrontendMembers, getFrontendMembers } from "@/services/api";

export default function Mutate() {
  const queryClient = useQueryClient();

  const { data } = useCustomQuery<IFrontendMember[]>({
    queryKey: [...QK_Frontend_Member],
    queryFn: () => getFrontendMembers(),
  });

  const { mutate } = useMutation(
    () =>
      addFrontendMembers({
        name: "Ken",
        age: 100,
        is아줌마: false,
      }),
    {
      onSuccess(result) {
        console.log("post result", result);
        queryClient.invalidateQueries([...QK_Frontend_Member]);
      },
    }
  );

  return (
    <Main>
      <button
        className="button"
        onClick={() => {
          mutate();
        }}
      >
        추가
      </button>

      {data?.map((member, idx) => (
        <div key={idx}>{member.name}</div>
      ))}
    </Main>
  );
}

const Main = styled.section`
  ${({ theme }) => theme.layout.flex_direction_column};
  gap: 10px;
  padding: 10px;

  .button {
    width: 100px;
    height: 30px;
    ${({ theme }) => theme.layout.flex_center};
    background-color: ${({ theme }) => theme.color.bg_accent_gray_subtle};
    margin-top: 10px;
    cursor: pointer;
  }

  .list {
    ${({ theme }) => theme.layout.flex_center};
  }
`;
