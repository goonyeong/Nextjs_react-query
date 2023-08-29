"use client";

import { ReactNode } from "react";
import styled, { css } from "styled-components";

type TColor = "primary" | "secondary" | "tertiary" | "quaternary" | "link";

interface IProps {
  label: string;
  color: TColor;
  onClick: () => void;
  fontSize: string;
  disabled?: boolean;
  isWidthAuto?: boolean;
  iconHeadSvg?: ReactNode;
  iconTailSvg?: ReactNode;
  iconSize?: string;
}

export const Button = ({
  label,
  color,
  onClick,
  fontSize,
  disabled,
  isWidthAuto,
  iconHeadSvg,
  iconTailSvg,
  iconSize,
}: IProps) => {
  return (
    <Button_Styled
      onClick={onClick}
      disabled={disabled}
      color={color}
      fontSize={fontSize}
      isWidthAuto={isWidthAuto}
      iconSize={iconSize}
    >
      {iconHeadSvg && <div className="iconContainer">{iconHeadSvg}</div>}
      {label}
      {iconTailSvg && <div className="iconContainer">{iconTailSvg}</div>}
    </Button_Styled>
  );
};

export const Button_Styled = styled.button<{
  color: TColor;
  fontSize: string;
  disabled?: boolean;
  isWidthAuto?: boolean;
  iconSize?: string;
}>`
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.layout.flex_center};
  border-radius: ${({ theme }) => theme.borderRadius.rounded_xl};
  cursor: pointer;
  font-size: ${(props) => props.fontSize};
  font-weight: 600;
  padding: 0;
  gap: 8px;

  > .iconContainer {
    width: ${(props) => props.iconSize};
    height: ${(props) => props.iconSize};
    ${({ theme }) => theme.layout.flex_center};
  }

  ${(props) =>
    props.disabled &&
    css`
      cursor: default;
    `};
  ${(props) =>
    props.isWidthAuto &&
    css`
      width: auto;
      padding: 0 24px;
    `};

  ${(props) =>
    props.color === "primary" &&
    !props.disabled &&
    css`
      color: ${({ theme }) => theme.color.fg_inverse};
      background-color: ${({ theme }) => theme.color.bg_brand_bold};
      &:hover {
        background-color: ${({ theme }) => theme.color.bg_brand_bold_hovered};
      }
    `};
  ${(props) =>
    props.color === "primary" &&
    props.disabled &&
    css`
      color: ${({ theme }) => theme.color.fg_disabled};
      background-color: ${({ theme }) => theme.color.bg_disabled};
    `};

  ${(props) =>
    props.color === "secondary" &&
    !props.disabled &&
    css`
      color: ${({ theme }) => theme.color.fg};
      background-color: ${({ theme }) => theme.color.bg_neutral_subtle};
      border: 1px solid ${({ theme }) => theme.color.border};
      &:hover {
        background-color: ${({ theme }) => theme.color.bg_neutral_subtle_hovered};
      }
    `};
  ${(props) =>
    props.color === "secondary" &&
    props.disabled &&
    css`
      color: ${({ theme }) => theme.color.fg_disabled};
      background-color: ${({ theme }) => theme.color.bg_disabled};
      border: 1px solid ${({ theme }) => theme.color.border};
    `};

  ${(props) =>
    props.color === "tertiary" &&
    !props.disabled &&
    css`
      color: ${({ theme }) => theme.color.fg};
      background-color: ${({ theme }) => theme.color.bg_neutral};
      &:hover {
        background-color: ${({ theme }) => theme.color.bg_neutral_hovered};
      }
    `};
  ${(props) =>
    props.color === "tertiary" &&
    props.disabled &&
    css`
      color: ${({ theme }) => theme.color.fg_disabled};
      background-color: ${({ theme }) => theme.color.bg_disabled};
    `};

  ${(props) =>
    props.color === "quaternary" &&
    !props.disabled &&
    css`
      color: ${({ theme }) => theme.color.fg_subtlest};
      background-color: ${({ theme }) => theme.color.bg_neutral_subtle};
      &:hover {
        background-color: ${({ theme }) => theme.color.bg_neutral_subtle_hovered};
      }
    `};
  ${(props) =>
    props.color === "quaternary" &&
    props.disabled &&
    css`
      color: ${({ theme }) => theme.color.fg_disabled};
      background-color: transparent;
    `};

  ${(props) =>
    props.color === "link" &&
    !props.disabled &&
    css`
      color: ${({ theme }) => theme.color.link};
      background-color: transparent;
      &:hover {
        color: ${({ theme }) => theme.color.link_pressed};
      }
    `};
  ${(props) =>
    props.color === "link" &&
    props.disabled &&
    css`
      color: ${({ theme }) => theme.color.fg_disabled};
      background-color: transparent;
    `};
`;
