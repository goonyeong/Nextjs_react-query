import { useFetchMovies } from "utils/queries/queries";
import styled from "styled-components";
import { TMBD_IMAGE_URL } from "utils/apis/api";
import { useEffect, useState } from "react";
import { Table, ITableConfig } from "components/table/table";
import Pagination from "components/table/pagination";

const InfiniteTable = () => {
  const [page, setPage] = useState(1);
  const { data: movieData, isFetching } = useFetchMovies({ page: page, size: 10 });

  useEffect(() => {
    console.log("movies", movieData);
  }, [movieData]);

  return (
    <Wrapper>
      <Table_Container>
        <Table_Title>Movie Table</Table_Title>
        {!isFetching && movieData && (
          <Table tableData={movieData.results} tableConfig={tableConfig} />
        )}
        <Pagination_Container>
          <Pagination
            currentPage={page}
            setCurrentPage={(newPage: number) => {
              setPage(newPage);
            }}
            totalPage={10}
          />
        </Pagination_Container>
      </Table_Container>
    </Wrapper>
  );
};

export default InfiniteTable;

const Wrapper = styled.div`
  width: 100%;
  padding: 100px;
`;

const Table_Container = styled.article`
  width: 100%;
  height: calc(100vh - 700px);
  border: 1px solid ${({ theme }) => theme.colors.primary_color};
  border-radius: 2rem;
  display: grid;
  grid-template-rows: 100px auto 100px;
`;

const Table_Title = styled.h3`
  font-weight: bold;
  font-size: 4rem;
  display: flex;
  align-items: center;
  padding-left: 30px;
  height: 100%;
`;

const Pagination_Container = styled.div`
  ${({ theme }) => theme.mixin.flexCenter};
`;

const columRatio = [1, 2, 1, 1];

const columnData = [
  {
    Header: "Path",
    accessor: "poster_path",
  },
  {
    Header: "Title",
    accessor: "original_title",
  },
  {
    Header: "Adult",
    accessor: "adult",
  },
  {
    Header: "Release",
    accessor: "release_date",
  },
];

const tableConfig: ITableConfig = {
  columnLabel: columnData,
  columnCellWidth: columRatio,
  cellHeight: "50px",
  fontSize: "1.7rem",
  minWidth: "800px",
  tableHeight: "100%",
  customFormat: [
    {
      key: "adult",
      formatFunc: (cell: any) => (
        <Customfunc_Title isTrue={cell.value === true}>
          {cell.value ? "adult" : "not adult"}
        </Customfunc_Title>
      ),
    },
    {
      key: "original_title",
      formatFunc: (cell: any) => (
        <>{cell.value.includes("Black") ? "blacccccccckkkkkkkkkkkkkkkkk" : cell.value}</>
      ),
    },
  ],
};

const Customfunc_Title = styled.div<{ isTrue: boolean }>`
  width: 100%;
  height: 100%;
  color: ${(props) => (props.isTrue ? "green" : "red")};
  ${({ theme }) => theme.mixin.flexCenter};
`;
