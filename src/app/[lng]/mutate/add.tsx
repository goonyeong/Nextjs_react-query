import { Button } from "@/app/common/button";
import { QK_Frontend_Member } from "@/query/queryKey";
import { addFrontendMembers } from "@/services/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import styled from "styled-components";

export const Add = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: () =>
      addFrontendMembers({
        name: "Ken",
        age: 100,
        is아줌마: false,
        gender: "male",
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [...QK_Frontend_Member] });
    },
  });

  return (
    <Wrapper>
      <Button
        color="primary"
        label="add member"
        fontSize="16px"
        onClick={() => {
          mutate();
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.color.border};
  ${({ theme }) => theme.layout.flex_direction_column};
  gap: 10px;
  padding: 10px;
`;
