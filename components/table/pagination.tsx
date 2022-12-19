import { useEffect, useState } from "react";
import styled from "styled-components";

interface IPaginationProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPage: number;
}

const Pagination = ({ currentPage, setCurrentPage, totalPage }: IPaginationProps) => {
  const [inputValue, setInputValue] = useState("");

  const handlePrevClick = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextClick = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (inputValue === "" && value === "0") {
      return;
    }

    setInputValue(value.replace(/[^0-9]/g, "").replace(/(\..*)\./g, "$1"));
  };

  useEffect(() => {
    console.log("current", currentPage);
    if (currentPage) {
      if (parseInt(inputValue) > totalPage) return;
      if (inputValue === "") setCurrentPage(1);
      if (inputValue) {
        setCurrentPage(parseInt(inputValue));
      }
    }
  }, [inputValue]);

  return (
    <Wrapper>
      <Btn onClick={handlePrevClick}>Prev</Btn>
      <Label>{currentPage}</Label>
      <Btn onClick={handleNextClick}>Next</Btn>
      <Input onChange={handleInputChange} value={inputValue} />
    </Wrapper>
  );
};

export default Pagination;

const Wrapper = styled.div`
  height: 50px;
  display: flex;
  font-size: 2rem;
`;

const Label = styled.span`
  ${({ theme }) => theme.mixin.flexCenter};
  padding: 0 10px;
  cursor: pointer;
`;

const Btn = styled.span`
  ${({ theme }) => theme.mixin.flexCenter};
  padding: 0 10px;
  cursor: pointer;
`;

const Input = styled.input`
  color: ${({ theme }) => theme.colors.background_color};
`;
