import styled from "styled-components";
import { Button } from "../button";
import { ButtonIcon } from "../buttonIcon";

interface IProps {
  close: () => void;
  title: string;
  desc: string;
  btn1: {
    label: string;
    onClick: () => void;
  };
  btn2: {
    label: string;
    onClick: () => void;
  };
}

export const PopupBtn2 = ({ close, title, desc, btn1, btn2 }: IProps) => {
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
            <Button color="secondary" label={btn1.label} onClick={btn1.onClick} fontSize="16px" />
            <Button color="primary" label={btn2.label} onClick={btn2.onClick} fontSize="16px" />
          </div>
          <Close>
            <ButtonIcon
              color="quaternary"
              onClick={() => {
                close();
              }}
              size="md"
              iconSrc="/icons/common_x_fg.png"
            />
          </Close>
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
  position: relative;
  > .title {
    ${({ theme }) => theme.typo.title_06_bold};
    color: ${({ theme }) => theme.color.fg};
    margin-bottom: 22.5px;
    padding: 0 8px;
    padding-right: 40px;
  }
  > .desc {
    ${({ theme }) => theme.typo.body_md};
    color: ${({ theme }) => theme.color.fg_subtlest};
    margin-bottom: 30.5px;
    padding: 0 8px;
  }
  > .btnContainer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    height: 47px;
    width: 100%;
  }
`;

const Close = styled.div`
  position: absolute;
  top: 24px;
  right: 16px;
  ${({ theme }) => theme.layout.flex_center};
  cursor: pointer;
`;
