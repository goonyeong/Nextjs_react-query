import Image from "next/image";
import styled from "styled-components";

interface IProps {
  src: string;
  alt?: string;
}

export const ImageTag = ({ src, alt }: IProps) => {
  return (
    <Wrapper>
      <Image src={src} alt={alt ?? ""} fill sizes="100vw" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  ${({ theme }) => theme.layout.flex_center};
`;
