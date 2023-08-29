"use client";
import styled, { css } from "styled-components";

interface IProps {
  value: string;
  fontSize: string;
  onChange?: (value: string) => void;
  onEnterClick?: () => void;
  placeholder?: string;
  disabled?: boolean;
  maxLength?: number;
  errorMsg?: string;
}

export const Textarea = ({
  value,
  fontSize,
  onChange,
  onEnterClick,
  placeholder,
  disabled,
  maxLength,
  errorMsg,
}: IProps) => {
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (!onEnterClick) return;

    if (e.code === "Enter") {
      onEnterClick();
    }
  };

  return (
    <Wrapper>
      <Textarea_Tag
        value={value}
        fontSize={fontSize}
        onChange={handleTextareaChange}
        placeholder={placeholder ?? ""}
        disabled={disabled}
        autoComplete="off"
        onKeyDown={handleKeyDown}
        errorMsg={errorMsg}
      />
      {errorMsg && <Error_Msg>{errorMsg}</Error_Msg>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Textarea_Tag = styled.textarea<{
  fontSize: string;
  disabled?: boolean;
  errorMsg?: string;
}>`
  width: 100%;
  height: 100%;
  font-size: ${(props) => props.fontSize};
  padding: 8px 12px;
  border: 1px solid ${({ theme }) => theme.color.border_input};
  border-radius: ${({ theme }) => theme.borderRadius.rounded_lg};
  resize: none;
  color: ${({ theme }) => theme.color.fg};
  &::placeholder {
    color: ${({ theme }) => theme.color.fg_subtlest};
  }
  &:focus {
    border: 2px solid ${({ theme }) => theme.color.border_focused};
    caret-color: ${({ theme }) => theme.color.border_focused};
    /* border weight 증가에 따른 padding 변경 */
    padding: 7px 11px;
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
      /* border weight 증가에 따른 padding 변경 */
      padding: 7px 11px;
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
