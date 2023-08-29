import styled from "styled-components";
import { Button } from "../button";

interface IProps {
  close: () => void;
  title: string;
  desc: string;
  btnLabel: string;
}

export const PopupBtn1 = ({ close, title, desc, btnLabel }: IProps) => {
  const handlePreventParentsEvent = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };

  const handleWrapperClick = () => {
    close();
  };

  return (
    <>
      <Overlay />
      <Wrapper onClick={handleWrapperClick}>
        <Container onClick={handlePreventParentsEvent}>
          <h3 className="title">{title}</h3>
          <p className="desc">{desc}</p>
          <div className="btnContainer">
            <Button color="primary" label={btnLabel} onClick={close} fontSize="16px" />
          </div>
        </Container>
      </Wrapper>
    </>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.overlay};
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  ${({ theme }) => theme.layout.flex_center};
`;

const Container = styled.section`
  width: 400px;
  background-color: ${({ theme }) => theme.color.surface_overlay};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.rounded_xl};
  ${({ theme }) => theme.effect.shadow_xl};
  padding: 16px;
  padding-top: 32px;
  > .title {
    ${({ theme }) => theme.typo.title_06_bold};
    color: ${({ theme }) => theme.color.fg};
    margin-bottom: 22.5px;
    padding: 0 8px;
  }
  > .desc {
    ${({ theme }) => theme.typo.body_md};
    color: ${({ theme }) => theme.color.fg_subtlest};
    margin-bottom: 30.5px;
    padding: 0 8px;
  }
  > .btnContainer {
    height: 47px;
    width: 100%;
  }
`;
