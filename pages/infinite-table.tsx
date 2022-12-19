import { useInfiniteFetchMovies } from "utils/queries/queries";
import styled from "styled-components";
import { useEffect, useState } from "react";
import {
  Table,
  ITableConfig,
  ITableCell,
  IColumnData,
  getOtherCellValue,
  getInfiniteQueriesDataArray,
} from "components/table/table";

const InfiniteTable = () => {
  const { data: movieData, fetchNextPage, hasNextPage } = useInfiniteFetchMovies({ size: 10 });
  const [infiniteMovieArr, setInfiniteMovieArr] = useState<IMovieDetail[]>([]);

  useEffect(() => {
    console.log("movies", movieData);
    setInfiniteMovieArr(getInfiniteQueriesDataArray(movieData));
  }, [movieData]);

  const columRatio = [1, 2, 1, 1, 1];
  const columnData: IColumnData[] = [
    {
      header: "Tier",
      accessorKey: "",
      cell: ({ cell }: { cell: ITableCell }) => {
        const rate = getOtherCellValue(cell, "vote_average");
        return <>{rate > 7 ? "good" : "not good"}</>;
      },
    },
    {
      header: "Title",
      accessorKey: "original_title",
      cell: ({ cell }: { cell: ITableCell }) => {
        return (
          <>
            {cell.getValue().includes("Black") ? "blacccccccckkkkkkkkkkkkkkkkk" : cell.getValue()}
          </>
        );
      },
    },
    {
      header: "Adult",
      accessorKey: "adult",
      cell: ({ cell }: { cell: ITableCell }) => (
        <Customfunc_Title isTrue={cell.getValue() === true}>
          {cell.getValue() ? "adult" : "not adult"}
        </Customfunc_Title>
      ),
    },
    {
      header: "Release",
      accessorKey: "release_date",
    },
    {
      header: "Score",
      accessorKey: "vote_average",
      cell: ({ cell }: { cell: ITableCell }) => {
        return cell.getValue();
      },
    },
  ];

  const tableConfig: ITableConfig = {
    columnData: columnData,
    columnCellWidth: columRatio,
    cellHeight: "50px",
    fontSize: "1.7rem",
    minWidth: "1000px",
    tableHeight: "100%",
    infiniteScroll: true,
    handleInfiniteFetch: () => {
      if (hasNextPage) fetchNextPage();
    },
  };

  return (
    <Wrapper>
      <Table_Wrapper>
        <Table_Title>Movie Table</Table_Title>
        <Table_Container>
          <Table tableData={infiniteMovieArr} tableConfig={tableConfig} />
        </Table_Container>
      </Table_Wrapper>
    </Wrapper>
  );
};

export default InfiniteTable;

const Wrapper = styled.div`
  width: 100%;
  padding: 100px;
`;

const Table_Wrapper = styled.article`
  width: 100%;
  height: calc(100vh - 700px);
  border: 1px solid ${({ theme }) => theme.colors.primary_color};
  border-radius: 2rem;
  display: grid;
  grid-template-rows: 100px 1fr 100px;
`;

const Table_Title = styled.h3`
  font-weight: bold;
  font-size: 4rem;
  display: flex;
  align-items: center;
  padding-left: 30px;
  height: 100%;
`;

const Table_Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Customfunc_Title = styled.div<{ isTrue: boolean }>`
  width: 100%;
  height: 100%;
  color: ${(props) => (props.isTrue ? "green" : "red")};
  ${({ theme }) => theme.mixin.flexCenter};
`;
