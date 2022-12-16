import styled from "styled-components";
import {
  PaginationState,
  useReactTable,
  getCoreRowModel,
  ColumnDef,
  flexRender,
} from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { useFetchMovies } from "utils/queries/queries";

const columnLabel = [
  {
    header: "Path",
    accessorKey: "poster_path",
  },
  {
    header: "Title",
    accessorKey: "original_title",
  },
  {
    header: "Adult",
    accessorKey: "adult",
  },
  {
    header: "Release",
    accessorKey: "release_date",
  },
];

const cellHeight = "50px";
const fontSize = "1.7rem";
const minWidth = "1000px";
const tableHeight = "100%";

const TableHope = () => {
  const columns = useMemo(() => columnLabel, []);

  const [{ page, size }, setPagination] = useState({
    page: 0,
    size: 10,
  });

  const fetchDataOptions = {
    page,
    size,
  };

  const { data: movieData } = useFetchMovies(fetchDataOptions);

  const defaultData = useMemo(() => [], []);

  const table = useReactTable({
    data: movieData ?? defaultData,
    columns,
    pageCount: dataQuery.data?.pageCount ?? -1,
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    // getPaginationRowModel: getPaginationRowModel(), // If only doing manual pagination, you don't need this
    debugTable: true,
  });

  return (
    <Table_Wrapper tableHeight={tableHeight}>
      <Table_Tag
        {...getTableProps}
        gridColumn={[1, 2, 1, 1]}
        cellHeight={cellHeight}
        minWidth={minWidth}
        fontSize={fontSize}
      >
        <Table_Head>
          {headerGroups.map((headerGroup) => (
            <Head_Row {...headerGroup.getHeaderGroupProps()} key={Math.random()} className="rows">
              {headerGroup.headers.map((col) => (
                <Head_Cell {...col.getHeaderProps()} key={Math.random()}>
                  {col.render("Header")}
                </Head_Cell>
              ))}
            </Head_Row>
          ))}
        </Table_Head>
        <Table_Body {...getTableBodyProps}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <Body_Row {...row.getRowProps()} key={Math.random()} className="rows">
                {row.cells.map((cell) => {
                  return <Body_Cell key={Math.random()}>{cell.render("Cell")}</Body_Cell>;
                })}
              </Body_Row>
            );
          })}
          <Inview_Tag ref={ref} />
        </Table_Body>
      </Table_Tag>
    </Table_Wrapper>
  );
};

export default TableHope;

const Table_Wrapper = styled.div<{
  tableHeight?: string;
}>`
  width: 100%;
  overflow: auto;
  table-layout: fixed;
  height: ${(props) => (props.tableHeight ? props.tableHeight : "100%")};
  position: relative;
  border-radius: 20px;
`;

const Table_Tag = styled.table<{
  gridColumn: string;
  minWidth?: string;
  cellHeight?: string;
  fontSize?: string;
}>`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  .rows {
    display: grid;
    grid-template-columns: ${(props) => props.gridColumn};
    min-width: ${(props) => (props.minWidth ? props.minWidth : "1500px")};
    height: ${(props) => (props.cellHeight ? props.cellHeight : "30px")};
  }
  td,
  th {
    ${({ theme }) => theme.mixin.flexCenter};
    overflow: hidden;
    font-size: ${(props) => (props.fontSize ? props.fontSize : "40px")};
  }
`;

const Table_Head = styled.thead`
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Table_Body = styled.tbody`
  position: relative;
  tr:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.colors.background_sub_color};
  }
`;

const Head_Row = styled.tr`
  background-color: ${({ theme }) => theme.colors.background_color};
`;

const Body_Row = styled.tr`
  border-top: 1px solid ${({ theme }) => theme.colors.background_sub_color};
  &:hover {
    background-color: ${({ theme }) => theme.colors.background_sub_color};
  }
`;

const Head_Cell = styled.th``;

const Body_Cell = styled.td``;

const Inview_Tag = styled.tr`
  position: absolute;
  bottom: 100px;
  width: 20px;
  height: 20px;
  min-width: 20px;
  background-color: #ffee00;
`;
