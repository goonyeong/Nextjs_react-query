"use client";

import styled, { css } from "styled-components";
import { Button_Styled } from "./button";
import { ImageTag } from "./image";
import { ReactNode } from "react";

type TColor = "primary" | "secondary" | "tertiary" | "quaternary" | "link";
type TSize = "xs" | "sm" | "md" | "lg" | "xl";

interface IProps {
  color: TColor;
  onClick: () => void;
  disabled?: boolean;
  size: TSize;
  iconSrc?: string;
  iconSvg?: ReactNode;
}

export const ButtonIcon = ({ color, onClick, disabled, size, iconSrc, iconSvg }: IProps) => {
  return (
    <Button_Icon_Styled
      onClick={onClick}
      disabled={disabled}
      color={color}
      fontSize={""}
      size={size}
    >
      {iconSrc ? (
        <div className="iconContainer">
          <ImageTag src={iconSrc} />
        </div>
      ) : (
        <div className="iconContainer">{iconSvg}</div>
      )}
    </Button_Icon_Styled>
  );
};

export const Button_Icon_Styled = styled(Button_Styled)<{ size: TSize }>`
  border-radius: ${({ theme }) => theme.borderRadius.rounded_lg};
  ${(props) =>
    props.size === "xs" &&
    css`
      padding: 4px;
      > .iconContainer {
        width: 16px;
        height: 16px;
      }
    `};
  ${(props) =>
    props.size === "sm" &&
    css`
      padding: 6px;
      > .iconContainer {
        width: 20px;
        height: 20px;
      }
    `};
  ${(props) =>
    props.size === "md" &&
    css`
      padding: 8px;
      > .iconContainer {
        width: 24px;
        height: 24px;
      }
    `};
  ${(props) =>
    props.size === "lg" &&
    css`
      padding: 10px;
      > .iconContainer {
        width: 28px;
        height: 28px;
      }
    `};
  ${(props) =>
    props.size === "xl" &&
    css`
      padding: 12px;
      > .iconContainer {
        width: 32px;
        height: 32px;
      }
    `};
`;
