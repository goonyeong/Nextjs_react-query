"use client";
import styled, { css } from "styled-components";
import { ButtonIcon } from "./buttonIcon";
import { ImageTag } from "./image";
import { useState } from "react";

type TInputType = "text" | "search" | "password";

interface IProps {
  type: TInputType;
  value: string;
  fontSize: string;
  onChange?: (value: string) => void;
  onEnterClick?: () => void;
  placeholder?: string;
  disabled?: boolean;
  maxLength?: number;
  errorMsg?: string;
}

export const Input = ({
  type,
  value,
  fontSize,
  onChange,
  onEnterClick,
  placeholder,
  disabled,
  maxLength,
  errorMsg,
}: IProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value: new_value },
    } = e;

    // 최대 글자수 제한
    if (maxLength !== undefined && new_value.length > maxLength) return;

    // onChange 실행
    if (onChange) {
      onChange(new_value);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!onEnterClick) return;

    if (e.code === "Enter") {
      onEnterClick();
    }
  };

  return (
    <Wrapper>
      <Input_Tag
        type={type === "password" ? (isPasswordVisible ? "text" : "password") : "text"}
        value={value}
        fontSize={fontSize}
        onChange={handleInputChange}
        placeholder={placeholder ?? ""}
        disabled={disabled}
        autoComplete="off"
        onKeyDown={handleKeyDown}
        errorMsg={errorMsg}
        isLeftPadding={type === "search"}
        isRightPadding={value.length > 0}
      />
      {type === "search" && (
        <Search>
          <ImageTag src="/icons/common_input_search.png" />
        </Search>
      )}
      {!disabled && value.length > 0 && type !== "password" && (
        <Delete>
          <ButtonIcon
            color="tertiary"
            onClick={() => {
              if (onChange) {
                onChange("");
              }
            }}
            size="sm"
            iconSrc="/icons/common_x_fg.png"
          />
        </Delete>
      )}
      {type === "password" && (
        <Password_Hidden>
          <ButtonIcon
            color="quaternary"
            onClick={() => {
              setIsPasswordVisible((prev) => !prev);
            }}
            size="sm"
            iconSrc={`/icons/common_input_password_${isPasswordVisible ? "hidden" : "visible"}.png`}
          />
        </Password_Hidden>
      )}
      {errorMsg && <Error_Msg>{errorMsg}</Error_Msg>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Input_Tag = styled.input<{
  fontSize: string;
  disabled?: boolean;
  errorMsg?: string;
  isLeftPadding?: boolean;
  isRightPadding?: boolean;
}>`
  width: 100%;
  height: 100%;
  font-size: ${(props) => props.fontSize};
  padding: 0 12px;
  padding-left: ${(props) => (props.isLeftPadding ? "40px" : "12px")};
  padding-right: ${(props) => (props.isRightPadding ? "48px" : "12px")};
  border: 1px solid ${({ theme }) => theme.color.border_input};
  border-radius: ${({ theme }) => theme.borderRadius.rounded_lg};
  color: ${({ theme }) => theme.color.fg};
  &::placeholder {
    color: ${({ theme }) => theme.color.fg_subtlest};
  }
  &:focus {
    border: 2px solid ${({ theme }) => theme.color.border_focused};
    caret-color: ${({ theme }) => theme.color.border_focused};
    /* border weight 증가에 따른 죄우 padding 변경 */
    padding: 0 11px;
    padding-left: ${(props) => (props.isLeftPadding ? "39px" : "11px")};
    padding-right: ${(props) => (props.isRightPadding ? "47px" : "11px")};
  }

  ${(props) =>
    props.disabled &&
    css`
      background-color: ${({ theme }) => theme.color.bg_disabled};
      border: 1px solid ${({ theme }) => theme.color.border_input};
      color: ${({ theme }) => theme.color.fg_disabled};
      &::placeholder {
        color: ${({ theme }) => theme.color.fg_disabled};
      }
    `};

  ${(props) =>
    props.errorMsg &&
    css`
      border: 2px solid ${({ theme }) => theme.color.border_danger};
      caret-color: ${({ theme }) => theme.color.fg_danger};
      color: ${({ theme }) => theme.color.fg_danger};
      /* border weight 증가에 따른 죄우 padding 변경 */
      padding: 0 11px;
      padding-left: ${props.isLeftPadding ? "39px" : "11px"};
      padding-right: ${props.isRightPadding ? "47px" : "11px"};
      &:focus {
        border: 2px solid ${({ theme }) => theme.color.border_danger};
        caret-color: ${({ theme }) => theme.color.fg_danger};
      }
    `};
`;

const Error_Msg = styled.div`
  position: absolute;
  left: 0;
  top: calc(100% + 8px);
  color: ${({ theme }) => theme.color.fg_danger};
  ${({ theme }) => theme.typo.compact_sm};
`;

const Delete = styled.div`
  ${({ theme }) => theme.layout.absolute_vertical_center};
  right: 8px;
  width: 32px;
  height: 32px;
`;

const Search = styled.div`
  ${({ theme }) => theme.layout.absolute_vertical_center};
  left: 8px;
  width: 24px;
  height: 24px;
`;

const Password_Hidden = styled.div`
  ${({ theme }) => theme.layout.absolute_vertical_center};
  right: 8px;
  width: 32px;
  height: 32px;
`;
