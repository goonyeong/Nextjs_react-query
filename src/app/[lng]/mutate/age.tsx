import { QK_Frontend_Member } from "@/query/queryKey";
import { useCustomQuery } from "@/query/useCustomQuery";
import { getFrontendMembers } from "@/services/api";
import { IFrontendMember } from "@/types/interfaceData";
import styled from "styled-components";

export const Age = () => {
  const { data } = useCustomQuery<IFrontendMember[]>({
    queryKey: [...QK_Frontend_Member],
    queryFn: () => getFrontendMembers(),
    options: {
      staleTime: 2000,
      cacheTime: 5000,
    },
  });

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
