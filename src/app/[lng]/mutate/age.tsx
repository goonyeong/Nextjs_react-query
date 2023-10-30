import { useGetFrontendMembers } from "@/query/queries";
import styled from "styled-components";

export const Age = () => {
  const { data } = useGetFrontendMembers();

  return (
    <Wrapper>
      Age
      {data?.map((member, idx) => (
        <div key={idx}>{`- ${member.name}: ${member.age}`}</div>
      ))}
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
