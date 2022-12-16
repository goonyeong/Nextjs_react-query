import { useFetchMovies, useInfiniteFetchMovies } from "utils/queries/queries";
import styled from "styled-components";
import { TMBD_IMAGE_URL } from "utils/apis/api";
import { useEffect, useState } from "react";
import { Table, ITableConfig } from "components/table/table";
import Pagination from "components/table/pagination";
import { useInView } from "react-intersection-observer";

const InfiniteTable = () => {
  const {
    data: movieData,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useInfiniteFetchMovies({ size: 10 });

  useEffect(() => {
    console.log("movies", movieData);
  }, [movieData]);

  const movies: IMovieDetail[] = [];

  movieData?.pages.map((page) => {
    page.result.results.map((movie) => {
      console.log("mmmm", movie);
      movies.push(movie);
    });
  });

  console.log("moviessssss", movies);

  const tableConfig: ITableConfig = {
    columnLabel: columnData,
    columnCellWidth: columRatio,
    cellHeight: "50px",
    fontSize: "1.7rem",
    minWidth: "1000px",
    tableHeight: "100%",
    infiniteScroll: true,
    fetchInfiniteScroll: () => {
      if (hasNextPage) {
        fetchNextPage();
      }
    },
  };

  return (
    <Wrapper>
      <Table_Wrapper>
        <Table_Title>Movie Table</Table_Title>
        <Table_Container>
          {movies && <Table tableData={movies} tableConfig={tableConfig} />}
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
  position: relative;
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

const columRatio = [1, 2, 1, 1];

const columnData = [
  {
    Header: "Path",
    accessor: "poster_path",
  },
  {
    Header: "Title",
    accessor: "original_title",
    Cell: ({ cell }: { cell: any }) => (
      <>{cell.value.includes("Black") ? "blacccccccckkkkkkkkkkkkkkkkk" : cell.value}</>
    ),
  },
  {
    Header: "Adult",
    accessor: "adult",
    Cell: ({ cell }: { cell: any }) => (
      <Customfunc_Title isTrue={cell.value === true}>
        {cell.value ? "adult" : "not adult"}
      </Customfunc_Title>
    ),
  },
  {
    Header: "Release",
    accessor: "release_date",
  },
];

const Customfunc_Title = styled.div<{ isTrue: boolean }>`
  width: 100%;
  height: 100%;
  color: ${(props) => (props.isTrue ? "green" : "red")};
  ${({ theme }) => theme.mixin.flexCenter};
`;
