"use client";

import { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import Icon_Common_Dropdown_20 from "@/assets/icons/common_dropdown_20.svg";

export interface IDropdownOption {
  key: string;
  value: string;
}

export const placeHolderOption: IDropdownOption = {
  key: "",
  value: "",
};

interface IDropdownProps {
  option: IDropdownOption[];
  value: string;
  setValue: (newKey: string) => void;
  placeHolder?: string;
  isOptionPositionTop?: boolean;
  errorMsg?: string;
  disabled?: boolean;
}

export const Dropdown = ({
  option,
  value,
  setValue,
  placeHolder,
  isOptionPositionTop,
  errorMsg,
  disabled,
}: IDropdownProps) => {
  const [isOptionOpen, setIsOptionOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentValue = option.find((obj) => obj.key === value)?.value;

  const handleValueClick = () => {
    if (disabled) return;

    setIsOptionOpen((prev) => !prev);
  };

  const handleOptionClick = (newKey: string) => {
    setValue(newKey);
    setIsOptionOpen(false);
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOptionOpen(false);
      }
    };

    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, [dropdownRef]);

  return (
    <Wrapper ref={dropdownRef}>
      <Value
        onClick={handleValueClick}
        isPlaceHolder={value === ""}
        isFocus={isOptionOpen}
        errorMsg={errorMsg}
        disabled={disabled}
      >
        <span className="label">{currentValue ? currentValue : placeHolder}</span>
        <div className="iconContainer">
          <Icon_Common_Dropdown_20 />
        </div>
        {errorMsg && <Error_Msg>{errorMsg}</Error_Msg>}
      </Value>
      {isOptionOpen && (
        <OptionUl isOptionPositionTop={isOptionPositionTop}>
          {option.map((content) => (
            <OptionLi
              key={content.key}
              onClick={() => {
                handleOptionClick(content.key);
              }}
              isSelected={content.key === value}
            >
              {content.value}
            </OptionLi>
          ))}
        </OptionUl>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Value = styled.div<{
  isPlaceHolder: boolean;
  isFocus: boolean;
  errorMsg?: string;
  disabled?: boolean;
}>`
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.layout.flex_vertical_center};
  background-color: ${({ theme }) => theme.color.bg_input};
  padding: 0 12px;
  border: 1px solid ${({ theme }) => theme.color.border_input};
  border-radius: ${({ theme }) => theme.borderRadius.rounded_lg};
  cursor: pointer;
  position: relative;
  > .label {
    ${({ theme }) => theme.typo.compact_md};
    color: ${(props) =>
      props.isPlaceHolder ? ({ theme }) => theme.color.fg_subtlest : ({ theme }) => theme.color.fg};
  }
  > .iconContainer {
    height: 100%;
    min-width: 0;
    aspect-ratio: 1/1;
    ${({ theme }) => theme.layout.flex_center};
    ${({ theme }) => theme.layout.absolute_vertical_center};
    right: 0;
    > svg {
      color: ${({ theme }) => theme.color.fg};
    }
  }

  ${(props) =>
    props.isFocus &&
    css`
      padding: 0 11px;
      border: 2px solid ${({ theme }) => theme.color.border_focused};
    `};

  ${(props) =>
    props.errorMsg &&
    css`
      padding: 0 11px;
      border: 2px solid ${({ theme }) => theme.color.border_danger};
    `};

  ${(props) =>
    props.disabled &&
    css`
      cursor: default;
      background-color: ${({ theme }) => theme.color.bg_disabled};
      > .label {
        color: ${({ theme }) => theme.color.fg_disabled};
      }
    `};
`;

const OptionUl = styled.ul<{ isOptionPositionTop?: boolean }>`
  position: absolute;
  right: 0;
  width: 100%;
  height: "auto";
  padding: 4px;
  border: 1px solid rgba(161, 168, 178, 0.7);
  border-radius: ${({ theme }) => theme.borderRadius.rounded_lg};
  ${({ theme }) => theme.layout.flex_direction_column};
  gap: 4px;
  background-color: ${({ theme }) => theme.color.bg_input};
  ${({ theme }) => theme.effect.hidden_scrollbar};
  z-index: ${({ theme }) => theme.zIndex.dropdown_option};
  ${(props) =>
    props.isOptionPositionTop
      ? css`
          bottom: calc(100% + 6px);
        `
      : css`
          top: calc(100% + 6px);
        `};
`;

const OptionLi = styled.li<{ isSelected: boolean }>`
  width: 100%;
  height: 44px;
  padding: 0 32px;
  ${({ theme }) => theme.layout.flex_vertical_center};
  ${({ theme }) => theme.typo.compact_md};
  border-radius: ${({ theme }) => theme.borderRadius.rounded_lg};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.color.bg_neutral_subtle_hovered};
  }
  ${(props) =>
    props.isSelected &&
    css`
      ${({ theme }) => theme.typo.compact_md_bold};
      background-color: ${({ theme }) => theme.color.bg_selected};
      color: ${({ theme }) => theme.color.fg_selected};
    `};
`;

const Error_Msg = styled.div`
  position: absolute;
  left: 0;
  top: calc(100% + 8px);
  color: ${({ theme }) => theme.color.fg_danger};
  ${({ theme }) => theme.typo.compact_sm};
`;
