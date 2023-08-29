"use client";

import { Button } from "@/app/common/button";
import { ButtonIcon } from "@/app/common/buttonIcon";
import { Input } from "@/app/common/input";
import { useState } from "react";
import styled from "styled-components";
import Icon_Setting_20 from "@/assets/icons/setting_20.svg";
import { Textarea } from "@/app/common/textarea";
import { Dropdown, IDropdownOption } from "@/app/common/dropdown";
import { PopupBtn1 } from "@/app/common/popup/popupBtn1";
import { PopupBtn2 } from "@/app/common/popup/popupBtn2";

export default function Coms() {
  const [inputValue, setInputValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const [dropdownValue, setDropdownValue] = useState("");
  const dropdownOption: IDropdownOption[] = [
    {
      key: "0",
      value: "option 1",
    },
    {
      key: "1",
      value: "option 2",
    },
    {
      key: "2",
      value: "option 3",
    },
    {
      key: "3",
      value: "option 4",
    },
  ];
  const [isPopup1, setIsPopup1] = useState(false);
  const [isPopup2, setIsPopup2] = useState(false);

  return (
    <Wrapper>
      <Button_Container>
        <Button label="버튼" color="secondary" fontSize="16px" onClick={() => {}} />
      </Button_Container>
      <Input_Container>
        <Input
          type="text"
          value={inputValue}
          onChange={(value: string) => {
            setInputValue(value);
          }}
          fontSize="16px"
          placeholder="Input"
          errorMsg={inputValue.length > 10 ? "10글자 아래로 입력하세요" : ""}
        />
      </Input_Container>
      <Button_Icon_Container>
        <ButtonIcon color="secondary" size="md" onClick={() => {}} iconSvg={<Icon_Setting_20 />} />
      </Button_Icon_Container>
      <Textarea_Container>
        <Textarea
          value={textareaValue}
          onChange={(value: string) => {
            setTextareaValue(value);
          }}
          fontSize="16px"
          placeholder="Textarea"
        />
      </Textarea_Container>
      <Button_Container>
        <Button
          label="팝업1 띄우기"
          color="tertiary"
          fontSize="16px"
          onClick={() => {
            setIsPopup1(true);
          }}
        />
      </Button_Container>
      <Dropdown_Container>
        <Dropdown
          value={dropdownValue}
          setValue={(value: string) => {
            setDropdownValue(value);
          }}
          option={dropdownOption}
          placeHolder="Dropdown"
        />
      </Dropdown_Container>
      <Button_Container>
        <Button
          label="팝업2 띄우기"
          color="primary"
          fontSize="16px"
          onClick={() => {
            setIsPopup2(true);
          }}
        />
      </Button_Container>
      {isPopup1 && (
        <PopupBtn1
          title="축하합니다."
          desc="팝업 1을 띄우셨습니다."
          btnLabel="돌아가기"
          close={() => {
            setIsPopup1(false);
          }}
        />
      )}
      {isPopup2 && (
        <PopupBtn2
          title="축하합니다."
          desc="팝업 2을 띄우셨습니다."
          close={() => {
            setIsPopup2(false);
          }}
          btn1={{
            label: "돌아가기",
            onClick: () => {
              setIsPopup2(false);
            },
          }}
          btn2={{
            label: "확인",
            onClick: () => {
              setIsPopup2(false);
            },
          }}
        />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100%;
  display: grid;
  padding: 30px;
  grid-template-columns: 300px 700px;
  grid-template-rows: 200px 200px 200px;
  align-items: center;
`;

const Item = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 20px;
`;

const Button_Container = styled(Item)`
  height: 40px;
`;

const Button_Icon_Container = styled(Item)`
  height: 40px;
  width: 40px;
  padding: 0;
  margin-left: 20px;
`;

const Input_Container = styled(Item)`
  height: 40px;
`;

const Textarea_Container = styled(Item)`
  height: 120px;
`;

const Dropdown_Container = styled(Item)`
  height: 40px;
`;
